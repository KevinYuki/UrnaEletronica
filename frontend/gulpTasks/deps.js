const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
    ])
        .pipe(babel({ presets:['env'] })) 
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('build/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/css'))
})