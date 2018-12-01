import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
import Dashboard from 'page/dashboard/index.jsx';
import Login from 'page/auth/login.jsx';
import Article from 'page/article/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component {
    render() {
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/article" component={Article}/>

                    <Route component={ErrorPage}></Route>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/auth/login" component={Login}/>
                    <Route path="/" render={props => LayoutRouter}/>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);