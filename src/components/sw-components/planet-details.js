import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc'

const PlanetDetails = ({ itemId, swapiService }) => {
    const { getPlanet, getPlanetImage } = swapiService
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImgUrl={getPlanetImage}
        >
            <Record field='name' label='Name' />
            <Record field='population' label='Population' />
        </ItemDetails>);
};

export default withSwapiService(PlanetDetails);