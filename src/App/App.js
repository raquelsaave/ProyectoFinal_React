// import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import './App.css';
import Home from './components/Home';
import List from './components/List';
import Header from './components/Header/Header';

import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Route component={Header} />
    <Route exact path="/" component={Home} />
    <Route path="/list" component={List} />
    </BrowserRouter>
  );
}

export default App;

// class App extends Component {
//   render() {
//     const App = () => (
//       <div>
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           {/* <Route path='/' component={Header}/> */}
//           <Route path='/list' component={List}/>
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
