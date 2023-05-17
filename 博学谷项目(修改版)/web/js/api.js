//课程列表函数
function getMicro(){
    $.ajax({
       type: "get",
       url: "http://127.0.0.1:3307/list/micro",
       success: function (res) {
           //渲染微课
           const {data}=res
           let str=''
           data.forEach(item => {
            let{choose,uname,sum,price,imgsrc}=item
              str+=`
              <div>
              <a href="javascript:;">
                  <img src="${imgsrc}" alt="">
                  <h5>【${choose}】${uname}</h5>
                  <p><span>${sum}人学习</span><span>¥${price}</span></p>
              </a>
          </div>
              `
           });
           $('#addmicro').html(str)
       }
    });


}
getMicro()
