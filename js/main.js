// Variables
var display = document.getElementById("header");

// Functions
function removeValue(){
    document.getElementById("resultat").value = "";
}
function neuf(){
    var neuf = document.getElementById("neuf").value;
	var value = document.getElementById("resultat").value;
	document.getElementById("resultat").value = neuf + value;
}
function huit(){
    var huit = document.getElementById("huit").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = huit + value;

}
function sept(){
    var sept = document.getElementById("sept").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = sept + value;
}
function six(){
    var six = document.getElementById("six").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = six + value;
}

// Script Part