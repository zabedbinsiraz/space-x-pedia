import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MissionList from './MissionList';
import NavBar from './Navbar';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
            </div>
            <Switch>
                <Route path="/" exact component={MissionList} />
            </Switch>
        </Router>
    );
}

export default App;
