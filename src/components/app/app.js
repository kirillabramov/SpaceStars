import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import StarService from '../../services/star-service';
import { PersonList, PlanetList, StarshipList } from '../star-db/item-lists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';
export default class App extends Component{


    starService = new StarService();


    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 5
        };
    }


    onPersonSelected = (id) => {
        this.setState({ 
            selectedPerson: id
        });
    }
    

    render(){
        return(
            <div className="app">
                <div className="app__wrapper">
                    <div className="app__inner">
                        <div className="app__header">
                            <a href="#" className="app__logo" data-hover="SpaceStars">SpaceStars</a>
                            <Header />
                        </div>
                        <RandomPlanet />    
                        <div className="app__details">
                                <PageItem 
                                leftItem={<PersonList onPersonSelected={this.onPersonSelected} renderItem={({name, gender}) => `${name} (${gender})`} />} 
                                rightItem={<PersonDetails />} />    
                                <PageItem 
                                leftItem={<PlanetList renderItem={({name}) => `${name}`} />} 
                                rightItem={<PlanetDetails />} />  
                                <PageItem 
                                leftItem={<StarshipList renderItem={({name}) => `${name}`} />} 
                                rightItem={ <StarshipDetails />} />  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}