import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import flag from 'country-code-emoji';
import axios from 'axios';
import _ from 'underscore';
import DatalistInput from 'react-datalist-input';
import './index.css';

const locationApi = 'https://geocoding-api.open-meteo.com/v1/search';

const resultCb = (result) => {
  const format = {
    id: result.id,
    value: `${flag(result.country_code)} ${result.name}, ${(result.admin1 || '') + ', '}${result.country}`,
    info: result,
  }
  return format
}

const Input = ({ setLocation }) => {
  let [search, setSearch] = useState('');
  let [results, setResults] = useState([]);

  let throttledChange = useRef(_.throttle(setSearch, 500));


  const handleChange = (e) => {
    throttledChange.current(e.target.value);
  };

  useEffect(() => {
    if (search !== '') {
      axios
        .get(locationApi, { params: { name: search, count: 5 }})
        .then((res) => {
          if (res.data.results) setResults(res.data.results.map(resultCb));
        });
    }
  }, [search]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.45 }}
      className='input-container'
    >
      <DatalistInput
        inputProps={{ className: 'datalist-input' }}
        placeholder='Enter your location'
        onChange={handleChange}
        onSelect={(item) => {
          setSearch(item.value);
          setLocation(item);
        }}
        items={results}
      />
    </motion.div>
  );
};

export default Input;
