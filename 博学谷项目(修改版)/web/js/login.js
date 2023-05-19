
; (function () {
   //点击我的时发送ajax请求
    $('.mylogin').click(function () {
       
        $.ajax({
            type: "get",
            url: `${APIURL}/user`,
            success: function (res) {
                let {status,data}=res
                if(status!=200 ){
                    // alert('还未登录')
                }else{
                    // console.log(data)
                    let {username,img}=data
                let url= img !==null ? img:'./img/1.jpeg'
                    $('.nickmyname').text(username)
                    $('#userimg').prop('src',url)
                }
                
            }
        });
    })


    //表单验证
    $('.regForm').validate({
        sendForm: false,  //阻止默认行为
        description: {
            //写验证错信息
            username: {
                required: '用户名不能为空', //空格式的报错
                pattern: '格式错误请输入字母开头可包含数字的3到12位'     //正则类报错
            },
            uname: {
                required: '昵称不能为空', //空格式的报错
            },
            password: {
                required: '密码不能为空', //空格式的报错
                pattern: '格式错误请输入6-16位包含数字字母'     //正则类报错
            }
        },
        valid() {
            let username = $('#setname').val()
            let uname = $('#setuname').val()
            let password = $('#setpassword').val()
            // console.log(username,uname,password)
            $.ajax({
                type: "post",
                url: `${APIURL}/reg`,
                data: { username, uname, password },
                success: function (res) {
                    const { status,msg } = res
                    if (status !== 201) {
                        $('#setname').val('')
                        $('#setuname').val('')
                        $('#setpassword').val('')
                        $('.reg').hide()
                        $('.login').show()
                    }else{
                        alert(msg);
                    }

                }
            });

        },
        invalid() {

        }
    }

    )
//登录按钮使用
    $('.loginForm').validate({
        sendForm: false,  //阻止默认行为
        description: {
            //写验证错信息
            username: {
                required: '用户名不能为空', //空格式的报错
                pattern: '格式错误请输入字母开头可包含数字的3到12位'     //正则类报错
            },
          
            password: {
                required: '密码不能为空', //空格式的报错
                pattern: '格式错误请输入6-16位包含数字字母'     //正则类报错
            }
        },
        valid() {
            let username = $('#loginname').val()
            let password = $('#loginpassword').val()
            // console.log(username,uname,password)
            $.ajax({
                type: "post",
                url: `${APIURL}/login`,
                data: { username,  password },
                success: function (res) {
                    const { status,msg } = res
                    if (status !== 201) {
                        $('#loginname').val('')
                        $('#loginpassword').val('')
                        $('.reg').hide()
                        $('.login').hide()
                        $('.newbox').hide()
                        $('.mylogin').trigger('click') 
                       
                    }else{
                        alert(msg);
                    }

                }
            });

        },
        invalid() {

        }
    }

    )
})()

//点击还没有账号立即去注册
$('.toggle').click(function () {
    $('.login').hide()
    $('.reg').show()
})
$('.logout').click(function(){
    // console.log('退出登录');
    $.ajax({
        type: "get",
        url: `${APIURL}/user`,
        success: function (res) {
            let {status}=res
            if(status !==200 ){
              alert('你还未登录')
            }else{
                $.ajax({
                    type: "post",
                    url: `${APIURL}/logout`,
                    success: function (res) {
                        let {msg}=res
                        alert(msg)
                        // $('.mylogin').trigger('click') 
                        window.location.href=`${APIURL}/index.html`
                    }
                });
            }
           
            
        }
    });
    
})