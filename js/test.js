
// 倒计时
	var m = document.getElementById('m');
	var h = document.getElementById('h');
	var s = document.getElementById('s');
	function time(){
	var nowDate = new Date();
	var futDate = new Date('2017/11/01')
	var nms = nowDate.getTime()
	var fms = futDate.getTime()
	var ms = fms-nms;

	var ds = 24*3600*1000//一天的毫秒数
	var hs = 3600*1000;//一个小时的毫秒数
	var mins = 1000*60//一分钟的毫秒数

	var day = parseInt(ms/ds)
	var hours = parseInt(ms%ds/hs)
	var min = parseInt(ms%ds%hs/mins)
	var sec = parseInt(ms%ds%hs%mins/1000)
	h.innerHTML = text(hours);
	m.innerHTML = text(min);
	s.innerHTML = text(sec)
	}
	function text(num){
 		if(num<10){
 			return '0' + num
 		} else{
 			return num
 		}
 	}
	 setInterval(time,1000)




//轮播图
	window.onload = function(){ 
    var mylist=document.getElementById("mylist");  
    var num = document.getElementById("mylist").getElementsByTagName("li"); 
    var now=0;  
    var left=0;
    function hello(){  
        if (left<=-(num.length-1)*screen.width){  // 返回设备的(屏幕宽度)
            now=0;  
            left=-now*screen.width;
            mylist.style.left=left+"px";  
            now=now+1;  
        }else{  
            left=-now*screen.width;  
            mylist.style.left=left+"px";  
            now=now+1;  
        };     
    }
    var timer=setInterval(hello,2000); 
    //移动的位置  
    function toCover(now1){  
        now=now1;  
        left=-now*320;  
        mylist.style.left=left+"px";  
        clearInterval(timer);   
    }  
    var numli=document.getElementById("underNum").getElementsByTagName("li");  
    for (var i = 0; i <=numli.length - 1; i++) {  
        numli[i].index=i;  
        numli[i].onmouseover=function(){  
            //alert(this.index);  
            toCover(this.index);      
        };  
        numli[i].onmouseout=function(){  
            //alert(this.index);  
            timer=setInterval(hello,1000);  
        };  
    };  
}