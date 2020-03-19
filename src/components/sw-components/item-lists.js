import React from 'react'
import ItemList from '../item-list' 
import { withData, withSwapiService, withChildFunction, compose } from '../hoc'



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


const PersonList = compose(
    withSwapiService(personMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
    withSwapiService(planetMethodsToProps),
    withData,
    withChildFunction(renderPopulationAndName)
)(ItemList)

const StarshipList = compose(
    withSwapiService(starShipMethodsToProps),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList)

export {
    PersonList,
    PlanetList,
    StarshipList
}