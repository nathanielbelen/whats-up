import './index.css';
import Details from './components/Details';
import Week from './components/Week';

const Weather = () => {

  return (
    <div className='weather-container'>
      <Details />
      <div className='forecast'>2</div>
      <Week />
    </div>
  )
}

export default Weather;