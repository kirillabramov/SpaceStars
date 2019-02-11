import React, { Component } from 'react';
import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
<<<<<<< HEAD
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';
import StarService from '../../services/star-service';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
=======
import StarService from '../../services/star-service';
import { StarServiceProvider } from '../star-service-context/star-service-context';
import PeoplePage from '../people-page/people-page';
import PlanetPage from '../planet-page/planet-page';
import StarshipPage from '../starship-page/starship-page';
>>>>>>> b2f66f43a1a2d2408bbd245506a288f0a4a08f9a
export default class App extends Component{


    starService = new StarService();



    

    render(){
        return(
<<<<<<< HEAD
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
                                render={() => <h2 className="app--welcome">Welcome to SpaceStars</h2>} 
                                exact
                                />
                                <Route path="/people" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" component={StarshipPage} />

                            </div>
                        </div>
                    </div>
                </div>
            </Router>
=======
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
>>>>>>> b2f66f43a1a2d2408bbd245506a288f0a4a08f9a
        )
    }
}