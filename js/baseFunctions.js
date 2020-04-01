function randWhole(a, b) {
	return Math.floor(Math.random() * (b - a)) + a
}

function randFraction(a, b) {
	return Math.random() * (b - a) + a
}

function rgbToHex(r, g, b) {
	let array_of_rgb = [r, g, b]
	
	array_of_rgb.forEach((item, i) => {
		item = item.toString(16)

		array_of_rgb[i] = item.length < 2 ? `0${item}` : item
	})
  return ("#" + array_of_rgb[0] + array_of_rgb[1] + array_of_rgb[2]).toUpperCase()
}