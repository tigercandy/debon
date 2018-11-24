import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import 'antd/dist/antd.min.css';
import './login.scss';

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="ant-card debon-login-card">
                    <div className="ant-card-head">
                        <div className="ant-card-head-wrapper">
                            <div className="ant-card-head-title">
                                <span>欢迎登录</span>
                            </div>
                        </div>
                    </div>
                    <div className="ant-card-body">
                        <Form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{required: true, message: '请输入用户名或邮箱!'}],
                                })(
                                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="邮箱/用户名"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           type="password"
                                           placeholder="密码"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

Login = Form.create({})(Login);

export default Login;