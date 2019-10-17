const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/axios/dist/axios.min.js',
        'node_modules/chart.js/dist/Chart.min.js'
    ])
        .pipe(gulp.dest('build/js'))
})

gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/chart.js/dist/Chart.min.css'
    ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/css'))
})