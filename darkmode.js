let moonBtn = document.getElementById('moonBtn');
let sunBtn = document.getElementById('sunBtn');
const themeBtnIcon = document.getElementById('themeBtnIcon');
const body = document.body;

moonBtn.onclick = () => {
	body.classList.replace('light', 'dark');
	moonBtn.style.display = 'none';
	sunBtn.style.display = 'block';
};

sunBtn.onclick = () => {
	body.classList.replace('dark', 'light');
	sunBtn.style.display = 'none';
	moonBtn.style.display = 'block';
};
