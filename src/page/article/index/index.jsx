import React from 'react';
import {Link} from 'react-router-dom';
import {Breadcrumb, Spin, Table, Tag, Divider} from 'antd';

import Search from 'page/article/index/search.jsx';


import './index.scss';

const Column = Table;

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

const dataSource = [{
    key: 1,
    id: 1,
    title: '文章名称一',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 2,
    id: 1,
    title: '文章名称二',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 3,
    id: 1,
    title: '文章名称三',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 4,
    id: 1,
    title: '文章名称四',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 5,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 6,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 7,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 8,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 9,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 10,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 11,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 12,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 13,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 14,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 15,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}, {
    key: 16,
    id: 1,
    title: '文章名称五',
    tags: ['PHP', '后端'],
    create_at: '2018-11-22 12:31:23'
}];

const columns = [];

function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }

    render() {
        return (
            <div className="debon-article-list-container">
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
                                        <div className="ant-table-wrapper">
                                            <Spin spinning={this.state.loading}>
                                                <Table dataSource={dataSource} pagination={{
                                                    pageSize: 10,
                                                    showQuickJumper: true
                                                }}>
                                                    <Column title="ID" dataIndex="id" key="id"/>
                                                    <Column title="标题" dataIndex="title" key="title"/>
                                                    <Column title="标签" dataIndex="tags" key="tags" render={tags => (
                                                        <span>
                                                            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                                                        </span>
                                                    )}/>
                                                    <Column title="创建时间" dataIndex="create_at" key="create_at"/>
                                                    <Column title="操作" key="action" render={(text, record) => (
                                                        <span>
                                                            <Link to="/">查看</Link>
                                                            <Divider type="vertical"/>
                                                            <Link to="/">编辑</Link>
                                                            <Divider type="vertical"/>
                                                            <Link to="/">删除</Link>
                                                        </span>
                                                    )}/>
                                                </Table>
                                            </Spin>
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