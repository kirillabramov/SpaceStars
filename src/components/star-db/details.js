import React, { Component } from 'react';
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
    5,
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
    5,
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
    5,
    getStarship,
    getStarshipImage
);


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}

