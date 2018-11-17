class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'GET',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if (10 === res.status) {
                        this.doLogin();
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                }, error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }

    /**
     * redirect to login page.
     */
    doLogin() {
        window.location.href = '/login/redirect=' + encodeURIComponent(window.location.pathname);
    }

    /**
     * @param name
     * @returns {any}
     */
    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? result[2] : null;
    }

    errorTips(msg) {
        alert(msg);
    }

    /**
     * set local storage.
     * @param key
     * @param data
     */
    setStorage(key, data) {
        let dataType = typeof data;
        if (dataType === 'object') {
            window.localStorage.setItem(key, JSON.stringify(data));
        } else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(key, data);
        } else {
            // do nothing
        }
    }

    /**
     * get local storage.
     * @param key
     * @returns {*}
     */
    getStorage(key) {
        let data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }

        return '';
    }

    /**
     * remove local storage.
     * @param key
     */
    removeStorage(key) {
        window.localStorage.removeItem(key);
    }
}

export default MUtil;