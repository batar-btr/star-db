import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='name' label='Name' />
            <Record field='population' label='Population' />
        </ItemDetails>);
};

const mapMethodsToProps = swapiService => ({
    getData: swapiService.getPlanet,
    getImgUrl: swapiService.getPlanetImage
})

export default withSwapiService(mapMethodsToProps)(PlanetDetails);