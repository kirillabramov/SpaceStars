import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';


export default class PeoplePage extends Component{


    constructor(props){
        super(props);
        this.state = {
            selectedPerson: 3,
            hasError: false
        };
    }


    onPersonSelected = (id) => {
        this.setState({ 
            selectedPerson: id
        });
    }


    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }



    render(){

        if(this.state.hasError) {
            return (<div>Something went wrong...</div>)
        }
        return (
            <React.Fragment>
                <ItemList onPersonSelected={this.onPersonSelected} getData={this.props.getData}/>
                <PersonDetails personId={this.state.selectedPerson}  />
            </React.Fragment>
            );
    }
}