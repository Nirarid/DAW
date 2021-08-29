var nombre = "fernando"
var email = "ferurios@hotmail.com"
var edad = 20

function getNombre(){
	console.log(nombre);
	var myNameElement = document.getElementById("nombre");
	myNameElement.innerHTML = "Mi nombre es : " + nombre;
	
}

function getEmail(){
	console.log(email);
	var myEmailElement = document.getElementById("email");
	myEmailElement.innerHTML = '<b>' + email + '</b>';
	
}

function getEdad(){
	console.log(edad);
	var myEdadElement = document.getElementById("edad");
	myEdadElement.innerHTML = '<b>' + edad + '</b>';
	myEdadElement.style.color = "#0000FF";
}