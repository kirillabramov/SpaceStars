import React, { Component } from 'react';
import { PlanetList } from '../star-db/item-lists';
import { PlanetDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';




export default class PlanetPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedItem: 5
        };
    }


    onItemSelected = (id) => {
        this.setState({ 
            selectedItem: id
        });
    }

    render(){
        const { selectedItem } = this.state;
        return(
            <PageItem 
            leftItem={<PlanetList onItemSelected={this.onItemSelected} renderItem={({name}) => `${name}`} />} 
            rightItem={<PlanetDetails  itemId={ selectedItem }/>} />     
        );
    }
}