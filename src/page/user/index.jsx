import React from 'react';

import PageHeader from 'component/page-header/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import User from 'service/user.jsx';
import MUtil from 'util/mm.jsx';

const _user = new User();
const _mm = new MUtil();

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading: true
        }
    }

    componentDidMount() {
        this.loadUserList();
    }

    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res => {
            this.setState(res, () => {
                this.setState({
                    firstLoading: false
                })
            });
        }, errMsg => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadUserList();
        });
    }

    render() {
        let list = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            );
        });
        let listNull = (
            <tr>
                <td colSpan="5" className="text-center">{this.state.firstLoading ? "加载中..." : "没有数据!"}</td>
            </tr>
        );

        let tableData = this.state.list.length > 0 ? list : listNull;

        return (
            <div id="page-wrapper">
                <PageHeader title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <div className="dataTables_wrapper form-inline"
                                         role="grid">
                                        <table
                                            className="table table-striped table-bordered table-hover dataTable no-footer">
                                            <thead>
                                            <tr role="row">
                                                <th>ID</th>
                                                <th>用户名</th>
                                                <th>邮箱</th>
                                                <th>电话</th>
                                                <th>注册时间</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {tableData}
                                            </tbody>
                                        </table>
                                        <Pagination current={this.state.pageNum} total={this.state.total}
                                                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
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

export default UserList;