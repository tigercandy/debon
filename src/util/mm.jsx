class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'GET',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                    if (0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if (10 === res.status) {
                        this.doLogin();
                    } else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                }, error(err) {
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
}

export default MUtil;