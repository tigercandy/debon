import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Auth {
    login(data) {
        return _mm.request({
            type: 'POST',
            url: '/api/auth/login',
            data: data
        });
    }

    logout(data) {
        return _mm.request({
            type: 'POST',
            url: '/api/auth/logout',
            data: data
        });
    }
}

export default Auth;