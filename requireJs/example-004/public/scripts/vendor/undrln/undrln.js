//undrln.js

(function(){
	var undrln = window._ = {};
	
	undrln.groupBy = function (collection, key){
		// ...
//		console.log('undrln, Ok!');
		var collect = {};
		collect[key] = collection;
		console.log('undrln:', collect);
		return collect;
	};
}());
