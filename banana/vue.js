const {createApp,ref}  = Vue;

var vueProfolio = createApp({
    data() {
        return{
            PortfolioImg:[
               /* {id:"1",imgSrc:"HW1.jpg",title:"基礎設計",description:"色彩調和"},
                {id:"2",imgSrc:"HW2.jpg",title:"攝影",description:"危險熊熊"},
                {id:"3",imgSrc:"HW3.jpg",title:"多媒體概論",description:"人臉文字"},
                {id:"4",imgSrc:"HW4.gif",title:"動畫",description:"冒險家小布丁"},
                {id:"5",imgSrc:"HW5.png",title:"遊戲小專題-街霸:血藍風暴",description:"雙人對戰、單機格鬥"},
                {id:"6",imgSrc:"HW6.png",title:"色彩學",description:"個人海報"},
                {id:"7",imgSrc:"HW7.jpg",title:"三維電腦繪圖",description:"Maya-Glock17建模"},  
                {id:"8",imgSrc:"HW8.jpg",title:"三維電腦繪圖",description:"Maya-場景建模"},   
                {id:"9",imgSrc:"HW9.jpg",title:"三維電腦繪圖",description:"Maya-檯燈建模"} */            
            ],
            PortfolioYT:[
                {id:"1",youtube:"https://www.youtube.com/embed/GikJHwruOWM?si=uD5WXxC7lI0QEF1A",title:"媒體設計基礎",description:"光柵動畫:青蛙吃蟲"},
                {id:"2",youtube:"https://www.youtube.com/embed/CtNxAPbndVo?si=M8g2ioW3QgsNQR3w",title:"媒體設計基礎",description:"手翻書:火柴忍者"},
                {id:"3",youtube:"https://www.youtube.com/embed/xmm0PxbWydU?si=RD-Xk0hcb_mNo0mI",title:"色彩學",description:"像素自畫像"}
            ]
        }
    }
}).mount("#portfolio")


var vueEntertainment = createApp({
    data() {
        return{
            Entertainment:[
                {id:"1",youtube:"https://www.youtube.com/embed/w1EdA1FPbt0?si=j8iZ2V2X5aQXi0em",title:"【Apex Legends】",description:"第12賽季大師之旅"},
                {id:"2",youtube:"https://www.youtube.com/embed/Otzrn3CcXxM?si=Znv7wv-dlZrECFub",title:"【Apex Legends】",description:"13賽季精華#1"},
                {id:"3",youtube:"https://www.youtube.com/embed/PJRD_ikvCcQ?si=wlD8qh0GdLVlVVCn",title:"【Apex Legends】",description:"13賽季精華#2"},
                {id:"4",youtube:"https://www.youtube.com/embed/n0c0mq42vyA?si=9Nqp_xXiQAo70J0C",title:"【Apex Legends】",description:"14賽季精華#1"},
                {id:"5",youtube:"https://www.youtube.com/embed/7Me7ZeLhU_c?si=rKlk56FawVBbZhtJ",title:"【Apex Legends】",description:"14賽季精華#2"},
                {id:"6",youtube:"https://www.youtube.com/embed/trrzmqYkuHo?si=w1KpBiHNGLdCerYV",title:"【Apex Legends】",description:"15賽季精華"},
                {id:"7",youtube:"https://www.youtube.com/embed/w9R5taoQnwQ?si=KSTAkplxoI5CK1BC",title:"【Apex Legends】",description:"16賽季精華"},
                {id:"8",youtube:"https://www.youtube.com/embed/Cfbl0jx0o9g?si=LxKZIncRTvBdNEZr",title:"【Apex Legends】",description:"17賽季精華"},
                {id:"9",youtube:"https://www.youtube.com/embed/EmCG-vx2jrI?si=iylG-rIciqgmANj3",title:"【Apex Legends】",description:"18賽季精華"},
                {id:"10",youtube:"https://www.youtube.com/embed/7kMxHRKSlFI?si=tnIERy4X2DhMzThs",title:"【排球】",description:"大設盃-中科多媒VS亞洲數媒"},
                {id:"11",youtube:"https://www.youtube.com/embed/iu8LvWWj4hM?si=ED1LOgxnfhSlkhmB",title:"【排球】",description:"室內場-1"},
                {id:"12",youtube:"https://www.youtube.com/embed/Dtj5p-4MUlM?si=uDn4B4RLteBWRcSl",title:"【排球】",description:"室內場-2"}  
            ]
        }
    }
}).mount("#entertainment")

$.ajax({
    url:"/profolio",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.PortfolioImg = results;
    }
})