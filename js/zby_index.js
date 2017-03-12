// 导航开始
    var qubtn=document.querySelector('.zby_quxiao');
    var rest=document.querySelector('.zby_rest');
    var secrh=document.querySelector('.zby_st_box');
    var shou=document.querySelector('.header-shousuo ');
    console.log(qubtn);
    console.log(rest);
    console.log(secrh);
    console.log(shou);
    rest.addEventListener('touchstart',function () {
        secrh.style.opacity=0;
        secrh.style.transition='all .5s';
        secrh.style.zIndex=-1;
    });
    shou.addEventListener('touchstart',function () {
        secrh.style.opacity=1;
        secrh.style.transition='all .5s';
        secrh.style.zIndex=99999999999;
    });
    qubtn.addEventListener('touchstart',function () {
      secrh.style.opacity=0;
        secrh.style.transition='all .5s';
        secrh.style.zIndex=-1;
    });
    he();
    window.onresize=he;
    function he() {
        var winh=document.documentElement.clientHeight;
        var winw=document.documentElement.clientWidth;
        console.log(winh)
        // secrh.style.height=winh+'px';
        // secrh.style.width=winw+'px';
    }
// 导航结束
//底部选项卡开始
    var Btn=document.querySelectorAll('.BtnBox .BtnItems');
    console.log(Btn)
    var Dbox=document.querySelectorAll('.zby_Dbox');
    console.log(Dbox);
    var Title=document.querySelector('.header-fenlei a');
     var flag=true
    Dbox[0].style.display="block";
    // cc(Btn[0])
    var a=Btn[0].getElementsByTagName('a')
    // ---------------------------------------------------
    var swiperA= new Swiper('.swiper-container1',{
        observer:true,
        observeParents:true,
        pagination: '.swiper-p1',
        paginationClickable: true
    })
    var swiperB= new Swiper('.swiper-container2',{
        observer:true,
        observeParents:true,
        pagination: '.swiper-p2',
        paginationClickable: true
    })
    // ---------------------------------------------------
    Title.innerHTML=Btn[0].innerHTML
    for(var i=0;i<Btn.length;i++){
        Btn[i].index=i;
        Btn[i].addEventListener('touchstart',function(){
            for(var j=0;j<Btn.length;j++){
                Btn[j].classList.remove('zby-hot')
                Dbox[j].style.display="none";
            }
            this.classList.add('zby-hot')
            Dbox[this.index].style.display="block";
            Title.innerHTML=this.innerHTML
        })  
    }     
// 提示闪屏页
var tu=document.querySelector('#py-tu');
    var zhe=document.querySelector('.zhe');
    tu.addEventListener('touchstart',function(){
        tu.style.display='none';
        zhe.style.display="none";
    })
    var yuan=document.querySelector('#py-yuan');
    var erzhe=document.querySelector('.erzhe');
    console.log(erzhe)
    yuan.addEventListener('touchstart',function(){
        yuan.style.display='none';
        erzhe.style.display="none";
    })
    var Tbtn=document.querySelector('.header-fenlei')
    // var Sjiao=document.querySelector('.header-fenlei i')
    var ZbyT=document.querySelector('.zby_Title');
    var flag=true;
    Tbtn.addEventListener('touchstart',function(){
        if(flag){
            Tbtn.classList.add('zby_xunzhuan')
         ZbyT.classList.add('zby_ch')
         flag=false;
        }else{
            Tbtn.classList.remove('zby_xunzhuan')
         ZbyT.classList.remove('zby_ch')
         flag=true
        }
        // erzhe.style.display="none";
    })