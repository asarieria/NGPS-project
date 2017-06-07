'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
    // sass
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/blocks/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./tmp/**/*.scss', $.gulp.series('sass'));
    // pug
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/blocks/**/*.pug', $.gulp.series('pug'));
    // copy
    $.gulp.watch('./source/img/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/fonts/*.*', $.gulp.series('copy:fonts'));
    // sprite
    $.gulp.watch('./source/img/sprite/icon/*.*', $.gulp.series('sprite:svg-icon'));
    $.gulp.watch('./source/img/sprite/svg/*.*', $.gulp.series('sprite:svg'));
  });
};
