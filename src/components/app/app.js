import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';



export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: null
        }
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
                            <ItemList onPersonSelected={this.onPersonSelected}/>
                            <PersonDetails personId={this.state.selectedPerson}  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}