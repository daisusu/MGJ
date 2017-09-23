var inp1 = document.getElementById('inp1');
var inp2 = document.getElementById('inp2');
var inp3 = document.getElementById('inp3');
var h = document.getElementById('h');
var h2 = document.getElementById('h2');
var p1 = document.getElementById('p1');

inp2.onclick = function(){
	h2.innerHTML = h.innerHTML
	p1.innerHTML = "（1）"
}
inp3.onclick = function(){
	p1.innerHTML = "（1）"
	h2.innerHTML = h.innerHTML
}
