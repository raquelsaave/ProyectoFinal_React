import React from 'react';

const Bienvenida = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Bienvenido a Bloggosfera</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td> ¿Que es?</td>
                            <td> Servicio de blog</td>
                        </tr>
                        <tr>
                            <td>Inicia sesion!</td>
                            <td> dale click arriba</td>
                        </tr>
                        <tr>
                            <td>Registrate!</td>
                            <td>Dale click arriba </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Bienvenida;