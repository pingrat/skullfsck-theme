(function () {
	'use strict';

	var EMPHASIZE = [
		'&', 'and', 'is', 'the', 'of'
	];

	$(function onReady () {

		var title = $('h1.blog-title a').text();
		title = title
			.split(' ')
			.map(function checkWord (w) {
				return (EMPHASIZE.indexOf(w) !== -1) ? '<b>' + w + '</b>' : w;
			})
			.join('');
		$('h1.blog-title a').html(title);
	});

})();
