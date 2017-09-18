$(document).ready(function() {

	//Variable para evitar que suma mas de 9 digitos
	var acumulador = 0;
	//variables para controlar la pantalla
	var nuevo = 1;
	var contador = 1;
	//Tecla para sumar
	var suma = 0;
	var resta = 0;
	var multi = 1;
	var divide = 1;
	var igualDato =0;
	var punto=0;
	var signo=0;
	

	//Variable literal para poder asignar el valor de forma global
	var calculadora =  {
		digito: null,
		//resta: null,

		init:function(propiedad) {
			calculadora.propiedad=propiedad;
		},

		leerPropiedades: function() {
			return calculadora.propiedad;
		}
	};


	
	//funcion para hacer click en el dijito	 
$(".tecla").click(function() {
	
	//var cambiartamano = $(this).attr('.tecla');
	$(this).css({"padding":"3px"});

	$(this).mouseout(function() {
		$(this).css({"padding":"0px"});
	});
		
		//Variable para capturar el id de la tecla precionada 
		var valor = $(this).attr('id');
		
		//vasamos el id en a numerico
		var tecla = 0;
		tecla = parseFloat(valor);

		//condicion para poder borrar los numeros 
		if(nuevo == 1 && tecla != 0){
			$('span').remove('#display');
			nuevo++;
		}

		
		//Condicion que evalua si la tecla precionada es numerica
	if($.isNumeric(tecla)){
		
			//Condicional para borrar el 0 de la pantalla
			if (contador == 1 && tecla != 0) {
			$('span').remove('#display');
			contador++;
			}

			//Condicion para ingresar los numeros a la pantalla
			if (contador != 1 && acumulador !=8) {
				$(".pantalla").append("<span id=display>"+tecla+"</span>");


				acumulador++;
				
			}

			//Captura los datos ingresados en la pantalla
			var dato= $(".pantalla").text();

			//pasa los datos a int
			var digito = parseFloat(dato);

			//Envia el dato a una variable literal solo una ves
			var propiedad = {
				digito:digito,
			}

			calculadora.init(propiedad);
	}else if (valor == "punto") {
			
			var propiedad = calculadora.leerPropiedades();

			var num = 0;
			num = propiedad.digito;
			
			$('span').remove('#display');

			if (punto==0) {
			$(".pantalla").append("<span id=display>"+num+"."+"</span>");
			punto++;
			}
			// console.log("el valor con punto es:"+ num);

			var propiedades ={
				digito:num,
			}

			calculadora.init(propiedades);


		} else if (valor == "sign") {
			var propiedad = calculadora.leerPropiedades();

			var num = 0;
			num = propiedad.digito;
			
			$('span').remove('#display');

			if (signo==0) {
				if (num >0) {
					$(".pantalla").append("<span id=display>"+"-"+num+"</span>");
				}else if (num < 0) {
					$(".pantalla").append("<span id=display>"+"+"+num+"</span>");
				}
			signo++;
			}
			// console.log("el valor con punto es:"+ num);

			var propiedades ={
				digito:num,
			}

			calculadora.init(propiedades);

		}

	//******Suma******//
	if (valor == "mas") {
		acumulador=0;
		nuevo=1;
		resta=0;
		multi=1;
		divide=1;
		igualDato=0;
		punto=0;
		signo=0;

		$('span').remove('#display');

		var propiedad = calculadora.leerPropiedades();

		var valorsuma = 0;
		valorsuma += propiedad.digito;
		
		suma += valorsuma;

		var propiedades ={
			digito:suma,
		}

		calculadora.init(propiedades);

		$(".pantalla").append("<span id=display>"+suma+"</span>");
		//console.log("El valor de la variable suma es: " + suma + " y valorsuna" + valorsuma);

	}

	//******Resta******//
	if (valor == "menos") {
		acumulador=0;
		nuevo=1;
		suma=0;
		multi=1;
		divide=1;
		igualDato=0;
		punto=0;
		signo=0;

		$('span').remove('#display');

		var propiedad = calculadora.leerPropiedades();

		var valorresta = 0;
		valorresta = propiedad.digito;

		if (resta==0) {
			resta=propiedad.digito;
		}else{
			resta =resta-valorresta;
		}

		var propiedades ={
			digito:resta,
		}

		calculadora.init(propiedades);

		$(".pantalla").append("<span id=display>"+resta+"</span>");
		//console.log("El valor de la variable resta es: " + resta + " y valorresta" + valorresta);
	}

	//******Multiplicacion******//
	if (valor == "por") {
		acumulador=0;
		nuevo=1;
		resta=0;
		suma=0;
		divide=1;
		igualDato=0;
		punto=0;
		signo=0;

		$('span').remove('#display');

		var propiedad = calculadora.leerPropiedades();
		
		var num = 0;
		num = propiedad.digito;
		multi = multi * num;

		$(".pantalla").append("<span id=display>"+multi+"</span>");
		//console.log("el valor de la multi es:"+ multi);

		var propiedades ={
			digito:multi,
		}

		calculadora.init(propiedades);
		
	}

	//******Division******//
	if (valor == "dividido") {
		acumulador=0;
		nuevo=1;
		resta=0;
		suma=0;
		multi =1;
		igualDato=0;
		punto=0;
		signo=0;

		$('span').remove('#display');

		var propiedad = calculadora.leerPropiedades();
		
		var num = 0;
		num = propiedad.digito;

		if (divide==1) {
			divide=propiedad.digito;
		}else{
			divide =divide/num;
		}

		$(".pantalla").append("<span id=display>"+divide+"</span>");
		//console.log("el valor de la divide es:"+ divide);

		var propiedades ={
			digito:divide,
		}

		calculadora.init(propiedades);
	}

	//******Igual******//
	if (valor == "igual") {
		acumulador=0;
		suma=0;
		resta=0;
		multi=1;
		divide=1;
		punto=0;
		signo=0;

		var propiedad = calculadora.leerPropiedades();

		var resultado=0
		resultado = propiedad.digito;

		if (igualDato ==0) {
		//console.log("El resultado del valor es:" + resultado);
		$(".pantalla").append("<span id=display>"+resultado+"</span>");
		igualDato++;
		}

		var propiedades ={
			digito:resultado,
		}
	}


	//******On******//
	if (valor == "on") {
		var valorOn = null;
		acumulador=0;
		suma=0;
		resta=0;
		multi=1;
		divide=1;
		contador=1;
		igualDato=0;
		punto=0;
		signo=0;

		$('span').remove('#display');
		$(".pantalla").append("<span id=display>"+0+"</span>");

		var propiedades ={
			digito:valorOn,
		}

		calculadora.init(propiedades);
	}

	});

});