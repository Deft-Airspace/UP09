function menu() {
	const menu = document.getElementById('menu')
	if (window.innerWidth <= 768) {
		menu.classList.toggle('menu_active')
	}
}
