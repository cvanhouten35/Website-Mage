class Particle {
	constructor(canvas) {
		this.canvas = canvas
		this.x = 0
		this.y = 0
		this.size = 3
	}
	
	initalize() {
		this.canvas.beginPath()
		this.canvas.arc(this.x, this.y, this.size, 0, Math.TAU)
	}
	
	draw() {
		
	}
	
	
}