var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("copy-index",function(){
	gulp.src("html/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\html"));
});

gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\css"));
});

gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\js"));
});

gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\img"));
});

gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\php"));
});

gulp.task("copy-fontzi",function(){
	gulp.src("fontzi/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\fontzi"));
});

gulp.task("copy-goodsAndShoppingCart",function(){
	gulp.src("goodsAndShoppingCart/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ECtwo\\goodsAndShoppingCart"))
});

gulp.task("build",["copy-index","copy-css","copy-js","copy-img","copy-php","copy-fontzi","copy-goodsAndShoppingCart"],function(){

});

gulp.task("watch",function(){
	gulp.watch("html/**/*",["copy-index"]);
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("fontzi/**/*",["copy-fontzi"]);
	gulp.watch("list.scss",["sass"]);
	gulp.watch("goodsAndShoppingCart/**/*",["copy-goodsAndShoppingCart"]);
});

gulp.task("sass",function(){
	gulp.src("list.scss")
	.pipe(sass())
	.pipe(gulp.dest("css"));
});