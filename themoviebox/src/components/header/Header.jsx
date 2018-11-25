import React from 'react';
import '../../../src/css-reset.css';
import './Header.css';
import Rating from '../rating/rating.jsx';
import Button from '../button/button.jsx';

function Header() {
    return <header className="header">
        <div className="top-menu">
            <span className="logo">themoviebox</span>
            <div className="box">
                <span className="search"></span>
                <Button text="log in"  css="log-in"/>
                <Button text="sing-up" css="sing-up"/>
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
                    <Button text="Watch movie" css="watch"/>
                    <Button text="View info" css="more-info"/>
                    <Button text="+ Add to Wishlist" css="add"/>
                   { /*<button className="watch">Watch movie</button>
                    <button className="more-info">View info</button>
                    <button className="add">+ Add to Wishlist</button>*/ }
                </div>
            </div>
            <Rating />
        </div>
    </header>
}


export default Header;