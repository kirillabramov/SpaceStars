import React, { Component } from 'react';



const withDetails = (View, DetailsItem, itemId, getData, getImageUrl) => {
    return class extends Component{

        constructor(props){
            super(props);
    
            this.state = {
                item: null,
                image: null
            };
        }

        updateItem = () => {
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
            return (
            <View 
                image={this.state.image}
                item={this.state.item}>
                {DetailsItem}
                </View> );
            
        }
    }
}

export{
    withDetails
};