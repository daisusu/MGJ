
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
      alert('密码输入错误')
    }
  }else{
    alert('账户输入错误')
  }
  inp.onblur = function(){
    inp.value = '输入用户名/邮箱/手机';
    inp.style.color = '#efeded';
  }
  pwd.onblur = function(){
    pwd.value = '输入密码';
    pwd.style.color = '#efeded';
  }  
}
