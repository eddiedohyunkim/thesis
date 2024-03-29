const addFontStyle = document.createElement('link');
addFontStyle.rel = "stylesheet";
addFontStyle.href = "camera.css";
document.head.appendChild(addFontStyle);

window.onload = function(){
	const getText = document.querySelector('#text');

	if (getText.hasChildNodes()) {
  		for (const node of getText.children) {
  			let childrenText = node.innerText;
	
  			let paragraph = document.createElement('div');
			paragraph.className = 'paragraph';
			document.body.appendChild(paragraph);
	
	
			for(let letter of childrenText){
				createLetter(letter, paragraph);
			}
  		}
	}
	let observer = new IntersectionObserver(callback);
	const videos = document.querySelectorAll("video");
	
	videos.forEach(el => {
	    observer.observe(el);
	});
}	


function createLetter(character, paragraph){

	const letter = document.createElement('div');
	letter.className = 'letter';
	paragraph.appendChild(letter);

	const widthSetImg = document.createElement('span');
	widthSetImg.innerHTML = character;
	widthSetImg.className = 'width-set-text';
	letter.appendChild(widthSetImg);

	const video1 = document.createElement('video');
	video1.className = 'video1';
	letter.appendChild(video1);	

	const maskCont = document.createElement('div');
	maskCont.className = 'maskCont';
	letter.appendChild(maskCont);


	const mask = document.createElement('div');
	mask.className = 'mask';
	mask.style.webkitMaskImage = svgSrc(character);
	mask.style.maskImage = svgSrc(character);
	maskCont.appendChild(mask);		

	const video2 = document.createElement('video');
	video2.className = 'video2';
	mask.appendChild(video2);	
}


const constraints = {
	video:{
		facingMode: "user", 
		frameRate: { min: 20, ideal: 30, max: 60 },
    	width: { ideal: 320, max: 320 }
    	// height: { exact: 360 }
	}
};
const constraints2 = {
	facingMode: "user", 
	frameRate: {ideal: 3},
	width: { ideal: 320, max: 320 }
    // height: { exact: 360 }
};

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

function makeSvg(character, latin){
	let baseline;
	checkCJK(character) ? baseline = "60%" : baseline = "50%";
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute('width', '100');
	svg.setAttribute('height', '100');
	svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

	var myTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
	var myText = document.createTextNode(character);
	myTextElement.setAttribute("x", "50%");
	myTextElement.setAttribute("y", baseline);
	myTextElement.setAttribute("text-anchor", "middle");
	myTextElement.setAttribute("dominant-baseline", "middle");
	myTextElement.setAttribute("font-family", "Arial");
	myTextElement.setAttribute("font-size", "100px");
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
    		console.log(entry.target+" paused")
    		entry.target.pause()
    	}
    });
}

// window.onload = function(){
	
// }


