class Swirl {
	constructor(canvas) {
		this.canvas = canvas
		this.particles = []
		this.density = 1
		this.amount = 0
	}
	
	initParticles(density) {
		density = density || this.density
		this.amount = density * 500
		
		for (let i = 0; i < this.amount; i++) {
			this.particles[i] = new Particle(this.canvas)
			this.particles[i].initalize()
		}
	}
	
	drawParticles() {
		this.canvas.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
		
		for (let i = 0; i < this.particles.length; i++) {	
			this.particles[i].draw()
			
			this.particles[i].update(0)
			
			if (this.particles[i].end) {
				this.particles[i] = new Particle(this.canvas)
				this.particles[i].initalize()
			}
		}
		
		if (this.particles.length > 0) {
			window.requestAnimationFrame(this.drawParticles.bind(this))
		} else {
			console.log("All dots gone!")
		}
	}
}