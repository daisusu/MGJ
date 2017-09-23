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
