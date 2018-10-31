import React from 'react';
import './Header.css';
import '../../images/search.svg'


function Header() {
    return <header className="header">
        <div className="top-menu">
            <span className="logo">themoviebox</span>
            <span className="search"></span>
            <button className="log-in">log in</button>
            <button className="sing-up">sing up</button>
        </div>
        <div className="info-movie">
            <h1 className="title">Wrath of the titans</h1>
            <ul className="category">
                <li className="category__name">Fantasy</li>
                <li className="category__name">Animation</li>
                <li className="category__name">Family</li>
                <li className="category__name">Duration: 1h 52m</li>
            </ul>
            <div className="button">
                <button className="watch">Watch movie</button>
                <button>View info</button>
                <button>+ Add to Wishlist</button>
            </div>
            <div className="rating">
                <h2 className="rating__title">Rating</h2>
                <span className="rating__info">based on 3.546 reviews</span>
                <ul className="rating__stars">
                    <li className="star1"></li>
                    <li className="star2"></li>
                    <li className="star3"></li>
                    <li className="star4"></li>
                    <li className="star5"></li>
                </ul>
                <span>3.4</span>
            </div>
        </div>
    </header>
}


export default Header;