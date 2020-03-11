import React from 'react'
import ItemDetails, { Record } from '../item-details'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImgUrl={getPersonImage}
        >
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
    );
};

const PlanetDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImgUrl={getPlanetImage}
        >
            <Record field='name' label='Name' />
            <Record field='population' label='Population' />
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId}) => {
    return (<ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImgUrl={getStarshipImage}
    >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />
    </ItemDetails>);
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}