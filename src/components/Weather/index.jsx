import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import Week from "./components/Week";
import axios from 'axios';
import "./index.css";
import _ from "underscore";

const getUnitFromUnix = (unit, unix) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(unix * 1000);
  if (unit === "day") {
    return days[date.getDay()] || "day unknown";
  }
  if (unit === "hour") {
    const hour = date.getHours();
    if (hour === 0) {
      return `12:00 AM`;
    } else if (hour > 12) {
      return `${hour - 12}:00 PM`;
    } else {
      return `${hour}:00 AM`;
    }
  }
};

const Weather = ({ location }) => {
  const [hour, setHour] = useState(13);
  const [day, setDay] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (location) {
      axios
        .get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: location.info.latitude,
            longitude: location.info.longitude,
            hourly:
              "temperature_2m,relativehumidity_2m,precipitation,weathercode",
            temperature_unit: "fahrenheit",
            windspeed_unit: "mph",
            precipitation_unit: "inch",
            timeformat: "unixtime",
            timezone: location.info.timezone,
          },
        })
        .then((request) => {
          const chunkedData = _.chunk(
            _.zip(
              request.data.hourly.time,
              request.data.hourly.temperature_2m,
              request.data.hourly.weathercode,
              request.data.hourly.precipitation,
              request.data.hourly.relativehumidity_2m
            ),
            24
          );
          setData(chunkedData);
        });
    }
  }, [location]);

  return (data && (<motion.div
      key={"weather-container-div"}
      initial="collapsed"
      animate="open"
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      variants={{
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 },
      }}
      className="weather-container"
    >
      <Details
        data={data[day][hour]}
        getUnitFromUnix={getUnitFromUnix}
        location={location}
        day={day}
        hour={hour}
      />
      <Forecast data={data[day]} setHour={setHour} />
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
      <Week
        data={data}
        getUnitFromUnix={getUnitFromUnix}
        setDay={setDay}
        dayIndex={day}
      />
    </motion.div>)
  );
};

export default Weather;
