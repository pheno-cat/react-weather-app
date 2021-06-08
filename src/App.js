import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <SearchEngine />
      <footer>
        This project was coded by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.catjalomo.com"
        >
          Cat Jalomo
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/pheno-cat/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://peaceful-goldstine-a8794b.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
