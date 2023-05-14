let arr =['HTML与CSS','移动端布局及Bootstrap','javascript基础','Web API(含jq)','ES6面向对象编程','AJAX','Node','Vue']
let urls =['./htmlcss/HTML与CSS 56d77994829f48b9990e86c047c3d65f.html',
           './htmlcss/移动端布局及Bootstrap 52b2507f1b1e4f76a6772d61af1d6fbe.html',
          './htmlcss/404.html',
           './htmlcss/404.html',
           './htmlcss/404.html',
           './htmlcss/404.html',
           './htmlcss/404.html',
           './htmlcss/404.html'
          
]
var ass=document.querySelectorAll('.side a')
let ifom=document.querySelector('iframe')
// console.log(ass);
for(let i= 0;i<ass.length;i++){
    ass[i].innerHTML=arr[i]
    ass[i].onclick=function(){
          // 先清除所有再给点击的元素添加
          for(let i =0;i<ass.length;i++){
            ass[i].className=''
        }
        this.className='bg'
        // console.log(this);
        ifom.src=urls[i]
    }
}

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#c7d2dd"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#c7d2dd",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }
);

