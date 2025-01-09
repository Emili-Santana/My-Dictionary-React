import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>My Dictionary</h1>
          <p>Find meanings and definitions for words!</p>
        </header>
        <main>
        <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Search for a word:</label>
    <input type="text" class="form-control w-25 mx-auto" id="exampleInputPassword1"></input>
  </div>
  <button className="btn" style={{ backgroundColor: '#04a29f', color: '#ffffff'}}>Search</button>
        </main>
        <footer className="App-footer">
          This project was coded by
          <a href="https://github.com/Emili-Santana" >
          </a> and is  open-sourced on  <a 
            href="https://github.com/Emili-Santana/my-dictionary-project"> GitHub </a> 
           and    hosted on <a href="https://best-dictionary-react.netlify.app/" >
          Netlify
          </a>
        </footer>
      </div>
 
  );
}

export default App;
