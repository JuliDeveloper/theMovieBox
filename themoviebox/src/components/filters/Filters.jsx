import React from 'react';
import '../../../src/css-reset.css';
import './Filters.css';

function Filters() {
    return <div className="filters">
        <div className="filter__left">
            <ul className="filter__list">
                <li className="filter__item"><a href="#" className="link one-line">Trending</a></li>
                <li className="filter__item"><a href="#" className="link">Top Rated</a></li>
                <li className="filter__item"><a href="#" className="link">New Arrivals</a></li>
                <li className="filter__item fall"><a href="#" className="link">Genre</a>
                    <ul className="sublist">
                        <li className="subitem"><a href="#" className="link">Interesting</a></li>
                        <li className="subitem"><a href="#" className="link">Interesting</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="filter__right">
            <div className="square">
                <span className="square__line"></span>
                <span className="square__line"></span>
                <span className="square__line"></span>
                <span className="square__line"></span>
            </div>
            <div className="rectangles">
                <span className="rectangles__line"></span>
                <span className="rectangles__small"></span>
                <span className="rectangles__line"></span>
            </div>
        </div>
    </div>
}


export default Filters;