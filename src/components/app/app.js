import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: 5
    }

    toggleRandomPlanet = () => this.setState(({ showRandomPlanet }) => ({ showRandomPlanet: !showRandomPlanet }))

    onPersonSelected = id => this.setState({ selectedPerson: id })


    render() {

        const { showRandomPlanet } = this.state

        const planet = showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className='app'>
                <Header />
                {planet}
                <button className='btn btn-warning' onClick={this.toggleRandomPlanet}>Toggle Planet</button>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}