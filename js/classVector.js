class Vector {
	constructor() {
		const naming_scheme = ["x", "y", "z", ..."abcdefghijklmnopqrstuvw".split("")]
		
		this.type = 0
		
		Array.from(arguments).forEach((item, index) => {
			this[naming_scheme[index]] = item
			this.type++
		})
	}
	
	static sized(a, b) {
		if (a.type == b.type) {
			return true
		} else {
			throw new Error("Passed vectors are not of the same type!")
		}
	}
	
	static Add(a, b) {
		if (Vector.sized(a, b)) {
			let result = []
			
			const keys = Object.keys(a)
			
			keys.forEach(key => { if (key !== "type") { result.push(a[key] + b[key]) } })
				
			return new Vector(...result)
		}
	}
	
	add(a) {
		if (Vector.sized(this, a)) {
			const keys = Object.keys(this)
			
			keys.forEach(key => { if (key !== "type") { this[key] += a[key] } })
		}
	}
}