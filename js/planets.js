let planet;
let planetSkin;

const selPlanetSkin = () => {
	const skins = ['skin-1', 'skin-2', 'skin-3'];
	planetSkin = skins[Math.floor(Math.random() * skins.length)];
	return planetSkin;
}

// const createPlanets = () => {
// 	let i = 0;
// 	while (i < random(1, 5)) {
// 		createPlanet();
// 		i++;
// 	}
// }

const createPlanet = () => {
	let i = 0;
	while (i < random(1, 2)) {
		selPlanetSkin();
		planet = document.createElement('div');
		planet.className = `planet ${planetSkin}`;
		planet.style.left = `${random(400, (board.offsetWidth - 400))}px`;
		board.appendChild(planet);
		movePlanet(planet);
		i++;
	}
}

const movePlanet = (planet) => {
	let speed;
	if (planet.classList.contains('skin-1')) {
		speed = 2;
	} else if (planet.classList.contains('skin-2')) {
		speed = 4;
	} else if (planet.classList.contains('skin-3')) {
		speed = 8;
	}
	let timerID = setInterval(() => {
		planet.style.top = `${planet.offsetTop + speed}px`;
		if (planet.offsetTop > board.offsetHeight) {
			clearInterval(timerID);
			planet.remove();
			createPlanet();
		}
	}, 100);
}

const removePlanet = (planet) => {
	planet.remove();
	createPlanet();
}