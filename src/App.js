import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/home'
import Login from './containers/login'
import Register from './containers/register'

function App() {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
