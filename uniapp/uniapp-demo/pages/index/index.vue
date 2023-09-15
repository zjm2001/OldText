<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
    //页面加载执行
		onLoad() {
     console.log('index页面加载了');
     this.getapi()
		},
		methods: {
      //测试发送请求
      getapi(){
        console.log('发起请求');
        uni.request({
          url: 'https://applet-base-api-t.itheima.net/api/get',
              method:'GET',
              data:{
                name: 'zs',
                age: 22
              },
              success:(res)=>{
                console.log(res);   //成功后的回调函数
              },
          fail: err=>{
            console.log(err);
          }
        })
      }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
