const db = require('../db/index')
module.exports = {
    //微课list数据演示
    listMicro: (req, res) => {
        // 查询数据库
        let sql = 'select * from list'
        db.query(sql, (err, results) => {
            if (err) return res.send({status:201,msg:err.message})
            //  console.log(results)
            res.send({
                status:200,
                msg:'获取视频信息数据成功',
                data:results
                
            })
        })
       
    },
    listTab: (req, res) => {
        let sql = 'select * from tab'
        db.query(sql, (err, results) => {
            if (err) return res.send({status:201,msg:err.message})
            //  console.log(results)
            res.send({
                status:200,
                msg:'获取tab数据成功',
                data:results
                
            })
        })
        
    },
    listTitle: (req, res) => {
        let sql = 'select * from title where sid=?'
        let{sid}=req.query
        db.query(sql,sid ,(err, results) => {
            if (err) return res.send({status:101,msg:err.message})
            //  console.log(results)
            res.send({
                status:200,
                msg:'获取tab数据成功',
                data:results
                
            })
        })
    }
}