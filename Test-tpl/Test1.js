var Base = require("base42");
var is = require("util42").is;

var Test1 = Base.extend({
	name: "Test1",
	instantiate: function(name, fn){
		this.name = name;
		this.fn = fn;
		
		this.init();
	},
	init: function(){
		console.group(this.name);
		this.fn();
		console.groupEnd();
	}
});