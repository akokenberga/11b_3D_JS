function include(file) {
	let script = document.createElement('script');
	script.src = file;
	script.type = 'text/javascript';
	script.defer = true;

	document.getElementsByTagName('head').item(0).appendChild(script);
}

include("maps/map.js");
include("mapGenerator.js");
include("script.js");