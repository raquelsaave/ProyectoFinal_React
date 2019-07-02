import React, { Component } from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
// import Home from './components/Home';
// import List from './components/List';
// import Header from './components/Header/Header';

// import React from 'react';

// function App() {
//   return (
//     <BrowserRouter>
//     <Route component={Header} />
//     <Route exact path="/" component={Home} />
//     <Route path="/explore" component={List} />
//     </BrowserRouter>
//   );
// }

// export default App;

import Header from './components/Header/Header';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Header/>
          {/* <Route exact path="/" component={Landing} /> */}
          <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
          </div>
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
