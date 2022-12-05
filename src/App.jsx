import { useEffect, useState } from 'react';
import Input from './components/Input';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [location, setLocation] = useState({"id":5407933,"value":"🇺🇸 West Covina, California, United States","info":{"id":5407933,"name":"West Covina","latitude":34.06862,"longitude":-117.93895,"elevation":117,"feature_code":"PPL","country_code":"US","admin1_id":5332921,"admin2_id":5368381,"timezone":"America/Los_Angeles","population":108484,"postcodes":["91790","91791","91792","91793"],"country_id":6252001,"country":"United States","admin1":"California","admin2":"Los Angeles"}});

  useEffect(() => {
    console.log(location);
  }, [location])

  if (!location) {
    return (
      <div className='container'>
        <div className='app-title'>what's up</div>
        <Input setLocation={setLocation} />
      </div>
    );
  }

  return (
    <div className='container'>
      <Input setLocation={setLocation} />
      <Weather location={location} />
    </div>
  )
}

export default App;
