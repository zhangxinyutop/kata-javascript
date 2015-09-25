(function () {
'use strict';

function identify() {
	/*jshint validthis:true */
    return this.name.toUpperCase();
}

function speak() {
	/*jshint validthis:true */
	var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Zhangxinyu"
};

var you = {
    name: "Reader"
};

identify.call(me);
speak.call(me);
speak.call(you);

}());


