function l(value) {
	return document.getElementById(value)
}

function clickEvent(element, callback) {
	l(element).addEventListener("click", callback)
}