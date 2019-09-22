//定义那些元素有动画
var screenAnimateEelments={'.screen-1':['.screen-1_heading','.screen-1_phone','.screen-1_shadow']}
function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls);//获取当前屏元素//screen-1 / 2 / 3 / 4
	var animateEelments = screenAnimateEelments[screenCls];//需要设置动画的元素
	
	var isSetAnimateClass = false;//是否有初始化子元素的样式
	
	
	screen.onclick = function(){
		//初始化样式,增加init A A_init
		if(isSetAnimateClass === false){
			for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				element.setAttribute('class',baseCls+' '+animateEelments[i]+'_animate_init');
			}
			
		}
		//切换所有,animateEelments的init ->done A A_done
		//切换所有,animateEelments的done ->init A A_init
	}
	
	
}
setScreenAnimate('.screen-1');
