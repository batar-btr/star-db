import React, { Component } from 'react';
import './random-planet.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {}
    }

    constructor(props) {
        super(props);
        this.updatePlanet();
    }

    onPlanetLoaded = planet => this.setState({ planet })

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
    }

    render() {

        const {planet:{ id, name, population, rotationPeriod, diameter }} = this.state
        
        return (
            <div className="random-planet jumbotron rounded">
                <Spinner/>
            </div>
        );
    }
}