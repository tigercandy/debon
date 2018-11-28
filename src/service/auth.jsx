import CommonUtil from 'util/common.jsx';

const _cutil = new CommonUtil();

class Auth {
    login(data) {
        return _cutil.request({
            type: 'POST',
            url: '/auth',
            data: data
        });
    }
}