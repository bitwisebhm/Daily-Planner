import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import EntriesList from './components/Entry-list';
import EditEntry from './components/Edit-entry';
import CreateEntry from './components/Create-entry';
import CreateUser from './components/Create-user';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path='/' exact component={EntriesList} />
        <Route path='/edit/:id' component={EditEntry} />
        <Route path='/create' component={CreateEntry} />
        <Route path='/user' component={CreateUser} />
      </div>

    </Router>
  );
}

export default App;
