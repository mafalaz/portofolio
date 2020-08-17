console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")

var txtColor = document.getElementById('text-color');

txtColor.addEventListener("change", (event) => {
document.body.style.color = txtColor.value;
});
