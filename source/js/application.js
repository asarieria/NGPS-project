;( () => {

	svg4everybody({
		fallback: function (src, svg, use) {
		src: "./assets/img/sprite.svg"
		// svg: current SVG Element 
		// use: current USE Element 

		return 'fallback.png'; // ok, always return fallback.png
	}
	});

	
}) ();
