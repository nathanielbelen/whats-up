import { useState, useEffect, useRef } from "react";
import flag from 'country-code-emoji';
import axios from "axios";
import _ from "underscore";
import DatalistInput from "react-datalist-input";
import "./index.css";

const locationApi = 'https://geocoding-api.open-meteo.com/v1/search';

const resultCb = (result) => {
  const format = {
    id: result.id,
    value: `${flag(result.country_code)} ${result.name}, ${
      result.admin1
    }, ${result.country}`,
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
    if (search !== "") {
      axios
        .get(locationApi, { params: { name: search }})
        .then((res) => {
          if (res.data.results) setResults(res.data.results.map(resultCb));
        });
    }
  }, [search]);

  return (
    <div className='input-container'>
      <DatalistInput
        inputProps={{ className: "datalist-input" }}
        placeholder="Enter your location"
        onChange={handleChange}
        onSelect={(item) => {
          setLocation(item);
        }}
        items={results}
      />
    </div>
  );
};

export default Input;
