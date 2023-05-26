const frame = document.querySelector('section');
const list = document.querySelectorAll('article');
const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
const names = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = list.length;
const deg = 360/len;
let num = 0;
let active = 0;

names.forEach((name, index)=>{
  const pic = list[index].querySelector('.pic');
  const h2 = list[index].querySelector('.txt h2');
  list[index].style.transform = `rotate(${deg*index}deg) translateY(-100vh)`; // 겹쳐있는 패널들을 회전상태로 놓기
  pic.style.backgroundImage = `url(img/${name}.jpg)`
  h2.innerText = name;
  const audio = document.createElement('audio');
  audio.setAttribute('src',`music/${name}.mp3`)
  audio.setAttribute('loop','loop');
  list[index].append(audio);

})



// 버튼을 클릭하면 시계 방향으로 회전 
prev.addEventListener('click', e=>{
  frame.style.transform = `rotate(${deg* ++num}deg)`;

  // prev 클릭시 활성화 되는 패널 
  (active===0) ? active = len-1 : active--;
    
  for(let el of list) el.classList.remove('on');
  list[active].classList.add('on');
})

// 버튼을 클릭하면 반시계 방향으로 회전 
next.addEventListener('click', e=>{
  frame.style.transform = `rotate(${deg* --num}deg)`;
  
  // next 클릭시 활성화 되는 패널
  (active === len-1) ? active = 0 : active++;

  for(let el of list) el.classList.remove('on');
  list[active].classList.add('on');
}) 


for(let el of list){
  const play = el.querySelector('.play');
  const pause = el.querySelector('.pause');
  const load = el.querySelector('.load');

  play.addEventListener('click', e=>{
    e.currentTarget.closest('article').querySelector('.pic').classList.add('on');
    e.currentTarget.closest('article').querySelector('audio').play();
  })
  pause.addEventListener('click', e=>{
    e.currentTarget.closest('article').querySelector('.pic').classList.remove('on');
    e.currentTarget.closest('article').querySelector('audio').pause();
  })

  load.addEventListener('click', e=>{
    e.currentTarget.closest('article').querySelector('pic').classList.add('on');
    e.currentTarget.closest('article').querySelector('audio').play();
  })
}

