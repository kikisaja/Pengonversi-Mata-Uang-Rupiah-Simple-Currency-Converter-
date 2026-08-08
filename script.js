// --- 1. SELEKSI ELEMEN DOM ---
const elNominal = document.getElementById("input-nominal");
const elSelectValas = document.getElementById("select-valas");
const btnKonversi = document.getElementById("btn-konversi");

const panelPlaceholder = document.getElementById("result-placeholder");
const panelResult = document.getElementById("card-result");

const outKursInfo = document.getElementById("info-kurs");
const outValas = document.getElementById("output-valas");
const outSymbol = document.getElementById("symbol-valas");
const outIdr = document.getElementById("output-idr");

// --- 2. BASIS DATA KURS STATIS (OBJECT) ---
// Nilai patokan 1 Mata Uang Asing dalam Rupiah (IDR)
const DATA_KURS = {
    USD: { nama: "Dolar Amerika Serikat", nilaiInIDR: 15500, simbol: "$" },
    EUR: { nama: "Euro", nilaiInIDR: 16800, simbol: "€" },
    JPY: { nama: "Yen Jepang", nilaiInIDR: 105, simbol: "¥" },
    SGD: { nama: "Dolar Singapura", nilaiInIDR: 11600, simbol: "S$" },
    SAR: { nama: "Riyal Arab Saudi", nilaiInIDR: 4130, simbol: "SR" }
};

// --- 3. FUNGSI LOGIKA UTAMA ---

function konversiMataUang() {
    const nominalIDR = parseFloat(elNominal.value);
    const kodeValas = elSelectValas.value;

    // Validasi input angka
    if (isNaN(nominalIDR) || nominalIDR <= 0) {
        alert("Masukkan nominal angka Rupiah yang valid! ⚠️");
        return;
    }

    // Ambil data objek mata uang berdasarkan kunci pilihan user
    const valasTerpilih = DATA_KURS[kodeValas];

    // Rumus Konversi: Nominal Rupiah / Kurs Asing
    const hasilKonversi = nominalIDR / valasTerpilih.nilaiInIDR;

    // Format tampilan angka Rupiah menggunakan Intl.NumberFormat (Format IDR)
    const formattedIDR = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(nominalIDR);

    // Format tampilan angka Valas Asing
    const formattedValas = hasilKonversi.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Format tampilan info kurs per 1 unit valas
    const formattedRate = new Intl.NumberFormat("id-ID").format(valasTerpilih.nilaiInIDR);

    // Update elemen DOM
    outKursInfo.innerText = `Kurs: 1 ${kodeValas} = Rp ${formattedRate}`;
    outValas.innerText = `${valasTerpilih.simbol} ${formattedValas}`;
    outSymbol.innerText = kodeValas;
    outIdr.innerText = formattedIDR;

    // Tampilkan panel hasil
    panelPlaceholder.classList.add("hidden");
    panelResult.classList.remove("hidden");
}

// --- 4. BINDING EVENT LISTENERS ---
btnKonversi.addEventListener("click", konversiMataUang);
