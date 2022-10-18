var segundos = 5;
function actualizar(){
	document.getElementById("var_cont").innerHTML = segundos + " texto";
	if(segundos==0){
//		alert("El tiempo se acabo..");
	}else{
		segundos--;
		setTimeout("actualizar()",1000);
	}
}

setTimeout(actualizar(),1000);