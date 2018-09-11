//configuration，配置
	requirejs.config({
		baseUrl:'./scripts',
		paths: {
			//基本配置
//			'jquery': 'vender/jquery/jquery-2.1.3.min',
			'jquery': 'util/jquery-3.3.1',
			//自定义扩展
			'jquery-all': 'util/jquery-all',
//			'quotes-view': 'quotes-view',
			'quotes': 'data/quotes',
			'undrln': 'vendor/undrln',
			'ventage': 'vendor/ventage/ventage',
			'highlight': 'util/jquery.highlight',
			'Handlebars': 'vendor/handlebars/handlebars-v3.0.3'
		},
		shim: {
			//为undrln定义shim
			undrln: {
				exports: '_'
			}
		}
	});
	/* 被填充好的脚本应该只有两种类型的依赖：
		1.其他已填充垫片的脚本，可立即执行并可能在全局作用域内创建一/多个可重复使用的变量/命名空间。
		2.AMD模块，同样在全局作用域中创建了可重复使用的变量/命名空间（伴随着副作用）。
	由于AMD模块通常不跟全局作用域打交道，把这种模块作为已填充垫片脚本的依赖几乎是没用的，
	因为没办法让一个被shim的脚本访问一个AMD模块的API。
		PS：已填充垫片脚本只是普通脚本，一旦被引入DOM就会执行。
	*/
	//kickoff ，启动
	requirejs(['quotes','quotes-view'], function(quoteData, quotesView){
		quotesView.addQuote('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
		quotesView.addQuote('Nunc non purus faucibus justo tristique porta.');
	});