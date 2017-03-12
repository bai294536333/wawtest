
var cw=document.documentElement.clientWidth;
var lysSzDel=document.querySelectorAll(".lys_sz_del");
var lysSzlist=document.querySelector(".lys_szlist");
var lysLis=document.querySelectorAll("li",lysSzlist);
var lysSzBox=document.querySelectorAll(".lys_sz_box");
console.log(lysSzBox)
var flagO=true;
var flagT=false;
var lw=0;
 var DelW=0;
// console.log(lw)
for (var i=0;i<lysSzBox.length;i++){
    lysSzBox[i].index=i;
    lysSzBox[i].addEventListener('touchstart',function(e){
        var yi=e.targetTouches[0];
    function resize(){
    lw=yi.clientX;
    DelW=lysSzDel[0].offsetWidth;

}
resize();
         var zou=0;
        lysSzBox[this.index].style.transition="";
        function move(e){

            var mi=e.targetTouches[0];
            var mw=mi.clientX;
            zou=mw-lw;
            // console.log(zou)
            if (zou>0) {
                 lysSzBox[this.index].style.transition="transform .5s";
                lysSzBox[this.index].style.transform="translate3d(0,0,0)";
                    
             }else if(zou<0){
                if (zou>-DelW) {
                     lysSzBox[this.index].style.transform="translate3d("+zou+"px,0,0)";
                 }else if (zou<=-DelW){
                    lysSzBox[this.index].style.transform="translate3d("+ -DelW+"px,0,0)";
                    
                 }  
             }
       }
        function end(e){
            var ci=e.changedTouches[0];
            var ttw=ci.clientX;
            var min=Math.abs(ttw-lw)
            if (zou>0) {
                return;
            }else if (zou<0) {
            if (min<40) {
                lysSzBox[this.index].style.transform="translate3d(0,0,0)";
            }else{
                lysSzBox[this.index].style.transform="translate3d("+ -DelW+"px,0,0)";
            }
            };
            lysSzBox[this.index].style.transition="transform .5s";
            lysSzBox[this.index].removeEventListener("touchmove",move)
            lysSzBox[this.index].removeEventListener("touchend",end)
             
        }
        lysSzBox[this.index].addEventListener("touchmove",move)
        lysSzBox[this.index].addEventListener("touchend",end)
        // console.log(flagT)
        
    })
    

}

