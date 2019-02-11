import React, { Component } from 'react';
import { StarshipList } from '../star-db/item-lists';
import { StarshipDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';


export default class StarshipPage extends Component{

    constructor(props){
        super(props);

        this.state =  {
            selectedItem: 12
        }
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    };


    render(){

        return(
            <PageItem 
            leftItem={<StarshipList onItemSelected={this.onItemSelected} renderItem={({name}) => `${name}`} />} 
            rightItem={ <StarshipDetails itemId={this.state.selectedItem}/>} />  
        );
    }
}