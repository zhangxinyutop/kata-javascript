/*jshint          browser : true,  continue  :  true
  devel  : true,  indent  : 2,     maxerr    :  50
  newcap : true,  nomen   : true   plus      :  true
  regexp : true,  sloppy  : true   vars      :  false
  white  : true
*/
'use strict';

function identify() {
    return this.name.toUpperCase();
}

function speak() {
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

