const m3=require('./files/m3')
console.log(m3);
const dt =new Date()
console.log(dt);
const time =m3.dataForm(dt)
console.log(time);
const moment=require('moment')
const time1=moment().format('YYYY-MM-DD HH:mm:ss'); 
console.log(time1);