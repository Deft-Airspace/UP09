function menu() {
	const but = document.getElementById('but')
	const menu = document.getElementById('menu')
	let active = true
	if (window.innerWidth <= 768) {
		menu.classList.toggle('menu_active')
		but.classList.toggle('header_right_active')
		but.classList.toggle('header_right')
	}
}
