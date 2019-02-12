import React from 'react';
import { PlanetList } from '../star-db/item-lists';
import withRouter from 'react-router-dom/withRouter';




 const PlanetPage = ({ history }) => {
        return(
            <PlanetList 
            onItemSelected={(itemId) => {
                history.push(itemId);
            }} 
            renderItem={({name}) => `${name}`} />
        );
}

export default withRouter(PlanetPage);