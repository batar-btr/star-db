import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context'

const withSwapiService = mapMethodsToProps => Wrapped => props => {
    return (
        <SwapiServiceConsumer>
            {
                swapiService => {
                    console.log(mapMethodsToProps)
                    const serviceProps = mapMethodsToProps(swapiService)
                    return (<Wrapped {...props} {...serviceProps}/>);
                } 
            }
        </SwapiServiceConsumer>
    );
}

export default withSwapiService;