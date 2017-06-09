'use strict';

// Таск для спрайтов, с неизменяемыми свойствами css.
// CSS режим
module.exports = function() {
  $.gulp.task('sprite:svg', function() {
    return $.gulp.src('./source/img/sprite/static/*.svg')
      .pipe($.SVGSprite({
        mode: {
          css: {
            dest: '.',
            bust: false,
            sprite: 'sprite.svg',
            layout: 'vertical',
            selector: 'svg-%f',
            dimensions: true,
            symbols: true,
            render: {
              scss: true
            }
          }
        }
        }))
      .pipe($.gulpIf('*.scss', $.gulp.dest('./tmp/sprite'), $.gulp.dest($.config.root + '/assets/img/static/')));
  });
};