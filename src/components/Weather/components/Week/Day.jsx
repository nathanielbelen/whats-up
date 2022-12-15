import weatherCode from '../../weatherCode.json'

const Day = ({ data, getUnitFromUnix, setDay, day, currentDay }) => {
  return (
    <DayDiv currentDay={currentDay} day={day} setDay={setDay}>
      <div className='day'>{getUnitFromUnix('day', data[0])}</div>
      <div className='icon'>{weatherCode[data[2]][0]}</div>
      {/* <div className='description'>{weatherCode[data[2]][1]}</div> */}
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
      <div className='day-details current-day unselectable'>
        { children }
      </div>
    )
  } else {
    return (
      <div className='day-details uncurrent-day unselectable' onClick={handleClick}>
        { children }
      </div>
    )
  }
}

export default Day;