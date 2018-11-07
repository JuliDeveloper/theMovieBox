import React from 'react';
import './footer.css';

function Footer() {
    return <div className="footer">
        <div className="footer__top">
            <span className="logo">themoviebox</span>
            <ul className="list">
                <li className="item">About</li>
                <li className="item">Movies</li>
                <li className="item">Rarings</li>
                <li className="item">Contact</li>
            </ul>
        </div>
        <div className="footer__down">
            <span className="text">Designed by Milan Houter. All rights reserved.</span>
            <ul className="seti">
                <li className="icon facebook"></li>
                <li className="icon pinterest"></li>
                <li className="icon twitter"></li>
                <li className="icon in"></li>
            </ul>
        </div>
    </div>
}

export default Footer;