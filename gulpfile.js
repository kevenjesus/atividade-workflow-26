var gulp = require('gulp');
var del = require("del");
var htmlmin = require('gulp-html-minifier');
var sass = require('gulp-sass');
 
gulp.task("clean-html", function(){
	del("./dist/index.html");
})

gulp.task("clean-sass", function(){
	del("./dist/css/");
})

gulp.task('html-minify',['clean-html'], function() {
 	return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass-minify',['clean-sass'], function () {
 return gulp.src('./source/scss/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
});

gulp.task('html-background', function(){
	gulp.watch('./source/index.html',['html-minify']);
});

gulp.task('sass-background', function(){
	gulp.watch('./source/scss/*.scss',['sass-minify']);
});


