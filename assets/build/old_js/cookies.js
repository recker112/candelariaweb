var politicCookie = readCookie("candelaria-cookie"); 
if (politicCookie == "S") {
	$('#cookies').prop("style", "display: none"); 
}else {
	$('#cookies').fadeIn(1000).css("display", "flex"); 
	$('#confirm_cookie').click(function(){
		document.cookie = "candelaria-cookie=S; max-age=31536000; path=/"; 
		$('#cookies').fadeOut(1000); 
	}); 
}