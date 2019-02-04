import React, { Component } from 'react';
import StarSerivce from '../../services/star-service';
import Spinner from '../spinner/spinner';


import './item-list.scss';


export default class ItemList extends Component{

    // starService = new StarSerivce();

    constructor(props){
        super(props);
        this.state = {
            peopleList: null
        }
    };


    componentDidMount(){
        this.props.getData()
        .then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    }
    renderItems = (arr) => {
        return arr.slice(0, 5).map(({id, name}) => {
            return(
                <li className="item-list__item" 
                key={id}
                onClick={() => this.props.onPersonSelected(id)}>
                    {name}
                </li>
            )
        });
    };
    render(){
        const { peopleList } = this.state;
        if(!peopleList){
            return <Spinner />;
        }
        return(
            <div className="item-list">
                <ul className="item-list__list">
                    {this.renderItems(peopleList)}
                </ul>
            </div>
        );
    }
}