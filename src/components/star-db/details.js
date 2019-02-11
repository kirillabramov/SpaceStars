import React from 'react';
import ItemDetails, { DetailsItem } from '../item-details/item-details';
import { withDetails } from '../hoc/with-details';
import StarService from '../../services/star-service';



const {
    getPerson,
    getPersonImage,
    getStarship,
    getStarshipImage,
    getPlanet,
    getPlanetImage
} = new StarService();

const PersonDetails = withDetails(
    ItemDetails,
    [
        <DetailsItem field="gender" label="Gender:"/>,
        <DetailsItem field="eyeColor" label="Eye Color:"/>,
        <DetailsItem field="height" label="Height:"/>
    ],
    getPerson,
    getPersonImage

);
const PlanetDetails = withDetails(
    ItemDetails,
    [ 
        <DetailsItem field="name" label="Name:"/>,
        <DetailsItem field="population" label="Population:"/>,
        <DetailsItem field="rotationPeriod" label="Rotation period:"/>
       
    ],
    getPlanet,
    getPlanetImage

);
const StarshipDetails = withDetails(
    ItemDetails,
    [
        <DetailsItem field="model" label="Model:"/>,
        <DetailsItem field="costInCredits" label="Cost:"/>,
        <DetailsItem field="passengers" label="Passengers:"/>,
        <DetailsItem field="crew" label="Crew:"/>
    ],
    getStarship,
    getStarshipImage
);


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}

