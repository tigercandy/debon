import React from 'react';
import {Link} from 'react-router-dom';

import PageHeader from "component/page-header/index.jsx";
import Pagination from "util/pagination/index.jsx";
import TableList from 'util/table/list.jsx';
import ListSearch from 'page/product/index/list-search.jsx';

import MUtil from 'util/mm.jsx';
import Product from 'service/product.jsx';

import './index.scss';

const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            listType: 'list'
        }
    }

    componentDidMount() {
        this.loadProductList();
    }

    loadProductList() {
        let listParams = {};
        listParams.listType = this.state.listType;
        listParams.pageNum = this.state.pageNum;

        if (this.state.listType === 'search') {
            listParams.searchType = this.state.searchType;
            listParams.keyword = this.state.searchKeyword;
        }

        _product.getProductList(listParams).then(res => {
            this.setState(res);
        }, errMsg => {
            this.setState({
                list: []
            });
            _mm.errorTips(errMsg);
        });
    }

    onSearch(searchType, searchKeyword) {
        let listType = searchKeyword === '' ? 'list' : 'search';
        this.setState({
            listType: listType,
            pageNum: 1,
            searchType: searchType,
            searchKeyword: searchKeyword
        }, () => {
            this.loadProductList();
        });
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadProductList();
        });
    }

    onSetProductStatus(e, pid, curStatus) {
        let newStatus = curStatus == 1 ? 2 : 1,
            confirmTips = curStatus == 1 ? "确认要下架该商品吗？" : "确认要上架该商品吗？";
        if (window.confirm(confirmTips)) {
            _product.setProductStatus({
                productId: pid,
                status: newStatus
            }).then(res => {
                _mm.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _mm.errorTips(errMsg);
            });
        }
    }

    render() {
        let tableHeads = [
            {name: 'ID', width: '10%'},
            {name: '商品信息', width: '50%'},
            {name: '价格', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'},
        ];
        return (
            <div id="page-wrapper">
                <PageHeader title="商品列表"/>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <ListSearch onSearch={(searchType, searchKeyword) => {
                                this.onSearch(searchType, searchKeyword);
                            }}/>
                            <div className="col-md-6">
                                <Link to="/product/save" className="btn btn-success pull-right"><i className="fa fa-plus"></i> 添加</Link>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6"></div>
                <TableList tableHeaders={tableHeads}>
                    {
                        this.state.list.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name} | {product.subtitle}</td>
                                    <td>￥{product.price}</td>
                                    <td>
                                        {product.status == 1 ? <span className="label label-success">在售</span> :
                                            <span className="label label-default">已下架</span>}
                                    </td>
                                    <td>
                                        <div className="btn-group">
                                            <Link to={`/product/save/${product.id}`}
                                                  className="btn btn-xs btn-success"><i
                                                className="fa fa-edit"></i> 编辑</Link>
                                            <Link to={`/product/detail/${product.id}`}
                                                  className="btn btn-xs btn-info"><i
                                                className="fa fa-eye"></i> 查看</Link>
                                            {product.status == 1 ?
                                                <button onClick={(e) => {
                                                    this.onSetProductStatus(e, product.id, product.status)
                                                }} className="btn btn-xs btn-danger"><i className="fa fa-remove"></i> 下架
                                                </button> :
                                                <button onClick={(e) => {
                                                    this.onSetProductStatus(e, product.id, product.status)
                                                }} className="btn btn-xs btn-success"><i
                                                    className="glyphicon glyphicon-ok"></i> 上架</button>}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </TableList>
                <Pagination current={this.state.pageNum} total={this.state.total}
                            onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}

export default ProductList;