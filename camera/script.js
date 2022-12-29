const typeArea = document.getElementById('typeArea');

const sentence = 'wa@';

for(let element of sentence){
	if(element=='@'){ element='at'};
	createLetter(element);	
}

function createLetter(letter){
	const letterCont = document.createElement('div');
	letterCont.className = 'letterCont';
	typeArea.appendChild(letterCont);

	const widthSetImg = document.createElement('img');
	widthSetImg.className = 'width-set-img';
	widthSetImg.src = `assets/letter-${letter}.svg`;
	letterCont.appendChild(widthSetImg);

	const video1 = document.createElement('video');
	video1.className = 'video1';
	video1.autoplay = true;
	letterCont.appendChild(video1);	

	const maskCont = document.createElement('div');
	maskCont.className = 'maskCont';
	letterCont.appendChild(maskCont);

	const mask = document.createElement('div');
	mask.className = 'mask';
	mask.style.webkitMaskImage = `url(assets/letter-${letter}.svg)`;
	mask.style.maskImage = `url(assets/letter-${letter}.svg)`;
	maskCont.appendChild(mask);		

	const video2 = document.createElement('video');
	video2.className = 'video2';
	video2.autoplay = true;
	mask.appendChild(video2);	
}


const constraints = {
	audio: false,
	video: { facingMode: "user", frameRate: { min: 20, ideal: 30, max: 60 }}
};

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	navigator.mediaDevices.getUserMedia(constraints)
		.then((stream) => {
			var vids = document.querySelectorAll("video");
			vids.forEach((vid) => {
				vid.srcObject = stream;
				vid.onloadedmetadata = () => { vid.play(); };
				vid.defaultMuted = true;
				vid.setAttribute('playsinline', '');
			});
		})
		.catch((err) => {
			console.log("getUserMedia", err);
		});
}




// const constraints = {
// 	audio: false,
// 	video: { facingMode: "user", frameRate: { min: 20, ideal: 30, max: 60 }}
// };

// navigator.mediaDevices.getUserMedia(constraints)
//   .then((mediaStream) => {
//     const video = document.querySelectorAll('video');
//     for(let elements of video){
//     	elements.srcObject = mediaStream;
//     	elements.onloadedmetadata = () => {
//       		elements.play();
//     	};
//     }
//   })
//   .catch((err) => {
//     // always check for errors at the end.
//     console.error(`${err.name}: ${err.message}`);
//   });

// const constraints2 = {
// 	audio: false,
// 	video: { facingMode: "user", frameRate: { min: 3, ideal: 3, max: 3 }}
// };

// navigator.mediaDevices.getUserMedia(constraints2)
//   .then((mediaStream) => {
//     const video2 = document.querySelectorAll('.video2');
//     for(let elements of video2){
//     	elements.srcObject = mediaStream;
//     	elements.onloadedmetadata = () => {
//       		elements.play();
//     	};
//     }
//   })
//   .catch((err) => {
//     // always check for errors at the end.
//     console.error(`${err.name}: ${err.message}`);
//   });