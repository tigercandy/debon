import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Auth {
    login(data) {
        return _mm.request({
            type: 'POST',
            url: '/api/auth',
            data: data
        });
    }
}

export default Auth;