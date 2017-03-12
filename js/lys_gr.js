var lysTxmask=document.querySelector(".lys_txmask");
var lysTxlei=document.querySelector(".lys_txlei");
console.log(lysTxmask)
var lysTxul=document.querySelector('.lys_txul');
var lysTxlis=document.querySelectorAll('.lys_txlis',lysTxul);
var lysTxulHig=lysTxul.offsetHeight;
console.log(lysTxlis)
lysTxlei.addEventListener('touchstart',function(e){

    lysTxul.style.transition='transform 1s .2s'
    lysTxmask.style.transition='opacity .2s';
    lysTxmask.style.opacity=1;
    lysTxmask.style.zIndex=1;
    // lysTxmask.style.transition='display .2s';
    // lysTxmask.style.display="block";
    lysTxul.style.transform='translateY(0)'
})
lysTxlis[3].addEventListener('touchstart',function(e){
    lysTxul.style.transition='transform .5s'
    lysTxmask.style.transition='opacity .5s';
    lysTxmask.style.opacity=0;
    lysTxmask.style.zIndex=-1;
    // lysTxmask.style.transition='display .5s';
    // lysTxmask.style.display="none";
    lysTxul.style.transform='translateY(100%)'
})
lysTxmask.addEventListener('touchstart',function(e){
    lysTxul.style.transition='transform .5s'
    lysTxmask.style.transition='opacity .5s';
    lysTxmask.style.opacity=0;
    lysTxmask.style.zIndex=-1;
    // lysTxmask.style.transition='display .5s';
    // lysTxmask.style.display="none";
    lysTxul.style.transform='translateY(100%)'
})


//昵称正则
var lysNctext=$(".lys_nctext")[0];
var reg=/^[\u4e00-\u9fa5a-z0-9]{4,30}$/;
var lysNcbox=$('.lys_ncbox');
var userm=$('span',lysNcbox);
var lysNcchu=document.querySelector('.lys_ncchuss');
var lysMask=document.querySelector('.lys_mask');
var lysQx=document.querySelector('.lys_qx');
var lysQd=document.querySelector('.lys_qd');

var flagu=false;
lysNctext.onblur=function() {
    var usern=lysNctext.value.trim();
    var lysNctextval=lysNctext.value.trim();
    if (reg.test(lysNctextval)) {
        flagu = true;
    } else {
        flagu = false;
        userm.css({opacity : '1'})
        setTimeout(function () {
            userm.css({opacity : '0'})
        }, 2000)
        return;
    }
// ajax昵称验证
    if (flagu) {
        ajax({
        type:'get',
        url:'../php/lysNickname.php',
        asynch:true,
        data:{'nickname':lysNctextval},
        dataType:"text",
        success:function(data){
                    if(data==1){
                        lysMask.style.transition='transform 1s';
    lysMask.style.transform='translateX(100%)';
                    }else if(data==2){
                       self.location='../html/lys_gr.html'
                    }
                }
        })     
    }

}


//昵称显示

console.log(lysNcchu)
lysMask.style.transform='translateX(100%)';
lysNcchu.addEventListener('touchstart',function(e){
    lysMask.style.transition='transform 1s';
    lysMask.style.transform='translateX(0)';
},false)
lysQx.addEventListener('touchstart',function(e){
    lysMask.style.transition='transform 1s';
    lysMask.style.transform='translateX(100%)';
},false)





