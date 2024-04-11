import logo from "./logo.jpg";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
      
        <Dictionary />
      
      
      </div>
      <footer className="App-footer">
        This page was coded by <a href="https://github.com/kristiinlee">Kristin Jones</a> and open-sourced on <a href="https://github.com/kristiinlee/dictonary-project">Github</a>
      </footer>
    </div>
  );
}

