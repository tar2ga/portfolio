const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  overlay = document.querySelector('.menu__overlay'),
	  closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
})

function removeMenu() {
	menu.classList.remove('active');
}

closeElem.addEventListener('click', removeMenu)
overlay.addEventListener('click', removeMenu)
