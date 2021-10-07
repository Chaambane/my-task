import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MyTasksManager from './containers/MyTasksManager/MyTasksManager';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" component={MyTasksManager} />
        </Switch>
      </BrowserRouter>
    )
  };
}

export default App;