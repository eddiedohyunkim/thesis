
// window.onload = function () {
// 	var camoPara = document.querySelector('.camo-paragraph');
// 	var cousPara = document.querySelector('.cous-paragraph');

// 	camoPara.style.setProperty('--camoFontSize', '70px');
// 	cousPara.style.setProperty('--cousinfontSize', '40px');

// }

window.onload = function(){
	// fontsizeUpdateTester()
}

function fontsizeUpdateTester(){
	var camePara = document.querySelector('.camo-paragraph');
	var cameraNewSize = getRandomInt(20, 100) + 'px';
	camePara.style.setProperty('--camoFontSize', cameraNewSize);
	let cameSize = window.getComputedStyle(camePara).getPropertyValue('font-size');
	console.log(cameSize)
	document.getElementById('camo-fontSize').innerHTML = cameSize;

}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// setInterval(fontsizeUpdateTester, 1000)

const inspectorButton = document.getElementById('inspectButton');
const inspectONButton = document.getElementById('machine');
const inspectOFFButton = document.getElementById('human');

const body = document.querySelector("body")
const allInspect = document.querySelectorAll('.inspect');
const allSections = document.querySelectorAll('section');
const inspectTL = document.getElementById('inspectTL'),
      inspectTR = document.getElementById('inspectTR'),
      inspectBL = document.getElementById('inspectBL'),
      inspectBR = document.getElementById('inspectBR');

inspectONButton.addEventListener('click', machine, false);
function machine(e){
	// console.log(e.currentTarget);
	// console.log(e.target);
	// inspectDoc()
	for(let each of allSections){
	    each.classList.add('section_inspecting');
	}
	
	body.addEventListener('mousemove', inspectDoc, false);
	body.style.cursor = 'crosshair';
}

inspectOFFButton.addEventListener('click', human, false);
function human(){
	body.removeEventListener('mousemove', inspectDoc, false);
	body.style.cursor = '';
	for(let each of allSections){
	    each.classList.remove('section_inspecting');
	}
	for(let each of allInspect){
	    // each.innerText = "";
	    for(let child of each.children){
	    	child.innerHTML = "";
	    }
	    each.style.width = 0;
	    each.style.height = 0;
	}
}


function inspectDoc(e){
	// e.preventDefault()
	// console.log(e.target.parentElement.className);
    // if(e.target.parentElement.className.includes("letter")){
	// if(containsDirectText(e.target)){
        let targetBound = e.target.getBoundingClientRect();
        console.log(targetBound)
        inspectTL.style.width = targetBound.left+'px';
        inspectTL.style.height = targetBound.bottom+'px';
        
        inspectBL.style.width = targetBound.right+'px';
        inspectBL.style.height = window.innerHeight - targetBound.bottom+'px';
        
        inspectBR.style.width = window.innerWidth - targetBound.right+'px';
        inspectBR.style.height = window.innerHeight - targetBound.top+'px';
        
        inspectTR.style.width = window.innerWidth - targetBound.left+'px';
        inspectTR.style.height = targetBound.top+'px';

        if(window.innerWidth * 0.75 < targetBound.left){
        	inspectBR.querySelector('span').innerHTML = "";	
        	inspectBL.querySelector('span').innerHTML = e.target.textContent;	
        }else{
        	inspectBL.querySelector('span').innerHTML = "";	
        	inspectBR.querySelector('span').innerHTML = e.target.textContent;	
        }
        
    // }
}


function toggle(button){
    if (button.value == "OFF") {
        button.value = "ON";
        button.innerHTML = "Its On"
    } else {
        button.value = "OFF";
        button.innerHTML = "Its Off"
    }
    return button.value;
}

function containsDirectText(el) {
  return [...el.childNodes]
      .some(n => n.nodeType === Node.TEXT_NODE
            && n.nodeValue.trim() !== '');
}