/* 设置都有哪些元素有动画 */
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
/*
for(k in screenAnimateElements){
    setScreenAnimate(k);
}
  */

// 动画测试
// 点击当前屏幕的时候,来完成动画的切出换入效果
function setScreenAnimate(screenCls) {

    let screen = document.querySelector(screenCls);
    // 返回当前屏幕元素
    // screen-1就是当前屏
    // 需要设置动画的元素   


    let isSetAnimateClass = false;//是否有初始化子样式


    let animateElements = screenAnimateElements[screenCls];
    /* 
    [
        'screen-1__heading',
        'screen-1__phone',
        'screen-1__shadow'
    ]
     */
    // 点击守卫
    let isAnimateDone = false;
    // 点击一次切换一次
    screen.onclick = function () {
        // alert('aaa')
        // 初始化样式
        // 增加init
        if (isSetAnimateClass === false) {
            // alert('aaa')
            // 如果没有初始化
            for (let i = 0; i < animateElements.length; i++) {
                // 取出当前元素,每一个,第一个取screen-1__heading,第二个screen-1__phone,第三个screen-1__shadow
                let element = document.querySelector(animateElements[i]);
                let baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }
        // 切换所有animateElements的init->done
        if (isAnimateDone === false) {
            for (let i = 0; i < animateElements.length; i++) {
                // 取出当前元素,每一个,第一个取screen-1__heading,第二个screen-1__phone,第三个screen-1__shadow
                let element = document.querySelector(animateElements[i]);
                let baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            // 一定要return
            // 否则不会生效
            return;
        }
        if (isAnimateDone === true) {
            for (let i = 0; i < animateElements.length; i++) {
                // 取出当前元素,每一个,第一个取screen-1__heading,第二个screen-1__phone,第三个screen-1__shadow
                let element = document.querySelector(animateElements[i]);
                let baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;
        }
        // 切换所有animateElements的done->init
    }
}
for (const key in screenAnimateElements) {
    if (screenAnimateElements.hasOwnProperty(key)) {
        setScreenAnimate(key);
    }
}



