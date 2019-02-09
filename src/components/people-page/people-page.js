import React, { Component } from 'react';
import { PersonList } from '../star-db/item-lists';
import { PersonDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';


export default class PeoplePage extends Component{

    constructor(props){
        super(props);

        this.state =  {
            selectedItem: 6
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
            leftItem={<PersonList onItemSelected={this.onItemSelected} renderItem={({name, gender}) => `${name} (${gender})`} />} 
            rightItem={<PersonDetails itemId={this.state.selectedItem}/>} /> 
        );
    }
}