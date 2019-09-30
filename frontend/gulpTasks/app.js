const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
//const imagemin = require('gulp-imagemin')

gulp.task('app', ['app.html', 'app.fonts', 'app.css', 'app.js', 'app.imgs'])

gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
    return gulp.src('src/css/**/*.css')
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('build/css'))
})

gulp.task('app.js', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/js'))
})

gulp.task('app.fonts', () => {
    return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('build/webfonts'))
})

gulp.task('app.imgs', () => {
    return gulp.src('src/img/**/*.*')
//        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
})
