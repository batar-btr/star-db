import React from 'react'
import ItemList from '../item-list' 
import { withData, withSwapiService } from '../hoc'

const withChildFunction = (Wrapped, fn) => props => (<Wrapped {...props}>{fn}</Wrapped>)

const renderName = ({ name }) => (<span>{name}</span>)
const renderModelAndName = ({ name, model }) => (<span>{name} ({model})</span>)
const renderPopulationAndName = ({ population, name }) => (<span>{name}(population: {population})</span>)

const personMethodsToProps = swapiService => ({
    getData: swapiService.getAllPeople,
    text: 'personMethods'

})
const planetMethodsToProps = swapiService => ({
    getData: swapiService.getAllPlanets,
    text: 'planetMethods'
})
const starShipMethodsToProps = swapiService => ({
    getData: swapiService.getAllStarships,
    text: 'starshipMethods'
})


const PersonList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderName)), personMethodsToProps);

const PlanetList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderPopulationAndName)), planetMethodsToProps);

const StarshipList = withSwapiService(
    withData(
        withChildFunction(ItemList, renderModelAndName)), starShipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}