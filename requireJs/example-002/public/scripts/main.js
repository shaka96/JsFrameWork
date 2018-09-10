//configuration
	requirejs.config({
		baseUrl:'/scripts'
	});
	//kickoff(
	requirejs(['data/quotes','quotes-view'], function(quoteData, quotesView){
		quotesView.addQuote('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
		quotesView.addQuote('Nunc non purus faucibus justo tristique porta.');
	})