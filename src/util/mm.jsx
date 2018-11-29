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
                } else {
                    typeof resolve === 'function' && reject(response.data.msg || response.data.data);
                }
            }).catch(function (error) {
                typeof reject === 'function' && reject(error.statusText);
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
}

export default MUtil;