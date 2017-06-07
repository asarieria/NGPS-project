'use strict'

module.exports = () => {
	$.gulp.task('sprite:png', () => {
		var spriteData = $.gulp.src('./source/img/icons/*.png')
		.pipe($.gp.spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css'
		}));

		return spriteData.pipe($.gulp.dest('./source/img/sprite/'));
	});
}
