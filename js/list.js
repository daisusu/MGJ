
//........................................................................
//鼠标点击切换
	var node = document.getElementsByTagName('li');
	var boxs = document.querySelectorAll('.box');
	var arrImg = ['img/34.png','img/35.png','img/37.png','img/38.png','img/39.png'];
	for(var i = 0; i < node.length;i++){		
		node[i].index = i;
		node[i].onclick = function(){
			for(var j = 0; j < node.length; j++){
				node[j].style.color = 'white';
			}
			// this.style.color = '#533f3f';
			var imgIndex = this.index;
			for(var k = 0; k < boxs.length; k++){
				boxs[k].firstElementChild.src = arrImg[imgIndex];
			}
		}
	}


//.....................................................................
//页面滑动到一定高度 固定定位
var node = document.getElementById("node")
H = 0
Y = node
while (Y) {
	H += Y.offsetTop; Y = Y.offsetParent
}
window.onscroll = function(){
    var s = document.body.scrollTop || document.documentElement.scrollTop//(网页被卷去的高 获取滚动条位置)
    if(s>H) {
        node.style = "position:fixed;top:0;"
    }else{
    	node.style = 'position:static;'
    }
}
