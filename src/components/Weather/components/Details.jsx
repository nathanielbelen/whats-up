import weatherCode from "../weatherCode.json";
import { motion } from "framer-motion";

const Details = ({ data, location, getUnitFromUnix, day, hour }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="details"
    >
      <div id="left">
        <div id="weather-code">{weatherCode[data[2]][0]}</div>
        <div id="weather-temperature">{data[1]}<div id='degree'>°F</div></div>
        <div id="weather-description">
          <div id="weather-precipitation">Precipitation: {data[3]} inches</div>
          <div id="weather-humidity">Humidity: {data[4]}%</div>
        </div>
      </div>
      <div id="right">
        <div id="">
          {location.info.name}, {location.info.admin1}
        </div>
        <div id="">{location.info.country}</div>
        <div id="">
          {getUnitFromUnix("day", data[0])} {getUnitFromUnix("hour", data[0])}
        </div>
        <div id="">{weatherCode[data[2]][1]}</div>
      </div>
    </motion.div>
  );
};

export default Details;
