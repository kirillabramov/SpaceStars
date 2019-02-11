import React from 'react';
import PropTypes from 'prop-types';
import './page-item.scss';


const PageItem = ({ leftItem, rightItem }) => {
    return(
        <div className="page-item">
            {leftItem}
            {rightItem}
        </div>
    );
};


PageItem.propTypes = {
    leftItem: PropTypes.node,
    rightItem: PropTypes.node
};

export default PageItem;