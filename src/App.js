import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './Dictionary';
import Logo from './logo-dictionary.jpeg';



function App() {
  return (
    <div className="App">
       <div className="container">
        <header className="App-header ">
        <img src={Logo} alt="Logo" className="logo" />
          <h1 className='title'>My Dictionary</h1>
        
      
        </header>
        <main className='App-main'>
       
      
      <Dictionary defaultKeyword="Home" />
   
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
