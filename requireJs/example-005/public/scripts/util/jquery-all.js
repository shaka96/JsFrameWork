//jquery-all.js
define(['jquery'], function($){
	$.fn.addQuotes = function(attribution, quotes){
		 console.log('addQuotes')
		};
	return $;
	//或者：
//	return $.noConflict(true);
});

/*	jquery-all 这个代理模块返回了jQuery对象本身，
	它允许模块依赖jquery-all访问jQuery加载自定义扩展。
	默认：jQuery会注册在全局对象window上——即便它可能被当作AMD模块来使用。
	全局jquery对象可以通过调用$.noConflict(true)被移除。
*/