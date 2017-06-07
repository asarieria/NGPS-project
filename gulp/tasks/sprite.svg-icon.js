'use strict';

module.exports = function() {
  $.gulp.task('sprite:svg-icon', function() {
    return $.gulp.src('./source/img/sprite/icon/*.svg')
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          run: ($) => {
            $('[fill]').removeAttr('fill');
            $('[style]').removeAttr('style');
          },
          parserOptions: {
            xmlMode: true
          }
        }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.svgIcons({
        mode: "symbols",
        preview: false,
        selector: "svgicon-%f",
        svg: {
          symbols: 'icon_sprite.html'
        }
        }))
      .pipe($.gulp.dest($.config.root + '/assets/img/sprite/'));
  });
};