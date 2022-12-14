import { useState, useMemo } from 'react';
import Details from './components/Details';
import Forecast from './components/Forecast';
import Week from './components/Week';
import './index.css';
import _ from 'underscore';

import exampleData from '../../assets/exampleData.json';
console.log(exampleData);
const data = _.chunk(
  _.zip(
    exampleData.hourly.time,
    exampleData.hourly.temperature_2m,
    exampleData.hourly.weathercode,
    exampleData.hourly.precipitation,
    exampleData.hourly.relativehumidity_2m
  ),
  24
);

const getUnitFromUnix = (unit, unix) => {
  const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
  const date = new Date(unix * 1000);
  if (unit === 'day') {
    return days[date.getDay()] || 'day unknown';
  }
  if (unit === 'hour') {
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

  if (!location) {
    return null;
  }

  return (
    <div className='weather-container'>
      <Details data={data[day][hour]} getUnitFromUnix={getUnitFromUnix} location={location} day={day} hour={hour} />
      <Forecast data={data[day]} setHour={setHour} />
      <Week data={data} getUnitFromUnix={getUnitFromUnix} setDay={setDay} dayIndex={day} />
    </div>
  );
};

export default Weather;
