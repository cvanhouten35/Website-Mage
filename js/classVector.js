class Vector {
	constructor() {
		const naming_scheme = ["x", "y", "z", ..."abcdefghijklmnopqrstuvw".split("")]
		
		this.type = 0
		
		Array.from(arguments).forEach((item, index) => {
			this[naming_scheme[index]] = item
			this.type++
		})
	}
}

Vector.util = {}
Vector.util.sized = function(a, b) {
	if (a.type == b.type) {
		return true
	} else {
		throw new Error("Passed vectors are not of the same type!")
	}
}

const sized = Vector.util.sized

Vector.add = function(a, b) {
	if (sized(a, b)) {
		const keys = Object.keys(a)
		
		keys.forEach(key => { if (key !== "type") { a[key] += b[key] } })
	}
}

Vector.Add = function(a, b) {
	if (sized(a, b)) {
		let result = []
		
		const keys = Object.keys(a)
		
		keys.forEach(key => { if (key !== "type") { result.push(a[key] + b[key]) } })
			
		return new Vector(...result)
	}
}