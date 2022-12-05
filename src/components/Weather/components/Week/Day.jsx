import weatherCode from '../../weatherCode.json'

const Day = ({ data, getUnitFromUnix }) => {
  return (
    <div className='day-details'>
      <div className='day'>{getUnitFromUnix('day', data[0])}</div>
      <div className='icon'>{weatherCode[2][0]}</div>
      {/* <div className='description'>{weatherCode[2][1]}</div> */}
      <div className='temperature'>{data[1]} °F</div>
    </div>
  );
};

// exampleData.hourly.time,
// exampleData.hourly.temperature_2m,
// exampleData.hourly.weathercode,
// exampleData.hourly.precipitation,
// exampleData.hourly.relativehumidity_2m

export default Day;