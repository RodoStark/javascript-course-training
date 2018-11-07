//busca todos los botones existentes
var buttons = document.querySelectorAll('button');

//por todos los botones que escucha, por cada uno de ellos, identificando el ID correspondiente a cada boton,
//va a llamar la funcion playsound()
buttons.forEach(function (button){
	button.addEventListener('click', playSound);	
});


function playSound(event){
	//muestra en consola la propiedad del objeto boton: "tarjet", el id que identifica al boton
	var button = event.target;
	var note = button.dataset.note;
	console.log(button);

	var audio = document.getElementById('audio'+note);
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}