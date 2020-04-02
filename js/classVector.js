class Vector {
	constructor() {
		const naming_scheme = ["x", "y", "z", ..."abcdefghijklmnopqrstuvw".split("")]
		arguments.forEach((item, index) => {
			this[naming_scheme[index]] = item
		})
	}
}