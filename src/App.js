import React from 'react';
import logo from './logo.svg';
import './App.css';

function Beer({beer,text}){
  return (
    <div>
     <h3>{beer}</h3>
     {text}
    </div>
  )
}

function Text() {
 return (<h3>hello</h3>)
}


function App() {

  let beers = ['blondes','brunes','rousses']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
         beers.map((beer,key) => (
          <Beer key={key} text={<Text/>} beer={beer}/>
         ))
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
