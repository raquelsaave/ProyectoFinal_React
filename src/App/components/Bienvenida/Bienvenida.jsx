import React from 'react';

import './Bienvenida.css';
import desktopImage from './88847.jpg';
import mobileImage from './88847.jpg';


const Bienvenida = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
        <div className="Bienvenida" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="Bienvenida-content">
                <h1>¡Welcome to Bloggosfera!</h1>
                <p> A bloggin service where you can interact with fellow bloggers, create you own blog posts and follow the ones <br />
                    you are interested in, just like a whole universe of blogs!   </p>
                <h4> ¿Dont have an account? </h4>
                <p> Join us by Registering!</p>
                <h4> ¿Already have an account? </h4>
                <p> ¿What are you waiting for? Log in!!</p>
            </div>
        </div>
    )
}
export default Bienvenida;