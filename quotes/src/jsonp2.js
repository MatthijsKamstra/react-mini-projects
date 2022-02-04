function jsonp2(url) {
	var script = document.createElement('script');
	script.src = url;
	document.body.appendChild(script);
	script.onload = function (e) {
		// console.log(e);
		this.remove();
	};
};


export default jsonp2;