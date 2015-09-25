/*jshint          browser : true,  continue  :  true
  devel  : true,  indent  : 2,     maxerr    :  50
  newcap : true,  nomen   : true   plus      :  true
  regexp : true,  sloppy  : true   vars      :  false
  white  : true
*/
'use strict';

var gulp    = require('gulp'),
	jshint  = require('gulp-jshint'),
	stylish = require('jshint-stylish');

var path = {
    scripts:'kata-this/*.js'
};

gulp.task('default', function () {
	gulp.src(path.scripts)
	    .pipe(jshint())
	    .pipe(jshint.reporter(stylish));
    console.log("this is default");
	console.log(path.scripts);
});
