import React from 'react';
import {Form, Input, Select, Button, Checkbox, Breadcrumb, Radio} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

import './index.scss';
import {Link} from "react-router-dom";

const routes = [{
    path: '/',
    breadcrumbName: '首页'
}, {
    path: '/index',
    breadcrumbName: '文章列表'
}, {
    path: 'second',
    breadcrumbName: '新建文章'
}];

function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

const plainOptions = ['PHP', 'Golang', 'Java', 'C++', 'Python'];
const defaultCheckedList = [];

class Save extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
            publish: 1
        }
    }

    onChange(checkedList) {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length
        })
    }

    onCheckAllChange(e) {
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.value
        })
    }

    onPublishChange(e) {
        this.setState({
            publish: e.target.value
        })
    }

    render() {
        return (
            <div className="debon-article-list-container">
                <div className="debon-component-page-header">
                    <Breadcrumb className="debon-component-breadcrumb" itemRender={itemRender} routes={routes}/>
                    <div className="debon-component-page-header-title">
                        <div className="debon-component-page-header-title-main">
                            <div className="debon-component-page-header-title-main-row">
                                <h1 className="debon-component-page-header-title-main-title">新建文章</h1>
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
                                    <Form layout="horizontal">
                                        <FormItem label="标题">
                                            <Input placeholder="文章标题"/>
                                        </FormItem>
                                        <FormItem label="分类">
                                            <Select showSearch placeholder="请选择分类" optionFilterProp="children"
                                                    filterOption={(input, open) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                                <Option value="1">后端</Option>
                                                <Option value="2">前端</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem label="标签">
                                            <Checkbox indeterminate={this.state.indeterminate}
                                                      onChange={(e) => this.onCheckAllChange(e)}
                                                      checked={this.state.checkAll}>全选</Checkbox>
                                            <CheckboxGroup options={plainOptions}
                                                           value={this.state.checkedList}
                                                           onChange={(e) => this.onChange(e)}/>
                                        </FormItem>
                                        <FormItem label="发布">
                                            <RadioGroup onChange={(e) => this.onPublishChange(e)}
                                                        value={this.state.publish}>
                                                <Radio value={1}>是</Radio>
                                                <Radio value={0}>否</Radio>
                                            </RadioGroup>
                                        </FormItem>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Save;