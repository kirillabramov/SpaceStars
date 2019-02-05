import React, { Component } from 'react';
import StarSerivce from '../../services/star-service';
import Spinner from '../spinner/spinner';


import './item-list.scss';


export default class ItemList extends Component{

    // starService = new StarSerivce();

    constructor(props){
        super(props);
        this.state = {
            itemList: null
        }
    };


    componentDidMount(){
        this.props.getData()
        .then((itemList) => {
            this.setState({
                itemList
            });
        });
    }
    renderItems = (arr) => {
        return arr.slice(5, 10).map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return(
                <li className="item-list__item" 
                key={id}
                onClick={() => this.props.onPersonSelected(id)}>
                    {label}
                </li>
            )
        });
    };
    render(){
        const { itemList } = this.state;
        if(!itemList){
            return <Spinner />;
        }
        return(
            <div className="item-list">
                <ul className="item-list__list">
                    {this.renderItems(itemList)}
                </ul>
            </div>
        );
    }
}