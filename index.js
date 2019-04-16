/* JAVASCRIPT */
$(function() {
	$('select').formSelect(); // Activate Select Option HTML5 - Materialize
	$('.modal').modal(); // Activate Modal - Materialize

	/* jQuery Validate Plugin*/
	var rules = {
        rules: { // Normas en JSON
            name: {
                minlength: 2,
                maxlength: 50,
                required: true
			},
			email: {
                email: true,
                required: true
			}
		},
		messages: {
			name: {
				required: "Introduce un nombre.",
				minlength: "El nombre tiene que tener mínimo 2 carácteres.",
				maxlength: "El nombre tiene que tener un máximo de 50 caracteres."
			},
			email: {
				required: "Introduce un email.",
				email: "El formato de email no es válido."
			}
		},
        errorPlacement: function (error, element) {
            var name = $(element).attr("name");
            error.appendTo($("#" + name + "_validate"));
        },
	};

	$('#theForm').validate(rules);
  });

function onSubmit(){
	var formIsValid = $("#theForm").valid(); // get if form is valid (true) if get errors (false)
	var via = document.getElementById('depa').value; // get method
	if(formIsValid){
		switch(via){
			case "get":
				onSubmitGet(via); // get ajax petition
			break;
			case "post":
				onSubmitPost(via); // post ajax petition
			break;
			default:
				$('#alertModal').modal('open'); // in case you do not choose any method in select
			break;
		}
	}
}

function onSubmitGet(via){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			var resposta = JSON.parse(this.responseText);
			var mssg = "<div class='divider'></div>";
			mssg += "<div>"
			mssg += "<h2>Respuesta del Servidor: </h2>";
			mssg += "<p>El metodo de envio ha sido <strong>"+resposta.method+"</strong>.</p>";
			mssg += "<p>La persona que ha enviado el mesaje se llama <strong>"+resposta.name+"</strong>.</p>";
			mssg += "<p>Y su Correo es <strong>"+resposta.email+"</strong></p>";
			mssg += "</div>";
			document.getElementById('resposta').innerHTML = mssg;
		}
	}
	ajax.open(via, "./registre.php?method="+via+"&name="+name+"&email="+email);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send();
}

function onSubmitPost(via){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			var resposta = JSON.parse(this.responseText);
			var mssg = "<div class='divider'></div>";
			mssg += "<div>"
			mssg += "<h2>Respuesta del Servidor: </h2>";
			mssg += "<p>El metodo de envio ha sido <strong>"+resposta.method+"</strong>.</p>";
			mssg += "<p>La persona que ha enviado el mesaje se llama <strong>"+resposta.name+"</strong>.</p>";
			mssg += "<p>Y su Correo es <strong>"+resposta.email+"</strong></p>";
			mssg += "</div>";
			document.getElementById('resposta').innerHTML = mssg;
		}
	}
	ajax.open(via, "./registre.php");
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("method="+via+"&name="+name+"&email="+email);
}

