import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row'
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components'

import { SwapiServiceProvider } from '../swapi-service-context'


export default class App extends Component {

    swapiService = new SwapiService();

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

        const personDetails = (
            <PersonDetails itemId={12} />
        );

        const starshipDetails = (
            <StarshipDetails itemId={5} />
        );


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='app'>
                        <Header />
                        <Row
                            left={personDetails}
                            right={starshipDetails}
                        />
                        <Row
                            left={<PersonList />}
                            right={<StarshipList />}
                        />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}