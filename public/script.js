const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;
const NUM_TRIANGLES = 20;

const colors = ['#5e60ce', '#4361ee', '#3a0ca3', '#3f37c9', '#4895ef', '#4cc9f0'];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Triangle {
  constructor() {
    this.size = random(100, 300); // 💥 bigger triangle size
    this.x = random(0, WIDTH);
    this.y = random(0, HEIGHT);
    this.vx = random(-1.5, 1.5);
    this.vy = random(-1.5, 1.5);
    this.angle = random(0, Math.PI * 2);
    this.rotationSpeed = random(-0.02, 0.02);
    this.color = colors[Math.floor(random(0, colors.length))];
  }


  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.rotationSpeed;

    // Bounce off walls
    if (this.x < 0 || this.x > WIDTH) this.vx *= -1;
    if (this.y < 0 || this.y > HEIGHT) this.vy *= -1;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    ctx.beginPath();
    ctx.moveTo(0, -this.size / 2);
    ctx.lineTo(-this.size / 2, this.size / 2);
    ctx.lineTo(this.size / 2, this.size / 2);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

const triangles = Array.from({ length: NUM_TRIANGLES }, () => new Triangle());

function animate() {
  ctx.fillStyle = 'rgba(17, 17, 17, 0.2)'; // translucent background for trail
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  for (let tri of triangles) {
    tri.update();
    tri.draw(ctx);
  }

  requestAnimationFrame(animate);
}

animate();

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addHorizontalAnimation();
}

function addHorizontalAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// Vertical loop scrollers
const scrollerss = document.querySelectorAll(".loop-container");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addVerticalAnimation();
}

function addVerticalAnimation() {
  scrollerss.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const track = scroller.querySelector(".loop-track");
    const items = Array.from(track.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", true);
      track.appendChild(clone);
    });
  });
}


const steps = document.querySelectorAll(".step");
const img = document.getElementById("process-img");

window.addEventListener("scroll", () => {
  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      const imgSrc = step.getAttribute("data-img");
      img.src = imgSrc;
    }
  });
});



const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
cardsContainer.style.setProperty('--cards-count', cards.length)
// cardsContainer.style.setProperty(
//   '--card-height',
//   `${cards[0].clientHeight}px`
// )
cardsContainer.style.setProperty('--card-height', '600px');

Array.from(cards).forEach((card, index) => {
  const offsetTop = 20 + index * 20
  card.style.paddingTop = `${offsetTop}px`
  if (index === cards.length - 1) {
    return
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1
  const nextCard = cards[index + 1]
  const cardInner = card.querySelector('.card__inner')
  ScrollObserver.Element(nextCard, {
    offsetTop,
    offsetBottom: window.innerHeight - card.clientHeight
  }).onScroll(({ percentageY }) => {
    cardInner.style.scale = valueAtPercentage({
      from: 1,
      to: toScale,
      percentage: percentageY
    })
    cardInner.style.filter = `brightness(${valueAtPercentage({
      from: 1,
      to: 0.6,
      percentage: percentageY
    })})`
  })
})


AOS.init({
  duration: 1200,
});


function Clicked() {
  const p = document.getElementById("content");
  p.classList.toggle("display");
}
function Clicked2() {
  const p = document.getElementById("content2");
  p.classList.toggle("display-on");
}
function Clicked3() {
  const p = document.getElementById("content3");
  p.classList.toggle("display-on");
}

function updateAOSForMobile() {
  const element = document.getElementById("aos-box");

  if (window.innerWidth <= 768) {
    // Mobile view
    element.setAttribute("data-aos", "fade-up");
  } else {
    // Desktop view
    element.setAttribute("data-aos", "slide-up");
  }
}

// Run on page load and resize
window.addEventListener("load", updateAOSForMobile);
window.addEventListener("resize", updateAOSForMobile);

let ham_t = false;

function Nav() {
  const navv = document.getElementById("mob-nav");
  const ham = document.getElementById("ham");
  const ham_x = document.getElementById("ham_X");

  if (!ham_t) {
    navv.style.display = "block";
    ham.style.display = "none";
    ham_x.style.display = "block";
    ham_t = true;
  } else {
    navv.style.display = "none";
    ham.style.display = "block";
    ham_x.style.display = "none";
    ham_t = false;
  }
}

function Nav_2() {
  const navv = document.getElementById("mob-nav");
  const ham = document.getElementById("ham");
  const ham_x = document.getElementById("ham_X");

  navv.style.display = "none";
  ham.style.display = "block";
  ham_x.style.display = "none";
  ham_t = false;
}
