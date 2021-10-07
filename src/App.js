import React, {Component} from 'react';
import {BrowseRouter, Switch, Route} from 'react-router-dom';
import MyTasksManager from './containers/MyTasksManager/MyTasksManager'

class App extends Component {
  render() {
    return (
      <BrowseRouter>
        <Switch>
          <Route component={MyTasksManager} />
        </Switch>
      </BrowseRouter>
    )
  };
}

export default App;