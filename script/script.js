function menu() {
	const but = document.getElementById('but')
	const menu = document.getElementById('menu')
	let active = true
	if (window.innerWidth <= 880) {
		menu.classList.toggle('menu_active')
		but.classList.toggle('header_right_active')
		but.classList.toggle('header_right')
	}
}
function addclass() {
	const footer = document.getElementById('footer')
	const cont = document.getElementById('cont')
	if (window.innerWidth <= 1000 && window.innerWidth >= 880) {
		footer.classList.add('footer_pad_js')
		cont.classList.add('js_wrap')
	} else {
		footer.classList.remove('footer_pad_js')
		cont.classList.remove('js_wrap')
	}
}
window.addEventListener('resize', addclass())
