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
		}
	});
	//kickoff ，启动
	requirejs(['quotes','quotes-view'], function(quoteData, quotesView){
		quotesView.addQuote('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
		quotesView.addQuote('Nunc non purus faucibus justo tristique porta.');
	});