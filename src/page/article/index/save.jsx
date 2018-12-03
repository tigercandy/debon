import React from 'react';
import {Link} from "react-router-dom";
import {Form, Input, Select, Button, Checkbox, Breadcrumb, Icon, Upload, Switch} from 'antd';

import Editor from 'util/editor/index.jsx';

const FormItem = Form.Item;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const {TextArea} = Input;

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

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
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
            publish: 1,
            loading: false,
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

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'cloud-upload'}/>
                <div className="ant-upload-text">上传图片</div>
            </div>
        );

        const imageUrl = this.state.imageUrl;

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
                                            <Input placeholder="文章标题"/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="分类">
                                            <Select showSearch placeholder="请选择分类" optionFilterProp="children"
                                                    filterOption={(input, open) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
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
                                                           onChange={(e) => this.onChange(e)}/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="简介">
                                            <TextArea rows="4"/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="封面">
                                            <Upload name="bg_img" listType="picture-card" className="avatar-uploader"
                                                    showUploadList={false} action="">
                                                {imageUrl ? <img src={imageUrl} alt="bg_img"/> : uploadButton}
                                            </Upload>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="内容">
                                            <Editor/>
                                        </FormItem>
                                        <FormItem {...formItemLayout} label="发布">
                                            <Switch checkedChildren={<Icon type="check"/>}
                                                    unCheckedChildren={<Icon type="close"/>} defaultChecked/>
                                        </FormItem>
                                        <FormItem {...tailFormItemLayout}>
                                            <Button type="primary" htmlType="button"><Icon type="save"/>保存</Button>
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