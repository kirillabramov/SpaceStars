import React, { Component } from 'react';

import './item-details.scss';




const DetailsItem = ({item, field, label}) => {
    return(
        <p className="item-details__label">{label} <span>{item[field]}</span></p>
    );
};

export default class ItemDetails extends Component{


    render(){
        if(!this.props.item){
            return <span className="item-details__warning">Select a item from a list.</span>
        };

        const { 
            item: {
                name,
            },
            image
        } = this.props;
        const item = this.props.item;
        
        return(
            <div className="item-details">
                <div className="item-details__photo">
                    <img  src={image} alt="item-photo"/>
                </div>
                <div className="item-details__description">
                    <div className="item-details__name">{name}</div>
                    <div className="item-details__separator"></div>
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </div>
            </div>
        );
    }
}




export {
    DetailsItem
};