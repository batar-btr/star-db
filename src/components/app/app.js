import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => this.setState(({ showRandomPlanet }) => ({ showRandomPlanet: !showRandomPlanet }))

    componentDidCatch() {
        console.log('component did catch')
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { showRandomPlanet } = this.state

        const planet = showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div className='app'>
                <Header />
                {planet}
                
                    <button className='toggle-planet btn btn-warning btn-lg' onClick={this.toggleRandomPlanet}>Toggle Planet</button>
                    <ErrorButton />
                

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}