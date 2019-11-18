let b = function(){
	// a();
	console.log(parseInt('70%'));
	
}
let div = document.getElementById('div1');
function getStyle(obj, name) {

	if(window.getComputedStyle) {
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj, null)[name];
	} else {
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}

}

console.log(
getStyle(div,'left')
// 具体值
);
b()