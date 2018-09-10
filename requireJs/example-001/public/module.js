define( /*#1*/ 'm1', /* #2 */ ['d1','d2'], /* # 3*/ 
function(d1, d2){
	var privateModuleVariable = " can't touch this";
	/* 若某个模块指定了m1为依赖，那么返回值（若有）可被该模块使用。
	 */
	return {
		getPrivateModuleVariable: function(){
			return privateModuleVariable;
		}
	}	
})