// -------------------------------------------------------------
// 登陆页注册页跳转
	var menubtn=document.querySelectorAll('.login_box .head div');
	var option=document.querySelectorAll('.login_box .table');
	for (var i = 0; i < menubtn.length; i++) {
		menubtn[i].index=i;
		menubtn[i].addEventListener('touchstart',function(){
			for (var i = 0; i < menubtn.length; i++) {
				menubtn[i].classList.remove("active");
				option[i].style.display='none';
			};
			menubtn[this.index].classList.add('active');
			option[this.index].style.display='block';
		})
	};
// -------------------------------------------------------------
// ajax登陆验证
	var user=document.querySelector("#userl");
	var pwd=document.querySelector("#pwdl");
	var submit=document.querySelector('#submitl');
	var tishi=document.querySelector('#promptl');
	var flagu=false;
	var flagp=false;
	submit.addEventListener('touchstart',function(){
		var userv=user.value.trim();
		var passv=pwd.value.trim();
		var regu=/^\d{11}$/;
		var regp=/^\d{6}$/;
		// 检测账号密码是否为空
		if(regu.test(userv)){
			flagu=true;
		}else{
			flagu=false;
			setTimeout(function(){
				tishi.innerHTML='账号格式不正确'
				tishi.style.display="block";
			},500);
			setTimeout(function(){
				tishi.style.display="none";
			},3000);
			return;
		};
		// 检测密码是否为空
		if(regp.test(passv)){
			flagp=true;
		}else{
			flagp=false;
			setTimeout(function(){
				tishi.innerHTML='密码格式不正确'
				tishi.style.display="block";
			},500);
			setTimeout(function(){
				tishi.style.display="none";
			},3000);
			return;
		};
		if(flagu&&flagp){
			ajax({
				type:'get',
				url:'php/checklogin.php',
				asynch:true,
				dataType:"text",
				data:{name:userv,password:passv},
				success:function(data){
					if(data==1){
						// location.href="success.php";
						setTimeout(function(){
							tishi.innerHTML='登陆成功'
							tishi.style.display="block";
						},500);
						setTimeout(function(){
							tishi.style.display="none";
						},3000);
					}else if(data==2){
						setTimeout(function(){
							tishi.innerHTML='密码错误'
							tishi.style.display="block";
						},500);
						setTimeout(function(){
							tishi.style.display="none";
						},3000);
					}else if(data==3){
						setTimeout(function(){
							tishi.innerHTML='用户名不存在'
							tishi.style.display="block";
						},500);
						setTimeout(function(){
							tishi.style.display="none";
						},3000);
					}
				}
			})
		};
	})
// -------------------------------------------------------------
// ajax注册验证
	var userr=document.querySelector("#userr");
	var pwdr=document.querySelector("#pwdr");
	var textr=document.querySelector("#textr");
	var submitr=document.querySelector('#submitr');
	var tishir=document.querySelector('#promptr');
	var probox=document.querySelector('.prompt-box');
	var promptr=document.querySelector("#testr");
	var flagru=false;
	var flagrp=false;
	var flagrt=false;
	var regu=/^\d{11}$/;
	var regp=/^\d{6}$/;
	var regt=/^\d{4}$/;
	var userv="";
	var passv="";
	userr.addEventListener('blur',function(){
		userv=userr.value.trim();
		if(regu.test(userv)){
			ajax({
				type:"get",
				url:"php/check.php",
				asynch:true,
				data:{'aa':userv},
				dataType:"text",
				success:function(data){
					if(data=='true'){
							tishir.innerHTML="该手机号码可用";
							flagu=true;
						}else if(data=='false'){
							tishir.innerHTML="该手机号码已注册";
							flagu=false;
						}
				}
			})				
		}else{
			tishir.innerHTML="手机号码格式不正确";
			flagu=false;
		}
	});
	pwdr.addEventListener('blur',function(){
		pwdrv=pwdr.value.trim();
		if(regp.test(pwdrv)){
			tishir.innerHTML="密码格式正确";
			flagp=true;
		}else{
			tishir.innerHTML="密码格式不正确";
			flagp=false;
		}
	});
	probox.addEventListener('touchstart',function(){
		var num=Math.floor(1000+Math.random()*8999);
		promptr.value=num;
	});
	submitr.addEventListener('touchstart',function(){
		var userrv=userr.value.trim();
		var passrv=pwdr.value.trim();
		var promptrv=promptr.value.trim();
		if(regu.test(userrv)){
			flagu=true;
		}else{
			flagu=false;
			tishir.innerHTML='手机号码格式不正确';
			return;
		};
		if(regp.test(passrv)){
			flagp=true;
		}else{
			flagp=false;
			tishir.innerHTML='密码格式不正确';
			return;
		};
		if(regt.test(promptrv)){
			flagt=true;
		}else{
			flagt=false;
			tishir.innerHTML='请输入验证码';
			return;
		};
		if(flagp&&flagu&&flagt){
			ajax({
				type:"get",
				url:"php/insert.php",
				asynch:true,
				dataType:'text',
				data:{'user':userrv,'pass':passrv},
				success:function(data){
					if(data==1){
						// location.href="../table/success.php"
						tishir.innerHTML='注册成功';
					}else if(data==2){
						tishir.innerHTML='注册失败';
					}
				}
			})
		}
	})
// -------------------------------------------------------------