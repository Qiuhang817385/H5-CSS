//.substring(-1)会返回最后面的一个元素
//定义那些元素有动画
var screenAnimateEelments={
	'.screen-1':[
	'.screen-1_heading',
	'.screen-1_phone',
	'.screen-1_shadow'
	],
'.screen-2':[
'.screen-2_heading',
'.screen-2_phone',
'.screen-2_sub_heading',
'.screen-2_point_i_1',
'.screen-2_point_i_2',
'.screen-2_point_i_3'],
'.screen-3':[
	'.screen-3_heading',
	'.screen-3_phone',
	'.screen-3_sub_heading',
	'.screen-3_features'
	],
	'.screen-4':[
	'.screen-4_heading',
	'.screen-4_sub_heading',
//	'.screen-4_type',
	'.screen-4_type_item_i_1',
	'.screen-4_type_item_i_2',
	'.screen-4_type_item_i_3',
	'.screen-4_type_item_i_4'
	],
	'.screen-5':[
	'.screen-5_heading',
	'.screen-5_sub_heading',
	'.screen-5_bg'
	],

}


function setScreenAnimate(screenCls){
	var screen = document.querySelector(screenCls);//获取当前屏元素//screen-1 / 2 / 3 / 4
	var animateEelments = screenAnimateEelments[screenCls];//需要设置动画的元素
	
	var isSetAnimateClass = false;//是否有初始化子元素的样式
	
	var isAnimateDnoe = false; //默认情况没有切换到done状态,如果是false,那么就开始切换成done
	
	screen.onclick = function(){
		//初始化样式,增加init A A_init
		if(isSetAnimateClass === false){
			for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				element.setAttribute('class',baseCls+' '+animateEelments[i].substring(1)+'_animate_init');
				
			}
			
			isSetAnimateClass = true;
			console.log(isSetAnimateClass,isAnimateDnoe)
//			用完不需要这个函数了就return
		return ;
		}
		//切换所有,animateEelments的init ->done A A_done
		//第二步开始,跟点击的次数有关系,用isAnimateDnoe标识状态
		if(isAnimateDnoe === false){
			for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
			isAnimateDnoe = true;
			console.log(isSetAnimateClass,isAnimateDnoe)
			return ;
		}
		
		
		//切换所有,animateEelments的done ->init A A_init
		if(isAnimateDnoe === true){
			for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				
				element.setAttribute('class',baseCls.replace('_animate_done','_animate_init'));
			}
			//不是isSetAnimateClass为false
			isAnimateDnoe = false;
			console.log(isSetAnimateClass,isAnimateDnoe)
			return ;
		}
	}
	
	
}

//for(k in screenAnimateEelments){
//	setScreenAnimate(k)
//}
setScreenAnimate('.screen-1')
setScreenAnimate('.screen-2')
setScreenAnimate('.screen-3')
setScreenAnimate('.screen-4')
setScreenAnimate('.screen-5')