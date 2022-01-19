function SaatGoster() {
	const zaman = new Date();
	let saat = zaman.getHours();
	if (saat < 10) {
		saat = "0" + saat;
	}
	let dakika = zaman.getMinutes();
	if (dakika < 10) {
		dakika = "0" + dakika;
	}
	let saniye = zaman.getSeconds();
	if (saniye < 10) {
		saniye = "0" + saniye;
	}
	document.getElementById("saat").innerHTML = saat + ":" + dakika + ":" + saniye;
	setTimeout(SaatGoster, 1000);
}

function TarihGoster() {
	const tarih = new Date();
	let gun = tarih.getDate();
	if (gun < 10) {
		gun = "0" + gun;
	}
	let ay = tarih.getMonth() + 1; // +1 eklememin sebebi ilk ay olan ocak ayının default olarak 0 değerini almasıdır.
	if (ay < 10) {
		ay = "0" + ay;
	}
	let yil = tarih.getFullYear();
	document.getElementById("zaman").innerHTML = gun + "/" + ay + "/" + yil;
	setTimeout(TarihGoster, 1000);
}

function GunGoster() {
	const gun = new Date();
	let haftaninKacinciGunu = gun.getDay();
	if (haftaninKacinciGunu == 1) {
		haftaninKacinciGunu = "Pazartesi";
	} else if (haftaninKacinciGunu == 2) {
		haftaninKacinciGunu = "Sali";
	} else if (haftaninKacinciGunu == 3) {
		haftaninKacinciGunu = "Carsamba";
	} else if (haftaninKacinciGunu == 4) {
		haftaninKacinciGunu = "Persembe";
	} else if (haftaninKacinciGunu == 5) {
		haftaninKacinciGunu = "Cuma";
	} else if (haftaninKacinciGunu == 6) {
		haftaninKacinciGunu = "Cumartesi";
	} else {
		haftaninKacinciGunu = "Pazar";
	}
	document.getElementById("gun").innerHTML = haftaninKacinciGunu;
	setTimeout(GunGoster, 1000);
}