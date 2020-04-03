import React from 'react';
import './App.css';
import Layout from './components/Layout'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Layout html={<h1>oo</h1>}>
          <h2>Hello</h2>
        </Layout>
      </header>
    </div>
  );
}

export default App;
