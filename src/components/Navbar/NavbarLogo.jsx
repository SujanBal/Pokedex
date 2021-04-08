import React from 'react'

export default function NavbarLogo() {
    return (
        <div className='navbar-top'>
            <div className="container flex flex-ai-c">
                <div className="navbar-top-logo flex flex-jc-c flex-ai-c">
                    <img src="images/pokemon-logo.png" alt="pokemon-logo" />
                </div>
                
                <div className="navbar-top-animate flex flex-jc-sb flex-ai-c">
                    <img className='navbar-top-animate-ball' src="images/pokeball.png" alt="pokeball" />
                    <div className="navbar-top-animate-background background1"></div>
                    <div className="navbar-top-animate-background background2"></div>
                    <div className="navbar-top-animate-background background3"></div>
                    <img className='navbar-top-animate-pikachu' src="images/pikachu.png" alt="pikachu"/>
                </div>
            </div>
        </div>
    )
}
