import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <p>
          <form>
            <input type="search" placeholder="Enter a city..." />
            <button type="submit">Search</button>
          </form>
        </p>
        <div>
          {" "}
          <a
            className="App-link"
            href="https://reactjs.org"
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
