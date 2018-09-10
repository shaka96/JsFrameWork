# RequireJS

### 应用模块&依赖
RequireJS的模块，通过以下三个要素定义：
1. 一个模块名；
2. 一个依赖列表（众多模块）；
3. 一个模块，其闭包内能将每个依赖模块的输出作为函数参数，创建模块代码，并可能返回其他模块可以使用的东西。

全局的define()方法调用后，模块 就被创建了，该方法接受3个参数，对应上述3点。
```
define( /*#1*/ 'm1', 
/* #2 */ ['d1','d2'],
/* # 3*/ 
function(d1, d2){
	var privateModuleVariable = " can't touch this";
	return {
		getPrivateModuleVariable: function(){
			return privateModuleVariable;
		}
	}	
})
```
> m1是被显式声明的。若未指定模块名称（只通过依赖关系&模块闭包作为唯一的参数进行定义），那么RequireJS将假定模块的名称就是包含该模块的脚本文件名（除去.js扩展名）。

配置npm  init 固定参数。
```
npm set init.author.email "aryan86_2014@163.com"
npm set init.author.name "aryan.chen"
npm set init.license "MIT"
```
---

[example-003](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-003/public)


### 路径&别名

声明一个模jQuery块依赖：
define(['jquery], function ($){
//...
});
别名(jquery)在RequireJS配置散列中的paths属性中指定，在paths属性下散列声明的。
```
requirejs.config({
	baseUrl: '/scripts',
	// other configuration
	paths: {
		'jquery': 'vender/jquery/jquery-2.1.3.min'
	}
});
```
> 别名jquery被指向vender/jquery/jquery-2.1.3.min，这个路径是相对baseUrl的。
在paths的对象中，别名是键，映射的脚本路径是值。

### 使用代理模块加载插件

自定义模块util/jquery-all 使用jquery-all作为别名。
所有的应用模块会通过声明jquery-all作为依赖而加载jquery。
/*	jquery-all 这个代理模块返回了jQuery对象本身，
	它允许模块依赖jquery-all访问jQuery加载自定义扩展。
	默认：jQuery会注册在全局对象window上——即便它可能被当作AMD模块来使用。
	全局jquery对象可以通过调用$.noConflict(true)被移除。
*/

##### PS: example-003, Running OK! 

---

[example-004](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-004/public)
### Shims  
不支持AMD模式的库使用Shims,需配置RequireJS的shim属性，或手动创建一个已兼容的模块。

创建shim时，以下几点必须被添加到RequireJS的配置中：
1. 必须在paths的属性下创建一个别名，以便让RequireJS知道该shim的模块在哪里。
2. shim配置入口必须添加到相应shim模块。

>shim下的每个key定义的是需要被添加垫片的模块别名，分配给这些key的对象指定了该垫片如何工作。
>RequireJS通过定义一个空的AMD模块，由普通脚本/一个三方库，返回一个global对象来创建一个shim。

undrln.js
	undrln创建了全局的window._对象，因此，在shim的配置中指定undrln导出的模块名叫  _。
最后生成的RequireJS的shim模块看起来像如下模块：
```
define({'undrln', [], function(){
	return window._;
});
```
