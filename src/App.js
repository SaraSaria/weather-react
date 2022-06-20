import "./App.css";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <WeatherSearch />

        <div className="Code-link-line">
          {" "}
          <a
            className="Code-link"
            href="https://github.com/SaraSaria/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Sara SM
        </div>
      </header>
    </div>
  );
}

export default App;
