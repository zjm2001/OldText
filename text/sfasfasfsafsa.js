let obj = { name: '卡仕达时空来电', age: 25, sex: '男' }
const headers = {
  '姓名': 'username',
  '手机号': 'mobile',
  '入职日期': 'timeOfEntry',
  '聘用形式': 'formOfEmployment',
  '转正日期': 'correctionTime',
  '工号': 'workNumber',
  '部门': 'departmentName'
}
let aa =  [{
  "id": "604f764971f93f3ac8f365c2",
  "mobile": "13800000002",
  "username": "加油wwweee",
  "password": "3744cf5ba9e0570878e9f52c0f38a9a3",
  "enableState": "1",
  "timeOfEntry": "2023-06-26T16:00:00.000Z",
  "formOfEmployment": "1",
  "workNumber": "1111334",
  "correctionTime": "2023-06-14T16:00:00.000Z",
  "departmentName": "总裁部",
  "staffPhoto": "http://caizhugui-107-1319480026.cos.ap-guangzhou.myqcloud.com/OIP-C.jpg"
},
{
  "id": "604f764971f93f3ac8f365c2",
  "mobile": "13800000002",
  "username": "加油wwwe5464ee",
  "password": "3744cf5ba9e0570878e9f52c0f38a9a3",
  "enableState": "1",
  "timeOfEntry": "2023-06-26T16:00:00.000Z",
  "formOfEmployment": "1",
  "workNumber": "1111334",
  "correctionTime": "2023-06-14T16:00:00.000Z",
  "departmentName": "总裁部",
  "staffPhoto": "http://caizhugui-107-1319480026.cos.ap-guangzhou.myqcloud.com/OIP-C.jpg"
}]
// console.log(obj.name);
// console.log(obj['name']);
// console.log(aa['id']);
// console.log(aa.username);
aa.forEach(key=>{
  console.log(key);
  Object.keys(headers).forEach(item=>{
    console.log(headers[item]);
    //应为headers[item]为字符串这也写就是key.'mobile'所以会报错必须使用[]
    console.log(key.headers[item]);

   
  })
})

