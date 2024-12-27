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
/*------------------------------------------------------------------------------------*/
// URL Parametrelerini Alma
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);

  const portfoyTipi = urlParams.get('portfoyTipi');
  const portfoyKategori = urlParams.get('portfoyKategori');
  const ilSecin = urlParams.get('ilSecin');
  const ilanNo = urlParams.get('ilanNo');

  if (ilSecin) {
      document.getElementById('city').value = ilSecin;
  }
  if (portfoyKategori) {
      document.getElementById('portfolioCategory').value = portfoyKategori;
  }
  if (portfoyTipi) {
      document.getElementById('portfolioType').value = portfoyTipi;
  }
  if (ilanNo) {
      document.getElementById('searchQuery').value = ilanNo;
  }

  // Butona otomatik tıklama
  if (portfoyTipi || portfoyKategori || ilSecin || ilanNo) { // Sadece parametre varsa tıkla
      document.getElementById('portfoyAraButton').click();
  }
});
/*------------------------------------------------------------------------------------*/
const sayfamLogo = document.querySelector('.sayfamLogo');

window.addEventListener('scroll', function () {
  sayfamLogo.classList.toggle('kayanLogom', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});