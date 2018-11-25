import React from 'react';
import '../../../src/css-reset.css';
import './rating.css';
import Stars from '../stars/stars.jsx';

function Rating({text, css}) {
    return <div className="rating">
    <h2 className="rating__title">Rating</h2>
    <span className="rating__info">based on 3.546 reviews</span>
    <Stars />
    <span className="rating__numbers">3.4</span>
</div>
} 

export default Rating;