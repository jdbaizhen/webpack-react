import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import routes from './router/index.js'
import store from './redux/store.js'

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <Switch>
            {
                routes.map( (route, index) => {
                    return <Route exact path={route.path} key={index} component={route.component}/>
                })
            }
        </Switch>
    </HashRouter>
</Provider>
,
document.getElementById('root'));