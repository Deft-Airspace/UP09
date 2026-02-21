function menu() {
	const but = document.getElementById('but')
	const menu = document.getElementById('menu')
	if (window.innerWidth <= 768) {
		menu.classList.toggle('menu_active')
	}
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js')
}
