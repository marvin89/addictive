(function(){
	$(document).ready(function(){
		/* Resize Search Input */
		$('#search').focus(function(){
			$(this).animate({
				width: '100%'
			}, 200);
		}).blur(function(){
			$(this).animate({
				width: '4em'
			}, 200);
		});
	});
})();