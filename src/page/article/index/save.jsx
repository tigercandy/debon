import React from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Select, Button, Checkbox, Breadcrumb, Icon, Switch} from 'antd';

import Editor from 'util/editor/index.jsx';
import FileUploader from 'util/upload/index.jsx';
import Article from 'service/article.jsx';
import MUtil from 'util/mm.jsx';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const {TextArea} = Input;

const _article = new Article();
const _mm = new MUtil();

import './index.scss';

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
            id: this.props.match.params.aid,
            checkedList: defaultCheckedList,
            indeterminate: true,
            checkAll: false,
            publish: 1,
            loading: false,
            // article
            title: "",
            category_id: 0,
            tag_id: 0,
            desc: ""
        }
    }

    onTagChange(checkedList) {
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

    onValueChange(e) {
        let name = e.target.name,
            value = e.target.value.trim();
        this.setState({
            [name]: value
        })
    }

    onSave(e) {
        let article = {
            title: this.state.title,
            category_id: this.state.category_id,
            tag_id: this.state.tag_id,
            desc: this.state.desc
        };
        if (this.state.id) {
            article.id = this.state.id
        }

        _article.saveArticle(article).then((res) => {
            _mm.successTips(res);
            this.props.history.push('/article/index');
        }, (errMsg) => {
            _mm.errorTips(errMsg);
        })
    }

    // editor
    onEditorValueChange(value) {
        this.setState({
            detail: value
        })
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 7}
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12}
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 17,
                },
            },
        };

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
                                        <FormItem {...formItemLayout} label="标题">
                                            <Input placeholder="文章标题" name="title"
                                                   onChange={(e) => this.onValueChange(e)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="分类">
                                            <Select name="category_id" showSearch placeholder="请选择分类" optionFilterProp="children"
                                                    filterOption={(input, open) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                    onChange={(e) => this.onValueChange(e)}>
                                                <Option value="1">后端</Option>
                                                <Option value="2">前端</Option>
                                            </Select>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="标签">
                                            <Checkbox indeterminate={this.state.indeterminate}
                                                      onChange={(e) => this.onCheckAllChange(e)}
                                                      checked={this.state.checkAll}>全选</Checkbox>
                                            <CheckboxGroup options={plainOptions}
                                                           value={this.state.checkedList}
                                                           onChange={(e) => this.onTagChange(e)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="简介">
                                            <TextArea rows="4" name="desc" onChange={(e) => this.onValueChange(e)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="封面">
                                            <FileUploader onChange={(e) => this.onValueChange(e)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="内容">
                                            <Editor onValueChange={(value) => this.onEditorValueChange(value)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="发布">
                                            <Switch checkedChildren={<Icon type="check"/>}
                                                    unCheckedChildren={<Icon type="close"/>} defaultChecked/>
                                        </FormItem>
                                        <FormItem {...tailFormItemLayout}>
                                            <Button type="primary" htmlType="button" onClick={(e) => {
                                                this.onSave(e)
                                            }}><Icon type="save"/>保存</Button>
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