/* quotes-view.js */
//'quotes-view',
define( ['jquery-all'], function($){
	console.log('quotes-view.js ok')
	var $quotes = $('#quotes')
	return {
		render: function(groupedQuotes){
			for(var attribution in groupedQuotes){
				if(!groupedQuotes.hasOwnProperty(attribution)) continue;
				$quotes.addQuotes(attribution, groupedQuotes[attribution]);
			}
		},
		addQuote: function() {
			console.log('addQuote');
		}
	};
});
