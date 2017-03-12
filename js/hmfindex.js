var ts=document.querySelector(".shur");
var send=document.querySelector(".send");
var lis=document.querySelector(".hmf-pinl");
var texts=ts.value.trim();
 send.addEventListener("click",function () {

     ajax({
         type:"get",
         url:"php/text.php",
         data:{cc:texts},
         dataType:"text",
         success:function(data){
             if(data){
                 createTe({id:data});
             }else{
                 alert("输入错误");
                 return ;

             }
         }
     })
 })


function createTe(obj){
    var divs=document.createElement("div");
    divs.id=obj["id"];
    divs.innerHTML="<div class='hmf-kuai'>" +
        "<div class='hmt-top'>" +
        "<div class='hk-left'>" +
        "<a href='' class='hmf-yuan'>"+
        "<img src='image/hmf_03.png' alt='' height='100%' width='100%'>"+
        "</a>"+
        "</div>"+
        "<div class='hk-right'>"+
        "<h2>稀里糊涂</h2>"+
        "<p class='hf-con'>"+obj['texts']+"</p>"+
        "</div>"+
        "</div>"+
        "<div class='hmf-di' >"+
        "<a class='hmf-dilog'>"+
        "<img src='image/hmf_04_14.png' alt='' height='100%'>"+
        "</a>"+
        " <a class='hmf-dilog'>"+
        " <img src='image/hmf_04_11.png' alt='' height='100%'>"+
        " </a>"+
        " <a class='hmf-dilog'>"+
        " <img src='image/hmf_04_17.png' alt='' height='100%'>"+
        " </a>"+
        "</div>"+
        "</div>";

    lis.appendChild(divs);

};
//ajax
function ajax(option){
    if(!option.url){
        return ;
    }
    var type=option.type?option.type:"get";
    var flag=option.flag===undefined?true:option.flag;
    var dataType=option.dataType?option.dataType:"text";
    var data="";

    if(typeof(option.data)=="string"){

        data=option.data;
    }else if(typeof(option.data)=="object"){
        for(var i in option.data){

            data+=i+"="+option.data[i]+"&"
        }
        data=data.slice(0,-1)
    }


    var xml=window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP")
    if(type=="get"){
        xml.open("get",option.url+"?"+data,flag);
        xml.send(null);
    }else if(type=="post"){
        xml.open("post",option.url,flag);
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded")

        if(data){
            xml.send(data);
        }else{
            xml.send(null);
        }

    }

    xml.onreadystatechange=function(){
        if(xml.readyState==4){
            if(xml.status==200){
                if(dataType=="text"){
                    option.success(xml.responseText);
                }else if(dataType=="json"){
                    option.success(JSON.parse(xml.responseText));

                }else if(dataType=="XML"){
                    option.success(xml.responseXML);
                }

            }
        }
    }

}