import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            lastname: '',
            email:'',
            username:'',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('usertoken');
        console.log('Token de profile! :' + token);

        const decoded = jwt_decode(token)
        // const decoded = jwt_decode(token,{header:true})
        console.log('Decoded: '+ decoded)
        this.setState({
            name: decoded.name,
            lastname: decoded.lastname,
            email: decoded.email,
            username: decoded.username
        });
    }
    render () {
        return (
            <>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td> 
                                <td> {this.state.name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td> 
                                <td> {this.state.lastname}</td>
                            </tr>
                            <tr>
                                <td>Email</td> 
                                <td> {this.state.email}</td>
                            </tr>
                            <tr>
                                <td>UserName</td> 
                                <td> {this.state.username}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
             <div className="container">
             <div className="jumbotron mt-5">
                 <div className="col-sm-8 mx-auto">
                     <h1 className="text-center">POSTS</h1>
                 </div>
                 <table className="table col-md-6 mx-auto">
                     <tbody>
                         <tr>
                             <td>First Name</td> 
                             <td> {this.state.name}</td>
                         </tr>
                         <tr>
                             <td>Last Name</td> 
                             <td> {this.state.lastname}</td>
                         </tr>
                         <tr>
                             <td>Email</td> 
                             <td> {this.state.email}</td>
                         </tr>
                         <tr>
                             <td>UserName</td> 
                             <td> {this.state.username}</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
         </div>
         </>
        )
    }
}

export default Profile;