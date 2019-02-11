import React, { Component } from 'react';
import { PersonList } from '../star-db/item-lists';
import { PersonDetails } from '../star-db/details';
import PageItem from '../page-item/page-item';




export default class PeoplePage extends Component{


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
            leftItem={<PersonList renderItem={({name, gender}) => `${name} (${gender})`} />} 
            rightItem={<PersonDetails itemId={selectedItem} />} />    
            )
            }
    
}