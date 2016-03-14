var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    neat = require('node-neat').includePaths;

gulp.task('styles', function() {
    return gulp.src('styles.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(gulp.dest(''))
});

gulp.task('watch', function(){
    gulp.watch('*.scss', ['styles']);
});
