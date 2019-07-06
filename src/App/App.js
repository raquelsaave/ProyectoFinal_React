import React, { Component } from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import Bienvenida from './components/Bienvenida/Bienvenida'
import CreatePost from './components/CreatePost/CreatePost';
import MyPosts from './components/MyPosts/MyPosts';
import FullPost from './components/FullPost/FullPost'
import Explorar from './components/Explorar/Explorar'
import Presentacion from './components/Presentacion/Presentacion'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search';
import UpdatePost from './components/UpdatePost/UpdatePost'


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Presentacion} />
          <div className="container">
              <Route exact path="/bienvenida" component={Bienvenida} /> 
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/createpost" component={CreatePost} />
              <Route exact path="/myposts" component={MyPosts} />
              <Route exact path="/myposts/full" component={FullPost} />
              <Route exact path="/explore" component={Explorar} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/updatepost" component={UpdatePost} />
          </div>
          <Footer />
          </div>
      </Router>
    )
  }
}

export default App;

// class App extends Component {
//   render() {
//     const App = () => (
//       <div>
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           {/* <Route path='/' component={Header}/> */}
//           <Route path='/explore' component={List}/>
//         </Switch>
//       </div>
//     )
//     return (
//       <Switch>
//         <App/>
//       </Switch>
//     );
//   }
// }

// export default App;
