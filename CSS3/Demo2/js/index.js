//基本函数
//获取元素
var getElem = function(selector){
	return	document.querySelector(selector);
	
}
//获取所有元素
var getAllElem = function(selector){
	return	document.querySelectorAll(selector);
	
}
//获取元素样式
var getCls = function(element){
	return element.getAttribute('class')
}
//设置元素样式
var setCls = function(element,cls){
	return element.setAttribute('class',cls)
}
//为元素添加样式
var addCls = function(element,cls){
	var baseCls = getCls(element);
	
	if(baseCls.indexOf(cls) === -1){//表明没有找到样式
		setCls(element,baseCls+' '+cls);
	}
}
//为元素删除样式
var delCls = function(element,cls){
	var baseCls = getCls(element);
	if(baseCls.indexOf(cls) != -1){//表明找到样式
		setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '));
	}
}
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

//第一步:初始化样式 init{}
//设置屏内元素为初始状态
var setScreenAnimateInit = function(screenCls){
	
		var screen = document.querySelector(screenCls);//获取当前屏元素//screen-1 / 2 / 3 / 4
		var animateEelments = screenAnimateEelments[screenCls];//需要设置动画的元素
		for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				element.setAttribute('class',baseCls+' '+animateEelments[i].substring(1)+'_animate_init');
			}
}
//设置播放屏内的元素动画
var playScreenAnimateDone = function(screenCls){
//			var screen = document.querySelector(screenCls);//获取当前屏元素//screen-1 / 2 / 3 / 4
			var animateEelments = screenAnimateEelments[screenCls];//需要设置动画的元素
//			console.log(animateEelments.length)
			//console.log(screenAnimateEelments[screenCls])
			for(var i = 0 ;i< animateEelments.length;i++){
				var element = document.querySelector(animateEelments[i]);
				var baseCls = element.getAttribute('class')//先拿出来默认的样式
				
				element.setAttribute('class',baseCls.replace('_animate_init','_animate_done'));
			}
}

window.onload = function(){
	
//	console.log('onload')
	for(k in screenAnimateEelments){
		setScreenAnimateInit(k);
		if(k === '.screen-1'){
			continue;
		}
	}
	
	
	    getAllElem('.header_nav-item')[0].onclick = function(){document.body.scrollTop = 800*0-20;}
	    getAllElem('.header_nav-item')[1].onclick = function(){document.body.scrollTop = 800*1+20;}		
	    getAllElem('.header_nav-item')[2].onclick = function(){document.body.scrollTop = 800*2+20;}	
	    getAllElem('.header_nav-item')[3].onclick = function(){document.body.scrollTop = 800*3+20;}	
	    getAllElem('.header_nav-item')[4].onclick = function(){document.body.scrollTop = 800*4+20;}	
	    
	    getAllElem('.outline-item')[0].onclick = function(){document.body.scrollTop = 800*0-20;}
	    getAllElem('.outline-item')[1].onclick = function(){document.body.scrollTop = 800*1+20;}		
	    getAllElem('.outline-item')[2].onclick = function(){document.body.scrollTop = 800*2+20;}	
	    getAllElem('.outline-item')[3].onclick = function(){document.body.scrollTop = 800*3+20;}	
	    getAllElem('.outline-item')[4].onclick = function(){document.body.scrollTop = 800*4+20;}	
}

 var navItems = getAllElem('.header_nav-item');
 var outLineItems = getAllElem('.outline-item');
 var switchNavItemsActive = function(idx){
 	for(var i = 0;i<navItems.length;i++){
 		delCls(navItems[i],'header_nav-item_status_active');
 	}
 	addCls(navItems[idx],'header_nav-item_status_active');
 	
 	
 	for(var i = 0;i<outLineItems.length;i++){
 		delCls(outLineItems[i],'outline_status_active');
 	}
 	addCls(outLineItems[idx],'outline_status_active');
 }

//var num = 	navItems.length-1;//5

//滚动到哪就播放到哪
window.onscroll = function(){
	var top = document.body.scrollTop;//滚动条的高度
//	var top  = document.body.scrollTop;
//	console.log(top);
//	导航条
	if(top>60){
//		_status_back
		addCls(getElem('.header'),'header_status_back');
		
	}else{
		delCls(getElem('.header'),'header_status_back');
		switchNavItemsActive(0)
	}
	if(top>80){
//		_status_back
		
		addCls(getElem('.outline'),'outline_status_in');
	}else{
		
		delCls(getElem('.outline'),'outline_status_in');
	}
	
	if(top > 1){
//		console.log(top);
		playScreenAnimateDone('.screen-1');
		switchNavItemsActive(0)
	}
	if(top>800*1 +15){
		playScreenAnimateDone('.screen-2');
			switchNavItemsActive(1)
	}
	if(top>800*2+15){
		playScreenAnimateDone('.screen-3');
			switchNavItemsActive(2)
	}
	if(top>800*3+15){
		playScreenAnimateDone('.screen-4');
			switchNavItemsActive(3)
	}
	if(top>800*4+15){
		playScreenAnimateDone('.screen-5');
			switchNavItemsActive(4)
	}
	
	
}

// getByClass('header__nav-item_i_1')[0].onclick=function () {
//  document.body.scrollTop = 0;
//}
//双向定位


/*var navItems = getAllElem('.header_nav-item');
var setNavJump = function(i){
	var item = navItems[i];
	item.onclick = function(){
	document.body.scrollTop = 1;
	console.log(document.body.scrollTop)
	document.body.scrollTop = 800*i;
	console.log(document.body.scrollTop)
	}
	console.log(document.body.scrollTop)
}
for (var i=0;i<navItems.length;i++) {
	  setNavJump(i);
}
*/
//滑动门特效
var tip = getElem('.header_nav-tip')
var setTip = function(idx,lib){
	lib[idx].onmouseover = function(){
		tip.style.left = (idx*111)+'px'
	}
	var activeIdx = 0;
	
	
	lib[idx].onmouseout = function(){
		for(var i=0;i<lib.length;i++){
			if(getCls(lib[i]).indexOf('header_nav-item_status_active') > -1){
//			if(getCls(this).indexOf('header_nav-item_status_active') > -1){
				activeIdx = i;	
				break;
			}
			
		}
		tip.style.left = (activeIdx*111)+'px';
	}
}
for(var i = 0;i<navItems.length;i++){
	setTip(i,navItems)
}

//初始刚load的时候,空白状态,没有初始化,延迟2S之后就设置延迟动画,
setTimeout(function(){
	playScreenAnimateDone('.screen-1')
},200)
