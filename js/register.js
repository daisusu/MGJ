//随机出现验证码
var yzm = document.getElementById('yzm');

	yzm.onclick = function(){
		var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g']
	var res = ''
		for(i = 1;i <= 4; i++){
				var index = parseInt(Math.random()*(arr.length-1));
				res += arr[index]
		}
		yzm.innerHTML = res
	 }



var inp = document.getElementById('inp');
var pwd = document.getElementById('pwd');
inp.onfocus = function(){
  inp.value = '';
  inp.style.color = 'black';
}
pwd.onfocus = function(){
  pwd.value = '';
  pwd.style.color = 'black';
}
var btn = document.getElementById('btn');
var pat = /^[a-zA-Z_]\w{5,18}$/;
var pat1 = /^[a-zA-Z]\w{5,18}$/;
btn.onclick = function(){
  if (pat.test(inp.value)) {
    if (pat1.test(pwd.value)) {
      self.location='index.html';
    } else{
      alert('验证码输入错误')
    }
  }else{
    alert('账户输入错误')
  }
  inp.onblur = function(){
    inp.value = '输入用户名/邮箱/手机';
    inp.style.color = '#efeded';
  }
  pwd.onblur = function(){
    pwd.value = '输入验证码';
    pwd.style.color = '#efeded';
  }  
}
