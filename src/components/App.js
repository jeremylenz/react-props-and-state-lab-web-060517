import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [], //ID's only!!
      filters: {
        type: 'all',
      }
    };
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeFilter} onFindPetsClick={this.findPets} filters='all'/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  adoptPet = (petID) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petID]
    })
    console.log('pet adopted!')
  }

  changeFilter = (newType) => {
    console.log('changing filter to ', newType)
    this.setState({
      filters: {
        type: newType
      }
    })
  }

  findPets = (event) => {
    let url = '/api/pets'
    switch(this.state.filters.type) {
      case 'cat':
        url += '?type=cat'
      break;
      case 'dog':
        url += '?type=dog'
      break;
      case 'micropig':
        url += '?type=micropig'
      break;
      default:
        console.log('blah')
    }
    console.log('Fetching' + url)
    fetch(url)
    .then((resp) => resp.json())
    .then((resp) => this.createFromApi(resp))
  }

  createFromApi(resp) {
    this.setState({pets: resp})
  }


} // end of class

export default App;
