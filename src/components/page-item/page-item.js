import React from 'react';
import './page-item.scss';


const PageItem = ({ leftItem, rightItem }) => {
    return(
        <div className="page-item">
            {leftItem}
            {rightItem}
        </div>
    );
};


export default PageItem;