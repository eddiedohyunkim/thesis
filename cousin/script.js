 const allLetter = {
  'a':['@','^','Ħ','Ƌ','ƌ','Ə','ɑ','ə','ʌ','ʎ','Δ','Λ','α','λ','Д','д','Ѧ','ѧ','Թ','Ⴋ','Ꭿ','Ꮑ','Ꮨ','ᐱ','ᗩ','△'],
  'b':['ß','Ƅ','ƅ','ɞ','ɮ','ʫ','β','Ъ','Ь','ъ','ь','Ҍ','ҍ','ദ','൫','Ᏸ','ᗽ','ᘶ','♭'],
  'c':['(','<','[','¢','©','ϲ','Ϲ','Հ','Ꮸ','ᙅ','ᘳ','₡','€','₵','ᐸ'],
  'd':['ð','Ժ','ժ','ծ','Ⴕ','Ⴛ','Ꮷ','ᕷ','ᗤ','ᘹ','⁍'],
  'e':['Ʃ','Ƹ','ƹ','ɐ','Ξ','ε','ξ','ϱ','ϵ','Є','є','Ҽ','ҽ','չ','ܧ','ല','Ꭷ','⁅','≋','≡','≤','ⵇ','ⵟ','𐎅'],
  'f':['ſ','ƭ','ʄ','Ғ','ғ','Բ','բ','ഽ','₣','ꗓ'],
  'g':['¶','ƍ','ɕ','ϑ','ܦ','Ꮆ','Ꮹ','ᕗ','ᕤ','ᕟ','𐒛'],
  'h':['ƕ','Ћ','ђ','Ҕ','ҕ','Ҥ','ҥ','Һ','һ','Ꮵ','Ᏺ','ᖺ','ᖾ','ⴼ'],
  'i':['|','¡','¦','ǀ','ǁ','।','Ꮖ','𐎟'],
  'j':['ɹ','ɺ','ʴ','ᖌ','ᖙ','⌡','⎠'],
  'k':['Ҡ','ҡ','Ӄ','ӄ','ꗣ'],
  'l':['£','ι','Լ','լ','ܐ','८','₤','↼','∟','∠','⎳'],
  'm':['ʍ','Ҧ','ҧ','Պ','ܚ','ന','൯','Ⴍ','ᗑ','ᙏ','∭','𐎍','𐒄'],
  'n':['Ŋ','ŋ','Π','η','π','Л','П','л','п','Ո','ռ','א','ה','ח','Ⴈ'],
  'o':['¤','°','º','˚','Ω','σ','Ѻ','ѻ','ܘ','ഠ','॰','൦','∘','○','◌','◎','☺'],
  'p':['Þ','þ','ƿ','ρ','φ','Ҏ','թ','ק','ܡ','ഴ','ᕈ','⁋'],
  'q':['ƪ','ɬ','Ⴆ','ᕴ','ⵚ','ⵕ','𐒂'],
  'r':['®','Ʀ','Γ','г','Ґ','ґ','Ի','Ր','ր','Ꭱ','Ꭸ','Ꮢ','ᖇ','ⴽ'],
  's':['$','§','ʃ','ζ','ς','Ֆ','ܭ','ऽ','ട','Ꮥ','ᔑ','ⵢ'],
  't':['+','Ɨ','ƾ','ǂ','ɟ','˕','τ','Ե','Է','Ւ','ז','Ꮏ','ᖶ','†','₸','├','┬','ⵐ','Ꮠ','ⴶ'],
  'u':['Ʊ','Ʋ','ʊ','ʋ','Ա','և','ᙀ'],
  'v':['Ɣ','ɣ','Ѵ','ѵ','ݍ','ݍ','Ꮙ','Ꮴ','ᐯ','√'],
  'w':['Ɯ','ɯ','ɰ','Ψ','ψ','ω','Ш','Щ','ш','щ','ש','ധ','Ꮤ','ᗐ','ᙎ'],
  'x':['×','˟','χ','ϰ','Ж','ж','ᕽ','᙭'],
  'y':['¥','µ','ɥ','ʮ','ʯ','γ','μ','Џ','У','Ц','Ч','ц','ч','џ','Կ','Վ','կ','ע','ץ','צ','Ⴗ','Ꭹ','ᖻ','ⵖ','ᘜ'],
  'z':['⇄','ਟ','ᘔ','≥'],
  ' ':' ',
  '.':'.',
  ',':',',
  "'":"'"

}
const typed = "a quick brown fox jumps over the lazy dog. Hello my name is Eddie Kim and I like to play with typography.";
let char;
let select;
for (let j=0; j<typed.length; j+=1){
  char = typed[j].toLowerCase();
  select = document.createElement('div');
  select.setAttribute('class', 'letter');
  select.setAttribute('id', 'select'+j);
  if(char === ' '){ select.className = 'space';}
  document.getElementById('typeArea').appendChild(select);
  for(let i=0; i<allLetter[char].length; i+=1){
    let option = document.createElement('div');
    option.setAttribute('class', 'options');
    // option.style.backgroundColor=`rgb(${ran(256)},${ran(256)},${ran(256)})`;
    option.innerHTML = allLetter[char][i];
    select.appendChild(option);
  }
  autoScroll(`select${j}`, j, allLetter[char])
}

function autoScroll(elem, num, letter){
  let options = document.getElementById(elem);
  let style = window.getComputedStyle(options, null).getPropertyValue('height');
  let optionHeight = parseFloat(style); 
  setInterval(function(){  
    options.scroll({ top: ran(letter.length)*optionHeight, left: 0, behavior: 'smooth' });
  }, 2000) 
}
function ran(num){ return Math.floor(Math.random()*num); }



