
import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dnd from './components/Dnd';
import LoginForm from './components/LoginForm';
import CustomModal from './components/PopUp';

import RegistrationForm from './components/RegistrationForm';

const Home = () => <h1><Link to="/Register">Register here...</Link></h1>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Register" component={RegistrationForm} />
      <Route path="/login" component={LoginForm} />
      <Route path="/popup" component={CustomModal} />
      <Route path="/list" component={Dnd} />
    </Switch>
  </Router>
)

export default App;