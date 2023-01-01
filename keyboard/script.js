const mobileTyped = document.getElementById('mobile-typed');
const logCont = document.getElementById('logCont');

mobileTyped.addEventListener('keyup', function(event) {
	const input = this.value;
	console.log(input);
	// if( event.key.length == 1 ){
		const log = document.createElement('p');
		log.className = 'typed';
		log.innerHTML = input;
		logCont.appendChild(log);
	// }
	// window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);	
}, true);