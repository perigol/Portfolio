let menuVisible = false;

//Función para ocultar/mostrar Menú
function mostrarOcultarMenu() {
	if (menuVisible) {
		document.getElementById('nav').classList = '';
		menuVisible = false;
	} else {
		document.getElementById('nav').classList = 'responsive';
		menuVisible = true;
	}
}

function seleccionar() {
	document.getElementById('nav').classList = '';
	menuVisible = false;
}
function efectoSkills() {
	let skills = document.getElementById('skills');
	let distancia_skills =
		window.innerHeight - skills.getBoundingClientRect().top;
	if (distancia_skills >= 300) {
		let habilidades = document.getElementsByClassName('progreso');
		habilidades[0].classList.add('javascript');
		habilidades[1].classList.add('htmlcss');
		habilidades[2].classList.add('reactjs');
		habilidades[3].classList.add('nodejs');
		habilidades[4].classList.add('mongodb');
		habilidades[5].classList.add('ruby');
		habilidades[6].classList.add('comunicacion');
		habilidades[7].classList.add('trabajoequipo');
		habilidades[8].classList.add('creatividad');
		habilidades[9].classList.add('adaptacion');
		habilidades[10].classList.add('gestiontiempo');
		habilidades[11].classList.add('resolucion');
		habilidades[12].classList.add('habilidades');
	}
}
window.onscroll = function () {
	efectoSkills();
};
