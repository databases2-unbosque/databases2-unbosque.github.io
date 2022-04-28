let moonBtn = document.getElementById('moonBtn');
let sunBtn = document.getElementById('sunBtn');
const themeBtnIcon = document.getElementById('themeBtnIcon');
const body = document.body;

// funciones/closures
const sunButton = () => {
	moonBtn.style.display = 'none';
	sunBtn.style.display = 'block';
}
const moonButton = () => {
	sunBtn.style.display = 'none';
	moonBtn.style.display = 'block';
}
const makeDark = () => {
	body.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
	sunButton();
	console.log('darkified');
};
const makeLight = () => {
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
	moonButton();
	console.log('lightified');
};

// onclick events (Sí, son dos botones que se ocultan y muestran para parecer uno)
moonBtn.onclick = makeDark;
sunBtn.onclick = makeLight;

// condiciones para que se mantenga la oscuridad mediante cache localstorage
window.onload = () => {
	body.classList.replace('light', localStorage.getItem('theme'));
	body.classList.replace('dark', localStorage.getItem('theme'));
	localStorage.getItem('theme') === 'dark' ? sunButton() : moonButton();
}
