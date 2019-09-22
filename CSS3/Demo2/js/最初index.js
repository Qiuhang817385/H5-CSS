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
	//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
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


