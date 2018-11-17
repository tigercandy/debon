import React from 'react';
import {Link} from 'react-router-dom';

import MUtil from 'util/mm.jsx';
import Statistic from 'service/statistic.jsx';

import PageHeader from 'component/page-header/index.jsx';
import './index.scss';

const _mm = new MUtil();
const _statistic = new Statistic();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCount: '-',
            productCount: '-',
            orderCount: '-'
        }
    }

    componentDidMount() {
        this.loadCount();
    }

    loadCount() {
        _statistic.getHomeCount().then(res => {
            this.setState(res);
        }, errMsg => {
            _mm.errorTips(errMsg);
        })
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageHeader title="控制台"/>
                <div className="row">
                    <Link to="/user" className="col-md-4 col-sm-12 col-xs-12">
                        <div className="panel panel-primary text-center no-boder bg-color-green green">
                            <div className="panel-left pull-left green">
                                <i className="fa fa-user fa-5x"></i>

                            </div>
                            <div className="panel-right pull-right">
                                <h3>{this.state.userCount}</h3>
                                <strong> 用户总数</strong>
                            </div>
                        </div>
                    </Link>
                    <Link to="/product" className="col-md-4 col-sm-12 col-xs-12">
                        <div className="panel panel-primary text-center no-boder bg-color-blue blue">
                            <div className="panel-left pull-left blue">
                                <i className="fa fa-list fa-5x"></i>
                            </div>

                            <div className="panel-right pull-right">
                                <h3>{this.state.productCount} </h3>
                                <strong> 商品总数</strong>

                            </div>
                        </div>
                    </Link>
                    <Link to="/order" className="col-md-4 col-sm-12 col-xs-12">
                        <div className="panel panel-primary text-center no-boder bg-color-red red">
                            <div className="panel-left pull-left red">
                                <i className="fa fa-shopping-cart fa-5x"></i>

                            </div>
                            <div className="panel-right pull-right">
                                <h3>{this.state.orderCount} </h3>
                                <strong> 订单总数 </strong>

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;