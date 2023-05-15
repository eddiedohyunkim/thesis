let getCurrentScript = document.querySelector('script[font="camouflage"]');
let browserDetector = document.createElement('script');
browserDetector.src = 'https://unpkg.com/bowser@2.11.0/es5.js';
document.body.insertBefore(browserDetector, getCurrentScript);

// const preText = document.createElement('p');
// preText.className = "console";
// preText.setAttribute("onclick", "selectAll()");
// preText.innerHTML = "Select All ↴";
// document.body.insertBefore(document.querySelector('#text'), preText);

const font = {
	'a': [`rW—ll:.i%@`,`zLNi:|Gj'iUS`,`#M|i:$Wji|—`,`Wj:'.ji';i|j|il:.T`,`x::iMOmGil;i`,'@—W%%M'],
	'b': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'':|s`,`h|j'j:.i;||j'il.j%`,`u;l|WN—;j'l*`,`nj:'.ji';j::il'|.;K`,`W@—W%V`],
	'c': [`Majl;|.lij.;'li;N`,`Q|:.%WMEa`,`!l;lA—@%O`,`G;|:WW@W`,`Mu.|:jl|;.i'j.liH`,`MMW—@W`],
	'd': [`h:jij:.';l|'j|igU`,`o';jW%O'|j1`,`n:ji%—@li:j`,`e;l|Om—;li#`,`u:.';j:ij'jl||iNJ`,`—@WWL%`],
	'e': [`e:'li'.:j|;il|.i:le`,`ol;|m@—W`,`h|j'j:.i;||j'il.jD`,`u;l|FsWN—`,`nj:'.ji';j::il'|.;~`,`@W—MOP`],
	'f': [`o:'li'.:j|;il|.i:le`,`ul;|mW@—`,`h|j'j:.i;||j'il.jD`,`e;l|WsFN—`,`u;l|LF%WN`,`@W—MOP`],
	'g': [`Majl;|.lij.;'lZM`,`Q|:.%WM|i|U`,`!l;l@W—D—`,`G;|:Wnij..lj.l:c`,`Mujl;|:.il:M;|.J`,`MMW—QNR`],
	'h': [`h:'.@PWl':c`,`u';jW%O'|jy`,`u:jij:.';l|'j|il;|x`,`o;l|Om—;li^`,`ni|;MOWjl:y`,`@W—MOP`],
	'i': [`h:i.n`,`u|ijo`,`e:jiu`,`n;l|o`,`oi|;o`,`eNG`],
	'j': [`m@—|l;h`,`—NsF|l;e`,`WM9x|l;h`,`3||;DMlilg`,`^R|l;i.l||—`,`D@M—N`],
	'k': [`n:lj—Ml||:G`,`ol;.@ij:|WP`,`h.ijl:.l';MOa`,`e;l|A%jl;.7~`,`u|:iM&W'.i*`,`@W—NQL`],
	'l': [`e:ilWDGKN`,`ol;|m@—W`,`h|j'QM%sO`,`u;l|FsWN—`,`nj:'.ji';j::il'|.;c`,`@W—MOP`],
	'm': [`||il.—@@ji.|:`,`|li.j;lKNU|i'.|i;`,`.i'|^':lJS;.i^l.;.`,`;l'.M;i'sli'%;li,`,`:ijlRF;li'ZCii;:`,`%@—W%%`],
	'n': [`h:'.;P@Hl'iu`,`u';j'il'%W'i'o`,`u:jiQ;l.iW'''o`,`o;l|mK;lil;'iih`,`ni|;MGGj'iik`,`@W—MOR`],
	'o': [`Majl;|.lij.;'lZO`,`Q|:.%WM|i|&`,`!l;l—MM@l';l`,`G;|:WW%l'.V`,`Mujl;|:.i'l|i.ML`,`MMW—QNR`],
	'p': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'':|s`,`h|j'j:.i;||j'il.j%`,`u;l|WN—EP`,`nj:'%M@m*`,`@W—mO%`],
	'q': [`Majl;|.lij.;ilAk?`,`Q|:.%WM||;@`,`!|;|AXN;|iMl'lZ`,`G;|:WmN|l;.@`,`Mujl;|:.i'l||.Mii'i`,`MMW%QNXx`],
	'r': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'l:|x`,`h|j'j:.i;||j.ij.jm`,`u;l|m@;lijKJ`,`nj:'—1@li.;x`,`@W—QOW`],
	's': [`NGli'.:j|;ljiW`,`Yi;j|WD%M`,`M%|ji:lijlmZ`,`WMWmljjl1`,`M;j:'.ji';j::iJF`,`W@—%ND`],
	't': [`e:i.jlili.ij'l;.'..k`,`MUC|ijOmT`,`N—J:jiQWJ`,`WaQ;l|M%k`,`@Dai|;GOD`,`@W—MO%`],
	'u': [`h:'.@PWl':c`,`u';jW%O'|jy`,`u:jiMM%l;|x`,`o;l|Om—;li^`,`nMi|;lijj';.KF`,`@W—MOP`],
	'v': [`x::iMOmGil;.`,`Wj:'MZM|:.P`,`#M|':$Wli|y?`,`zLNi:|Gj'iUY`,`K@Gil:i%Gr`,`@W—MWM`],
	'w': [`.l;.HGPl|;j—Wl:'i`,`<|:.%1|i9;iRNi|i^`,`Wil.N';jW.jiG;'.H`,`zR;l#jimMli2;j+x`,`%Sjl.iLQG;l.jG0`,`—@M%—MPM`],
	'x': [`~:i.lN%Cl'i.*`,`RJ|'ijWi||i@`,`NFRil|''m1a`,`LJ|;l|JVjil'W`,`^i|;M—Wij;r`,`@W—NQO`],
	'y': [`~:i.M—m'i.*`,`@|ijOm||i%`,`NFkijl|''mW`,`MaQ;l|MJY`,`WDai|;GOz`,`@W—NDm`],
	'z': [`C:'li'.:j|;il|.i:?`,`N%MTi;|jW`,`xMN|ji:D7N`,`@;||'FOWH`,`nj:'.ji';j::il'|.;^`,`@W—MwN`],
	' ': [`WWW`,`WWW`,`WWW`,`WWW`,`WWW`,`%23@`],
	'.': [`W@`,`W@`,`W@`,`W@`,`ni'j'o`,`WNo`],
	',': [`WNo`,`W@`,`W@`,`W@`,`ni'j'o`,`Wije`],
	':': [`W@`,`ni'j'o`,`W@`,`ni'j'o`,`W@`,`WNo`],
	';': [`W@`,`ni'j'o`,`W@`,`ni'j'o`,`Wije`,`WNo`],
	'!': [`h|j:in`,`E|j:T`,`Q|jN`,`nWo`,`hi|j;v`,`WNq`],
	'?': [`PL|j:il;|nR`,`^|j:MW;il^`,`@@|iljkR`,`—NMPW`,`QWi|j;Wk`,`@WMmO`],
	'0': [`MFjl;|.liZO`,`S|:.mM|i|B`,`!l;lR@Ql';r`,`A;|:Mmj:.X`,`Mujl;|:.i'RJ`,`MMW—LJ`],
	'1': [`@Qi.Kn`,`E.;.i'ijM*`,`$—:jiuA`,`@a;l|Wf`,`#—ii|gK`,`@WMW`],
	'2': [`APi.lj|:;j'bF`,`E.;.MWjlilJ`,`ZF@|:jiGV`,`!@l;l|WaM`,`a;:|lij;''il||jli*`,`%W——@`],
	'3': [`APi.j|:;lilKF`,`E.;.MWj:j;y`,`KM@|:j.La`,`E.;.@—j.;.|`,`APi.;j|:;l'i@`,`WW—@—`],
	'4': [`fZPGi..i;lW`,`GM.;iK.|iW`,`M;.|ND;:iW`,`!|:jij:.';l|'j|il;r`,`MA3Wjl:aZ`,`@W—OFL`],
	'5': [`@;:|li';jlil|K`,`M..;WW—`,`E.;.jl;.j::l;W`,`WKVW|:jJ`,`L|;li.:|ij|:|@`,`M%—W@`],
	'6': [`CQ;:|li';jiM`,`@..;W—G`,`E.;.jl;.j::l.W`,`Til;W@:j'y`,`LG.:|.j|:|Vz`,`M%—W@`],
	'7': [`E;:|li';jil:;i.|`,`@—W..;y`,`DK—ii;pa`,`M@ili%G`,`LD;:|Z?@`,`EM—W@`],
	'8': [`!Qi.j|i;lil:G!`,`c.;.@—;:.y`,`rOil.''l|:j.Gr`,`fl.;.@—j.;.|`,`pai.;j|:;lii@`,`@—W%M`],
	'9': [`pG.:|.j|:|Vz`,`Til;W@:j'y`,`@l;.jl;.j::liF`,`—FL%;..V`,`@;:|li';l;.Fx`,`M%—W@`],
	'(': [`@|.;`,`b|:R`,`r|i|C`,`b|:R`,`@|.;`,`—@`],
	')': [`;.|@`,`R:|b`,`C|i|r`,`R:|b`,`;.|@`,`—@`],
	'&': [`!Miij|ilDMm`,`c.;.Ep;:.m%`,`@il.:l|i—.|:k`,`fl.;.GNi:j|E2`,`pa|.;j.i.Wilj'.`,`@—WESM`],
	'=': [`W%sM—`,`a;:|lij;|ij||:s`,`Ms—%W`,`a;:|lij;|ij||:s`,`%—WsM`,`%WWDW`],
	'#': [`%N;ilW;il@`,`a;:|lij;|ij||:ijlg`,`Mgj.lWj.l—'`,`a;:|lij;||j||:ijlJ`,`'W;|.W;|.—*`,`%WWDWO`], 
	'+': [`@W%%`,`%F;.|VM`,`a;:|lij;|:|lg`,`%F:.|EM`,`%W—%`,`%mMDN`], 
	'-': [`@W%%`,`%—%W`,`a;:|lij;|:|lg`,`%@W%`,`%W—%`,`%mMDN`]
}

window.onload = function(){
	const getText = document.querySelector('#text');
	const getBrowser = browserNameIs(),
		isItTouch = isTouchDevice();

	if (getText.hasChildNodes()) {
  		for (const node of getText.children) {
  			let childrenText = node.innerText;
  			console.log(childrenText);

  			let paragraph = document.createElement('div');
			paragraph.className = 'paragraph';
			if(!isItTouch){ paragraph.classList.add('grayscaleFilter') };
			document.body.appendChild(paragraph);

			let fontSize = getComputedStyle(document.querySelector('.paragraph')).getPropertyValue('font-size');
			let lineHeit = getComputedStyle(document.querySelector('.paragraph')).getPropertyValue('line-height');
			let pushIt = parseFloat(fontSize)/4;
			// document.getElementById('consol').innerHTML = `f=${fontSize}/${lineHeit}`;

			for(let letter of childrenText){
				createLetter(letter.toLowerCase(), paragraph, isItTouch, getBrowser, pushIt);
			}
  		}
	}

	if(isItTouch){
		const glyphSpan_list = document.querySelectorAll('span[gl]');
		const glyphSpan_array = [...glyphSpan_list];
		glyphSpan_array.forEach(char => {
			document.addEventListener('selectionchange', () => {
  				const selection = window.getSelection();
  				const found = selection.containsNode(char);
  				if(found){
  					char.classList.add("selected");
  				}else{
  					char.classList.remove("selected");
  				}
			});	
		});
	}
}



function createLetter(character, paragraph, isTouchScreen, browserIs, pushIt){

	let letter = document.createElement('div');
	letter.className = 'letter';
	paragraph.appendChild(letter);
	
	let glyphsOption = `ilj:;|.'`

	for(let j=0; j<font[character].length; j+=1){
		let row = document.createElement('div');
		row.className = 'row';
		letter.appendChild(row);
		
		if(isTouchScreen){

			for(let k=0; k<font[character][j].length; k+=1){
				let char = document.createElement('span');
				char.style.left = pushIt*k*(-1)+'px';
				char.innerHTML = font[character][j][k]+`<i>:</i>`;
				row.appendChild(char);
	
				if(glyphsOption.includes(font[character][j][k]))char.setAttribute('gl','');
			}
			row.style.width = (row.offsetWidth+1) - (font[character][j].length*pushIt*1.15)+'px';

		}else{

			if(browserIs=='Safari' || browserIs=='Firefox'){
				if(browserIs=='Firefox') paragraph.style.lineHeight="1.1";
				for(let k=0; k<font[character][j].length; k+=1){
					let char = document.createElement('span');
					char.style.left = pushIt*k*(-1)+'px';
					char.innerHTML = font[character][j][k]+`<i>:</i>`;
					row.appendChild(char);
				}
				row.style.width = (row.offsetWidth+1) - (font[character][j].length*pushIt*1.15)+'px';

			}else{
				for(let k=0; k<font[character][j].length; k+=1){
					let char = document.createElement('span');
					char.innerHTML = font[character][j][k];
					row.appendChild(char);
				}
			}

		}
	}

}

function browserNameIs(){
	const result = bowser.getParser(window.navigator.userAgent);
	const browser = result.parsedResult.browser.name;
	return browser
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}


function selectAll(event) {
    var range, selection;
    var doc = document.body;
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(doc);
        selection.removeAllRanges();
        selection.addRange(range);
};
