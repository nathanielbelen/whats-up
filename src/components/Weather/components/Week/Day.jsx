import weatherCode from '../../weatherCode.json'

const Day = ({ data, getUnitFromUnix, setDay, day, currentDay }) => {
  return (
    <DayDiv currentDay={currentDay} day={day} setDay={setDay}>
      <div className='day'>{getUnitFromUnix('day', data[0])}</div>
      <div className='icon'>{weatherCode[data[2]][0]}</div>
      {/* <div className='description'>{weatherCode[2][1]}</div> */}
      <div className='temperature'>{data[1]} °F</div>
    </DayDiv>
  );
};

const DayDiv = ({ currentDay, setDay, day, children }) => {
  const isCurrentDay = currentDay === day
  const handleClick = () => {
    setDay(day)
  }

  if (isCurrentDay) {
    return (
      <div className='day-details current-day'>
        { children }
      </div>
    )
  } else {
    return (
      <div className='day-details uncurrent-day' onClick={handleClick}>
        { children }
      </div>
    )
  }
}

// exampleData.hourly.time,
// exampleData.hourly.temperature_2m,
// exampleData.hourly.weathercode,
// exampleData.hourly.precipitation,
// exampleData.hourly.relativehumidity_2m

export default Day;