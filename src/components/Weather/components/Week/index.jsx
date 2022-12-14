import Day from './Day';

const Week = ({ data, getUnitFromUnix, setDay, dayIndex }) => {
  return (
    <div className='week'>
      {data.map((day, index) => {
        return (<Day data={day[13]} getUnitFromUnix={getUnitFromUnix} key={index} day={index} currentDay={dayIndex} setDay={setDay} />)
      })}
    </div>
  );
};

export default Week;
