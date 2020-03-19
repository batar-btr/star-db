import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc'

const PersonDetails = props => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
    );
};

const mapMethodToProps =(swapiService) =>({
    getData: swapiService.getPerson,
    getImgUrl: swapiService.getPersonImage
})

export default withSwapiService( PersonDetails, mapMethodToProps);