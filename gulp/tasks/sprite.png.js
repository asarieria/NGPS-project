'use strict'

module.exports = () => {
	$.gulp.task('sprite:png', () => {
		var spriteData = $.gulp.src('./source/img/icons/*.png')
		.pipe($.gp.spritesmith({
			imgName: 'sprite.png',
			cssName: 'png-sprite.scss'
		}))

		// return spriteData.pipe($.gulp.dest($.config.root + '/assets/img/icons/'));
		return spriteData.pipe($.gulpIf('*.scss', $.gulp.dest('./tmp/icons'), $.gulp.dest($.config.root + '/assets/img/icons/')));
	});
}
