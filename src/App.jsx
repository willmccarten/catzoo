import './App.css';
import catlogo from './assets/catlogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={catlogo} className="App-logo" alt="logo" />

        <p>
          Welcome to Cat Zoo!
        </p>

        <a className="App-link" href="https://github.com/willmccarten/catzoo" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        
      </header>
    </div>
  );
}

export default App;
