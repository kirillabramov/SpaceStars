import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import StarService from '../../services/star-service';


export default class App extends Component{


    starService = new StarService();


    constructor(props){
        super(props);
        this.state = {

        }
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
                            <PeoplePage getData={this.starService.getAllPeople}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}