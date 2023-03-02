	// const typeArea = document.getElementById('typeArea');
const typeArea = document.querySelectorAll('.typeArea');
console.log(typeArea[0])
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
		'-': [`@W%%`,`%—%W`,`a;:|lij;|:|lg`,`%@W%`,`%W—%`,`%mMDN`],
	}

	const sentence = '908A, eroon kang & andrew leclair will give a lecture.';
	const sentence2 = 'March 24, 2023, 3pm';
	const sentence3 = 'Parsons School of design 63 5th ave, L101, New York, NY'
	// const sentence = 'A';
	
	for(let each of sentence){
		createLetter(each.toLowerCase(), typeArea[0]);
	}
	for(let each of sentence2){
		createLetter(each.toLowerCase(), typeArea[1]);
	}
	for(let each of sentence3){
		createLetter(each.toLowerCase(), typeArea[2]);
	}

	function createLetter(alphabet, element){
		let doNotPrint = `ilj:;|.'`

		let letter = document.createElement('div');
		letter.className = 'letter';
		element.appendChild(letter);
		for(let j=0; j<font[alphabet].length; j+=1){
			let line = document.createElement('div');
			line.className = 'row';
			letter.appendChild(line);
			if( browserIs()=='Safari' || browserIs()=='Firefox' ){

				if(browserIs()=='Firefox') typeArea.style.lineHeight="1.1";

				let style = window.getComputedStyle(element, null).getPropertyValue('font-size');
				let fontSize = parseFloat(style)*5; 
				let pushIt = fontSize*0.05;
				console.log(pushIt); 
				for(let k=0; k<font[alphabet][j].length; k+=1){
					let char = document.createElement('span');
					char.style.left = pushIt*k*(-1)+'px';
					char.innerHTML = font[alphabet][j][k]+`<span class='empty'>:</span>`;
					line.appendChild(char);
					// doNotPrint.includes(font[alphabet][j][k]) ? char.classList.add("noSelect") : console.log() 
				}
				line.style.width = (line.offsetWidth+1) - (font[alphabet][j].length*pushIt*1.15)+'px';

			}else{
				
				for(let k=0; k<font[alphabet][j].length; k+=1){
					let char = document.createElement('span');
					char.innerHTML = font[alphabet][j][k];
					line.appendChild(char);

					// doNotPrint.includes(font[alphabet][j][k]) ? char.classList.add("noSelect") : console.log() 
				}

			}
		}

	}

	function browserIs(){
		const result = bowser.getParser(window.navigator.userAgent);
		const browser = result.parsedResult.browser.name;
		console.log(browser)
		return browser

	}


// function updateDisplay(event) {
// 	let x = map(event.pageX, 0, window.innerWidth, -2, 2)
//   let y = map(event.pageY, 0, window.innerHeight, 1.2, 2);
//   typeArea.style.lineHeight = y;
//   typeArea.style.letterSpacing = x+'em';
// }
// function map(n, start1, stop1, start2, stop2) {
//   const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
//     return newval;

// };
// window.addEventListener("mousemove", updateDisplay, false);

	


	// const opts = `@—W%MmOQGNHwUCRDYKS&ABXPVETZF+=<>Lbdpq0123456789#$_?gahuneoJkc~–vszyx^*r!()-{}"ftI[],/\\|;:.jil'@`;
	// for(let each of opts){
	// 	let span = document.createElement('span');
	// 	span.className = 'letters'
	// 	span.innerHTML = each+`<span class="empty">.</span>`;
	// 	document.getElementById('typeArea2').appendChild(span);
	// }

