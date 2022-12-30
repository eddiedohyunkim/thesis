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
	video:{
		facingMode: "user", 
		frameRate: { min: 20, ideal: 30, max: 60 }
	}
};
const constraints2 = {
	facingMode: "user", 
	frameRate: { min: 3, ideal: 3, max: 3 }
};

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
	// navigator.mediaDevices.getUserMedia({video:true})
	navigator.mediaDevices.getUserMedia(constraints)
		.then((stream) => {
			const vids = document.querySelectorAll(".video1");
			vids.forEach((vid) => {
				vid.srcObject = stream;
				vid.defaultMuted = true;
				vid.setAttribute('playsinline', 'true');
				vid.onloadedmetadata = () => { vid.play(); };
			});

			const newStream = stream.clone();
			const vids2 = document.querySelectorAll(".video2");
			vids2.forEach( 
				async function (vid){
					await newStream.getVideoTracks()[0].applyConstraints(constraints2);
					vid.srcObject = newStream;
					vid.defaultMuted = true;
					vid.setAttribute('playsinline', 'true');
					vid.onloadedmetadata = () => { vid.play(); };
				}
			);
		})
		.catch((err) => {
			console.log("getUserMedia", err);
		});
}