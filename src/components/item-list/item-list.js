import React from 'react';

import './item-list.scss';

const ItemList = (props) => {

    const { renderItem, onPersonSelected, data} = props;
    const items = data.slice(5, 10).map((item) => {
            const label = renderItem(item);
            return(
                <li className="item-list__item" 
                key={item.id}
                onClick={() => onPersonSelected(item.id)}>
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

export default ItemList;