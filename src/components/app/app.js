import React, { Component } from 'react';
import './app.css';
import RandomPlanet from '../random-planet'
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from '../pages'

import { SwapiServiceProvider } from '../swapi-service-context'

export default class App extends Component {

  

    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService()
    }

    toggleRandomPlanet = () => this.setState(({ showRandomPlanet }) => ({ showRandomPlanet: !showRandomPlanet }))

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='app'>
                        <Header />
                        {planet }
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}