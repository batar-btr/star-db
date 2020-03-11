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
            <PersonDetails itemId={12}/>
        );

        const starshipDetails = (
            <StarshipDetails itemId={5}/>
        );
        const peopleList = (<PersonList>
            {item => item.name}
        </PersonList>)
        const starshipList = (<PlanetList>
            {item => item.name}
        </PlanetList>)

        return (
            <ErrorBoundry>
                <div className='app'>
                    <Header />
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    />
                    <Row
                        left={peopleList}
                        right={starshipList}
                    />

                </div>
            </ErrorBoundry>
        );
    }
}