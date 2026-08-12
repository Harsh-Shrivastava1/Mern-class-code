const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

let count = 0;
let stop;

closeBtn.addEventListener('click', () => {
	popup.style.visibility = 'hidden';
	clearInterval(stop);
});

setTimeout(() => {
	popup.style.visibility = 'visible';

	stop = setInterval(() => {
		count++;
		console.log(count);
	}, 1000);
}, 2000);
