//尝试创建一个可以执行简单动画的函数
/* 
参数:obj:要执行动画的对象
	attr:要执行动画的样式,比如left top width height
	target 目标位置
	speed	移动的速度
	callback
 */
function move(obj, attr, target, speed, callback) {
	clearInterval(obj, timer);
	var current = parseInt(getStyle(obj, attr));
	if (current > target) {
		speed = -speed;
	}
	obj.timer = setInterval(function() {
		var oldValue = parseInt(getStyle(obj, attr));
		var newValue = oldValue + speed;
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		if (newValue == target) {
			clearInterval(obj, timer);
			callback && callback();
		}
	},30)
}


