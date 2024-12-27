// Butonları seç
const btnPortFoylerr = document.getElementById('btnPortFoyler');
const btnOfislerr = document.getElementById('btnOfisler');
const btnDanismanlarr = document.getElementById('btnDanismanlar');

// Form div'lerini seç
const portfolioFormm = document.getElementById('portfolioForm');
const ofisFormm = document.getElementById('ofisForm');
const danismanFormm = document.getElementById('danismanForm');

// Her buton için tıklama olayı ekle
btnPortFoylerr.addEventListener('click', function() {
  portfolioFormm.style.display = 'block'; // Portföyler formunu göster
  ofisFormm.style.display = 'none';    // Diğerlerini gizle
  danismanFormm.style.display = 'none';
});

btnOfislerr.addEventListener('click', function() {
  portfolioFormm.style.display = 'none';
  ofisFormm.style.display = 'block';  // Ofisler formunu göster
  danismanFormm.style.display = 'none';
});

btnDanismanlarr.addEventListener('click', function() {
  portfolioFormm.style.display = 'none';
  ofisFormm.style.display = 'none';
  danismanFormm.style.display = 'block'; // Danışmanlar formunu göster
});

/*------------------------------------------------------------------------------------*/
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
const divheader = document.querySelector('.divheader');


window.addEventListener('scroll', function () {
  divheader.classList.toggle('renkDivHeadeer', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});

const sayfamLogo = document.querySelector('.sayfamLogo');

window.addEventListener('scroll', function () {
  sayfamLogo.classList.toggle('kayanLogom', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});

/*------------------------------------------------------------------------------------*/
//portfoy arama
document.getElementById('portfoyAra').addEventListener('click', function() {
  let portfoyTipi = document.querySelector('select[name="portfoyTipi"]').value;
  let portfoyKategori = document.querySelector('select[name="portfoyKategori"]').value;
  let ilSecin = document.querySelector('select[name="ilSecin"]').value;
  let ilanNo = document.querySelector('input[name="ilanNo"]').value;

  let url = 'portfoyler.html?';
  if (portfoyTipi) url += 'portfoyTipi=' + portfoyTipi + '&';
  if (portfoyKategori) url += 'portfoyKategori=' + portfoyKategori + '&';
  if (ilSecin) url += 'ilSecin=' + ilSecin + '&';
  if (ilanNo) url += 'ilanNo=' + ilanNo + '&';

  // Son '&' karakterini temizle
  url = url.slice(0, -1);

  window.location.href = url;
});
/*------------------------------------------------------------------------------------*/