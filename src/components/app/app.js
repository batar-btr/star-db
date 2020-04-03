import React, { Component } from 'react';
import './app.css';
import RandomPlanet from '../random-planet'
import Header from '../header';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    LoginPage,
    SecretPage
} from '../pages'

import { SwapiServiceProvider } from '../swapi-service-context'
import { StarshipDetails } from '../sw-components';

export default class App extends Component {



    state = {
        showRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => this.setState({isLoggedIn: true}) 

    toggleRandomPlanet = () => this.setState(({ showRandomPlanet }) => ({ showRandomPlanet: !showRandomPlanet }))

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
        const {isLoggedIn} = this.state;
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className='app'>
                            <Header />
                            {planet}
                            <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
                            <Route path='/people/:id?' component={PeoplePage} />
                            <Route path='/planets' component={PlanetsPage} />
                            <Route path='/starships' exact component={StarshipsPage} />
                            <Route
                                path='/starships/:id'
                                render={({ match }) => {
                                    const { id } = match.params;
                                    console.log(id)
                                    return <StarshipDetails itemId={id} />
                                }}
                            />
                            <Route
                                path='/login'
                                render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                            <Route
                                path='/secret'
                                render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}