import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './Dictionary';



function App() {
  return (
    <div className="App">
      <div container>
        <header className="App-header">
          <h1>My Dictionary</h1>
          <p>Find meanings and definitions for words!</p>
        </header>
        <main>
       
      
      <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by
          <a href="https://github.com/Emili-Santana" target="_blank" rel="noreferrer"  >
          </a> and is  open-sourced on 
           <a href="https://github.com/Emili-Santana/my-dictionary-project" target="_blank" rel="noreferrer" > GitHub </a> 
           and  hosted on <a href="https://best-dictionary-react.netlify.app/" target="_blank" rel="noreferrer" >
          Netlify
          </a>
        </footer>
      </div>
      </div>
  );
}

export default App;
