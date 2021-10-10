import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MissionList from './MissionList';
import NavBar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
            </div>
            <Switch>
                <Route path="/" exact component={MissionList} />
                {/* <Route path="/about" exact component={About} /> */}
                {/* <Route path="/mission/:id" component={Mission} /> */}
            </Switch>
        </Router>
    );
}

export default App;
