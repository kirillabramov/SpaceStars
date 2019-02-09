import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import StarService from '../../services/star-service';
import { StarServiceProvider } from '../star-service-context/star-service-context';
import PeoplePage from '../people-page/people-page';
import PlanetPage from '../planet-page/planet-page';
import StarshipPage from '../starship-page/starship-page';
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
            <StarServiceProvider value={this.starService}>
            <div className="app">
                <div className="app__wrapper">
                    <div className="app__inner">
                        <div className="app__header">
                            <a href="#" className="app__logo" data-hover="SpaceStars">SpaceStars</a>
                            <Header />
                        </div>
                        <RandomPlanet />    
                        <div className="app__details">
                            
                                <PeoplePage />
                                <PlanetPage />
                                <StarshipPage />
                           
                        </div>
                    </div>
                </div>
            </div>
            </StarServiceProvider>
        )
    }
}