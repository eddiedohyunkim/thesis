	const typeArea = document.getElementById('typeArea');
	const font = {
		'a': [`K@Ml:i%X1`,`zLNi:|Gj'iUY`,`#M|':$Wli|y?`,`Wj:'.ji';i|j|il:.T`,`x::iMOmGil;j`,'@—W%%M'],
		'b': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'':|s`,`h|j'j:.i;||j'il.j%`,`u;l|WN—;j'l*`,`nj:'.ji';j::il'|.;K`,`W@—W%V`],
		'c': [`Majl;|.lij.;'lZO`,`Q|:.%WM|i|B`,`!l;lA—@%—`,`G;|:WW%l'.V`,`Mujl;|:.i'l|i.ML`,`MMW—QNR`],
		'd': [`h:jij:.';l|'j|igU`,`o';jW%O'|j1`,`n:ji%—@li:j`,`e;l|Om—;li#`,`u:.';j:ij'jl||iNJ`,`—@WWL%`],
		'e': [`e:'li'.:j|;il|.i:le`,`ol;|m@—W`,`h|j'j:.i;||j'il.jD`,`u;l|FsWN—`,`nj:'.ji';j::il'|.;~`,`@W—MOP`],
		'f': [`o:'li'.:j|;il|.i:le`,`ul;|mW@—`,`h|j'j:.i;||j'il.jD`,`e;l|WsFN—`,`u;l|LF%WN`,`@W—MOP`],
		'g': [`Majl;|.lij.;'lZM`,`Q|:.%WM|i|U`,`!l;l@W—D—`,`G;|:Wmij..lj.l:c`,`Mujl;|:.i'l|i.N;i.`,`MMW—QNR`],
		'h': [`h:'.@PWl':c`,`u';jW%O'|jy`,`u:jij:.';l|'j|il;|x`,`o;l|Om—;li^`,`ni|;MOWjl:y`,`@W—MOP`],
		'i': [`h:i.n`,`u|ijo`,`e:jiu`,`n;l|o`,`oi|;o`,`eNG`],
		'j': [`m@—|l;h`,`—NsF|l;e`,`WM9x|l;h`,`3||;DMlilg`,`^R|l;i.l||—`,`D@M—N`],
		'k': [`n:lj—Ml||:G`,`ol;.@ij:|WP`,`h.ijl:.l';MOa`,`e;l|A%jl;.7~`,`u|:iM&W'.i*`,`@W—NQL`],
		'l': [`e:ilWDGKN`,`ol;|m@—W`,`h|j'QM%sO`,`u;l|FsWN—`,`nj:'.ji';j::il'|.;c`,`@W—MOP`],
		'm': [`||il.W@@'..|;`,`|li.';lKNU|i'.|i|`,`.i'|^':lJS;.i^l';|`,`;l'.M;i'sl''%;li.`,`:ijlRF;li'ZCli;i`,`@—W%M%`],
		'n': [`h:'.;P@Hl'iu`,`u';j'il'%W'i'o`,`u:jiQ;l.iW'''o`,`o;l|mK;lil;'iih`,`ni|;MGGj'iik`,`@W—MOR`],
		'o': [`Majl;|.lij.;'lZO`,`Q|:.%WM|i|&`,`!l;l—MM@l';l`,`G;|:WW%l'.V`,`Mujl;|:.i'l|i.ML`,`MMW—QNR`],
		'p': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'':|s`,`h|j'j:.i;||j'il.j%`,`u;l|WN—EP`,`nj:'%M@m*`,`@W—mO%`],
		'q': [`Majl;|.lij.;'lAk?`,`Q|:.%WM|i|—`,`!l;lAXN;|iMl''A`,`G;|:W%Nl'.U^`,`Mujl;|:.i'l|i.Mii'i`,`MMW%QNX^`],
		'r': [`e:'li'.:j|;il|.iCy`,`ol;|@—1'':|s`,`h|j'j:.i;||j.ii.jM`,`u;l|m@;lijKJ`,`nj:'%M%li.;*`,`@W—mO%`],
		's': [`NGli'.:j|;ljiW`,`Yi;j|WD%M`,`M%|ji:lijlmZ`,`WMWmljjl1`,`M;j:'.ji';j::iJF`,`W@—%ND`],
		't': [`e:i.jlili.ij'l;.'..k`,`MUC|ijOmT`,`N—J:jiQWJ`,`WaQ;l|M%k`,`@Dai|;GOD`,`@W—MO%`],
		'u': [`h:'.@PWl':c`,`u';jW%O'|jy`,`u:jiMM%l;|x`,`o;l|Om—;li^`,`nMi|;lijj';.KF`,`@W—MOP`],
		'v': [`x::iMOmGil;.`,`Wj:'MZM|:.P`,`#M|':$Wli|y?`,`zLNi:|Gj'iUY`,`K@Gil:i%A*`,`@W—MWM`],
		'w': [`.l;.HGPl|;j—Wl:'i`,`<|:.%1|i9;iRNi|i^`,`Wil.N';jW.jiG;'.H`,`zR;l#jimMli2;j+x`,`%Sjl.iLQG;l.jG0`,`—@M%—MPM`],
		'x': [`~:i.lN%Cl'i.*`,`RJ|'ijWi||i@`,`NFRil|''m1a`,`LJ|;l|JVjil'W`,`^i|;M—Wij;*`,`@W—NQm`],
		'y': [`~:i.M—m'i.*`,`@|ijOm||i%`,`NFkijl|''mW`,`MaQ;l|MJY`,`WDai|;GOz`,`@W—NDm`],
		'z': [`C:'li'.:j|;il|.i:?`,`N%MTi;|jW`,`xMN|ji:D7N`,`@;||'FOWH`,`nj:'.ji';j::il'|.;^`,`@W—MwN`],
		' ': [`WWW`,`WWW`,`WWW`,`WWW`,`WWW`,`—@@`],
		'.': [`vWn`,`sWo`,`zWu`,`sWo`,`yi|j;k`,`o—K`],
		',': [`{Wn`,`{Wn`,`(Wo`,`(Wo`,`)iij;o`,`—|G`],
		':': [`oWn`,`oWn`,`niij;o`,`nWo`,`niij;o`,`oWG`],
		';': [`{Wn`,`{Wn`,`}iij;o`,`(Wo`,`)iij;o`,`—|G`],
		'!': [`h|j:in`,`E|j:T`,`Q|jN`,`nWo`,`hi|j;v`,`WNq`],
		'?': [`PL|j:il;|nR`,`^|j:MW;il^`,`@@|iljkR`,`—NMPW`,`QWi|j;Wk`,`@WMmO`],
		
	}

	const sentence = 'A quick brown fox jumps over the lazy dog. Hello, my name is Eddie Kim and I like to play with typography!';
	
	for(let each of sentence){
		createLetter(each.toLowerCase());
	}

	function createLetter(alphabet){
		let letter = document.createElement('div');
		letter.className = 'lg-char';
		typeArea.appendChild(letter);
		for(let j=0; j<font[alphabet].length; j+=1){
			let line = document.createElement('div');
			line.className = 'sm-char-cont';
			letter.appendChild(line);
			if( browserIs()=='Safari' ){
				let style = window.getComputedStyle(typeArea, null).getPropertyValue('font-size');
				let fontSize = parseFloat(style)*5; 
				let pushIt = fontSize*0.05;
				console.log(fontSize); 
				for(let k=0; k<font[alphabet][j].length; k+=1){
					let char = document.createElement('span');
					char.className = 'sm-char';
					char.style.left = pushIt*k*(-1)+'px';
					char.innerHTML = font[alphabet][j][k]+`<span class='empty'>:</span>`;
					line.appendChild(char);
				}
				line.style.width = (line.offsetWidth+1) - (font[alphabet][j].length*pushIt*1.15)+'px';

			}else{

				for(let k=0; k<font[alphabet][j].length; k+=1){
					let char = document.createElement('span');
					char.innerHTML = font[alphabet][j][k];
					line.appendChild(char);
				}

			}
		}

	}

	function browserIs(){
		const result = bowser.getParser(window.navigator.userAgent);
		const browser = result.parsedResult.browser.name;
		return browser
	}

	


	// const opts = `@—W%MmOQGNHwUCRDYKS&ABXPVETZF+=<>Lbdpq0123456789#$_?gahuneoJkc~–vszyx^*r!()-{}"ftI[],/\\|;:.jil'@`;
	// for(let each of opts){
	// 	let span = document.createElement('span');
	// 	span.className = 'letters'
	// 	span.innerHTML = each+`<span class="empty">.</span>`;
	// 	document.getElementById('typeArea2').appendChild(span);
	// }

