valid_game_types = []

save = {
	info: {
		name: "",
		id:   "",
		type: "",
	},
	player: {
		name: "",
		email: "",
		mes: {
			id: "",
			ccd: {
				document: false,
				xp: 0
			}
			membership_class: {
				current: 0,
				at_start: 0,
				xp: this.current * 8
			}
		}
	},
	venue: {
		storyteller: {
			name: "",
			email: ""
		},
		coordinator: {
			name: "",
			email: ""
		}
		vss: "",
		domain: "",
		region: "",
		country: "",
		chronicle: ""-
		
	},
	character: {
	
	}
}

character: {
	info: {
		name: {
			main: "",
			aliases: [],
		},
		concept: "",
		archetype: "",
		group: "",
		sect: "",
		apparent_age: 0,
		dob: "",
		turned_date: "",
		language: "",
		rank: 0,
		title: ""
	},
	xp: {
		floor: 0,
		earned: 0,
		spent: 0,
		remaining: 0
	},
	combat: {
		initative: 0,
		resource: 0,
		willpower: 0,
		health: new Health(),
		morality: 0,
		sanity: 0
	}
	reputation: "",
	attributes: {
		physical: {
			dots: 0,
			focus: []
		},
		mental: {
			dots: 0,
			focus: []
		},
		social: {
			dots: 0,
			focus: []
		}
	},
	skills: {
		academics: 0,
		animal_ken: 0,
		athletics: 0,
		awareness: 0,
		brawl: 0,
		computers: 0,
		crafts: 0,
		dodge: 0,
		drive: 0,
		empathy: 0,
		firearms: 0,
		intimidation: 0,
		investigation: 0,
		leadership: 0,
		linguistics: 0,
		lore: 0,
		medicine: 0,
		melee: 0,
		occult: 0,
		performance: 0,
		science: 0,
		security: 0,
		stealth: 0,
		streetwise: 0,
		subterfuge: 0,
		survival: 0
	},
	backgrounds: [],
	merits: [],
	flaws: [],
	powers: [],
	extra_powers: [],
	equipment: [],
	log: []
}

class HealthBox() {
	constructor() {
		this.damaged = false
		this.type    = "none"
	}
	
	get isDamaged() {
		return this.damaged
	}
	
	setDamage(type) {
		let valid_types = ["none", "lethal", "aggravated"]
		
		if (typeof type === "string") {
			type = type.toLowerCase()
			if (valid_types.contains(type)) {
				this.damaged = type == "none" ? false : true
				this.type    = type
			} else {
				throw new Error("Type must be of one of the following valid damage types: " + valid_types.join(", "))
			}
		} else {
			throw new Error("Damage requires a string.")
		}
	}
}
 
class Health {
	constructor() {
		this.unconscious   = false
		this.healthy       = [new HealthBox(), new HealthBox(), new HealthBox()]
		this.injured       = [new HealthBox(), new HealthBox(), new HealthBox()]
		this.incapacitated = [new HealthBox(), new HealthBox(), new HealthBox()]
	}
	
	get hasDamageInHealthy() {
		return this.checkState("healthy")[0]
	}
	
	get hasDamageInInjured() {
		return this.checkState("injured")[0]
	}
	
	get hasDamageIsIncapacitated() {
		return this.checkState("incapacitated")[0]
	}
	
	get whereDoesItHurt() {
		return this.hasDamageIsIncapacitated ? "incapacitated" :
			   this.hasDamageInInjured       ? "injured"       :
			   this.hasDamageInHealthy       ? "healthy"       :
			   false
	}
	
	damage(type) {
		let result, index

		//result = [damaged, index]
		result = this.checkState("incapacitated")
		
		if (result[0]) {
			index = result[1]
			
			if (index == 2) {
				//fully damaged
			} else {
				this.unconscious = index + 1 == 2
				this.incapacitated[index + 1].damage(type)
			}
		} else {
			result = this.checkState("injured")
			
			if (result[0]) {
				index = result[1]
				
				if (index == 2) {
					this.incapacitated[0].damage(type)
				} else {
					this.inujured[index + 1].damage(type)
				}
			} else {
				result = this.checkState("healthy")
				
				if (result[0]) {
					index = result[1]
					
					if (index == 2) {
						this.inujured[0].damage(type)
					} else {
						this.healthy[index + 1].damage(type)
					}
				} else {
					this.healthy[0].damage(type)
				}
			}
		}
	}
	
	checkState(state) {
		let result, at
		
		result = false
		at     = false
		//type = "none"
		
		this[state]forEach((box, i) => {
			result = box.damaged ? box.damaged : result
			//type = result      ? box.type    : type
			at     = result      ? i           : at
		})
		
		return [result, at]
	}
}

Group (Clan, Tribe, Kith, Affiliation)
Rank (Generation, Seeming, Enlightenment, Rank)
Power Resource (Blood, Gnosis, Quintessence, Glamour) 
Morality (Humanity, Harano, Banality, Wisdom)
Sanity (Beast Traits, Seethe, Bedlam)
Reputation (Status, Court Titles, Reputation, Renown)
Powers (Disciplines, Arts, Gifts, Spheres)
Supplemental Powers (Techniques/Elder Powers, Realms, Rotes)

valid_physical_focuses: ["stamina", "dexterity", "strength"]
valid_social_focuses: ["manipulation", "charisma", "appearance"]
valid_mental_focuses: ["intelligence", "wits", "perception"]