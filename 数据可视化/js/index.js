// 监控模块

; (function () {
  $('.monitor .tabs').on('click', 'a', function () {
    // console.log(this);
    $(this).addClass('active').siblings('a').removeClass('active')
    $(".monitor .content").eq($(this).index()).show().siblings('.content').hide();
  })
  // 实现无缝滚动
  $(".marquee-view .marquee").each(function () {
    let rows = $(this).children().clone()
    $(this).append(rows)
  })
})()
  //分布统计图
  ; (function () {
    let myCharts = echarts.init(document.querySelector('.pie'))
    let option = {

      tooltip: {
        //trigger触发方式,非轴图形使用item的意思就是触发提示
        trigger: 'item',
        //格式化提示内容  a表示series 图表名称name  b代表series(data)里面的name  c(data)代表数据里面的value
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff"
      ],

      series: [
        {
          //图表名称
          name: '点位统计',
          //图表类型
          type: 'pie',
          //小圆和大圆半径可以直接写大小不带单位写百分比根据容器盒子大小百分比来设置大小半分比必须加引号
          radius: ['12%', '80%'],
          //图表的中心位置
          center: ['50%', '50%'],
          //展示模式radius半径模式  area面积模式
          roseType: 'radius',
          itemStyle: {
            borderRadius: 5
          },
          //数据
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "四川" },
            { value: 42, name: "湖北" }
          ],
          //设置各种文字样式
          label: {
            fontSize: 10
          },
          //修饰线的长度
          labelLine: {
            length: 6,
            length2: 8
          }
        }
      ]
    };
    myCharts.setOption(option)
    //  浏览器缩放时，图标跟着缩放
    window.addEventListener('resize', function () {
      myCharts.resize()
    })
  })()
  //柱状统计图的用户模块
  ; (function () {
    let item = {
      name: '',
      value: 1200,
      itemStyle: {
        color: '#254065'
      },
      // 鼠标放上去不想高亮显示
      emphasis: {
        color: '254065'
      },
      // 经过柱子不显示提示框
      tooltip: {
        extraCssText: 'opacity: 0'
      }
    }
    let myCharts = echarts.init(document.querySelector('.bar'))
    let option = {
      color: new echarts.graphic.LinearGradient(
        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
        0,
        0,
        0,
        1,
        [
          { offset: 0, color: "#00fffb" }, // 0 起始颜色
          { offset: 1, color: "#0061ce" } // 1 结束颜色
        ]
      ),
      tooltip: {
        //设置鼠标经柱状图才出现信息
        trigger: 'item',

      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true, // 显示刻度
        // 是否显示直角坐标系网格(图表边框)
        show: true,
        //修改边框颜色
        borderColor: 'rgba(0, 240, 255, 0.3)'
      },
      xAxis: [
        {
          type: 'category',
          data: [
            "上海",
            "广州",
            "北京",
            "深圳",
            "合肥",
            "",
            "......",
            "",
            "杭州",
            "厦门",
            "济南",
            "成都",
            "重庆"
          ],
          axisTick: {
            // 刻度对齐方式
            alignWithLabel: false,
            // 刻度隐藏不显示刻度
            show: false
          },
          //设置的是刻度标签相关选项
          axisLable: {
            color: '#4c9bfd'
          },
          // x轴这条线的样式
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            alignWithLabel: false,
            // 刻度隐藏
            show: false
          },
          axisLable: {
            color: '#4c9bfd'
          },
          // y轴这条线的样式
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)'
            }
          },
          // y轴分割线的样式
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)'
            }
          }
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240]
        }
      ]
    };
    myCharts.setOption(option)
    //  浏览器缩放时，图标跟着缩放
    window.addEventListener('resize', function () {
      myCharts.resize()
    })
  })()
  ; (function () {
    let data = {
      year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ],
      quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
      ],
      month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
      ],
      week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
      ]
    }
    let myCharts = echarts.init(document.querySelector('.line'))
    let option = {
      color: ["#00f2f1", "#ed3f35"],
      tooltip: {
        //坐标轴触发
        trigger: 'axis'
      },
      legend: {
        right: '10%',
        textStyle: {
          color: '#4c9bfd'
        },
        // data: ['Email', 'Union Ads']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '30%',
        containLabel: true,
        // 显示边框
        show: true,
        borderColor: '#012f4a',
        containLabel: true
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        // 去除刻度
        axisTick: {
          show: false
        },
        // 标签颜色
        axisLable: {
          color: '#4c9bfd'
        },
        axisLine: {
          show: false
        },
        data: ["1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"]
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false
        },
        // 标签颜色
        axisLable: {
          color: '4c9bfd'
        },
        // 去除y轴分割线
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        }
      },
      series: [
        {
          name: '预期销售额',
          type: 'line',
          // stack: '总量',  //是否交叉使用
          // 线条圆滑显示
          smooth: true,
          data: data.year[0]
        },
        {
          name: '实际销售额',
          type: 'line',
          // stack: '总量',
          smooth: true,
          data: data.year[1]
        }
      ]
    };
    myCharts.setOption(option)
    //  浏览器缩放时，图标跟着缩放
    window.addEventListener('resize', function () {
      myCharts.resize()
    })
    //tab切换效果
    $('.caption').on('click', 'a', function () {
      index = $(this).index() - 1
      $(this).addClass('active').siblings('a').removeClass('active')
      let arr = data[this.dataset.type] //这个返回的是一个数组通过自定义属性拿到数据
      // console.log(arr);
      option.series[0].data = arr[0]
      option.series[1].data = arr[1]
      // 重新渲染
      myCharts.setOption(option)
    })
    //定时器自动切换
    let as = $('.caption a')
    // console.log(as);
    let index = 0;
    let timer = setInterval(function () {
      index++;
      if (index >= 4) index = 0
      as.eq(index).click()

    }, 1000)
    //  鼠标经过停止定时器
    $('.sales').hover(function () {
      clearInterval(timer)
    }, function () {
      //鼠标离开要开启定时器，但是要先清除定时器
      clearInterval(timer)
      timer = setInterval(function () {
        index++
        if (index >= 4) index = 0
        as.eq(index).click()

      }, 1000)
    })
  })()
  // 雷达图
  ;(function(){
    const myCharts = echarts.init(document.querySelector('.radar'))
    const option = {
      // backgroundColor: '#161627',
      tooltip:{
        show:true,
        position:['60%','10%'],
        confine:true
      },
      radar: {
        
        indicator: [
          { name: "机场", max: 100 },
          { name: "商场", max: 100 },
          { name: "火车站", max: 100 },
          { name: "汽车站", max: 100 },
          { name: "地铁", max: 100 }
        ],
        //修改雷达图大小
        radius:'60%',
        shape: 'circle',
        splitNumber: 4,  //分隔圆圈个数
        // 修改雷达图文字颜色
        axisName: {
          color: '#4c9bfd'
        },
        //分隔圆圈线条样式
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.5)'
          }
        },
        splitArea: {
          show: false
        },
        // 雷达图坐标轴线
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.5)'
          }
        }
      },
      series: [
        {
          name: '北京',
          type: 'radar',
          lineStyle: {
            // 填充区域 线条颜色
            normal: {
              color:'#fff',
              width: 1,
              opacity: 0.5
            }
          },
          data: [[90, 77, 56, 100, 54]],
          // 设置图形标记拐点
          symbol: 'circle',
          // 拐点大小
          symbolStyle:5,
          // 设置圆点颜色              
          itemStyle: {
            color: '#FFF'
          },
          // 圆点显示数据
          label: {
            show:true,
            color:'#fff',
            fontSize:10
          },
          // 修饰区域填充背景
          areaStyle: {
            color:'rgba(238,197,102)',
            opacity: 0.6
          }
        },
    
      ]
    };
      myCharts.setOption(option)
      window.addEventListener('resize',function () {
        myCharts.resize()
        })
  })()
   // 销售饼图
  ; (function () { 
    const myCharts = echarts.init(document.querySelector('.gauge'))
    const option = {
      series: [
          {
              
              type: 'pie',
              radius: ["130%", "150%"],  
              center: ["48%", "80%"],               
              labelLine: {
                normal:{
                  show: false
                }
                  
              },
              // 饼形图的起始角度 注意不是旋转角度
              startAngle:180,
              // 鼠标经过不放大便宜
              hoverOffset:0,
              data: [
                  {value: 100,
                    itemStyle: {
                      // 颜色渐变#00c9e0->#005fc1
                      color: new echarts.graphic.LinearGradient(
                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                        0,
                        0,
                        0,
                        1,
                        [
                          { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                          { offset: 1, color: "#005fc1" } // 1 结束颜色
                        ]
                      )
                    } },
                  {value: 100,
                  itemStyle: {
                    color:'#12274d'
                  } },
                  {value: 200 ,
                    itemStyle:{
                      color:'transparent'
                    }
                  },
                
              ]
          }
      ]
  };
  myCharts.setOption(option)

  window.addEventListener('resize',function () {
    myCharts.resize()
    })
   })()
   ;(function(){

    let hotData = [
      {
        city: "北京", // 城市
        sales: "25, 179", // 销售额
        flag: true, //  上升还是下降
        brands: [
          //  品牌种类数据
          { name: "可爱多", num: "9,086", flag: true },
          { name: "娃哈哈", num: "8,341", flag: true },
          { name: "喜之郎", num: "7,407", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "6,724", flag: false },
          { name: "好多鱼", num: "2,170", flag: true }
        ]
      },
      {
        city: "河北",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "3,457", flag: false },
          { name: "娃哈哈", num: "2,124", flag: true },
          { name: "喜之郎", num: "8,907", flag: false },
          { name: "八喜", num: "6,080", flag: true },
          { name: "小洋人", num: "1,724", flag: false },
          { name: "好多鱼", num: "1,170", flag: false }
        ]
      },
      {
        city: "上海",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "2,345", flag: true },
          { name: "娃哈哈", num: "7,109", flag: true },
          { name: "喜之郎", num: "3,701", flag: false },
          { name: "八喜", num: "6,080", flag: false },
          { name: "小洋人", num: "2,724", flag: false },
          { name: "好多鱼", num: "2,998", flag: true }
        ]
      },
      {
        city: "江苏",
        sales: "23,252",
        flag: false,
        brands: [
          { name: "可爱多", num: "2,156", flag: false },
          { name: "娃哈哈", num: "2,456", flag: true },
          { name: "喜之郎", num: "9,737", flag: true },
          { name: "八喜", num: "2,080", flag: true },
          { name: "小洋人", num: "8,724", flag: true },
          { name: "好多鱼", num: "1,770", flag: false }
        ]
      },
      {
        city: "山东",
        sales: "20,760",
        flag: true,
        brands: [
          { name: "可爱多", num: "9,567", flag: true },
          { name: "娃哈哈", num: "2,345", flag: false },
          { name: "喜之郎", num: "9,037", flag: false },
          { name: "八喜", num: "1,080", flag: true },
          { name: "小洋人", num: "4,724", flag: false },
          { name: "好多鱼", num: "9,999", flag: true }
        ]
      }
    ];
    //渲染热销模块
    let strhtml=''
    let index = 0;
     
    $.each(hotData,function (index,item) {
      strhtml+= `
      <li>
                <span>${item.city}</span>
                <span>${item.sales} <s class="${item.flag?'icon-up':'icon-down'}"></s></span>
              </li>
      `
      })
      $('.sup').html(strhtml)
           // 当今经过小li 高亮显示
           $('.province .sup').on('mouseenter','li',function () {
            index = $(this).index();
            render($(this));
        })
        function render(currentEle) {
          currentEle
            .addClass("active")
            .siblings()
            .removeClass();
        let subHTML = "";
          $.each(hotData[currentEle.index()].brands, function(index, item) {
            // 是对应城市的每一个品牌对象
            // console.log(item);
            subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
          ${item.flag ? "icon-up" : "icon-down"}
          ></s></span></li>`;
          });
          // 把生成的6个小li字符串给 sub dom盒子
          $(".sub").html(subHTML);
        }
          // 4. 默认把第一个小li处于鼠标经过状态
          let lis = $(".province .sup li");
          lis.eq(0).mouseenter();
         
          let timer = setInterval(function() {
            index++;
            if (index >= 5) index = 0;
            // lis.eq(index).mouseenter();
            render(lis.eq(index));
          }, 2000);

          $(".province .sup").hover(
            // 鼠标经过事件
            function() {
              clearInterval(timer);
            },
            // 鼠标离开事件
            function() {
              clearInterval(timer);
              timer = setInterval(function() {
                index++;
                if (index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                render(lis.eq(index));
              }, 2000);
            }
          );
   })()