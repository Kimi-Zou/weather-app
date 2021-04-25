import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <section className="location">
        <Search />
      </section>
      <section className="weather"></section>
    </div>
  );
}

export default App;
