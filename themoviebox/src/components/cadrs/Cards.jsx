import React from 'react';
import './Cards.css';

function Cards({year, title, info, rating, css}) {
    return <div className="card">
        <div className={`image ${css}`}>
            <span className="year">{year}</span>
        </div>
        <div className="info-movie">
            <h1 className="title">{title}</h1>
            <h2 className="category">{info}</h2>
            <span className="rating">{rating}</span>
        </div>
    </div>
}

export default Cards;