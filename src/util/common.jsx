import axios from 'axios';
import {message} from 'antd';

class Common {
    request(param) {
        return new Promise((resolve, reject) => {
            axios({
                method: param.type || null,
                url: param.url || '',
                data: param.data || ''
            }).then(function (response) {
                if (200 === response.code) {
                    typeof resolve === 'function' && resolve(response.data, response.msg);
                } else {
                    typeof resolve === 'function' && reject(response.msg || response.data);
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
}