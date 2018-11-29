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
            <ul className="social-network">
                <li className="icon"><a className="link facebook" href="https://www.facebook.com/"></a></li>
                <li className="icon"><a className="link pinterest" href="https://www.pinterest.ru/"></a></li>
                <li className="icon"><a className="link twitter" href="https://twitter.com/"></a></li>
                <li className="icon"><a className="link in" href="https://www.linkedin.cn/uas/login"></a></li>
            </ul>
        </div>
    </div>
}

export default Footer;