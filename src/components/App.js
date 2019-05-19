import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import './styles/App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    const proxyurl = `http://localhost:3000/`;
    const url = `http://pokeapi.co/api/v2/pokemon/${id}/`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const pokemon = new Pokemon(data);

      console.log(pokemon);
      this.setState({ pokemon });
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}


export default App;