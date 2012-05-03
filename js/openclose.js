function togglefullscreenmodal(){
	var modal = document.getElementById('modal');
	var state =	modal.getAttribute('class');
	if (state=="modal"){
		state = "modal fullscreen";
	}else{
		state = "modal";
	}
	modal.setAttribute('class',state);

}

function toggleClause(e){
	var state = e.getAttribute('class');
	if (state == "clause collapsed"){
		state = "clause expanded";
	}else{
		state = "clause collapsed";
	}
	e.setAttribute('class',state);
}