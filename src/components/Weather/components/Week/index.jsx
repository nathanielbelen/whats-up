import Day from './Day';

const Week = () => {
  return (
    <div className="week">
      {[1,2,3,4,5,6,7].map((day) => {
        return (<Day />)
      })}
    </div>
  );
};

export default Week;
