const db = require('../db/index')
const bcrypt = require('bcryptjs')
module.exports = {
    // 登录
    loginUser: (req, res) => {
        let { username, password } = req.body
        //服务器再判断一次数据(其实要做更加具体的验证具体可在下载验证中间件@hapi/joi)
        if (!username || !password) { return res.send({ status: 201, msg: '用户名或密码不能为空' }) }
        //查询用户名是否存在
        const sql = 'select * from user where username=?'
        db.query(sql, username, (err, results) => {
            if (err) { return res.send({ status: 201, msg: err.message }) }
            if (results.length !== 1) return res.send({ status: 201, msg: '用户名不存在' })
            //判断密码是否一致
            const key = bcrypt.compareSync(password, results[0].password)
            if (!key) {return res.send({ status: 201, msg: '密码错误' })}
            req.session.data = {username:results[0].nickname,img:results[0].user_pic}
            req.session.islogin=true
            // console.log(req.session)
            res.send({ status: 200, msg: '登录成功' })

        })

    },
    //注册
    regUser: (req, res) => {
        let { username, uname: nickname, password } = req.body
        //服务器再判断一次数据
        if (!username || !password) {
            return res.send({ status: 201, msg: '用户名或密码不能为空' })
        }
        //定义是否被占用
        const sql = 'select * from user where username=?'
        db.query(sql, username, (err, results) => {
            if (err) { return res.send({ status: 201, msg: err.message }) }
            //判断是否被占用
            if (results.length > 0) { return res.send({ status: 201, msg: '用户名被占用' }) }
            //加密密码调用bcrypt.hashSybc()
            password = bcrypt.hashSync(password, 10)
            //定义插入优化设计sql
            let sql = 'insert into user (username,password,nickname) values (?,?,?)'
            db.query(sql, [username, password, nickname], (err, results) => {
                //判断sql是否执行成功
                if (err) { return res.send({ status: 201, msg: err.message }) }
                //判断影响行数是否为一
                if (results.affectedRows !== 1) { return res.send({ status: 201, msg: '注册失败稍后重试' }) }
                //注册成功后
                res.send({
                    status: 200,
                    msg: '注册成功',
                })
            })

        })

    },
    //判断用户是否登录
    judgeUser: (req, res) => {
        //判断用户是否登录
        // let {username,img} =req.session.data
        // console.log(islogin,username,img)
        // console.log(req.session)
        if (!req.session.islogin) {
            return res.send({ status: 201, msg: 'fail' })  //未登录
        }
        res.send({
            status: 200,
            msg: '已登录',
            data:req.session.data
        })
    },

}