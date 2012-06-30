$(document).ready(function(){
	console.log($('div .module'));

	console.log($('#myList li:nth-child(3)'));
	console.log($('#myList li:eq(2)'));
	console.log($('#myList li')[2]);
	
	console.log($('label[for="q"]'));
	
	console.log($('*:hidden'));
	
	console.log($('img[alt]'));

	console.log($('#myList li:nth-child(odd)'));

	console.log($('tbody tr:nth-child(odd)'));
});
