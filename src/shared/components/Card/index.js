import React from 'react';

import './styles.scss';

const Card = props => {
    return (
        <div className="ffs-card">
            <div className="__image-container">
                {props.children}
            </div>
            <div className="__text">
                {props.description}
            </div>
        </div>
    )
};

export default Card;