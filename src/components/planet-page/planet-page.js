import React, { Component } from 'react';
import { PlanetList } from '../star-db/item-lists';
import { PlanetDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';


export default class PlanetPage extends Component{

    constructor(props){
        super(props);

        this.state =  {
            selectedItem: 10
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
            leftItem={<PlanetList onItemSelected={this.onItemSelected} renderItem={({name}) => `${name}`} />} 
            rightItem={<PlanetDetails itemId={this.state.selectedItem}/>} /> 
        );
    }
}