import React from 'react';
import { PersonList } from '../star-db/item-lists';
import withRouter from 'react-router-dom/withRouter';



const PeoplePage = ({history}) => {

        return(
            <PersonList 
                onItemSelected={
                (itemId) => {
                    history.push(itemId);
                }} 
                renderItem={({name, gender}) => `${name} (${gender})`}/>    
            );
        
}

export default withRouter(PeoplePage);