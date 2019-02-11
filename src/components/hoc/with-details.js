import React, { Component } from 'react';



const withDetails = (View, DetailsItem, getData, getImageUrl) => {
    return class extends Component{

        constructor(props){
            super(props);
    
            this.state = {
                item: null,
                image: null
            };
        }

        updateItem = () => {
            if(!this.props.itemId) {
                return;
            }
            getData(this.props.itemId)
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
<<<<<<< HEAD
                
=======
                {...this.props}
>>>>>>> b2f66f43a1a2d2408bbd245506a288f0a4a08f9a
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