import React from 'react';
import './Content.css';
import Cards from '../cadrs/Cards.jsx';

function Content() {
    return <div className="content">
        <div className="box">
            <Cards year="2017" title="Logan" info="Action, Adventure, Fantasy" rating="4.0" css="logan"/>
            <Cards year="2017" title="John Wick: Chapter 2" info="Action, Thriller" rating="4.8" css="john-wick"/>
            <Cards year="2017" title="Fantastic beasts an…" info="Adventure, Fantasy, Action" rating="4.5" css="fantastic-beasts"/>
            <Cards year="2017" title="Fifty shades darker" info="Drama, Roman" rating="4.6" css="fifty-shades-darker"/>
            <Cards year="2017" title="Beauty and the Beast" info="Musical, Drama, Fantasy" rating="4.4" css="beauty-and-the-beast"/>
            <Cards year="2017" title="Arrival" info="Action, Thriller, Sci-Fi" rating="3.4" css="arrival"/>
            <Cards year="2017" title="Justice League" info="Adventure, Sci-Fi, Action" rating="3.9" css="justice-league"/>
            <Cards year="2017" title="Pirates of the Caribb…" info="Adventure, Fantasy, Action" rating="4.2" css="pirates"/>
            <Cards year="2017" title="Wonder Woman" info="Action, Adventure, Sci-Fi" rating="3.8" css="wonder-woman"/>
            <Cards year="2017" title="Guardians of the Gal…" info="Action, Sci-Fi, Comedy" rating="3.0" css="guardians"/>
            <Cards year="2017" title="Alien: Covenant" info="Horror, Action, Sci-Fi, Action" rating="4.0" css="alien"/>
            <Cards year="2017" title="Captain Underpant…" info="Animation, Comedy" rating="3.5" css="captain"/>
        </div>
        <div className="loading">
            <div className="line">
                <div className="line__small"></div>
                <div className="line__middle"></div>
                <div className="line__big"></div>
                <div className="line__small"></div>
                <div className="line__big"></div>
                <div className="line__middle"></div>
                <div className="line__small"></div>
            </div>
            <span className="text">loading</span>
        </div>
    </div>
}

export default Content;