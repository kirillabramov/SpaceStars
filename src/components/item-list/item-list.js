import React, { Component } from 'react';

import './item-list.scss';


export default class ItemList extends Component{



    render(){
        return(
            <div className="item-list">
                <ul className="item-list__list">
                    <li className="item-list__item">Luce Skywoker</li>
                    <li className="item-list__item">Luce SkywokerSkywoker</li>
                    <li className="item-list__item">Luce SkywSkywokerSkywokeroker</li>
                    <li className="item-list__item">Luce Skywoker</li>
                </ul>
            </div>
        );
    }
}