import React, { Component } from 'react';
import StarSerivce from '../../services/star-service';


import './item-details.scss';


const ListItem = ({item, field, label}) => {
    return(
        <p className="item-details__label">{label} <span>{item[field]}</span></p>
    );
};


export default class ItemDetails extends Component{

    starService = new StarSerivce();

    constructor(props){
        super(props);

        this.state = {
            item: null,
            image: null
        };
    }


    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId) {
            return;
        }
        getData(itemId)
        .then((item) => {
            this.setState({
                item,
                image: getImageUrl(item)
            });
        });
    }


    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }


    render(){
        if(!this.state.item){
            return <span className="item-details__warning">Select a person from a list.</span>
        };

        const { 
            item: {
                id,
                name,
                height,
                gender,
                eyeColor
            },
            image
        } = this.state;
        const eyeColorStyles = {
                width: '10px',
                height: '10px',
                display: 'inline-block',
                backgroundColor: eyeColor,
                borderRadius: '50%'
        }
        const item = this.state.item;

        
        return(
            <div className="item-details">
                <div className="item-details__photo">
                    <img  src={image} alt="item-photo"/>
                </div>
                <div className="item-details__description">
                    <div className="item-details__name">{name}</div>
                    {/* <p className="item-details__gender">Gender: <span>{gender}</span></p>
                    <p className="item-details__height">Height: <span>{height}</span></p>
                    <p className="item-details__eyecolor">Eyecolor <span style={eyeColorStyles} ></span></p> */}
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
    ListItem
};