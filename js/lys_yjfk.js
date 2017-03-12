var text=document.querySelector(".lys_bjnei");
var numb=document.querySelector(".lys_txt");
var spans=document.querySelector(".lys_lin");
var attr=[];
var tmax=document.querySelector(".lys_tmax");
// function textCounter(field, countfield, maxlimit) {
// // 函数，3个参数，表单名字，表单域元素名，限制字符；
// if (field.value.length > maxlimit)
// //如果元素区字符数大于最大字符数，按照最大字符数截断；
// field.value = field.value.substring(0, maxlimit);
// else
// //在记数区文本框内显示剩余的字符数；
// countfield.innerHTML = maxlimit - field.value.length;
// }

// text.onkeydown=textCounter(text,spans, 200)
console.log(text.value.length)

text.oninput=function(){
	if (text.value.length >200){
	text.value = text.value.substring(0,200);
	tmax.innerHTML="亲字数已达到上限200呦"
	var t=setTimeout(function(){
		tmax.innerHTML=""
	},3000)
	
	}
	spans.innerHTML = text.value.length;
}
