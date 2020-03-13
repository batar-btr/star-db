import React from 'react'
import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc'

const PersonDetails = ({ itemId, swapiService }) => {
    const {getPerson, getPersonImage} = swapiService
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

export default withSwapiService( PersonDetails);