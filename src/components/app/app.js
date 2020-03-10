import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import ItemDetails, { Record } from '../item-details';
import Row from '../row'


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

        const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImgUrl={getPersonImage}
            >
                <Record field='gender' label='Gender' />
                <Record field='eyeColor' label='Eye Color' />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImgUrl={getStarshipImage}
            >
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='costInCredits' label='Cost'/>
            </ItemDetails>
        );


        return (
            <ErrorBoundry>
                <div className='app'>
                    <Header />
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    />
                </div>
            </ErrorBoundry>
        );
    }
}