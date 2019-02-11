import React from 'react';
import PropTypes from 'prop-types';
import './item-list.scss';

const ItemList = (props) => {

    const { renderItem, onItemSelected, data} = props;
    const items = data.slice(5, 10).map((item) => {
            const label = renderItem(item);
            return(
                <li className="item-list__item" 
                key={item.id}
                onClick={() => onItemSelected(item.id)}>
                    {label}
                </li>
            )
        });

        return(
            <div className="item-list">
                <ul className="item-list__list">
                    {items}
                </ul>
            </div>
        );
    
}
// ItemList.defaultProps = {
//     onItemSelected: () => {console.log('default props')}
// };

// ItemList.propTypes = {
//     onItemSelected: PropTypes.func,
//     date: PropTypes.arrayOf(PropTypes.object),
//     renderItem: PropTypes.func.isRequired
// };

export default ItemList;