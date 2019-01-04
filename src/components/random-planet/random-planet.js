import React, { Component } from 'react';
import StarSerivce from '../../services/star-service';


import './random-planet.scss';



export default class RandomPlanet extends Component{
    
    starService = new StarSerivce();
    constructor(){
        super();
        this.updatePlanet();
    }
    state = {
        planet: {},
        loading: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25) + 3;
        this.starService
        .getPlanet(id)
        .then(this.onPlanetLoaded);
    }


    render(){

        const { planet, loading } = this.state;
        const spinner = loading ? <Spinner /> : <PlanetView planet={planet}/>;

        return(
            <div className="random-planet">
                {spinner}
            </div>
        );
           
        }
        
    
}

const PlanetView = ({planet}) => {
    const {id, population, rotationPeriod, planetName} = planet;
    setTimeout(() => {
        document.querySelector('.random-planet__population').classList.add('random-planet__population--loaded');
    }, 100);
    return(
        <React.Fragment>
            <div className="random-planet__image">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet-photo"/>
            </div>
            <div className="random-planet__description">
                <h1 className="random-planet__name">{ planetName }</h1>
                <div className="random-planet__info">
                    <p className="random-planet__population">Population: <span> {population} </span></p>
                    <p className="random-planet__period">Rotation period: <span> {rotationPeriod} </span></p>
                </div>
            </div>
        </React.Fragment>
    )
};

const Spinner = () =>{
    return(
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
};
