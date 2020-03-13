import React from 'react'
import ItemList from '../item-list'
import SwapiService from '../../services/swapi-service'
import { withData } from '../hoc'

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

// const withChildFunction = (Wrapped, fn) => {
//     return (props) => {
//         return (<Wrapped {...props}>
//             {fn}
//         </Wrapped>)
//     }
// }

const withChildFunction = (Wrapped, fn) => props => (<Wrapped {...props}>{fn}</Wrapped>)

const renderName = ({ name }) => (<span>name</span>)
const renderModelAndName = ({ name, model }) => (<span>{name} ({model})</span>)
const renderPopulationAndName = ({ population, name }) => (<span>{name}(population: {population})</span>)

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, renderPopulationAndName), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, renderModelAndName), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}