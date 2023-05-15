const cameraStyle = document.createElement('link');
cameraStyle.rel = "stylesheet";
cameraStyle.href = "fonts/camera/camera.css";
document.head.appendChild(cameraStyle);

window.addEventListener("load", (event) => {

	let cameraTexts = document.querySelectorAll('.camera-text');
    for(let cameraText of cameraTexts){
		cameraText.classList.add('came-paragraph');
		let text = '';
		text += cameraText.textContent; 
		text = text.trim()
		cameraText.innerHTML ="";
		console.log(text)

		for (let each of text) {
				createCamera(each, cameraText);  
		}
    }

	let observer = new IntersectionObserver(callback, {
	  root: null,   // default is the viewport
	  threshold: 1 // percentage of target's visible area. Triggers "onIntersection"
	});
	const videos = document.querySelectorAll("video");
	
	videos.forEach(el => {
	    observer.observe(el);
	});

});
		


function createCamera(character, paragraph){

	let letter = document.createElement('div');
	letter.className = 'came-letter';
	paragraph.appendChild(letter);

	let widthSetImg = document.createElement('span');
	widthSetImg.innerHTML = character;
	widthSetImg.className = 'width-set-text';
	letter.appendChild(widthSetImg);

	let video1 = document.createElement('video');
	video1.className = 'video1';
	letter.appendChild(video1);	

	let maskCont = document.createElement('div');
	maskCont.className = 'maskCont';
	letter.appendChild(maskCont);


	let mask = document.createElement('div');
	mask.className = 'mask';
	mask.style.webkitMaskImage = svgSrc(character);
	mask.style.maskImage = svgSrc(character);
	maskCont.appendChild(mask);		

	let video2 = document.createElement('video');
	video2.className = 'video2';
	mask.appendChild(video2);

	letter.addEventListener('click', accessCamera);	
}


const constraints = {
	video:{
		facingMode: "user", 
		frameRate: { min: 20, ideal: 30, max: 60 },
    	height: { exact: 180 }
	}
};
const constraints2 = {
	facingMode: "user", 
	frameRate: {ideal: 1},
    height: { exact: 180 }
};

function accessCamera(){
	if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
		// navigator.mediaDevices.getUserMedia({video:true})
		navigator.mediaDevices.getUserMedia(constraints)
			.then((stream) => {
				const vids = document.querySelectorAll(".video1");
				vids.forEach((vid) => {
					vid.srcObject = stream;
					vid.autoplay = true;
					vid.defaultMuted = true;
					vid.playsInline = true;
					vid.onloadedmetadata = () => { vid.play(); };
				});

				const newStream = stream.clone();
				const vids2 = document.querySelectorAll(".video2");
				vids2.forEach( 
					async function (vid){
						await newStream.getVideoTracks()[0].applyConstraints(constraints2);
						vid.srcObject = newStream;
						vid.autoplay = true;
						vid.defaultMuted = true;
						vid.playsInline = true;
						vid.onloadedmetadata = () => { vid.play(); };
					}
				);
			})
			.catch((err) => {
				console.log("getUserMedia", err);
			});
	}
}


function makeSvg(character, latin){
	let fontSize;
	if(checkCJK(character)){
		fontSize = "85px"
	}else{
		fontSize = "100px"
	}
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute('width', '100');
	svg.setAttribute('height', '100');
	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

	var myTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
	var myText = document.createTextNode(character);
	myTextElement.setAttribute("x", "50%");
	myTextElement.setAttribute("y", "50%");
	myTextElement.setAttribute("text-anchor", "middle");
	myTextElement.setAttribute("dominant-baseline", "middle");
	myTextElement.setAttribute("font-family", "Arial");
	myTextElement.setAttribute("font-size", fontSize);
	myTextElement.setAttribute("font-weight", "bold");
	myTextElement.appendChild(myText);
	svg.appendChild(myTextElement);
	return svg;
}

function svgSrc(character, width){
	let svg = makeSvg(character, 0)
	var s = new XMLSerializer().serializeToString(svg);
	return `url('data:image/svg+xml;utf8,${s}')`;
}

// function checkHTMLEscape(character){
// 	return character.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
// }

function checkCJK(character){
	return character.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f\u3131-\uD79D]/)
}


// var observer = new IntersectionObserver(function(entries, observer) {
//   entries.forEach(entry => {
//     // Pause/Play the animation
//     if (entry.isIntersecting) {
//     	console.log(entry.target+" playing")
//     	entry.target.play()
//     }else {
//     	console.log(entry.target+" paused")
//     	entry.target.pause()
//     }
//   });
// });

let callback = (entries, observer) => {
    entries.forEach(entry => {
		if (entry.isIntersecting) {
    		console.log(entry.target+" playing")
    		entry.target.play()
    	}else {
    		// setTimeout(function(){
    			console.log(entry.target+" paused")
    			entry.target.pause()	
    		// }, 1000)
    	}
    });
}

// window.onload = function(){
	
// }


