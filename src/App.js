import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" ></img>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className="App-footer">
          This project was coded by {" "}<a href="https://www.instagram.com/freesoulcriss/" target="_blank" rel=" noopener noreferrer">Cristina Jimenez</a>, is open-sourced on {" "}
          <a href="https://github.com/FreeSoulCris/react-dictionary-project" target="_blank" rel="noopener noreferrer">Github </a> and hosted on {" "}<a href="https://curious-dictionary-app.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>
       </footer>
      </div>
    </div>
  );
}

export default App;
