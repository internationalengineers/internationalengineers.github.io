/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	window.onload = function(){
	document.querySelectorAll('.apply-button').forEach(function (element, i) {
		element.addEventListener('click', function (e) {
			e.preventDefault();
			console.log('called' + element.href);
			var newwindow = window.open(element.href, 'Apply', "height=500,width=700");
			if (window.focus) {newwindow.focus()}
			return false;
		})
	})
	  }
})(jQuery);
