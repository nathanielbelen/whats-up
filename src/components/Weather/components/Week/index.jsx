import Day from './Day';

const Week = ({ data, getUnitFromUnix }) => {
  return (
    <div className='week'>
      {data.map((day, index) => {
        return (<Day data={day[13]} getUnitFromUnix={getUnitFromUnix} key={index} />)
      })}
    </div>
  );
};

export default Week;
