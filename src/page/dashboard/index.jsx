import React from 'react';
import {Link} from 'react-router-dom';
import {Icon, Table, Skeleton} from 'antd';

import './dashboard.scss';

const dataSource = [{
    key: 1,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 2,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 3,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 4,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 5,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 6,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 7,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 8,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 9,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 10,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 11,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}, {
    key: 12,
    title: '掌握JavaScript：类和原型继承之间有什么区别？',
    created_at: "2018-11-24 11:23:17",
}];

const dynamicData = [{
    key: 1,
    content: "添加了文章"
}
];

const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'name',
}, {
    title: '创建时间',
    dataIndex: 'created_at',
    key: 'age',
}];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                <div className="ant-row debon-row">
                    <div
                        className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-dashboard-card debon-dashboard-card-user">
                        <div className="ant-card">
                            <div className="debon-dashboard-card-body">
                                <div className="debon-dashboard-card-body-main">
                                    <div className="debon-dashboard-card-body-top">
                                        <div className="debon-dashboard-card-body-title"></div>
                                        <div className="debon-dashboard-card-body-metaWrap">
                                            <div className="debon-dashboard-card-body-meta-title">
                                            <span>
                                                <span>用户数</span>
                                            </span>
                                            </div>
                                            <div className="debon-dashboard-card-body-meta-total">
                                                <span>126,560</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debon-dashboard-card-body-content">
                                        <div className="debon-dashboard-card-body-contentFixed">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-dashboard-card debon-dashboard-card-article">
                        <div className="ant-card">
                            <div className="debon-dashboard-card-body">
                                <div className="debon-dashboard-card-body-main">
                                    <div className="debon-dashboard-card-body-top">
                                        <div className="debon-dashboard-card-body-title"></div>
                                        <div className="debon-dashboard-card-body-metaWrap">
                                            <div className="debon-dashboard-card-body-meta-title">
                                            <span>
                                                <span>文章数</span>
                                            </span>
                                            </div>
                                            <div className="debon-dashboard-card-body-meta-total">
                                                <span>126,560</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debon-dashboard-card-body-content">
                                        <div className="debon-dashboard-card-body-contentFixed">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-dashboard-card debon-dashboard-card-category">
                        <div className="ant-card">
                            <div className="debon-dashboard-card-body">
                                <div className="debon-dashboard-card-body-main">
                                    <div className="debon-dashboard-card-body-top">
                                        <div className="debon-dashboard-card-body-title"></div>
                                        <div className="debon-dashboard-card-body-metaWrap">
                                            <div className="debon-dashboard-card-body-meta-title">
                                            <span>
                                                <span>分类数</span>
                                            </span>
                                            </div>
                                            <div className="debon-dashboard-card-body-meta-total">
                                                <span>126,560</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debon-dashboard-card-body-content">
                                        <div className="debon-dashboard-card-body-contentFixed">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 ant-col-xl-6 debon-dashboard-card debon-dashboard-card-tag">
                        <div className="ant-card">
                            <div className="debon-dashboard-card-body">
                                <div className="debon-dashboard-card-body-main">
                                    <div className="debon-dashboard-card-body-top">
                                        <div className="debon-dashboard-card-body-title"></div>
                                        <div className="debon-dashboard-card-body-metaWrap">
                                            <div className="debon-dashboard-card-body-meta-title">
                                            <span>
                                                <span>标签数</span>
                                            </span>
                                            </div>
                                            <div className="debon-dashboard-card-body-meta-total">
                                                <span>126,560</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="debon-dashboard-card-body-content">
                                        <div className="debon-dashboard-card-body-contentFixed">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ant-row debon-row">
                    <div
                        className="ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-12 debon-new-article-card">
                        <div className="ant-card">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div className="ant-card-head-title">
                                        <span>最新文章</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-card-body">
                                <Skeleton active loading={this.state.loading} title={false} paragraph={{rows: 5}}>
                                    <Table dataSource={dataSource} columns={columns} size="small"
                                           pagination={{pageSize: 5}}/>
                                </Skeleton>
                            </div>
                        </div>
                    </div>
                    <div
                        className="ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-24 ant-col-xl-12 debon-activity-card">
                        <div className="ant-card">
                            <div className="ant-card-head">
                                <div className="ant-card-head-wrapper">
                                    <div className="ant-card-head-title">
                                        <span>动态</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ant-card-body">
                                <div className="ant-list ant-list-lg ant-list-split">
                                    <div className="ant-spin-nested-loading">
                                        <div className="ant-spin-container">
                                            <Skeleton loading={this.state.loading} active paragraph={{rows: 5}}>
                                                <div className="debon-component-activity-card-list">
                                                    <div className="ant-list-item">
                                                        <div className="ant-list-item-meta">
                                                            <div className="ant-list-item-meta-avatar">
                                                                    <span
                                                                        className="ant-avatar ant-avatar-circle ant-avatar-image">
                                                                        <img
                                                                            src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                                                                    </span>
                                                            </div>
                                                            <div className="ant-list-item-meta-content">
                                                                <h4 className="ant-list-item-meta-title">
                                                                        <span>
                                                                            <Link to="/"
                                                                                  className="debon-component-dynamic-card-list-username"/>
                                                                            <span
                                                                                className="debon-component-dynamic-card-list-event">
                                                                                添加了文章 <Link
                                                                                to="">掌握JavaScript：类和原型继承之间有什么区别？</Link>
                                                                            </span>
                                                                        </span>
                                                                </h4>
                                                                <div className="ant-list-item-meta-description">
                                                                <span
                                                                    className="debon-component-dynamic-card-list-datetime">3天前</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-list-item">
                                                        <div className="ant-list-item-meta">
                                                            <div className="ant-list-item-meta-avatar">
                                                                    <span
                                                                        className="ant-avatar ant-avatar-circle ant-avatar-image">
                                                                        <img
                                                                            src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                                                                    </span>
                                                            </div>
                                                            <div className="ant-list-item-meta-content">
                                                                <h4 className="ant-list-item-meta-title">
                                                                        <span>
                                                                            <Link to="/"
                                                                                  className="debon-component-dynamic-card-list-username"/>
                                                                            <span
                                                                                className="debon-component-dynamic-card-list-event">
                                                                                添加了文章 <Link
                                                                                to="">掌握JavaScript：类和原型继承之间有什么区别？</Link>
                                                                            </span>
                                                                        </span>
                                                                </h4>
                                                                <div className="ant-list-item-meta-description">
                                                                <span
                                                                    className="debon-component-dynamic-card-list-datetime">3天前</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-list-item">
                                                        <div className="ant-list-item-meta">
                                                            <div className="ant-list-item-meta-avatar">
                                                                    <span
                                                                        className="ant-avatar ant-avatar-circle ant-avatar-image">
                                                                        <img
                                                                            src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                                                                    </span>
                                                            </div>
                                                            <div className="ant-list-item-meta-content">
                                                                <h4 className="ant-list-item-meta-title">
                                                                        <span>
                                                                            <Link to="/"
                                                                                  className="debon-component-dynamic-card-list-username"/>
                                                                            <span
                                                                                className="debon-component-dynamic-card-list-event">
                                                                                添加了文章 <Link
                                                                                to="">掌握JavaScript：类和原型继承之间有什么区别？</Link>
                                                                            </span>
                                                                        </span>
                                                                </h4>
                                                                <div className="ant-list-item-meta-description">
                                                                <span
                                                                    className="debon-component-dynamic-card-list-datetime">3天前</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ant-list-item">
                                                        <div className="ant-list-item-meta">
                                                            <div className="ant-list-item-meta-avatar">
                                                                    <span
                                                                        className="ant-avatar ant-avatar-circle ant-avatar-image">
                                                                        <img
                                                                            src="https://avatars1.githubusercontent.com/u/8286273?s=460&v=4"/>
                                                                    </span>
                                                            </div>
                                                            <div className="ant-list-item-meta-content">
                                                                <h4 className="ant-list-item-meta-title">
                                                                        <span>
                                                                            <Link to="/"
                                                                                  className="debon-component-dynamic-card-list-username"/>
                                                                            <span
                                                                                className="debon-component-dynamic-card-list-event">
                                                                                添加了文章 <Link
                                                                                to="">掌握JavaScript：类和原型继承之间有什么区别？</Link>
                                                                            </span>
                                                                        </span>
                                                                </h4>
                                                                <div className="ant-list-item-meta-description">
                                                                <span
                                                                    className="debon-component-dynamic-card-list-datetime">3天前</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Skeleton>
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

export default Dashboard;