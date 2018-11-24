import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, Form, Icon, Input, Button, Skeleton, Spin} from 'antd';

import Search from 'page/article/search.jsx';


import './index.scss';

const routes = [{
    path: 'index',
    breadcrumbName: '首页'
}, {
    path: 'first',
    breadcrumbName: '一级面包屑'
}, {
    path: 'second',
    breadcrumbName: '当前页面'
}];

function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}


class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="debon-component-page-header">
                    <Breadcrumb className="debon-component-breadcrumb" itemRender={itemRender} routes={routes}/>
                    <div className="debon-component-page-header-title">
                        <div className="debon-component-page-header-title-main">
                            <div className="debon-component-page-header-title-main-row">
                                <h1 className="debon-component-page-header-title-main-title">文章列表</h1>
                            </div>
                            <div className="debon-component-page-header-title-main-row"></div>
                        </div>
                    </div>
                </div>
                <div className="debon-component-page-content-main">
                    <div className="debon-component-wrapper-grid-content-main">
                        <div className="ant-card">
                            <div className="ant-card-body">
                                <div className="debon-component-pages-list-table-list-tableList">
                                    <Search/>
                                    <div className="debon-component-standard-table-index-standardTable">
                                        {/*<div className="debon-component-standard-table-index-tableAlert">
                                            <div data-show="true" className="ant-alert ant-alert-info">
                                                <Icon type="exclamation-circle" />
                                            </div>
                                        </div>*/}
                                        <div className="ant-table-wrapper">
                                            <Spin/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;