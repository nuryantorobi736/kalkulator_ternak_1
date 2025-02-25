// Mengisi tanggal secara otomatis
const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const tanggal = new Date();
const hariNama = hari[tanggal.getDay()];
const tanggalString = `${hariNama}, ${tanggal.getDate()} ${tanggal.toLocaleString('id-ID', { month: 'long' })} ${tanggal.getFullYear()}`;
document.getElementById('tanggal').value = tanggalString;

document.getElementById('kalkulator').style.display = 'block';

document.getElementById('hitung').addEventListener('click', function() {
    const harga = parseFloat(document.getElementById('harga').value);
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        document.getElementById('result').innerText = `Total Biaya: Rp ${total.toFixed(2)}`;
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

document.getElementById('tambahProduk').addEventListener('click', function() {
    const tanggal = document.getElementById('tanggal').value;
    const jenisTernak = document.getElementById('jenisTernak').value;
    const produkTernak = document.getElementById('produkTernak').value;
    const harga = parseFloat(document.getElementById('harga').value);
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        const tabel = document.getElementById('tabelPenjualan').getElementsByTagName('tbody')[0];
        const newRow = tabel.insertRow();
        newRow.innerHTML = `<td>${tanggal}</td><td>${jenisTernak}</td><td>${produkTernak}</td><td>${harga}</td><td>${jumlah}</td><td>${total.toFixed(2)}</td><td><button class="delete-button">Hapus</button></td>`;
        document.getElementById('result').innerText = '';
        addDeleteEvent(newRow);
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

function addDeleteEvent(row) {
    const deleteButton = row.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        row.remove();
    });
}

document.getElementById('kembali').addEventListener('click', function() {
    document.getElementById('hasilPenjualan').style.display = 'none';
    document.getElementById('kalkulator').style.display = 'block';
});

// Fungsi untuk menampilkan halaman hasil penjualan
function showHasilPenjualan() {
    document.getElementById('kalkulator').style.display = 'none';
    document.getElementById('hasilPenjualan').style.display = 'block';
}

document.getElementById('tambahProduk').addEventListener('click', showHasilPenjualan);