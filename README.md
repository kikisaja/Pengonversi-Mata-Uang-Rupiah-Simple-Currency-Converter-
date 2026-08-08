# 💵 Currency Converter (Static Rate Data & Currency Formatting)

Aplikasi **Pengonversi Mata Uang Rupiah** interaktif untuk mengonversi nominal Rupiah (IDR) ke berbagai mata uang asing secara real-time berdasarkan data kurs statis.

Proyek latihan ini dikembangkan khusus bagi siswa SMK Jurusan Rekayasa Perangkat Lunak (RPL/PPLG) Kelas XI untuk melatih logika aritmatika terapan dan pemanfaatan *JavaScript Built-in API* untuk format angka finansial.

---

## 🎯 Target Belajar & Konsep RPL

1. **Object Lookup Data Mapping:** Mengambil data spesifik (nilai kurs, simbol, nama mata uang) dari objek JSON statis berdasarkan *key* opsi elemen `<select>`.
2. **Applied Financial Arithmetic:** Menghitung konversi pembagian nominal rupiah terhadap kurs acuan ($\text{Hasil} = \frac{\text{Nominal IDR}}{\text{Nilai Kurs}}$).
3. **Number Formatting API (`Intl.NumberFormat`):** Memanfaatkan fitur bawaan JavaScript untuk mengubah angka mentah menjadi string format mata uang lokal (`Rp 500.000` atau `$ 32.25`).
4. **DOM Visibility Switching:** Mengatur transisi tampilan komponen *placeholder* menuju kartu hasil konversi.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Kerangka form input nominal, dropdown valas, dan panel output
├── style.css        # Desain layout pop-art, responsif, dan styling kartu hasil
└── script.js        # Engine kalkulasi konversi, basis data objek kurs, dan penformatan angka
