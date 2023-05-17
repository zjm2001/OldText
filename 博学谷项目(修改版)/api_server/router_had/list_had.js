const db = require('../db/index')
module.exports = {
    //微课list数据演示
    listMicro: (req, res) => {
        // 查询数据库
        let sql = 'select * from list'
        db.query(sql, (err, results) => {
            if (err) return res.send({status:101,msg:err.message})
            //  console.log(results)
            res.send({
                status:200,
                msg:'获取列表数据成功',
                data:results
                
            })
        })
       
    },
    listTab: (req, res) => {
        res.send('分类界面tab获取成功')
    },
    listTitle: (req, res) => {
        res.send('不同id获取不同分类下的list数据')
    }
}