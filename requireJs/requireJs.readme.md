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

[example-005](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-005/public)
[undrln.js](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-005/public/scripts/vendor/undrln/undrln.js)
	undrln创建了全局的window._对象，因此，在shim的配置中指定undrln导出的模块名叫  _。
最后生成的RequireJS的shim模块看起来像如下模块：
```
define({'undrln', [], function(){
	return window._;
});
```
[jquery.highlight.js](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-005/public/scripts/util/jquery.highlight.js)

为何不把第二个highlight参数在jquery-all模块的闭包函数里声明？
1. 当RequireJS在模块间计算依赖时，会基于模块的层次模式创建一个内部的依赖树。
> （这样可确定最佳时间来加载任何特定模块，从叶子节点开始，向树干加载。
> 本例中‘树干’是jquery-all模块，最远的叶子节点是highlight所依赖的jquery模块。）
> RequireJS将按照以下顺序执行模块的闭包：jquery，highlight， jqurey-all。

2. highlight模块没有返回值，仅用于附加作用————为了在jQuery对象上添加一个插件。
> (没有参数传递给jquery-all模块，因为highlight没有返回值。
> 因此， 仅用于附加作用的依赖应该始终被放置在模块依赖列表的末尾。)

### 加载器插件
[example-006](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-006/public)
[handlebars](https://github.com/shaka96/JsFrameWork/tree/master/requireJs/example-006/public/scripts/handlebars-v4.0.12.js)
