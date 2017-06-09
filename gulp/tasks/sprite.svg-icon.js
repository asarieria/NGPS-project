'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg-icon', function() {
    return $.gulp.src('./source/img/sprite/dynamic/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.SVGSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            render: {
              scss: {
                dest:'dynamic_sprite.scss',
                template: "./tmp/templates/sprite_template.scss"
              }
            }
          }
        }
      }))
      .pipe($.gulpIf('*.scss', $.gulp.dest('./tmp/sprite'), $.gulp.dest($.config.root + '/assets/img/dynamic/')));
  });
};