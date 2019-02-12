import React from 'react';
import { StarshipList } from '../star-db/item-lists';
import { withRouter } from 'react-router-dom';
 
const StarshipPage = ({ history }) => {

    return( 
        <StarshipList 
        onItemSelected={ (itemId) => {
            history.push(itemId);
        }} 
        renderItem={({name}) => `${name}`} />
    );

}

export default withRouter(StarshipPage);