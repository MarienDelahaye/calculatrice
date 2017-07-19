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
function cinq(){
    var cinq = document.getElementById("cinq").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = cinq + value;
}
function quatre(){
    var quatre = document.getElementById("quatre").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = quatre + value;
}
function trois(){
    var trois = document.getElementById("trois").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = trois + value;
}
function deux(){
    var deux = document.getElementById("deux").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = deux + value;
}
function un (){
    var un = document.getElementById("un").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = un + value;
}
function zero(){
    var zero = document.getElementById("zero").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = zero + value;
}
function plus(){
	var plus = document.getElementById("plus").value;
	var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = value + " " + plus + " ";
}
function egal(){
	var value = document.getElementById("resultat").value;
	var finalResult = eval(value);
    document.getElementById("resultat").value = value + " = " + finalResult;
}
function moins(){
	var moins = document.getElementById("moins").value;
	var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = value + " " + moins + " ";
}
function multiplier(){
    var multiplier = document.getElementById("multiplier").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = value + " " + multiplier + " ";
}
function diviser(){
    var diviser = document.getElementById("diviser").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = value + " " + diviser + " ";
}
function point(){
    var point = document.getElementById("point").value;
    var value = document.getElementById("resultat").value;
    document.getElementById("resultat").value = value + point;
}