import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/menu'
import routes from './routes'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import FooterCpn from './components/Footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <Menu></Menu>
          </div>
          <div className=".container-fluid">
              <div className="row">
                {this.showContentMenu(routes)}
              </div>
          </div>
          <div className=".container-fluid footer">
              <div className="row">
                <FooterCpn></FooterCpn>
              </div>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenu= (routes)=>{
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index)=>{
        return <Route
                  key={index}
                  path={route.path}
                  exact = {route.exact}
                  component = {route.main}
        >

        </Route>
      })
    }
  return <Switch>{result}</Switch>
  }

}

export default App;
