import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import People from './People';

export default function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/equipment" component={People} />
            </Switch>
        </div>
    )

}