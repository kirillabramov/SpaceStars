import React, { Component } from 'react';

import './person-details.scss';


export default class PersonDetails extends Component{



    render(){
        return(
            <div className="person-details">
                <div className="person-details__photo">
                    <img  src="https://i5.walmartimages.com/asr/217a095f-c2f1-4600-a28a-695f6c9102a5_1.4a0f09b442f3098af4a2d8c371b8fbe9.jpeg" alt="person-photo"/>
                </div>
                <div className="person-details__description">
                    <div className="person-details__name">R2-D2</div>
                    <p className="person-details__gender">Gender: <span>Male</span></p>
                    <p className="person-details__height">Height: <span>172</span></p>
                    <p className="person-details__eyecolor">Eyecolor <span></span></p>
                </div>
            </div>
        );
    }
}