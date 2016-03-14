var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths;

gulp.task('styles', function() {
    return gulp.src('styles.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest(''))
});

gulp.task('watch', function(){
    gulp.watch('*.scss', ['styles']);
});
