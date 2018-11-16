window.onload = () => {
	const square = document.querySelector('#shapes .square');
	const squareLength = square.getTotalLength();
	const hexagon = document.querySelector('#shapes .hexagon');
	const hexagonLength = hexagon.getTotalLength();
	console.log(squareLength, hexagonLength);
};

