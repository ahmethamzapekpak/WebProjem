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

// Haritayı başlat ve başlangıç görünümünü ayarla
var map = L.map('map').setView([39.9334, 32.8597], 6); // Orta nokta (Türkiye genel görünümü)

// Harita katmanı ekle (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Belirlenmiş 6 konum
var locations = [
    { lat: 39.9334, lng: 32.8597, label: "Ankara" },
    { lat: 41.0082, lng: 28.9784, label: "İstanbul" },
    { lat: 38.4237, lng: 27.1428, label: "İzmir" },
    { lat: 39.6484, lng: 27.8826, label: "Balıkesir" },
    { lat: 37.2153, lng: 28.3636, label: "Muğla" },
    { lat: 37.8715, lng: 32.4848, label: "Konya" }
];

// Her konumu haritaya işaretçi (marker) olarak ekle
locations.forEach(function(location) {
    L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.label) // Konum adı etiket olarak gösterilecek
        .openPopup();
});
/*------------------------------------------------------------------------------------*/
const sayfamLogo = document.querySelector('.sayfamLogo');

window.addEventListener('scroll', function () {
  sayfamLogo.classList.toggle('kayanLogom', window.scrollY > 10); // Dinamik olarak ekle/çıkar
});