import React from 'react';
import './App.css';
import beers from './data/beers'
import TitleBeer from './components/TitleBeer'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      beer:beers[0].name
    }
  
  }

  render(){
    console.log('hello render')
    return  (
      <div>
      <TitleBeer beer={this.state.beer}/>
      <button onClick={() => this.setState({beer:'Nouvelle Bière'})}>Change</button>
     </div>
    )
  }

 
}

export default App;
