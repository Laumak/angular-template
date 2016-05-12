var gulp = require('gulp');
    browserify = require('browserify');
    source = require('vinyl-source-stream');
    sass = require('gulp-sass');

var config = {
	sassPath: './resources/sass',
	bowerDir: './bower_components'
};

gulp.task('browserify', function() {
	return browserify('./app.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./build/js/'));
});

gulp.task('icons', function() {
	return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
		.pipe(gulp.dest('./build/fonts'));
});

gulp.task('fonts', function() {
	return gulp.src(config.bowerDir + '/bootstrap-sass/assets/fonts/**/*')
		.pipe(gulp.dest('./build/fonts'));
});

gulp.task('sass', function() {
	return gulp.src('./resources/sass/**/*.sass')
		.pipe(sass({
			includePaths: [
				config.bowerDir + '/bootstrap-sass/assets/stylesheets',
				config.bowerDir + '/font-awesome/scss'
			],
		}))
		.pipe(gulp.dest('./build/css/'));
});

gulp.task('watch:sass', function () {
	gulp.watch('./resources/sass/**/*.sass', ['sass']);
});
