$(document).ready(function(){
	//Esconder iconos del panel
	$(".titulo-panel").on("click", function(){
		var selector = $(this).data("selector");
		$("#panel-content"+selector).toggle(400);
		if ($(this).data("open") == ">"){
			$(this).animate({
				opacity: 1
			}, 200);
			$(this).find("span").toggleClass("icon-chevron-left");
			$(this).find("span").toggleClass("icon-chevron-right");
			$(this).data("open", "<");
		}else {
			$(this).animate({
				opacity: 0.7
			}, 200);
			$(this).find("span").toggleClass("icon-chevron-left");
			$(this).find("span").toggleClass("icon-chevron-right");
			$(this).data("open", ">");
		}
	});

	//Buscador
	$("#search_estudi").on("focusout", function() {
		$("#search_status").slideUp(400);
	});

	$("#search_estudi").on("focusin", function() {
		if ($(this).val() != "" && $(this).val() != " ") {
			$("#search_status").slideToggle(400);
		}
	});

	$("#search_estudi").keyup(function() {
		if ($(this).val() != "" && $(this).val() != " ") {
			var datos = new FormData();
			datos.append("buscar", $("#search_estudi").val());
			$.ajax("assets/php/ajax_search_panel.php",{
				type: "POST",
				dataType: "html",
				data: datos,
				contentType: false,
				processData: false,
				cache: false,
				success: function(respuesta) {
					var resultado = JSON.parse(respuesta);
					$("#search_status").html("");
					var user;
					var cedula;
					if (resultado[0]){	
						for (var i = 0; i < resultado.rows; i++) {
							user = resultado[i].user;
							cedula = resultado[i].cedula;
							$("#search_status").append("<span class='datos' data-user='"+user+"' data-cedula='"+cedula+"'><span id='user1-nombre'>"+user+"</span><span id='user1-cedula'>"+cedula+"</span></span>");
						}
						$("#search_status").slideDown(400);
					}else {
						$("#search_status").html("<span class='datos' id='user1'><span id='user1-nombre'>No resultados</span><span id='user1-cedula'></span></span>");
						$("#search_status").slideDown(400);
					}
				}
			});
		}else {
			$("#search_status").slideUp(400);
		}
	});	

	//Obtener datos del item
	$("#search_status").on("click", "span.datos", function() {
		if ($(this).data("user")) {
			//Titulo popad
			$("#popad-titulo").text("Buscar");

			var message = "Nombre: "+ $(this).data("user")+".<br/>"+
			"Cédula: "+$(this).data("cedula");

			//Popad Info
			$("#popad-info").html(message);

			//Mostrar popad
			$("#popad").fadeIn(200).css("display", "flex");
		}
	});

	//Ocultar panel
	var contador=0;
	$("#button_panel").on("click", function() {
		if (contador == 0) {
			$("#panel").animate({
				left: "-252px"
			}, 400, function() {
				contador=1;
			});
			$("#contenido").animate({
				marginLeft: "18px"
			}, 400);
		}else {
			$("#panel").animate({
				left: "0px"
			}, 400, function() {
				contador=0;
			});
			if ($(window).width() > 720) {
				$("#contenido").animate({
					marginLeft: "272px"
				}, 400);
			}
		}
	});

	if ($(window).width() <= 720) {
		contador=1;
	}

	//Rellenar div Content
	$(".item-panel").on("click", function() {
		var archivo = $(this).data("content");
		$("#contenido").find(".c-caja").hide();
		$("#contenido").find("span#c-titulo-"+archivo+", div#c-contenido-"+archivo).fadeIn(300);
		if ($(window).width() <= 720) {
			$("#button_panel").click();
		}
	});

	//Botones de selección modificar
	$("#contenido").on("change", "#m_selector_id",function() {
		$("#c-contenido-modificar").find("form").hide();
		$("form#form_modificar_"+$(this).val()).fadeIn(300);
	});

	$("#contenido").on("change", "#m_selector_user", function() {
		if ($(this).val() == "A-"){
			$("#form_modificar_user .m-options select").not("select#m_option_user").val("1").fadeOut(300);
			//Fix selector modificar
			$(".m-options select#m_option_user").val("INSERT");
			$("#m_pass_user").val("").fadeIn(300);
			$("#m_name_user").val("").fadeIn(300);
		}else if ($(this).val() == "CR-") {
			$("#form_modificar_user .m-options select").not("select#m_option_user").val("1").fadeOut(300);
			//Fix selector modificar
			$(".m-options select#m_option_user").val("INSERT");
			$("#m_pass_user").val("").fadeIn(300);
			$("#m_name_user").val("").fadeIn(300);
		}else if ($(this).val() == "V-") {
			$("#form_modificar_user .m-options select").val("").fadeIn(300);
			//Fix selector modificar
			$(".m-options select#m_option_user").val("INSERT");
			$("#m_pass_user").val("").fadeIn(300);
			$("#m_name_user").val("").fadeIn(300);
		}
	});

	//Options User
	$("#contenido").on("change", ".m-options #m_option_user", function() {
		if ($(this).val() == "UPDATE" && $("#m_selector_user").val() == "V-") {
			$("#m_pass_user").val("none").fadeOut(300);
			$("#m_name_user").val("").fadeIn(300);
			$("#form_modificar_user .m-options select").not("select#m_option_user").val("").fadeIn(300);
		}else if ($(this).val() == "DELETE" && $("#m_selector_user").val() == "V-") {
			$("#m_pass_user").val("1234").fadeOut(300);
			$("#m_name_user").val("none").fadeOut(300);
			$("#form_modificar_user .m-options select").not("select#m_option_user").val("1").fadeOut(300);
		}else if ($(this).val() == "INSERT" && $("#m_selector_user").val() == "V-") {
			$("#m_pass_user").val("").fadeIn(300);
			$("#m_name_user").val("").fadeIn(300);
			$("#form_modificar_user .m-options select").not("select#m_option_user").val("").fadeIn(300);
		}else if ($(this).val() == "UPDATE") {
			$("#m_pass_user").val("1234").fadeOut(300);
			$("#m_name_user").val("").fadeIn(300);
		}else if ($(this).val() == "DELETE") {
			$("#m_pass_user").val("1234").fadeOut(300);
			$("#m_name_user").val("none").fadeOut(300);
		}else if ($(this).val() == "INSERT") {
			$("#m_pass_user").val("").fadeIn(300);
			$("#m_name_user").val("").fadeIn(300);
		}
	});

	//Select configuracioon
	$("#contenido").on("change", "#conf_selector", function() {
		var option = $(this).val();
		if (option == "sec") {
			$("#n_user").hide().val("");
			$("#n_grado").fadeIn(200);
			$("#n_seccion").fadeIn(200);
			$("#n_hidden").val("sec");
		}else {
			$("#n_grado").hide().val("");
			$("#n_seccion").hide().val("");
			$("#n_user").fadeIn(200);
			$("#n_hidden").val("estu");
		}
	});

	//FIX FLEX!!! !Hace que las cajas regresen a flex con la funcion fadeIn y no a block, como lo hace normalmente
	$("#form_modificar_prof, #form_modificar_block").hide();

	//Fix selector modificar
	$("#m_selector_id").val("user");
});