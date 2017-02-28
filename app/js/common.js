$(document).ready(function(){
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on")
		$(".main-nav").slideToggle()
	})

	$(".tab-list-item").click(function(){
		$(".tab-list-item").removeClass("active")
		$(this).addClass("active")
		var i = $(this).index() + 1
		//alert(i)
		$(".tabs-opis").fadeOut()
		setTimeout(function() {
			$(".tabs-opis.item-" + i).fadeIn()	
		}, 1000)
	})
})