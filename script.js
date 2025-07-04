function showSurprise() {
  document.getElementById('popup').style.display = 'flex';
}

function hideSurprise() {
  document.getElementById('popup').style.display = 'none';
}

let playing = false;
function toggleMusic() {
  const music = document.getElementById('bg-music');
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}

// Generate 100+ Sorry Cards
const messages = [
  "Sorry my queen", "Sorry my love", "Forgive me my angel", "You are my everything", "I miss you","I love you so much"
,  "I'm nothing without you", "My heart wants you", "Enna kinni", "I need your smile", "You're my peace",
  "You're my light", "You're my world", "You are my bangaru", "Please smile again", "Your mine",
  "Yenna appu", "You're my jaan", "You're my princess", "You’re my heartbeat", "Sorry meri jaan",
  "You’re my sunshine", "Sorry my shona", "You’re my moonlight", "You're my dream", "You're my only one",
  "Sorry from my heart", "You're my reason", "I’m deeply sorry", "You’re my happy place", "You mean everything",
  "You’re my lifeline", "Enna apulu ", "Sorry my soulmate", "You're my jojja", "My love, forgive me",
  "You’re my baby girl", "Enna kinni", "You're too precious", "Sorry meri rani", "I love you so much",
  "You’re all I want", "Sorry meri princess", "You’re my jaanu", "You’re the one", "Sorry sweetheart",
  "Please hold my hand", "You're my oxygen", "You're my hope", "Sorry cutie", "Enna baabu",
  "Sorry my angel", "Forever yours", "Take my sorry", "Mujhe maaf kardo", "I’ll fix everything", "My queen forever",
  "Sorry chinni", "You're my teddy", "You're my baby", "Forgive me chinna", "I'm truly sorry", "You are the one",
  "My heart calls you", "You’re my pari", "You're my magic", "You're my muddu", "You're my melody",
  "Come hug me", "Let's fix us", "Yenna jojja", "Sorry meri jaaneman", "Don’t be sad", "You are everything for me",
  "You're my soul", "Please forgive me", "You’re all mine", "Eer enna bangaru", "You're my safe place",
  "Iam nothing without you", "I promise i will dont repeat this", "You’re my angel", "No more tears", "My queen, please",
  "I’m yours forever", "You're my bunny", "You’re my everything", "I’ll wait for you", "Don’t stay mad",
  "You’re my cutiepie", "You’re my universe", "Please accept my sorry", "I’m truly yours", "Come smile again",
  "Enna kinnu", "Your smile is my life", "You are my everything", "You’re my heart", "I love you",
  "You're my sunshine ray", "I need your hug", "Take my sorry", "Mujhe maaf kardo", "I’ll fix everything", "My queen forever",
  "Sorry chinni", "You're my teddy", "You're my baby", "Forgive me chinna", "I'm truly sorry", "You are the one",
  "My heart calls you", "You’re my pari", "You're my magic", "You're my muddu", "You're my melody",
  "Come hug me", "Let's fix us", "Yenna jojja", "Sorry meri jaaneman", "Don’t be sad", "You are everything for me",
  "You're my soul", "Please forgive me", "You’re all mine", "Eer enna bangaru", "You're my safe place",
  "Iam nothing without you", "I promise i will dont repeat this", "You’re my angel", "No more tears", "My queen, please",
  "I’m yours forever", "You're my bunny", "You’re my everything", "I’ll wait for you", "Don’t stay mad",
  "You’re my cutiepie", "You’re my universe", "Please accept my sorry", "I’m truly yours", "Come smile again",
  "Enna kinnu", "Your smile is my life", "You are my everything", "You’re my heart", "I love you",
  "You're my sunshine ray", "I need your hug","Yenna appu", "You're my jaan", "You're my princess", "You’re my heartbeat", "Sorry meri jaan",
  "You’re my sunshine", "Sorry my shona", "You’re my moonlight", "You're my dream", "You're my only one",
  "Sorry from my heart", 
  "Iam nothing without you", "I promise i will dont repeat this","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry",
  "sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry","sorry",
];

const cardGrid = document.querySelector('.card-grid');

for (let i = 0; i < 300; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = messages[i % messages.length];
  cardGrid.appendChild(card);
}

// Heart Canvas Animation
const canvas = document.getElementById("heart-canvas");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let hearts = [];

function Heart() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.alpha = Math.random();
  this.draw = function () {
    ctx.font = `${this.size}px Arial`;
    ctx.fillStyle = `rgba(255, 105, 180, ${this.alpha})`;
    ctx.fillText("❤", this.x, this.y);
  };
  this.update = function () {
    this.y += this.speed;
    if (this.y > h) {
      this.y = 0;
      this.x = Math.random() * w;
    }
  };
}

for (let i = 0; i < 100; i++) {
  hearts.push(new Heart());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  hearts.forEach(h => {
    h.update();
    h.draw();
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
const message = `Bangaru enna mith kopane, Namak yerna mith moke jaasthi ippunda aklna mith kopa jaasthi barpundge😁,
                 Enk gothundu enna bangarug enna mith moke jasthi anchad churu kopala jasthind❤,
                 Eer enna jojja atha , yan malthina tappun maapu malpule, Yaanonji erena kinni baaba ithileka atha,
                 eerna baalen maapu malpule,Enna jojja telthondu happy aadu ippodu avve porlu ❤😍 `;

let i = 0;
function typeEffect() {
  const typed = document.getElementById("typed-message");
  if (i < message.length) {
    typed.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeEffect, 40); // speed
  }
}

window.onload = () => {
  typeEffect();
};
