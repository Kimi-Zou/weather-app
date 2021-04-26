import './index.css';

const WeatherNav = ({ showToday, setShowToday }) => {
  return (
    <div className='weather__navs'>
      <button 
        type="button" 
        className={
          showToday ?
          "weather__nav weather__nav--active" :
          "weather__nav"
        }
        onClick={() => setShowToday(true)}
      >Today</button>
      <button 
        type="button"
        className={
          showToday ?
          "weather__nav" :
          "weather__nav weather__nav--active"
        }
        onClick={() => setShowToday(false)}
      >Week</button>
    </div> 
  )
}

export default WeatherNav;