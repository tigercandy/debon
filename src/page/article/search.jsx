import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Button, Icon, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="debon-component-pages-list-table-list-tableListForm">
                    <Form layout="inline">
                        <div className="ant-row debon-component-search-row">
                            {/*<div className="ant-col-sm-24 ant-col-md-8 debon-component-search-input">
                        <FormItem label="文章ID">
                            <Input placeholder="请输入文章ID"/>
                        </FormItem>
                    </div>*/}
                            <div className="ant-col-sm-24 ant-col-md-8 debon-component-search-input">
                                <FormItem label="文章标题">
                                    <Input placeholder="请输入文章标题"/>
                                </FormItem>
                            </div>
                            <div className="ant-col-sm-24 ant-col-md-8 debon-component-search-input">
                                <FormItem label="分类">
                                    <Select>
                                        <Option value="">PHP</Option>
                                        <Option value="">Golang</Option>
                                    </Select>
                                </FormItem>
                            </div>
                            <div className="ant-col-sm-24 ant-col-md-8 debon-component-search-input">
                        <span className="debon-component-search-button">
                            <FormItem>
                                <Button type="primary" htmlType="button">查询</Button>
                                <Button className="debon-component-btn-reset" type="default"
                                        htmlType="button">重置</Button>
                                <Link className="debon-component-link-spread" to="/">
                                    展开 <Icon type="down"/>
                                </Link>
                            </FormItem>
                        </span>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="debon-component-pages-list-table-list-tableListOperator">
                    <Button htmlType="button" type="primary">
                        <Icon type="plus" /> 新建文章
                    </Button>
                </div>
            </div>
        );
    }
}

export default Search;