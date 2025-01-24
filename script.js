// Menampilkan informasi lebih lanjut tentang destinasi
function showInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "none") {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
}

// Menangani klik pada tombol kontak
document.getElementById('contact-button').addEventListener('click', function() {
    alert('Terima kasih telah menghubungi kami! Kami akan segera merespons.');
});
