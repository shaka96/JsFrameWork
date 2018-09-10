//requireConfig.js

requirejs.config({
	baseUrl: '/scripts',
	paths: {
		//基本配置
		'jquery': 'vender/jquery/jquery-2.1.3.min',
		//自定义扩展
		'jquery-all': 'util/jquery-all'
	}
});
