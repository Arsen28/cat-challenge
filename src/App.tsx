import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Cats from './features/cats/Cats';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Cats} />
            <Route exact path="/:category" component={Cats} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
