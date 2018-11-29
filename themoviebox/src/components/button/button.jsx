import React from 'react';
import './button.css';

function Button({text, css}) {
    return <button className={`button ${css}`}>
    {text}
    </button>
}

export default Button;