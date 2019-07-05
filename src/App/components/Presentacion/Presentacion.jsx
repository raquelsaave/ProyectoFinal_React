import React from 'react';
import logotipo from '../Header/Logo/blog.png'
import './Presentacion.css'

const Presentacion = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <div className="bienvenido">
                        <div className="imgbien">
                            <img src={logotipo} alt={"logo"} width={"100px"} />
                        </div>
                        <div className="contbien">
                        <h1 className="text-center"> Welcome to Bloggosfera!</h1>
                        <h3 className="text-center"> Made by: Raquel del Carmen Saavedra</h3>
                        <h4 className="text-center"> LinkedIn : www.linkedin.com/in/raquel-saavedra</h4>
                        <h5 className="text-center"> GitHub: https://github.com/raquelsaave </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Presentacion;