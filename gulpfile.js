var gulp = require('gulp');
var del = require("del");
var htmlmin = require('gulp-html-minifier');
var sass = require('gulp-sass');
const notify 	= require("gulp-notify");
 
gulp.task("clean-html", function(){
	del("./dist/index.html");
})

gulp.task("clean-sass", function(){
	del("./dist/css/");
})

gulp.task('html', function() {
 	return gulp.src('./source/index.html')
    //.pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {
	 return gulp.src('./source/style.scss')
 		.pipe(sass())
 		.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
   //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
});


gulp.task('html:watch', function(){
	gulp.watch('./source/index.html',['html']);

});

gulp.task("sass:watch", function(){
	gulp.watch("./source/scss/*.scss", ['sass']);
	gulp.watch("./source/style.scss", ['sass']);
});

gulp.task("default",['sass','html', 'sass:watch','html:watch']);




