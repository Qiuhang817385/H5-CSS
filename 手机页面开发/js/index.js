// 获取dom元素
let getElem = function (sel) {
    return document.querySelector(sel);
}
// 
let getAllElem = function (sel) {
    return document.querySelectorAll(sel);
}
// 获取元素样式

/* 
>let a = getElem('.outline');
>Undefined


>getCls(a)
>"outline"
*/


// 注意,传入的参数都是上面获取的dom元素
let getCls = function (ele) {
    return ele.getAttribute('class');
    // return ele.getAttribute('class');
}
//设置元素样式


let setCls = function (ele, cls) {
    return ele.setAttribute('class', cls);
}

//为元素添加样式

let addCls = function (ele, cls) {
    let baseCls = getCls(ele);
    if (baseCls.indexOf(cls) === -1) {
        setCls(ele, baseCls + ' ' + cls);
    }
}
//删除元素样式
let delCls = function (ele, cls) {
    let baseCls = getCls(ele);
    if (baseCls.indexOf(cls) !== -1) {
        setCls(ele, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
    }
}
let screenAnimateElements = {
    '.screen-1': [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2': [
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3',
        '.screen-2__subheading',
        '.screen-2__phone',
        '.screen-2__heading'
    ],
    '.screen-3': [
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features'
    ],
    '.screen-4': [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4',
    ],
    '.screen-5': [

        '.screen-5__heading',
        '.screen-5_bg',
        '.screen-5__subheading'
    ],

}



let setScreenAnimateInit = function (screenCls) {

    // let isSetAnimateClass = false;//是否有初始化子样式
    // let screen = document.querySelector(screenCls);
    let animateElements = screenAnimateElements[screenCls];
    // 获取每个元素,screen-1__heading,screen-1__phone
    // 为每个元素设置样式.
    for (let i = 0; i < animateElements.length; i++) {
        // 取出当前元素,每一个,第一个取screen-1__heading,第二个screen-1__phone,第三个screen-1__shadow
        let element = document.querySelector(animateElements[i]);
        let baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
    }


}

let setScreenAnimateDone = function (screenCls) {
    let animateElements = screenAnimateElements[screenCls];
    for (let i = 0; i < animateElements.length; i++) {
        // 取出当前元素,每一个,第一个取screen-1__heading,第二个screen-1__phone,第三个screen-1__shadow
        let element = document.querySelector(animateElements[i]);
        let baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
    }
}
// 页面载入之后,初始化样式
// init
window.onload = function () {

    //遍历screenAnimateElements,初始化样式
    for (const key in screenAnimateElements) {
        if (screenAnimateElements.hasOwnProperty(key)) {
            if(key==='.screen-1'){
                continue;
            }
            setScreenAnimateInit(key);
        }
    }
  
}
let navItems = getAllElem('.header__nav-item');
let outlineItem = getAllElem('.outline__item');
// 滚动条,在那一屏,哪高亮,提取出了三个参数,还不如多加几个for,像视频里面那样
let switchNavItemsActive = function(idx,obj,cls){
    for (let i = 0; i < obj.length; i++) {
        const element = obj[i];
        delCls(element,cls);
    }
    addCls(obj[idx],cls);
    // header__nav-item_status_active
    // outline__item_status_active
}

//滑动门
let navTip = getElem('.header__nav-tip');
// 滚动到哪就播放到哪
switchNavItemsActive(0,navItems,'header__nav-item_status_active');
window.onscroll = function () {
    
    let top = this.document.body.scrollTop + this.document.documentElement.scrollTop;
    if (top > 80) {
        addCls(getElem('.header'), 'header_status_black');
        addCls(getElem('.outline'), 'outline_status_in');

    } else {
        delCls(getElem('.header'), 'header_status_black');
        delCls(getElem('.outline'), 'outline_status_in');

        // header__nav-tip

        switchNavItemsActive(0,navItems,'header__nav-item_status_active');
        switchNavItemsActive(0,outlineItem,'outline__item_status_active');
    }
    // console.log(top);
    if (top > 1) {
        setScreenAnimateDone('.screen-1');
        switchNavItemsActive(0,navItems,'header__nav-item_status_active');
        switchNavItemsActive(0,outlineItem,'outline__item_status_active');
        // 完善工作
        navTip.style.left = (0*70)+'px';

    }
    
    if (top > 800 * 1 - 100) {
        setScreenAnimateDone('.screen-2');
        switchNavItemsActive(1,navItems,'header__nav-item_status_active');
        switchNavItemsActive(1,outlineItem,'outline__item_status_active');
        navTip.style.left = (1*70)+'px';
    }
    if (top > 800 * 2 - 100) {
        setScreenAnimateDone('.screen-3');
        switchNavItemsActive(2,navItems,'header__nav-item_status_active');
        switchNavItemsActive(2,outlineItem,'outline__item_status_active');
        navTip.style.left = (2*70)+'px';
    }
    if (top > 800 * 3 - 100) {
        setScreenAnimateDone('.screen-4');
        switchNavItemsActive(3,navItems,'header__nav-item_status_active');
        switchNavItemsActive(3,outlineItem,'outline__item_status_active');
        navTip.style.left = (3*70)+'px';
    }
    if (top > 800 * 4 - 100) {
        setScreenAnimateDone('.screen-5');
        switchNavItemsActive(4,navItems,'header__nav-item_status_active');
        switchNavItemsActive(4,outlineItem,'outline__item_status_active');
        navTip.style.left = (4*70)+'px';
    }
    
}

/* 给导航条加效果

1,滚动>80的时候设置成样式
在css里面设置
2.固定在顶部
也在css里面设置
*/

/*
导航条和大纲双向定位
双向定位

*/

let setNavJump = function(i,obj){
    let item = obj[i];
    item.onclick = function () {
        document.documentElement.scrollTop = 800 * i-80;
    }
}
// 提取重复性代码
for (let i = 0; i < navItems.length; i++) {
    setNavJump(i,navItems);
}
for (let i = 0; i < outlineItem.length; i++) {
    setNavJump(i,outlineItem);
}


// 滑动门特效


let setTip = function(idx,lib){
    lib[idx].onmouseover = function(){
        navTip.style.left = (idx*70)+'px';
    }
    let activeIdx = 0;
    lib[idx].onmouseout = function(){
        // 回到当前,激活状态的元素的位置
        for (let i = 0; i < lib.length; i++) {
            // if(getCls(this).indexOf('header__nav-item_status_active')){
            if(getCls(lib[i]).indexOf('header__nav-item_status_active')>-1){
                //如果当前是激活状态
                activeIdx = i;
                break;
            }
        }
        navTip.style.left = (activeIdx*70)+'px';
    }
}
for (let i = 0; i < navItems.length; i++) {
    setTip(i,navItems);
}
setTimeout(() => {
    
    setScreenAnimateDone('.screen-1');
}, 800);

