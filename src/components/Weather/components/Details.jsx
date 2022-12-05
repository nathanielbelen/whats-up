import weatherCode from '../weatherCode.json'

const Details = ({ data, location, getUnitFromUnix, day, hour }) => {
  console.log('location', location)
  console.log('data', data)
  return (
    <div className='details'>
      <div id='left'>
        <div id='weather-code'>{weatherCode[data[2]][0]}</div>
        <div id='weather-temperature'>{`${data[1]} °F`}</div>
        <div id='weather-description'>
          <div id='weather-precipitation'>Precipitation: {data[3]} inches</div>
          <div id='weather-humidity'>Humidity: {data[4]}%</div>
        </div>
      </div>
      <div id='right'>
        <div id=''>{location.info.name}, {location.info.admin1}</div>
        <div id=''>{location.info.country}</div>
        <div id=''>{getUnitFromUnix('day', data[0])} {getUnitFromUnix('hour', data[0])}</div>
        <div id=''>{weatherCode[data[2]][1]}</div>
      </div>
    </div>
  );
};

export default Details;
