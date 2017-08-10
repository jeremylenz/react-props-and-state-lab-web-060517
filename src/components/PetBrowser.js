import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return (<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.checkForAdoption(pet)} />)
        })}

      </div>
    );
  }

  componentDidMount() {
    console.log('showing pets')
  }

  checkForAdoption(pet) {
    return this.props.adoptedPets.includes(pet.id)
  }

  // adoptAPet = (event) => {
  //   event.target.props.isAdopted = true
  // }

} // end of class

export default PetBrowser;
