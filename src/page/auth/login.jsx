import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import CommonUtil from 'util/common.jsx';
import Auth from 'service/auth.jsx';

import 'antd/dist/antd.min.css';
import './login.scss';

const FormItem = Form.Item;
const _cutil = new CommonUtil();
const _auth = new Auth();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '/'
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, loginInfo) => {
            if (!err) {
                _auth.login(loginInfo).then((res) => {
                    _cutil.setStorage('auth_info', res);
                    this.props.history.push(this.state.redirect);
                }, (errMsg) => {
                    _cutil.errorTips(errMsg);
                })
            } else {
                _cutil.errorTips(err);
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
                                {getFieldDecorator('email', {
                                    rules: [{
                                        type: 'email', 'message': '请输入正确的邮箱!'
                                    }, {
                                        required: true,
                                        message: '请输入邮箱!'
                                    }],
                                })(
                                    <Input name='email' prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                           placeholder="邮箱"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码!'}],
                                })(
                                    <Input name='password'
                                           prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
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