let map = {};
window.addEventListener('load', function(){

	let paragraphs_list = document.querySelectorAll('.camouflage-text');
	var paragraphs_array = [...paragraphs_list];
	paragraphs_array.forEach(paragraph => {
		if(paragraph.hasAttribute('editable')){

			let caret = document.createElement('div');
			caret.id = 'caret';
			
			let fontSize = window.getComputedStyle(paragraph).getPropertyValue("font-size");
			fontSize = parseInt(fontSize);
			caret.style.height = fontSize * 1.2 +"px";

			paragraph.appendChild(caret);
							
			caretFunctions(paragraph);
			typingFunctions(paragraph);
			
		}
	});
})

window.addEventListener('load', function(){

	// define an observer instance
	var observer = new IntersectionObserver(onIntersection, {
	  root: null,   // default is the viewport
	  threshold: .5 // percentage of target's visible area. Triggers "onIntersection"
	})
	
	// callback is called on intersection change
	function onIntersection(entries, opts){
	  entries.forEach(entry => {
	  	const typefaceName = entry.target.id;
	  	entry.target.classList.toggle('sectionVisible', entry.isIntersecting);
	  	let footer = document.getElementById('footer');
	  	let current = footer.querySelector('#nav-'+typefaceName);
	  	current.classList.toggle("nav-currentTypeface", entry.isIntersecting);

	  	if(entry.isIntersecting){
	  		const location = window.location.toString().split('#')[0];
        	history.replaceState(null, null, location + '#' + typefaceName);
	  	}
	  })
	}
	
	// Use the observer to observe an element
	// observer.observe( document.querySelector('.box') )
	
	let paragraphs = document.querySelectorAll('section');
	var paragraphs_arr = [...paragraphs];
	paragraphs_arr.forEach(element => {
		observer.observe( element )	
	});

	// To stop observing:
	// observer.unobserve(entry.target)
	
})


// GROUP OF TYPING FUNCTIONS
function typingFunctions(inEditable){

	window.addEventListener('keydown', function(e){
		singleKeys(e, inEditable);
		multipleKeys(e, inEditable);

		// caret.scrollIntoView()
	});

	window.addEventListener('keyup', function(e){
		multipleKeys(e, inEditable);
	})

}

// GROUP OF CARET FUNCTIONS
function caretFunctions(inEditable){

	inEditable.addEventListener("click", caretPosFromClick, false);
	window.addEventListener("keydown", caretPosFromArrowKey, false);
	// moveCaretFromArrowKey(inEditable)

	// IF device is touch and dont have keyboard
	if( touchScreen() ){
		let fakeInput = document.createElement('input');
		fakeInput.type = "text";
		fakeInput.className = "fakeInput";
		fakeInput.spellcheck = false;
		caret.appendChild(fakeInput);

		inEditable.addEventListener('click', function(){
			fakeInput.focus();
		});

	}

}


// TYPING FUNCTIONS

function singleKeys(e, editor){

	if (e.key.length == 1 && (map['Meta'] == false || !('Meta' in map)) ){

		keyLowerCased = e.key.toLowerCase();
		console.log(keyLowerCased);
		createCamouflage(keyLowerCased, editor, isItTouch, getBrowser, editor)

	}else if(e.key == 'Backspace'){
		if(caret.previousElementSibling){
			caret.previousElementSibling.remove()	
		}
	}
}

function multipleKeys(e, editor){
	map[e.key] = e.type == 'keydown';
	console.log(map)
	if(map['Meta'] && map['Backspace']){
		let allTyped = getChildrenFrom(editor.firstChild, caret);
		for(let each of allTyped)
			each.remove()
		map = {};
	}
}

function getChildrenFrom(n, until){
	let childrenList = [];
	for ( ; n; n = n.nextElementSibling ){
		childrenList.push( n );
		if(n.nextElementSibling === until){
			return childrenList;
		}
	} 
};



// CARET FUNCTIONS

function caretPosFromArrowKey(e){
	let currentCaret = caret;
	let to = arrowKeyDirection(e, caret);
	if (to == null) { 
		return true;
	}
	moveCaret(to);
}

function moveCaret(to){
	let editor = caret.parentElement;
	let toDirection = to['direction'];
	let toElem = to['elem'];

	console.log(toElem);

	if(toDirection === "Left" && toElem){
		editor.insertBefore(caret, toElem);
	}

	if(toDirection === "Right" && toElem){
		editor.insertBefore(caret, toElem.nextElementSibling)
	}

}

function arrowKeyDirection(e, caret){
	switch (e.which) {
		case 37:
			return {
				'direction': "Left",
				'elem': caret.previousElementSibling
			}	
		case 38:
			return {
				'direction': "up",
				'elem': prevSiblings(caret)
			}
		case 39:
			return {
				'direction': "Right",
				'elem': caret.nextElementSibling
			}
		case 40:
			return {
				'direction': "down",
				'elem': nextSiblings(caret)
			}
	}
	return null;
}

function prevSiblings(target) {
	let siblings = [], n = target;
	while(n = n.previousElementSibling) siblings.push(n);
	return siblings;
}

function nextSiblings(target) {
	let siblings = [], n = target;
	while(n = n.nextElementSibling) siblings.push(n);
	return siblings;
}



function caretPosFromClick(e) {
	let range, nearestNode, nearestNodeParent;
	let editor = e.currentTarget;
	let caret = editor.querySelector('#caret');
	let chosenOne;

	if (document.caretPositionFromPoint) {
		range = document.caretPositionFromPoint(e.clientX, e.clientY);
		nearestNode = range.offsetNode;
		nearestNodeParent = range.offsetNode.parentElement;
	} else if (document.caretRangeFromPoint) {
		// Use WebKit-proprietary fallback method
		range = document.caretRangeFromPoint(e.clientX, e.clientY);
		nearestNode = range.startContainer;
		nearestNodeParent = range.commonAncestorContainer.parentElement;
	} else {
		// If nothing above works fallback method
		moveCaretFromClick(e)
	}


	// if "chosenOne" is Editor
	if( nearestNode === editor ){ 
		let allLetters = editor.querySelectorAll('*[class*="letter"]');
		chosenOne = allLetters[allLetters.length-1];
		caretLeftOrRight(chosenOne, e)

	// if "chosenOne"s parent is Editor ("chosenOne" is "Letter")
	}else if( nearestNodeParent === editor ){ 

		// if "chosenOne" is Caret
		if(nearestNode === caret){ 
			chosenOne = nearestNode.previousElementSibling;
			caretLeftOrRight(chosenOne, e)

		// if "chosenOne" is NOT Caret ("chosenOne" is "Letter")	
		}else{ 
			chosenOne = nearestNode;
			caretLeftOrRight(chosenOne, e)
		}

	// Finally, if "chosenOne" is IN Editor
	} else if( editor.contains( nearestNodeParent ) ){ 
		chosenOne = getLetterFrom(nearestNodeParent);
		caretLeftOrRight(chosenOne, e)
	}
}

function moveCaretFromClick(e){
	let editor = e.currentTarget;
	if(editor.contains(e.target) && e.target !== editor){
		let letterClicked = getLetterFrom(e.target);
		caretLeftOrRight(letterClicked, e)
	}
}

function getLetterFrom(elem) {
    if (elem.classList.contains("camo-letter")) {
    	return elem;
    } else {
    	return getLetterFrom(elem.parentElement);
    }
}

function caretLeftOrRight(letter, e){
	let leftRight = leftOrRight(letter, e);
	(leftRight === "Left") ? e.currentTarget.insertBefore(caret, letter) : e.currentTarget.insertBefore(caret, letter.nextElementSibling)
}

function leftOrRight(elem, e){
	const clickTargetWidth = elem.offsetWidth;
	const xCoordInClickTarget = e.clientX - elem.getBoundingClientRect().left;
	return ( (clickTargetWidth / 2 > xCoordInClickTarget) ? 'Left' : 'Right');
}


function touchScreen() {
	return (('ontouchstart' in window) ||
 		(navigator.maxTouchPoints > 0) ||
 		(navigator.msMaxTouchPoints > 0));
}

var scrollHowMuch = 0;
document.addEventListener('click', function(event) {
  if (!event.target.matches('.btn-scroll-into')) return;

  event.preventDefault();
  
  let section = document.getElementById(event.target.dataset.target);
  let sectionScrollBox = section.parentElement;
  // scrollHowMuch = element.getBoundingClientRect().left;
  scrollHowMuch = sectionScrollBox.scrollLeft + section.getBoundingClientRect().left;
  // element.scrollIntoView({behavior: "smooth",block: "start", inline: "start"});
  sectionScrollBox.scrollTo({top:0, left:scrollHowMuch, behavior:'smooth'});

});




// function idleLogout() {
//     var t;
//     var swipe;
//     window.onload = resetTimer;
//     window.onmousemove = resetTimer;
//     window.onmousedown = resetTimer;  // catches touchscreen presses as well      
//     window.onclick = resetTimer;      // catches touchpad clicks as well
//     window.onkeydown = resetTimer;   
//     // window.addEventListener('scroll', resetTimer, true); // improved; see comments

//     function yourFunction() {
//         // your function for too long inactivity goes here
//         // e.g. window.location.href = 'logout.php';
//         console.log("nothing");
//         let scrollbox = document.querySelector("article");
//         let scrollboxWidth = scrollbox.getBoundingClientRect().width
//         let distance;
        
        
//         	console.log("swipe");
//         	console.log(scrollbox.scrollLeft);
//         	if(2700 < scrollbox.scrollLeft){
//         		distance = 0;	
//         	}else{
//         		distance = scrollbox.scrollLeft + window.innerWidth;	
//         	}
//         // swipe = setInterval(function(){
//         	scrollbox.scrollTo({top:0, left:distance, behavior:'smooth'})
//         // }, 5000);

        
//     }

//     function resetTimer() {
//     	let swipe;
//         // clearTimeout(t);
//         clearInterval(t)
//         t = setInterval(function(){
//         	// swipe = setInterval(yourFunction, 5000)
//         	yourFunction()
//         }, 10000);
//     }
// }
// idleLogout();

