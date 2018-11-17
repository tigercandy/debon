import React from 'react';
import User from 'service/user.jsx';
import MUtil from 'util/mm.jsx';

import './index.scss';

const _user = new User();
const _mm = new MUtil();

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    componentWillMount() {
        document.title = "登录 - DEBON";
    }

    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    onSubmit(e) {
        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            validate = _user.validation(loginInfo);
        if (validate.status) {
            _user.login(loginInfo).then((res) => {
                this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        } else {
            _mm.errorTips(validate.msg);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container login-container">
                    <div className="content">
                        <div className="form-signin">
                            <div className="account-page login">
                                {/*<label htmlFor="用户名">用户名</label>*/}
                                <input className="form-control"
                                       name="username"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       placeholder="用户名"
                                       type="text"
                                       onChange={e => this.onInputChange(e)}
                                />
                                {/*<label htmlFor="密码">密码</label>*/}
                                <input className="form-control"
                                       name="password"
                                       placeholder="密码"
                                       type="password"
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}
                                />
                                <button className="btn btn-success btn-block login-button" onClick={e => {
                                    this.onSubmit(e)
                                }}>登录
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;