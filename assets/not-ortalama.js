let vizeNotu= prompt('vize notunuzu giriniz: ');
let finalNotu= prompt('final notunuzu giriniz: ');

let ortalama= (vizeNotu * 0.40) + (finalNotu * 0.60);

if (ortalama > 50) {
  alert('ortalamanız= ' + ortalama + ', dersi geçtiniz!');
}

else if (40 < ortalama < 50) {
  alert('ortalamanız= ' + ortalama + ', dersi şartlı geçtiniz!');
}

else {
  alert('ortalamanız= ' + ortalama + ', dersten kaldınız!');
}