const cousinStyle = document.createElement('link');
cousinStyle.rel = "stylesheet";
cousinStyle.href = "fonts/cousin/cousin.css";
document.head.appendChild(cousinStyle);

const cousinFont = {
  'a':['@','^','Ƌ','ƌ','Ə','ɑ','ə','ʌ','ʎ','Δ','Λ','α','λ','Д','д','Ѧ','ѧ','Թ','Ⴋ','Ꭿ','Ꮑ','Ꮨ','ᐱ','ᗩ','△'],
  'b':['ß','Ƅ','ƅ','ɞ','ɮ','ʫ','β','Ъ','Ь','ъ','ь','Ҍ','ҍ','ദ','൫','Ᏸ','ᗽ','ᘶ','♭'],
  'c':['(','<','[','¢','©','ϲ','Ϲ','Հ','Ꮸ','ᙅ','ᘳ','₡','€','₵','ᐸ'],
  'd':['ð','Ժ','ժ','ծ','Ⴕ','Ⴛ','Ꮷ','ᕷ','ᗤ','ᘹ','⁍'],
  'e':['Ʃ','Ƹ','ƹ','Ξ','ε','ξ','ϱ','ϵ','Є','є','Ҽ','ҽ','չ','ܧ','ല','Ꭷ','⁅','≤','ⵇ','ⵟ','𐎅'],
  'f':['ſ','ƭ','Ғ','ғ','Բ','բ','₣','ꗓ','ʄ','ഽ'],
  'g':['ƍ','ɕ','ϑ','ܦ','Ꮆ','Ꮹ','ᕗ','ᕤ','ᕟ','𐒛'],
  'h':['ƕ','Ћ','ђ','Ҕ','ҕ','Ҥ','ҥ','Һ','һ','Ꮵ','Ᏺ','ᖺ','ᖾ','ⴼ'],
  'i':['|','¡','¦','ǀ','ǁ','।','Ꮖ'],
  'j':['ɹ','ɺ','ʴ','ᖌ','ᖙ','⌡','⎠'],
  'k':['Ҡ','ҡ','Ӄ','ӄ','ꗣ'],
  'l':['£','ι','Լ','լ','ܐ','८','₤','↼','∟','∠','⎳'],
  'm':['ʍ','Ҧ','ҧ','Պ','ܚ','ന','൯','Ⴍ','ᗑ','ᙏ','𐒄'],
  'n':['Ŋ','ŋ','Π','η','π','Л','П','л','п','Ո','ռ','ה','ח','Ⴈ'],
  'o':['¤','°','º','˚','Ω','σ','Ѻ','ѻ','ܘ','ഠ','॰','൦','∘','○','◌','◎','☺'],
  'p':['Þ','þ','ƿ','ρ','φ','Ҏ','թ','ק','ܡ','ഴ','ᕈ','⁋'],
  'q':['ƪ','ɬ','Ⴆ','ᕴ','ⵕ','𐒂'],
  'r':['®','Ʀ','Γ','г','Ґ','ґ','Ի','Ր','ր','Ꭱ','Ꭸ','Ꮢ','ᖇ','ⴽ'],
  's':['$','§','ʃ','ς','Ֆ','ܭ','ऽ','ട','Ꮥ','ᔑ','ⵢ'],
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

addEventListener("load", (event) => {
    let cousinGetText = document.querySelector('#cousin-text');

  if (cousinGetText.hasChildNodes()) {
    for (let cousinNode of cousinGetText.children) {
      let cousinChildrenText = cousinNode.innerText;

      let cousinGetTextTo = cousinGetText.getAttribute('to')
      let cousinParagraph = document.createElement('div');
      cousinParagraph.className = 'cous-paragraph';
      document.querySelector(cousinGetTextTo).appendChild(cousinParagraph);

      for(let letter of cousinChildrenText){
        createCousin(letter.toLowerCase(), cousinParagraph);
      }
    }
  }
});


function createCousin(character, paragraph){
  let letter = document.createElement('div');
  letter.className = 'cous-letter';
  letter.options = cousinFont[character].length;
  if(character === ' '){ letter.classList.add('space');}
  paragraph.appendChild(letter);
  for(let each of cousinFont[character]){
    let option = document.createElement('span');
    option.className = 'options'
    option.innerHTML = each;
    letter.appendChild(option);
  }
  letter.addEventListener('mouseenter', (e)=>{
    autoScroll(letter);
  })
}

function autoScroll(elem){
  let height = window.getComputedStyle(elem).getPropertyValue('height');
  height = parseFloat(height);
  elem.scroll({ top: ran(elem.options)*height, left: 0, behavior: 'smooth' });
}
function ran(num){ return Math.floor(Math.random()*num); }



