//quotes.js
define(['undrln' ], function(){
	console.log('quotes.js ok');
	return {
		groupByAttribution: function(){
			return _.groupBy(quoteData, 'attribution');
		},
		//...
	}
});
