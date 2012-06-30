$(document).ready(function(){
	function selecting_exercise(){
		console.log($('div .module'));

		console.log($('#myList li:nth-child(3)'));
		console.log($('#myList li:eq(2)'));
		console.log($('#myList li')[2]);
		
		console.log($('label[for="q"]'));
		
		console.log($('*:hidden'));
		
		console.log($('img[alt]'));

		console.log($('#myList li:nth-child(odd)'));

		console.log($('tbody tr:nth-child(odd)'));		
	}

	function traversing_exercise(){
		$('img[alt]').each(function(){
			console.log(this.alt);
		});

		console.log($('input[name="q"]').parent().addClass('myclass'));

		console.log($('#myList[class="current"]').removeClass());

		console.log($('#myList li[class*="current"]').removeClass().next().addClass('current'));

		$('#specials select').parentsUntil('form').each(function(){
			console.log($(this).find('input[type="submit"]'));
		});

		$('#slideshow li:first').addClass('current').siblings().addClass('disabled');		
	}
	traversing_exercise();

});
