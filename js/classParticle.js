class Particle {
	constructor(canvas) {
		this.canvas   = canvas
		this.pos      = new Vector(randWhole(0, this.canvas.canvas.width), randWhole(0, this.canvas.canvas.height))
		this.speed    = 0
		this.speedMax = 0
		this.color    = rgbToHex([randWhole(0, 255), randWhole(0, 255), randWhole(0, 255)])
		this.life     = randWhole(90, 600)
		this.size     = this.life / 120
		this.end      = false
	}
	
	initalize(x, y, life, color, size, speed, speedMax) {
		this.pos.x = x    || this.pos.x
		this.pos.y = y    || this.pos.y
		this.life  = life || this.life
		this.maxLife = this.life
		this.color = color || this.color
		this.size  = size  || this.size
		this.speed = speed || randWhole(1, 5)
		this.speedMax = speedMax || randWhole(30, 50)
	}
	
	draw() {
		this.canvas.fillStyle = this.color
		this.canvas.beginPath()
		this.canvas.arc(this.x, this.y, this.size, 0, Math.TAU)
		this.canvas.fill()
	}
	
	update(dx, dy) {
		this.x += dx !== undefined ? dx : this.speed * -2
		this.y += dy !== undefined ? dy : this.speed * -.05
		this.life  -= randWhole(1, 3)
		this.size   = this.life / 120
		this.speed  = ((this.maxLife - this.life) / this.maxLife) * this.speedMax
		this.end    = this.life <= 0
	}
}