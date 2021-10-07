import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MyTasksManager from './containers/MyTasksManager/MyTasksManager';
import TasksCompleted from './components/TasksCompleted/TasksCompleted';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={MyTasksManager} />
          <Route component={TasksCompleted} />
        </Switch>
      </BrowserRouter>
    )
  };
}

export default App;