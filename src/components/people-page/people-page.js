import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import ItemDetails, { ListItem } from '../item-details/item-details';
import PageItem from '../page-item/page-item';
import ErrorBoundry from '../error-boundry/error-boundry';
import StarService from '../../services/star-service';


import './people-page.scss';



export default class PeoplePage extends Component{

    starService = new StarService();

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 5
        };
    }


    onPersonSelected = (id) => {
        this.setState({ 
            selectedPerson: id
        });
    }






    render(){

        const { 
            getPerson, 
            getPersonImage, 
            getStarship,
            getStarshipImage
        } = this.starService;

        const itemList = (
            <ItemList 
            onPersonSelected={this.onPersonSelected} 
            getData={this.props.getData}
            renderItem={this.props.renderItem}/>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails 
                itemId={this.state.selectedPerson} 
                getData={getPerson} 
                getImageUrl={getPersonImage}
                >
                    <ListItem field="gender" label="Gender:"/>
                    <ListItem field="eyeColor" label="Eye Color:"/>
                    <ListItem field="height" label="Height:"/>
                </ItemDetails>
            </ErrorBoundry>
            
        );

        const starshipDetails = (
            <ErrorBoundry>
                <ItemDetails 
                itemId={this.state.selectedPerson} 
                getData={getStarship} 
                getImageUrl={getStarshipImage}
                > 
                    <ListItem field="model" label="Model:"/>
                    <ListItem field="costInCredits" label="Cost:"/>
                    <ListItem field="passengers" label="Passengers:"/>
                    <ListItem field="crew" label="Crew:"/>
                    
                </ItemDetails>
            </ErrorBoundry>
            
        );

        return (
           <React.Fragment>
                <PageItem leftItem={itemList} rightItem={personDetails} />
                <PageItem leftItem={itemList} rightItem={starshipDetails} />
           </React.Fragment>
            );
    }
}

