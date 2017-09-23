// 页面滑动到一定高度 固定定位
var node = document.getElementById("node")
H = 0
Y = node//node到body最上方的距离 求出H
while (Y) {
	H += Y.offsetTop;//子元素距离父元素的距离
  // H加的是这个元素到整个body的距离 
  Y = Y.offsetParent//不停的去寻找父元素
}
window.onscroll = function(){
    var s = document.body.scrollTop || document.documentElement.scrollTop//(网页被卷去的高 获取滚动条位置)
    if(s>H) {
        node.style = "position:fixed;top:0;"
    }else{
    	node.style = 'position:static;'
    }
}


 //置顶 
var a = window.onscroll;
if(typeof a == 'function'){
  window.onscroll = function(){
    a.call(this);//调用一个对象的一个方法，以另一个对象替换当前对象。
     var st = document.documentElement.scrollTop || document.body.scrollTop;
    if (st > 200){
        document.getElementById("toTop").style.display = "block";
    } else{
         document.getElementById("toTop").style.display = "none";
    }
  }
}


//快捷导航
    var shadow = document.getElementById('shadow');
    var nav2 = document.getElementById('nav2');
    var test = document.getElementById('test');
    var back = document.getElementById('back');
     var word = document.getElementById('word');
     var none = document.getElementById('none');
    word.onclick = function(e){
        disOrNone(true);    
    }
    none.onclick = function(e){
        disOrNone(false);   
     }
    function disOrNone(a){
        if (a) {
          shadow.style.display = 'block';
          nav2.style.display = 'block';
          back.style.background = 'pink';
          word.style.display = 'none';
          none.style.display = 'block';
        }else{
          shadow.style.display = 'none';
          nav2.style.display = 'none';
          back.style.background = 'black';
          none.style.display = 'none';
          word.style.display = 'block';
        }
    }


 

// $(document).ready(function() {
//   $("#p1").click(function() {
//     $("html, body").animate({
//       scrollTop: $("#li1").offset().top 
//     }, {easing: "swing"});
//     return false;
//   });
//   $("#p2").click(function() {
//     $("html, body").animate({
//       scrollTop: $("#li2").offset().top }, {easing: "swing"});
//     return false;
//   });
//   $("#p3").click(function() {
//     $("html, body").animate({
//       scrollTop: $("#li3").offset().top }, {easing: "swing"});
//     return false;
//   });
// });