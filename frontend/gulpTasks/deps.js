const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('deps', ['deps.js'])

gulp.task('deps.js', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
    ])
        .pipe(babel({ presets:['env'] })) 
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('build/js'))
})