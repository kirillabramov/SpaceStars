import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';
import StarService from '../../services/star-service';
import { StarshipDetails, PlanetDetails, PersonDetails } from '../star-db/details';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class App extends Component{


    starService = new StarService();



    

    render(){
        return(
            <Router>
                <div className="app">
                    <div className="app__wrapper">
                        <div className="app__inner">
                            <div className="app__header">
                                <Link to="/" className="app__logo" data-hover="SpaceStars">SpaceStars</Link>
                                <Header />
                            </div>
                            <RandomPlanet />
                            <div className="app__details">
                                <Route 
                                path="/" 
                                render={
                                    () => <h2 className="app--welcome">Welcome to SpaceStars</h2>
                                } 
                                exact
                                />

                                <Route path="/people/" exact component={PeoplePage} />
                                <Route path="/planets" exact component={PlanetPage} />
                                <Route path="/starships" exact component={StarshipPage} />

                                <Route path="/starships/:id" render={
                                    ({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={ id }/>
                                    }
                                } />
                                <Route path="/planets/:id" render={
                                    ({ match }) => {
                                        const { id } = match.params;
                                        return <PlanetDetails itemId={ id }/>
                                    }
                                } />
                                <Route path="/people/:id" render={
                                    ({ match }) => {
                                        const { id } = match.params;
                                        return <PersonDetails itemId={ id }/>
                                    }
                                } />

                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}