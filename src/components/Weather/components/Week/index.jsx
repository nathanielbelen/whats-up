import Day from "./Day";
import { motion } from "framer-motion";

const Week = ({ data, getUnitFromUnix, setDay, dayIndex }) => {
  return (
    <motion.div
        className="week"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
    >
      {data.map((day, index) => {
        return (
          <Day
            data={day[13]}
            getUnitFromUnix={getUnitFromUnix}
            key={index}
            day={index}
            currentDay={dayIndex}
            setDay={setDay}
          />
        );
      })}
    </motion.div>
  );
};

export default Week;
