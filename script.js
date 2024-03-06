document.addEventListener("DOMContentLoaded", function() {
    var dust = prompt("Masukkan jumlah debu") ;
    var dustTampil = dust + " µg/m³"
    document.getElementById("konsentrasi").textContent += dustTampil;
    var kualitas = "";
    if (dust >= 0 && dust <= 150) {
        kualitas = "Kualitas udara pada filter baik";
    }
      else if (dust >=151 && dust <= 420) {
        kualitas = "Kualitas udara pada filter tidak sehat, mohon bersihkan filter!";
    } else if (dust > 420) {
        kualitas = "Kualitas udara sangat berbahaya, mohon segera bersihkan filter!!!";
        for (var i = 0; i < 7; i++) {
            alert("Berbahaya!!!! CEPAT BERSIHKAN FILTER SEKARANG");
        }
    }
    document.getElementById("Kualitas").textContent += kualitas;
});
