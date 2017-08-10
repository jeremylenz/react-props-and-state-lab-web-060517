import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptPet = () => {
    console.log('Adopting pet ', this.props.pet.name)
    this.props.onAdoptPet(this.props.pet.id)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} - Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ?
            ( <button className="ui disabled button">Already adopted</button> ) :
            ( <button className="ui primary button" id={this.props.pet.id} onClick={this.adoptPet}>Adopt pet</button> )
          }
        </div>
      </div>
    );
  }






} // end of class

export default Pet;
