import React from 'react';
import '../../../src/css-reset.css';
import './Header.css';
import Rating from '../rating/rating.jsx';

function Header() {
    return <header className="header">
        <div className="top-menu">
            <span className="logo">themoviebox</span>
            <div className="box">
                <span className="search"></span>
                <button className="log-in">log in</button>
                <button className="sing-up">sing up</button>
            </div>
        </div>
        <div className="info-movie">
            <div className="info">
                <h1 className="title">Wrath of the titans</h1>
                <ul className="film-categories">
                    <li className="category__name">Fantasy</li>
                    <li className="category__name">Animation</li>
                    <li className="category__name">Family</li>
                    <li className="category__name line">Duration: 1h 52m</li>
                </ul>
                <div className="buttons">
                    <button className="watch">Watch movie</button>
                    <button className="more-info">View info</button>
                    <button className="add">+ Add to Wishlist</button>
                </div>
            </div>
            <Rating />
        </div>
    </header>
}


export default Header;