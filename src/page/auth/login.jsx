import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import MUtil from 'util/mm.jsx';
import Auth from 'service/auth.jsx';

import 'antd/dist/antd.min.css';
import './login.scss';

const FormItem = Form.Item;
const _mm = new MUtil();
const _auth = new Auth();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, loginInfo) => {
            if (!err) {
                _auth.login(loginInfo).then((res) => {
                    _mm.setStorage('auth_info', res);
                    _mm.successTips("登录成功");
                    this.props.history.push(this.state.redirect);
                }, (errMsg) => {
                    _mm.errorTips(errMsg);
                })
            } else {
                _mm.errorTips(err);
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