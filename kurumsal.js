const divheader = document.querySelector('.divheader');

window.addEventListener('scroll', function () {
  divheader.classList.toggle('renkDivHeadeer', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});

const slider = document.querySelector('.slider');
let startIndex = 0;

function slide() {
  const cardWidth = slider.firstElementChild.offsetWidth; // Dinamik genişlik
  startIndex++;

  // Kartlar biterse başa dön
  if (startIndex >= slider.children.length) {
    startIndex = 0;
  }

  // Kaydırma işlemini gerçekleştir
  slider.style.transform = `translateX(-${startIndex * cardWidth}px)`;  // Düzeltilen satır
}

// Kaydırmayı başlat
setInterval(slide, 2000);
/*------------------------------------------------------------------------------------*/
const sayfamLogo = document.querySelector('.sayfamLogo');

window.addEventListener('scroll', function () {
  sayfamLogo.classList.toggle('kayanLogom', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});