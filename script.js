const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F6af4a7f8a6a745dfb9dd7d2811d3aae2",
    caption: "[21/03/2024 🪧Sekret UAKI] Pertama kali kita kumpul sama staf ahlii, masih kerasa bgt awkward nya. Si jibril cerita klo dia pilih CE CM eh taunya jadi kadep taun '25 wkwk kocak" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F6ab1286a61334076943f3737d95b9d60", 
    caption: "[30/03/2024 🪧Kopitani] Sarasehan plus first gath sama stafli batch 2. Foto departemen pertama yg lumayan niatt. Foto aslinya lebih gelap bgt akwkw" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Feeffd0e28730494a9338d6b4be855acb",
    caption: "Rapat onlen pas liburann, ini bahas apa yak. SG1 deh klo gasalah,, kita ada yg rapat subuh2 juga itu, traumatis gamau lagi rapat subuh ehe" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F03a2fd7b063e4cd0b1f39b4514e476dd", 
    caption: "[08/06/2024 🪧 Al Hadiid, Teknik] Stadium General 1. disini temen temen stafli mulai keliatan bonding nyaaa yeyeyy" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F33710d9afd5f46dc8a131b4b81246ab1", 
    caption: "[08/06/2024 🪧 Al Hadiid, Teknik] Tentor. Kita memanfaatkan waktu bgt yak hihi, abis SG lanjut tentor, meskipun ga full team hiks" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F93bf891394e14a3f8d29251e11ab6331", 
    caption: "[02/05/2024 🪧 Hako] Rapat pertama di luarr, ini keknya ter full team pada saat itu sih, seneng.." },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fbcc1b63ef25a466baf0a7b4d9023f155", 
    caption: "[18/05/2024 🪧 Basement MRP] Temu Mentoringg tpi wkwk kocak bgt kita dokum nya terlambatt wkwkw 🥲" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fe6e574f331334feead514b1a22a7be27", 
    caption: "Mentoring PKKMB. wkwk kita ngakalin si BMC pake ini nah. tepat bgt ada foto mu disitu nahh, potoku gaadaa 🤧" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F2c09962651df45a0981e1ba94c5a09d8", 
    caption: "[02/11/2024 🪧 FEB] Last prokerrr, colab ama forstiling, ni riil keren bgtt stafli stafmud semuaaa, bangga bgt sama mereka 🤧" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fecbedc39860c4eb89aef32d9bd045774", 
    caption: "Mentoring internaall, ngomongnya sii ndak bisa jadi mentor. Tapi nah liat dia keren skali" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F1862a960d3f74328b72c4f42bcb000a1", 
    caption: "[30/11/2024 🪧 Bedengan] Kamu pertama kali ke bedengan kann awkkw, yey farewell. menutup per prokeran uakii. meskipun hujan tpi tak apa, aku senanggg" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fb8edcfc59cde44cb8b9510bde47b080a", 
    caption: "[20/12/2024 🪧 Memoji] Last bgt kumpul, setelah sekian purnama wacana wacana akhrinya berhasill berkumpul. walopun sempet ujan deres tpi fyuh untung tekad nya kuat akwkw. Udah takut bgt gajadi kumpul. maapp potonya miring" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F9e50ea7f0c244f9193f51606a4dc399e", 
    caption: "[20/12/2024 🪧 7Chicken] Pas ini sebenrnya aku bingung bgt sih mau ngomong kek gimna, mau closing kek gimana. tpi ga expect stafmud juga malah ngasih kita kenang2an mana cake nya comel bangettttt hiks 😟" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fb2502d93050e403e803f6dea81fbc956", 
    caption: "[21/12/2024 🪧 GKM, Filkom] Yeyyyyy officiallyy demiss as BPH. slamat sslimit yaaaa, eh tpi ternyata lanjut awkejaefuwefbwuf. gpp smgt ol" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2F17836861c67f4ae99ea76c0888bfa20c", 
    caption: "[22/12/2024 🪧 GKM, Filkom] Ternyata stafli sosweet juga 😟💖. Keren bgt yak mereka terharuu. Disini bener2 dah lepass sama Lentera Asa yakk hehew" },
  { src: "https://cdn.builder.io/api/v1/image/assets%2Ff7d3d09ed64c4631ab5fc714d31c336b%2Fd23c03e7f08947649a45c3c90749c1c6", 
    caption: "[23/09/2023 Al Hadiid] Pertama kali notice kehadiran musfiq di dunia ini" },
];


let currentSlide = 0;

function openCarousel(index) {
  const modal = document.getElementById("carousel-modal");
  const img = document.getElementById("carousel-img");
  const caption = document.getElementById("carousel-caption");

  currentSlide = index;
  img.src = images[currentSlide].src;
  caption.textContent = images[currentSlide].caption;

  modal.style.display = "flex";
}

function closeCarousel() {
  const modal = document.getElementById("carousel-modal");
  modal.style.display = "none";
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateCarousel();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateCarousel();
}

function updateCarousel() {
  const img = document.getElementById("carousel-img");
  const caption = document.getElementById("carousel-caption");

  img.src = images[currentSlide].src;
  caption.textContent = images[currentSlide].caption;
}

// Envelope toggle
function toggleEnvelope(envelope) {
  envelope.classList.toggle("open");
}

// // Carousel functionality
// let currentIndex = 0;
// const galleryItems = document.querySelectorAll('.gallery-item');

// function openCarousel(index) {
//   currentIndex = index;
//   const modal = document.getElementById('carousel-modal');
//   const img = document.getElementById('carousel-img');
//   const caption = document.getElementById('carousel-caption');
  
//   const item = galleryItems[currentIndex].querySelector('img');
//   img.src = item.src;
//   caption.textContent = item.alt;

//   modal.style.display = 'block';
// }

// function closeCarousel() {
//   document.getElementById('carousel-modal').style.display = 'none';
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
//   openCarousel(currentIndex);
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % galleryItems.length;
//   openCarousel(currentIndex);
// }
