import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ArticleList from 'page/article/index/index.jsx';
import ArticleSave from 'page/article/index/save.jsx';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/article/index" component={ArticleList}/>
                <Route path="/article/save/:article_id?" component={ArticleSave}/>

                <Redirect exact from="/article" to="article/index"/>
            </Switch>
        );
    }
}

export default Router;