import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
    login(data) {
        return _mm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            dataType: 'json',
            data: data
        })
    }

    logout() {
        return _mm.request({
            type: 'POST',
            url: '/user/logout.do',
        });
    }

    validation(data) {
        let username = $.trim(data.username),
            password = $.trim(data.password);
        if (typeof data.username !== 'string' || data.username.length === 0) {
            return {
                status: false,
                msg: "用户名不能为空"
            }
        }
        if (typeof data.password !== 'string' || data.password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            }
        }

        return {
            status: true,
            msg: 'success'
        }
    }

    getUserList(pageNum) {
        return _mm.request({
            type: 'POST',
            url: '/manage/user/list.do',
            data: {
                pageNum: pageNum
            }
        });
    }
}

export default User;