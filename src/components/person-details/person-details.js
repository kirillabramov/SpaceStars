import React, { Component } from 'react';
import StarSerivce from '../../services/star-service';

import './person-details.scss';


export default class PersonDetails extends Component{

    starService = new StarSerivce();

    constructor(props){
        super(props);

        this.state = {
            person: null
        };
    }


    updatePerson = () => {
        const { personId } = this.props;
        if(!personId) {
            return;
        }
        this.starService
        .getPerson(personId)
        .then((person) => {
            this.setState({
                person
            });
        });
    }


    componentDidMount(){
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }


    render(){
        if(!this.state.person){
            return <span className="person-details__warning">Select a person from a list.</span>
        };

        const { 
            person: {
                id,
                name,
                height,
                gender,
                eyeColor
            }
        } = this.state;
        const eyeColorStyles = {
                width: '10px',
                height: '10px',
                display: 'inline-block',
                backgroundColor: eyeColor,
                borderRadius: '50%'
        }
        return(
            <div className="person-details">
                <div className="person-details__photo">
                    <img  src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person-photo"/>
                </div>
                <div className="person-details__description">
                    <div className="person-details__name">{name}</div>
                    <p className="person-details__gender">Gender: <span>{gender}</span></p>
                    <p className="person-details__height">Height: <span>{height}</span></p>
                    <p className="person-details__eyecolor">Eyecolor <span style={eyeColorStyles} ></span></p>
                </div>
            </div>
        );
    }
}