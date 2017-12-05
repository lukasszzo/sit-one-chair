
var gulp = require('gulp');
var functionSass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compilescss', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(functionSass({outputStyle:'expanded'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})
gulp.task('default', function(){
	gulp.start('compilescss');
	gulp.watch('scss/**/*.scss', ['compilescss']);
})
