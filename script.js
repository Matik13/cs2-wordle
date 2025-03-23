const weapons = [
	{
		name: 'Desert Eagle',
		price: 700,
		killAward: 300,
		damage: 53,
		armorPenetration: 93.2,
		fireRate: 266.67,
		magazineSize: 7,
		ammoReserve: 35,
		mobility: 230,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'R8 Revolver',
		price: 600,
		killAward: 300,
		damage: 86,
		armorPenetration: 93.2,
		fireRate: 120.0,
		magazineSize: 8,
		ammoReserve: 8,
		mobility: 180,
		fullAuto: true,
		tracers: 'Po każdym',
	},
	{
		name: 'Dual Berettas',
		price: 300,
		killAward: 300,
		damage: 38,
		armorPenetration: 57.5,
		fireRate: 500.0,
		magazineSize: 30,
		ammoReserve: 120,
		mobility: 240,
		fullAuto: false,
		tracers: 'Brak',
	},
	{
		name: 'Five-SeveN',
		price: 500,
		killAward: 300,
		damage: 32,
		armorPenetration: 91.15,
		fireRate: 400.0,
		magazineSize: 20,
		ammoReserve: 100,
		mobility: 240,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'Glock-18',
		price: 200,
		killAward: 300,
		damage: 30,
		armorPenetration: 47.0,
		fireRate: 400.0,
		magazineSize: 20,
		ammoReserve: 120,
		mobility: 240,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'P2000',
		price: 200,
		killAward: 300,
		damage: 35,
		armorPenetration: 50.5,
		fireRate: 352.94,
		magazineSize: 13,
		ammoReserve: 52,
		mobility: 240,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'USP-S',
		price: 200,
		killAward: 300,
		damage: 35,
		armorPenetration: 50.5,
		fireRate: 352.94,
		magazineSize: 12,
		ammoReserve: 24,
		mobility: 240,
		fullAuto: false,
		tracers: 'Brak',
	},
	{
		name: 'P250',
		price: 300,
		killAward: 300,
		damage: 38,
		armorPenetration: 64.0,
		fireRate: 400.0,
		magazineSize: 13,
		ammoReserve: 26,
		mobility: 240,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'CZ75 Auto',
		price: 500,
		killAward: 300,
		damage: 31,
		armorPenetration: 77.65,
		fireRate: 600.0,
		magazineSize: 12,
		ammoReserve: 12,
		mobility: 240,
		fullAuto: true,
		tracers: 'Po każdym',
	},
	{
		name: 'Tec-9',
		price: 500,
		killAward: 300,
		damage: 33,
		armorPenetration: 90.6,
		fireRate: 500.0,
		magazineSize: 18,
		ammoReserve: 90,
		mobility: 240,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'Mag-7',
		price: 1300,
		killAward: 900,
		damage: 30,
		armorPenetration: 75.0,
		fireRate: 70.59,
		magazineSize: 5,
		ammoReserve: 32,
		mobility: 225,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'Nova',
		price: 1050,
		killAward: 900,
		damage: 26,
		armorPenetration: 50.0,
		fireRate: 68.18,
		magazineSize: 8,
		ammoReserve: 32,
		mobility: 220,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'Sawed-Off',
		price: 1100,
		killAward: 900,
		damage: 32,
		armorPenetration: 75.0,
		fireRate: 70.59,
		magazineSize: 7,
		ammoReserve: 32,
		mobility: 210,
		fullAuto: false,
		tracers: 'Po każdym',
	},
	{
		name: 'XM1014',
		price: 2000,
		killAward: 600,
		damage: 20,
		armorPenetration: 80.0,
		fireRate: 171.43,
		magazineSize: 7,
		ammoReserve: 32,
		mobility: 215,
		fullAuto: true,
		tracers: 'Po każdym',
	},
	{
		name: 'PP-Bizon',
		price: 1400,
		killAward: 600,
		damage: 27,
		armorPenetration: 63.0,
		fireRate: 750.0,
		magazineSize: 64,
		ammoReserve: 120,
		mobility: 240,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'MAC-10',
		price: 1050,
		killAward: 600,
		damage: 29,
		armorPenetration: 57.5,
		fireRate: 800.0,
		magazineSize: 30,
		ammoReserve: 100,
		mobility: 240,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'MP7',
		price: 1500,
		killAward: 600,
		damage: 29,
		armorPenetration: 62.5,
		fireRate: 750.0,
		magazineSize: 30,
		ammoReserve: 120,
		mobility: 220,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'MP5-SD',
		price: 1500,
		killAward: 600,
		damage: 27,
		armorPenetration: 62.5,
		fireRate: 750.0,
		magazineSize: 30,
		ammoReserve: 120,
		mobility: 235,
		fullAuto: true,
		tracers: 'Brak',
	},
	{
		name: 'MP9',
		price: 1250,
		killAward: 600,
		damage: 26,
		armorPenetration: 60.0,
		fireRate: 857.14,
		magazineSize: 30,
		ammoReserve: 120,
		mobility: 240,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'P90',
		price: 2350,
		killAward: 300,
		damage: 26,
		armorPenetration: 69.0,
		fireRate: 857.14,
		magazineSize: 50,
		ammoReserve: 100,
		mobility: 230,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'UMP-45',
		price: 1200,
		killAward: 600,
		damage: 35,
		armorPenetration: 65.0,
		fireRate: 666.67,
		magazineSize: 25,
		ammoReserve: 100,
		mobility: 230,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'AK-47',
		price: 2700,
		killAward: 300,
		damage: 36,
		armorPenetration: 77.5,
		fireRate: 600.0,
		magazineSize: 30,
		ammoReserve: 90,
		mobility: 215,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'AUG',
		price: 3300,
		killAward: 300,
		damage: 28,
		armorPenetration: 90.0,
		fireRate: 600.0,
		magazineSize: 30,
		ammoReserve: 90,
		mobility: 220,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'FAMAS',
		price: 1950,
		killAward: 300,
		damage: 30,
		armorPenetration: 70.0,
		fireRate: 666.67,
		magazineSize: 25,
		ammoReserve: 90,
		mobility: 220,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'Galil AR',
		price: 1800,
		killAward: 300,
		damage: 30,
		armorPenetration: 77.5,
		fireRate: 666.67,
		magazineSize: 35,
		ammoReserve: 90,
		mobility: 215,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'M4A4',
		price: 3000,
		killAward: 300,
		damage: 33,
		armorPenetration: 70.0,
		fireRate: 666.67,
		magazineSize: 30,
		ammoReserve: 90,
		mobility: 225,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'M4A1-S',
		price: 2900,
		killAward: 300,
		damage: 38,
		armorPenetration: 70.0,
		fireRate: 600.0,
		magazineSize: 20,
		ammoReserve: 80,
		mobility: 225,
		fullAuto: true,
		tracers: 'Brak',
	},
	{
		name: 'SG 553',
		price: 3000,
		killAward: 300,
		damage: 30,
		armorPenetration: 100.0,
		fireRate: 545.45,
		magazineSize: 30,
		ammoReserve: 90,
		mobility: 210,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'AWP',
		price: 4750,
		killAward: 100,
		damage: 115,
		armorPenetration: 97.5,
		fireRate: 41.85,
		magazineSize: 5,
		ammoReserve: 30,
		mobility: 200,
		fullAuto: false,
		tracers: 'Brak',
	},
	{
		name: 'G3SG1',
		price: 5000,
		killAward: 300,
		damage: 80,
		armorPenetration: 82.5,
		fireRate: 240.0,
		magazineSize: 20,
		ammoReserve: 90,
		mobility: 210,
		fullAuto: true,
		tracers: 'Brak',
	},
	{
		name: 'SCAR-20',
		price: 5000,
		killAward: 300,
		damage: 80,
		armorPenetration: 82.5,
		fireRate: 240.0,
		magazineSize: 20,
		ammoReserve: 90,
		mobility: 210,
		fullAuto: true,
		tracers: 'Brak',
	},
	{
		name: 'SSG 08',
		price: 1700,
		killAward: 300,
		damage: 88,
		armorPenetration: 100.0,
		fireRate: 48.0,
		magazineSize: 10,
		ammoReserve: 90,
		mobility: 230,
		fullAuto: false,
		tracers: 'Brak',
	},
	{
		name: 'M249',
		price: 5200,
		killAward: 300,
		damage: 32,
		armorPenetration: 80.0,
		fireRate: 750.0,
		magazineSize: 100,
		ammoReserve: 200,
		mobility: 195,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
	{
		name: 'Negev',
		price: 1700,
		killAward: 300,
		damage: 35,
		armorPenetration: 80.0,
		fireRate: 1000.0,
		magazineSize: 150,
		ammoReserve: 300,
		mobility: 195,
		fullAuto: true,
		tracers: 'Po co trzecim',
	},
]

let randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]

const weaponInput = document.getElementById('weaponInput')
const weaponDataList = document.getElementById('weapons')
weapons.forEach(weapon => {
	const option = document.createElement('option')
	option.value = weapon.name
	weaponDataList.appendChild(option)
})

const guessButton = document.getElementById('guessButton')
const attributesDiv = document.getElementById('attributes')
const resultMessage = document.getElementById('resultMessage')
const playAgainButton = document.getElementById('playAgainButton')
const comparisonBody = document.getElementById('comparisonBody')

weaponInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		guessWeapon()
	}
})

guessButton.addEventListener('click', function () {
	guessWeapon()
})

function guessWeapon() {
	const guess = weaponInput.value.toLowerCase()
	const guessedWeapon = weapons.find(weapon => weapon.name.toLowerCase() === guess)

	if (guessedWeapon) {
		compareWeapons(guessedWeapon)
		attributesDiv.classList.remove('hidden')
	} else {
		alert('Nie ma takiej broni')
	}
	weaponInput.value = ''
}

function compareWeapons(guessedWeapon) {
	const resultRow = document.createElement('tr')

	const attributes = [
		'name',
		'price',
		'killAward',
		'damage',
		'armorPenetration',
		'fireRate',
		'magazineSize',
		'ammoReserve',
		'mobility',
		'fullAuto',
		'tracers',
	]

	attributes.forEach(attr => {
		const td = document.createElement('td')
		let guessedValue = guessedWeapon[attr]
		let randomValue = randomWeapon[attr]

		if (attr === 'fullAuto') {
			guessedValue = guessedValue ? 'Tak' : 'Nie'
			randomValue = randomValue ? 'Tak' : 'Nie'
		}

		if (guessedValue === randomValue) {
			td.classList.add('green')
		} else {
			td.classList.add('red')
		}
		if (typeof guessedWeapon[attr] === 'number') {
			if (guessedWeapon[attr] > randomWeapon[attr]) {
				td.classList.add('down')
			} else if (guessedWeapon[attr] < randomWeapon[attr]) {
				td.classList.add('up')
			}
		}
		if (attr == 'price' || attr == 'killAward') {
			td.classList.add('dolar')
		}
		td.textContent = guessedValue
		resultRow.appendChild(td)
	})

	guesses.appendChild(resultRow)

	if (guessedWeapon.name === randomWeapon.name) {
		resultMessage.textContent = `Gratulacje! Odgadłeś broń: ${randomWeapon.name}`
		playAgainButton.classList.remove('hidden')
	}
}

playAgainButton.addEventListener('click', function () {
	location.reload()
})
