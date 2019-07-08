$(document).ready(function() {
	//Login
	$("div#login-submit").on("click", "#login_button", function(event) {
		event.preventDefault();//Evitar comportamiento normal de form
		var user = $("#login_user").val();
		var pass = $("#login_password").val();
		if (user != "" && user != " " && pass != "" && pass != " ") {
			var datos = $('#form_login').serialize();//Obtener datos del formulario
			$.ajax("assets/php/ajax_check_login.php",{
				type: "POST",
				dataType: "html",
            	data: datos,
            	cache: false,
            	beforeSend: function() {
            		//Efecto loading
            		$("#login_button").hide();
            		$("#login_loading").fadeIn(450);
            	},
            	success: function(respuesta) {
            		//Revertir Efecto loading
            		$("#login_loading").hide();
            		$("#login_button").fadeIn(450);
            		var resultado = JSON.parse(respuesta);//Transformar resultado a JSON
            		//Mensajes del JSON
            		if (resultado.status == 'fallido') {
	            		if (resultado.message == 'token') {
	            			var popad_text = "Error en los procesos internos!! </br>Ex000001";
	            		}else if (resultado.message == 'consult_error1') {
	                		var popad_text = "Error en los procesos internos!! </br>Ex000002";
	                	}else if (resultado.message == 'consult_error2') {
	                		var popad_text = "Error en los procesos internos!! </br>Ex000002";
	                	}else if (resultado.message == 'consult_error3') {
	                		var popad_text = "Error en los procesos internos!! </br>Ex000002";
	                	}else if (resultado.message == 'no_encontrado') {
	                		var popad_text = "El usuario y/o la contraseña es incorrecta.";
	                	}else if (resultado.message == 'banlist') {
	                		var popad_text = "El usuario y/o la contraseña es incorrecta.";
	                	}else if (resultado.message == 'block'){
	                		var popad_text = "Exedistes el numero de intentos, tu cuenta esta bloqueada por 5 minutos.";
	                	}else if (resultado.message == 'block_perma'){
	                		var popad_text = "Tu cuenta esta bloqueada, demaciados intentos fallidos. Por favor visite a control de estudio para poder desbloquear su cuenta.";
	                	}else if (resultado.message == 'unlock'){
	                		var popad_text = "Revisa tus credenciales, las sigues poniendo mal.";
	                	}else if (resultado.message == 'still_blocked'){
	                		var popad_text = "Tu cuenta aún sigue bloqueada, espera unos minutos para volver a intentar iniciar sesión.";
	                	}else {
	                        var popad_text = "Error en los procesos internos!! </br>Ex000003";
	                    }

	                    //Mostrar resultado del JSON en popad
	                    $("#popad-titulo").text("Login");
	                    $("#popad-info").text(popad_text);
	                    $("#popad").fadeIn(200).css("display", "flex");
                	}else if (resultado.status == "exitoso") {
                		$("#login_button").prop("disabled", "disabled");
                        setTimeout("window.location.href = 'panel.php'", 1000);
                	}else {
                		//En caso de GRAN error
                		console.log("Error faltal ubicado en los archivos de login, hay que revisar esto carnal!!");
                		var popad_text = "Error en los procesos internos!! </br>Ex000003";
                		//Mostrar resultado del JSON en popad
	                    $("#popad-titulo").text("Login");
	                    $("#popad-info").text(popad_text);
	                    $("#popad").fadeIn(200).css("display", "flex");
                	}
            	},
            	error: function (jqXHR, textStatus, errorThrown) {
            		//Revertir Efecto loading
            		$("#login_loading").hide();
            		$("#login_button").fadeIn(450);
                    $("#popad").fadeIn(200).css("display", "flex");
            		$("#popad-titulo").text("PETICION FALLIDA!");
           			$("#popad-info").html("El servidor arroja los siguientes datos: <br>jqXHR: "+ jqXHR.statusText +".</br>Type Error: "+ textStatus +".");            	
           		}
			});
		}else {
			$("#popad-titulo").text("Login!");
			$("#popad-info").text("Debe rellenar todos los campos.");
			$("#popad").fadeIn(200).css("display", "flex");
		}
	});
	$("#popad-cerrar").on("click", function() {
		cerrar_ventana();
	});
});