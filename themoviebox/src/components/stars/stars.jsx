import React from 'react';
import './stars.css';

function Stars() {
    return  <ul className="stars__list">
        <li className="star__list-item full"></li>
        <li className="star__list-item full"></li>
        <li className="star__list-item full"></li>
        <li className="star__list-item half"></li>
        <li className="star__list-item empty"></li>
    </ul>
}

export default Stars;