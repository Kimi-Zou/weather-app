import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import CurrentLocation from './components/CurrentLocation';

function App() {
  const [showWeek, setShowWeek] = useState(false);

  return (
    <div className="App">
      <section className="location">
        <Search />
        <CurrentLocation />
      </section>
      <section className="weather"></section>
    </div>
  );
}

export default App;
