const gulp = require('gulp'),
      fileinclude = require('gulp-file-include'),
      browserSync = require('browser-sync');

gulp.task('fileinclude', function() {
    return gulp.src('./src/pages/index.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task("watch", function(done) {
    browserSync.init({
        server:'.'
    })

    gulp.watch("./src/pages/*.html").on('change', gulp.series('fileinclude'));
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));