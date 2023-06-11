/** ПЛАН РОЗРОБКИ */
/**
 * 1. Зробити рух гравця по натисканню клавіш "вліво/вправо". done
 * 
 * 2. Зробити вибір космічного корабля гравця та запуск гри:
 * 	- свтворити вікно запуску;
 * 	- створити життя гравця.
 * 
 * 3. Створити "ворогів":
 * 	- рандомний порядок та місце де з'являються "вороги";
 * 	- рух ворогів на гравця;
 * 
 *4. Зробити постріл по натисканню клавіши "пробіл":
 * 	- створити "кулю";
 * 	- зробити рух "кулі";
 * 	- перевірити влучання;
 * 
 * 5. Зробити перевірку на пропущеного ворога (-життя)
 * 
 * 6. Якщо кількість життів == 0 - Game Over.
 */

/** Вивчення та закріплення:
 * 	- створення об'єктів;
 * 	- робота з координатами;
 * 	- події натискання клавіш;
 * 	- робота з таймерами;
 * 	- розділення коду на декілька файлів;
 * 	...
 */
let wrapper = document.querySelector('.container');
let wrapperW = wrapper.offsetWidth;

let player = document.getElementById('player');
let board = document.getElementById('app');

let enemy = document.querySelector('.enemy');

let skin = 'skin-1';

const floor10 = (val) => {
	return Math.floor(val / 10) * 10;
}
wrapperW = floor10(wrapperW);
wrapper.style.width = wrapperW + 'px';

document.addEventListener('keydown', (event) => {
	switch (event.code) {
		case "Space":
			shot();
			break;
		case "ArrowLeft":
		case "KeyA":
			moveLeft();
			break;
		case "ArrowRight":
		case "KeyD":
			moveRight();
			break;
	}
});

const moveLeft = () => {
	let pos = player.offsetLeft;
	if (pos < 19) {
		player.style.left = '0';
	} else {
		player.style.left = pos - 20 + 'px';
	}

}

const moveRight = () => {
	let boardW = board.offsetWidth;
	let playerW = player.offsetWidth;
	let pos = player.offsetLeft;
	if ((pos + playerW + 19) > boardW) {
		player.style.left = (boardW - playerW) + 'px';
	} else {
		player.style.left = pos + 20 + 'px';
	}
}

const shot = () => {
	let bullet = document.createElement('div');
	bullet.className = `bullet ${skin}`;
	bullet.style.left = (player.offsetLeft + player.offsetWidth / 2) - 8 + 'px';
	board.appendChild(bullet);
	let timerID = setInterval(() => {
		isHit(bullet);
		if (bullet.offsetTop < 0) {
			bullet.remove();
			clearInterval(timerID);
		}
		bullet.style.top = bullet.offsetTop - 10 + 'px';
	}, 50);
}

const isHit = (bullet) => {
	if (bullet.offsetTop > enemy.offsetTop
		&& bullet.offsetTop < (enemy.offsetTop + enemy.offsetHeight)
		&& bullet.offsetLeft > enemy.offsetLeft
		&& bullet.offsetLeft < (enemy.offsetLeft + enemy.offsetWidth)) {
		console.dir('hit the enemy');
	}
}
