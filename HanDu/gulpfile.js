//导入模块
let gulp = require('gulp');
let jsmin = require('gulp-uglify');
let cssmin = require('gulp-cssnano');
let sass = require('gulp-sass');
let imgmin = require('gulp-imagemin');
let rename = require('gulp-rename');
let babel = require('gulp-babel');

//发布任务
//js
function fnJS() {
    return gulp.src('./src/js/*.js')
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
}
//css
function fnSass() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        // .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
}
//imges
function fnImg() {
    return gulp.src('./src/images/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/images'));
}
//复制页面
function fnCopyIndex() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
}
function fnCopyPages(){
    return gulp.src('./src/pages/*.html')
        .pipe(gulp.dest('./dist/'));
}
//监听任务
function fnWatch() {
    gulp.watch('./src/js/*.js', fnJS);
    gulp.watch('./src/sass/*.scss', fnSass);
    gulp.watch('./src/images/*', fnImg);
    gulp.watch('./src/*.html', fnCopyIndex);
    gulp.watch('./src/pages/*.html',fnCopyPages);
}

//导出任务
exports.js = fnJS;
exports.css = fnSass;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.copyPages = fnCopyPages;
exports.default = fnWatch;