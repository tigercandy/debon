import axios from 'axios';
import {message} from 'antd';

class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            axios({
                method: param.type || null,
                url: param.url || '',
                data: param.data || ''
            }).then(function (response) {
                if (200 === response.data.code) {
                    typeof resolve === 'function' && resolve(response.data.data, response.data.msg);
                } else if (20000 <= response.data.code < 30000) {
                    typeof resolve === 'function' && reject(response.data.msg || response.data.data);
                    this.doLogin();
                } else {
                    typeof resolve === 'function' && reject(response.data.msg || response.data.data);
                }
            }).catch((error) => {
                setTimeout(() => {
                    this.doLogin();
                }, 1000);
            })
        })
    }

    setStorage(key, data) {
        let dataType = typeof data;
        if (dataType === 'object') {
            window.localStorage.setItem(key, JSON.stringify(data));
        } else if (['number', 'boolean', 'string'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(key, data);
        } else {
            // do nothing
        }
    }

    getStorage(key) {
        let data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }

        return '';
    }

    removeStorage(key) {
        window.localStorage.removeItem(key);
    }

    successTips(msg) {
        message.success(msg);
    }

    errorTips(err) {
        message.error(err);
    }

    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? result[2] : null;
    }

    doLogin() {
        window.location.href = '/auth/login/redirect=' + encodeURIComponent(window.location.pathname);
    }


}

export default MUtil;