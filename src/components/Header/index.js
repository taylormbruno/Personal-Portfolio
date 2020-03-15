import React from "react";
// import "./style.css";

function Header() {
    const nav = {
        backgroundColor: '#272733',
        height: "8.5em"
    };
    
    var phantom = {
        display: 'block',
        padding: '20px',
        height: '150px',
        width: '100%',
    }
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-md justify-content-end" style={nav}>
            <h1 id="nameHead">Taylor Bruno</h1>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-caret-square-down fa-2x navLinks"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                <a className="navbar-brand navLinks" href="/about">About</a>
                <a className="navbar-brand navLinks" href="/portfolio">Portfolio</a>
                <a className="navbar-brand navLinks" href="/contact">Contact</a>
            </div>
        </nav>
        <div style={phantom} />
        </div>
    );
}

export default Header;