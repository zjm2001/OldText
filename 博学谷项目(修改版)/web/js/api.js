
//课程列表函数
function getMicro() {
    $.ajax({
        type: "get",
        url: `${APIURL}/list/micro`,
        success: function (res) {
            //渲染微课
            const { data } = res
            let str = ''
            data.forEach(item => {
                let { choose, uname, sum, price, imgsrc } = item
                str += `
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
//获取tab函数
function getTab() {
    $.ajax({
        type: "get",
        url: `${APIURL}/list/tab`,
        success: function (res) {
            const { data } = res
            let str = ''
            data.forEach(item => {
                let { sid, tabname } = item
                str += `
                <a href="javascript:;" data-sid='${sid}'> ${tabname}</a>
                `
            })
            $('#tab').html(str)
            $('#tab a').eq(0).trigger('click')
        }
    });
}
//根据id来获取不同tab下的title
function getTitle(sid) {
    $.ajax({
        type: "get",
        url: `${APIURL}/list/title`,
        data:{sid:sid},
        success: function (res) {
            const { data } = res
            let str = ''
            data.forEach(item => {
                let {  title,titleid } = item
                str += `
                <a href="javascript:;" data-titleid='${titleid}'> ${title}</a>
                `
            })
            //先清空
            $('.improve').html(' ')
            $('.improve').append(`<div class="title"> 提高课</div>${str}`)
           
        }
    });
}
getMicro()
getTab()

