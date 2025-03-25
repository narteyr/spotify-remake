import React from "react";
import  "../resources/styles/NavBar.model.css"

function NavBar(){
    return(
    <header>
        <h1>Moodify</h1>
        <nav>
            <ul>
                <li><a>Where?</a></li>
                <li><a>How it Works</a></li>
                <li><a>Pricing</a></li>
                <li><a>About Us</a></li>
                <a className="tryBtn">Try for free</a>
            </ul>
        </nav>
    </header>
    );
}

export default NavBar;