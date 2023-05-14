// 格式化时间的包
function dataForm(datastr){
    const dt =new Date(datastr)
    const y =dt.getFullYear()
    const m =dt.getMonth()+1>9?dt.getMonth()+1:`0${dt.getMonth()+1}`
    const d =dt.getDate()>9?dt.getDate():`0${dt.getDate()}`
    return `${y}-${m}-${d}`
}
module.exports={
    dataForm
}