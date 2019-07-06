import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import './Profile.css'

import desktopImage from './89428.jpg';
import mobileImage from './89428.jpg';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            lastname: '',
            email: '',
            username: '',
            errors: {}
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('usertoken');
        console.log('Token de profile! :' + token);
        const decoded = jwt_decode(token)
        // const decoded = jwt_decode(token,{header:true})
        console.log('Decoded: ' + decoded)
        this.setState({
            name: decoded.name,
            lastname: decoded.lastname,
            email: decoded.email,
            username: decoded.username
        });
    }

    render() {
        const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
        return (
            <>
                <div className="profilecontainer" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="contentprofilecontainer">
                        <div className="thecontainerofthecontainer">
                            <div class="container">
                                <div class="row m-y-2">
                                    <div class="col-lg-8 push-lg-4">
                                        <ul class="nav nav-tabs">
                                            <li class="nav-item">
                                                <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" data-target="#messages" data-toggle="tab" class="nav-link">Messages</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="" data-target="#edit" data-toggle="tab" class="nav-link">Edit</a>
                                            </li>
                                        </ul>
                                        <div class="tab-content p-b-3">
                                            <div class="tab-pane active" id="profile">
                                                <h4 class="m-y-2">User Profile</h4>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <h6>About</h6>
                                                        <p>

                                                        </p>
                                                        <h6>Hobbies</h6>
                                                        <p>

                                                        </p>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h6>Recent Tags</h6>
                                                        <a href="" class="tag tag-default tag-pill">html5</a>
                                                        <br />
                                                        <a href="" class="tag tag-default tag-pill">react</a>
                                                        <hr />
                                                        <span class="tag tag-primary"><i class="fa fa-user"></i> 900 Followers</span>
                                                        <span class="tag tag-danger"><i class="fa fa-eye"></i> 245 Views</span>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <h4 class="m-t-2"><span class="fa fa-clock-o ion-clock pull-xs-right"></span> Recent Activity</h4>
                                                        <table class="table table-hover table-striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <strong>User1</strong> commented on your post <strong>`Man must explore, and this is exploration at its greatest`</strong>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <strong>Gary</strong> deleted a comment on your post <strong>`Man must explore, and this is exploration at its greatest`</strong>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="tab-pane" id="messages">
                                                <h4 class="m-y-2">Recent Messages &amp; Notifications</h4>
                                                <div class="alert alert-info alert-dismissable">
                                                    <a class="panel-close close" data-dismiss="alert">×</a> This is an <strong>.alert</strong>. Use this to show important messages to the user.
                                            </div>
                                                <table class="table table-hover table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span class="pull-xs-right font-weight-bold">3 hrs ago</span> Hello, how are you..
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="pull-xs-right font-weight-bold">Yesterday</span> There has been a request on your account since that was..
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="pull-xs-right font-weight-bold">9/10</span> Porttitor vitae ultrices quis, dapibus id dolor. Morbi venenatis lacinia rhoncus.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span class="pull-xs-right font-weight-bold">9/4</span> Vestibulum tincidunt ullamcorper eros eget luctus.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="tab-pane" id="edit">
                                                <h4 class="m-y-2">Edit Profile</h4>
                                                <form role="form">
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="text" value={this.state.name} />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="text" value={this.state.lastname} />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="email" value={this.state.email} />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Time Zone</label>
                                                        <div class="col-lg-9">
                                                            <select id="user_time_zone" class="form-control" size="0">
                                                                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                                                <option value="Alaska">(GMT-09:00) Alaska</option>
                                                                <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                                                <option value="Arizona">(GMT-07:00) Arizona</option>
                                                                <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                                                <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                                                <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                                                <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Username</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="text" value={this.state.username} />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="password" value="11111122333" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                                        <div class="col-lg-9">
                                                            <input class="form-control" type="password" value="11111122333" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-lg-3 col-form-label form-control-label"></label>
                                                        <div class="col-lg-9">
                                                            <input type="reset" class="btn btn-secondary" value="Cancel" />
                                                            <input type="button" class="btn btn-primary" value="Save Changes" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 pull-lg-8 text-xs-center">
                                        <img src="https://www.ahorainformate.com/wp-content/uploads/2017/05/male-shadow-fill-circle-512.png" class="m-x-auto img-fluid img-circle" alt="avatar" />
                                        <h6 class="m-t-2">Upload a different photo</h6>
                                        <label class="custom-file">
                                            <input type="file" id="file" class="custom-file-input" />
                                            <span class="custom-file-control">Choose file</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </>
        )
    }
}

export default Profile;