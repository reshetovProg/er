
const cards = [
	"1.jpg",
	"2.webp",
	"3.jpg",
	"4.webp",
	"5.jpg",
	"6.webp",
	"7.webp",
	"8.webp",
	"r.webp"
];

export const back = [
	"back.jpg",
	"back2.jpg",
]

export class Card {
	img;
	back = cards[8];
	status = false;
	constructor(img) {
		this.img = img;
	}
}

export const createCards = (lvl) => {
	const array = [];
	for (let i = 0; i < lvl / 2; i++) {
		array.push(new Card(cards[i]));
		array.push(new Card(cards[i]));
	}

	for (let i = 0; i < lvl; i++) {
		let a = array[i];
		let r = Math.floor(Math.random() * (lvl - 1));
		array[i] = array[r];
		array[r] = a;
	}
	return array;
}

