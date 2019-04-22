import React from 'react';


function Header() {
    return (
        <header id="header">
        <div id="logo" className="lax noselect" data-lax-preset="blurOut" data-lax-opacity="(vh/2) 1, (vh*4.2) 0">
            <img src="/static/logo.webp" alt="That's Me :3" />
        </div>
        <img className="lax noselect" style={{display: "block"}} src="/static/scrollArrow.png" alt="arrow" id="scrollArrow"data-lax-opacity="0 1, 100 0" />
        </header>
    );
}

export default Header;