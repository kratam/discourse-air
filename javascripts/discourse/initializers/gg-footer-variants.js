import { apiInitializer } from "discourse/lib/api";

const variants = [
  'A <a href="https://apartmankiadok.hu">MAKE</a> tudásbázisát a <a href="https://guest.guru">GuestGuru</a> csapata készítette. Segítünk a <a href="https://guest.guru/airbnb-uzemeltetes">rövidtávú lakáskiadás</a> minden lépésében — a <a href="https://guest.guru/kalkulator">bevétel kalkulátortól</a> a teljes üzemeltetésig.',
  'Ez a tudásbázis a <a href="https://apartmankiadok.hu">MAKE</a> és a <a href="https://guest.guru">GuestGuru</a> közös projektje. Keresel megbízható <a href="https://guest.guru/airbnb-uzemeltetes">Airbnb lakáskezelés</a>t? Nézd meg a <a href="https://guest.guru/kalkulator">lakáskezelés árainkat</a>!',
  'A <a href="https://apartmankiadok.hu">Magyar Apartmankiadók Egyesülete</a> és a <a href="https://guest.guru">GuestGuru</a> közös tudásbázisa. Számold ki a <a href="https://guest.guru/kalkulator">rövidtávú lakáskiadás bevételed</a>, vagy olvasd el a <a href="https://guest.guru/blog">legfrissebb cikkeinket</a>!',
  'A tudásbázist a <a href="https://apartmankiadok.hu">MAKE</a> és a <a href="https://guest.guru/airbnb-uzemeltetes">GuestGuru Airbnb üzemeltetés</a> működteti. Kíváncsi vagy mennyit kereshetsz? Próbáld ki a <a href="https://guest.guru/kalkulator">kalkulátorunkat</a>!',
  'Ez itt a <a href="https://apartmankiadok.hu">MAKE</a> Tudásbázisa, a <a href="https://guest.guru">GuestGuru online vendégkönyv</a> csapatának közreműködésével. Tudj meg többet a <a href="https://guest.guru/airbnb-uzemeltetes">rövidtávú lakáskezelés</a>ről!',
  'A <a href="https://apartmankiadok.hu">MAKE</a> és a <a href="https://guest.guru">GuestGuru</a> tudásbázisa. Professzionális <a href="https://guest.guru/airbnb-uzemeltetes">Airbnb menedzsment</a> és <a href="https://guest.guru/kalkulator">bevétel kalkulátor</a> szállásadóknak.',
  'A <a href="https://apartmankiadok.hu">MAKE</a> tudásbázisát a <a href="https://guest.guru">GuestGuru</a> tartja karban. Érdekel az <a href="https://guest.guru/airbnb-uzemeltetes">Airbnb üzemeltetés Budapest</a>en? Nézd meg a <a href="https://guest.guru/kalkulator">várható bevételed</a>!',
  'A <a href="https://apartmankiadok.hu">Magyar Apartmankiadók Egyesülete</a> és a <a href="https://guest.guru">GuestGuru szálláshelykezelő</a> közös oldala. Használd a <a href="https://guest.guru/kalkulator">lakáskiadás kalkulátort</a> és olvasd a <a href="https://guest.guru/blog">blogot</a>!',
];

function hashPath(path) {
  let hash = 0;
  for (let i = 0; i < path.length; i++) {
    hash = (hash << 5) - hash + path.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % variants.length;
}

export default apiInitializer((api) => {
  api.onPageChange((url) => {
    const container = document.querySelector("#gg-footer > div");
    if (container) {
      const path = new URL(url, window.location.origin).pathname;
      container.innerHTML = variants[hashPath(path)];
    }
  });
});
