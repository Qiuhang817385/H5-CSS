//基本函数
//获取元素
var getElem =  function(sel){
    return document.querySelector(sel);
}
// 获取文档中 id="demo" 的元素：document.querySelector("#demo");
//获取所有元素
var getAllElement = function(){
    return document.querySelectorAll(sel);
}

//获取元素的样式
var getCls = function(element){
    // 获得a链接的 target 属性：
    // document.getElementsByTagName("a")[0].getAttribute("target");
    /* 
    定义和用法
    getAttribute() 方法返回指定属性名的属性值。
    如果您希望以 Attr 对象返回属性，请使用 getAttributeNode。
    */
   return element.getAttribute('class')
}
//设置元素样式
var setCls = function(element,cls){
    return element.setAttribute('class',cls);
}

//为元素添加样式
var addCls = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls)=== -1){
        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
        setCls(element,baseCls+' '+cls);
    }
}

//为元素删除样式
var delCls = function(element,cls){
    var baseCls = getCls(element);
    if(baseCls.indexOf(cls)!==-1){
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '))
    }
}







