import React from 'react';
import logotipo from '../Header/Logo/blog.png'
import './Presentacion.css'
import desktopImage from './6597.jpg';
import mobileImage from './6597.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Presentacion = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (

        <>
            <div className="Presentacion" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="Presentacion-content">
                    <header class="masthead d-flex">
                        <div class="container text-center my-auto">
                            <h1 class="mb-1">Bloggosfera</h1>
                            <h3 class="mb-5">
                                <em>A web app by Raquel Saavedra</em>
                            </h3>
                            <div className="iconos">
                            <FontAwesomeIcon icon={faGithub} />  github.com/raquelsaave <br/>
                            <FontAwesomeIcon icon={faLinkedin} />   in/raquel-saavedra 
                            </div>
                            <hr/>
                            <img src={logotipo} alt={"logo"} width={"100px"} />
                            
                        </div>
                        <div class="overlay"></div>
                    </header>
                </div>
            </div>

        </>
    )
}
export default Presentacion;
