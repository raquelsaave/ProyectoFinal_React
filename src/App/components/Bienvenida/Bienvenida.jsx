import React from 'react';

const Bienvenida = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Welcome to Bloggosfera</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td> ¿What is it?</td>
                            <td> A blog service</td>
                        </tr>
                        <tr>
                            <td> Already have an account? </td>
                            <td> Log in!</td>
                        </tr>
                        <tr>
                            <td>Join us!</td>
                            <td>Register! </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Bienvenida;