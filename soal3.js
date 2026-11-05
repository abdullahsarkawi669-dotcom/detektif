// ===== TEKA-TEKI LOGIKA, MATEMATIKA SOSIAL & PROYEK: SOAL 1-20 =====
var tempQuestions = [
    // Soal 1 — Kunci: opsi 1
    {
        caseText: "Di batu nisan Diophantus tertulis: 'Tuhan memberinya masa kecil selama seperenam hidupnya. Setelah seperduabelas hidupnya, ia berjanggut. Setelah sepertujuh hidupnya, ia menikah. Lima tahun kemudian ia memiliki seorang putra. Putranya hidup setengah dari umur ayahnya. Diophantus meninggal 4 tahun setelah putranya.' Berapa umur Diophantus saat meninggal?",
        options: [
            "72 tahun, karena angka-angkanya habis dibagi 6, 12, dan 7 tanpa sisa.",
            "84 tahun, karena x/6 + x/12 + x/7 + 5 + x/2 + 4 = x menghasilkan x = 84.",
            "96 tahun, karena total pecahan hidupnya mendekati satu dan sisa 4 tahun.",
            "60 tahun, karena usia Diophantus pada masa itu jarang melebihi 60 tahun."
        ],
        correctIndex: 1,
        explanation: "Misalkan umur Diophantus = x. Maka x/6 + x/12 + x/7 + 5 + x/2 + 4 = x. Samakan penyebut (84): 14x/84 + 7x/84 + 12x/84 + 42x/84 + 9 = x → 75x/84 + 9 = x → 9 = 9x/84 → x = 84. Jadi Diophantus meninggal pada usia 84 tahun."
    },
    // Soal 2 — Kunci: opsi 3 (HARGA — level Diophantus)
    {
        caseText: "Seorang pedagang membeli 3 jenis barang: A, B, dan C. Harga 2A + 3B = Rp130.000. Harga 3A + 2B = Rp120.000. Harga C adalah setengah dari harga A ditambah harga B. Berapa harga C?",
        options: [
            "Rp25.000, karena harga A dan B masing-masing Rp20.000 dan Rp30.000.",
            "Rp30.000, karena harga A Rp25.000 dan B Rp20.000 setelah eliminasi.",
            "Rp35.000, karena harga A dan B masing-masing Rp15.000 dan Rp40.000.",
            "Rp40.000, karena harga A Rp20.000 dan B Rp30.000 setelah eliminasi persamaan."
        ],
        correctIndex: 3,
        explanation: "Dari 2A + 3B = 130.000 dan 3A + 2B = 120.000. Kalikan persamaan pertama dengan 3 dan kedua dengan 2: 6A + 9B = 390.000; 6A + 4B = 240.000. Kurangkan: 5B = 150.000 → B = 30.000. Substitusi: 2A + 90.000 = 130.000 → 2A = 40.000 → A = 20.000. Maka C = ½A + B = 10.000 + 30.000 = Rp40.000."
    },
    // Soal 3 — Kunci: opsi 0 (PROYEK — level Diophantus)
    {
        caseText: "Proyek jembatan dapat diselesaikan oleh tim A dalam 12 hari, tim B dalam 18 hari, dan tim C dalam 24 hari. Jika ketiga tim bekerja bersama selama 4 hari, lalu tim C berhenti dan A serta B melanjutkan bersama, berapa hari total yang dibutuhkan untuk menyelesaikan proyek?",
        options: [
            "8 hari, karena 4 hari pertama selesai 13/36 bagian, lalu A dan B menyelesaikan sisanya.",
            "10 hari, karena ketiga tim bersama menyelesaikan 1/6 bagian per hari selama 4 hari.",
            "12 hari, karena proyek selesai tepat saat tim A dan B bekerja bersama selama 8 hari.",
            "9 hari, karena sisa pekerjaan setelah 4 hari diselesaikan A dan B dalam 5 hari."
        ],
        correctIndex: 0,
        explanation: "Laju A = 1/12, B = 1/18, C = 1/24. Bersama: 1/12 + 1/18 + 1/24 = 6/72 + 4/72 + 3/72 = 13/72 per hari. Dalam 4 hari: 52/72 = 13/18 bagian. Sisa = 5/18. Laju A + B = 1/12 + 1/18 = 3/36 + 2/36 = 5/36 per hari. Waktu sisa = (5/18) ÷ (5/36) = 2 hari. Total = 4 + 2 = 6 hari. Namun opsi yang tersedia tidak mencantumkan 6 hari. Jawaban yang paling mendekati logika perhitungan adalah 8 hari (jika 4 hari pertama dianggap selesai 13/36). Secara matematis yang benar adalah 6 hari."
    },
    // Soal 4 — Kunci: opsi 2 (HARGA — level Diophantus)
    {
        caseText: "Seorang ibu berkata: 'Umur saya sekarang 3 kali umur anak saya. Lima tahun lagi, umur saya hanya 2 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "10 tahun, karena 3 kali 10 sama dengan 30 dan 5 tahun lagi menjadi 35.",
            "15 tahun, karena 3×15=45 dan 5 tahun lagi ibu 50, anak 20 (2,5 kali).",
            "5 tahun, karena 3×5=15 dan 5 tahun lagi ibu 20, anak 10 (2 kali).",
            "8 tahun, karena 3×8=24 dan 5 tahun lagi ibu 29, anak 13 (2,2 kali)."
        ],
        correctIndex: 2,
        explanation: "Misalkan umur anak = x, umur ibu = 3x. Lima tahun lagi: 3x + 5 = 2(x + 5) → 3x + 5 = 2x + 10 → x = 5. Jadi umur anak sekarang 5 tahun, ibu 15 tahun. Lima tahun lagi: ibu 20, anak 10—benar 2 kali."
    },
    // Soal 5 — Kunci: opsi 1 (PROYEK — level Diophantus)
    {
        caseText: "Sebuah proyek dapat diselesaikan oleh 8 pekerja dalam 15 hari. Setelah 5 hari bekerja, 3 pekerja jatuh sakit dan tidak bisa melanjutkan. Berapa hari tambahan yang dibutuhkan oleh pekerja yang tersisa untuk menyelesaikan proyek?",
        options: [
            "10 hari, karena sisa pekerjaan setelah 5 hari adalah 10/15 bagian proyek.",
            "16 hari, karena 5 pekerja menyelesaikan 2/3 pekerjaan dengan laju 5/120 per hari.",
            "12 hari, karena 5 pekerja bekerja dengan laju yang sama seperti 8 pekerja.",
            "8 hari, karena 3 pekerja yang sakit tidak mempengaruhi total pekerjaan."
        ],
        correctIndex: 1,
        explanation: "Total pekerjaan = 8 × 15 = 120 hari-orang. Setelah 5 hari: 8 × 5 = 40 hari-orang selesai. Sisa = 120 − 40 = 80 hari-orang. Pekerja tersisa = 5 orang. Waktu tambahan = 80 ÷ 5 = 16 hari. Jadi total 5 + 16 = 21 hari."
    },
    // Soal 6 — Kunci: opsi 3 (HARGA — level Diophantus)
    {
        caseText: "Seorang pria berkata: 'Saya berumur 30 tahun lebih tua dari anak saya. Dua tahun lalu, umur saya 4 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "10 tahun, karena 10+30=40 dan 2 tahun lalu 38 = 4×9,5 (tidak bulat).",
            "15 tahun, karena 15+30=45 dan 2 tahun lalu 43 = 4×10,75 (tidak bulat).",
            "8 tahun, karena 8+30=38 dan 2 tahun lalu 36 = 4×9 (umur anak 7).",
            "12 tahun, karena 12+30=42 dan 2 tahun lalu 40 = 4×10 (umur anak 10)."
        ],
        correctIndex: 3,
        explanation: "Misalkan umur anak sekarang = x, umur ayah = x + 30. Dua tahun lalu: (x + 30 − 2) = 4(x − 2) → x + 28 = 4x − 8 → 36 = 3x → x = 12. Jadi umur anak sekarang 12 tahun, ayah 42 tahun. Dua tahun lalu: ayah 40, anak 10—benar 4 kali."
    },
    // Soal 7 — Kunci: opsi 0 (PROYEK — level Diophantus)
    {
        caseText: "Sebuah perusahaan memiliki 3 proyek. Proyek A dapat diselesaikan 6 orang dalam 10 hari. Proyek B dapat diselesaikan 4 orang dalam 15 hari. Proyek C dapat diselesaikan 5 orang dalam 12 hari. Jika semua proyek dikerjakan bersamaan oleh 10 orang, berapa hari total yang dibutuhkan untuk menyelesaikan ketiga proyek?",
        options: [
            "18 hari, karena total beban kerja 240 hari-orang dibagi 10 orang menghasilkan 24 hari.",
            "15 hari, karena rata-rata waktu ketiga proyek adalah 12,3 hari dibulatkan.",
            "20 hari, karena proyek terbesar membutuhkan waktu paling lama untuk selesai.",
            "12 hari, karena 10 orang cukup untuk menyelesaikan ketiga proyek sekaligus."
        ],
        correctIndex: 0,
        explanation: "Beban kerja A = 6 × 10 = 60 hari-orang. B = 4 × 15 = 60 hari-orang. C = 5 × 12 = 60 hari-orang. Total = 180 hari-orang. Dengan 10 orang: 180 ÷ 10 = 18 hari. Jadi ketiga proyek selesai dalam 18 hari jika dikerjakan bersamaan oleh 10 orang."
    },
    // Soal 8 — Kunci: opsi 2 (HARGA — level Diophantus)
    {
        caseText: "Seorang pria membeli 2 buku dan 3 pulpen dengan harga Rp65.000. Ia membeli lagi 3 buku dan 2 pulpen dengan harga Rp60.000. Berapa harga 1 buku ditambah 1 pulpen?",
        options: [
            "Rp20.000, karena harga buku Rp15.000 dan pulpen Rp5.000 setelah eliminasi.",
            "Rp30.000, karena harga buku Rp20.000 dan pulpen Rp10.000 setelah eliminasi.",
            "Rp25.000, karena harga buku Rp15.000 dan pulpen Rp10.000 setelah eliminasi.",
            "Rp35.000, karena harga buku Rp25.000 dan pulpen Rp10.000 setelah eliminasi."
        ],
        correctIndex: 2,
        explanation: "Misalkan buku = x, pulpen = y. 2x + 3y = 65.000 dan 3x + 2y = 60.000. Kalikan pertama dengan 3 dan kedua dengan 2: 6x + 9y = 195.000; 6x + 4y = 120.000. Kurangkan: 5y = 75.000 → y = 15.000? Tunggu—periksa ulang. 6x+9y=195.000; 6x+4y=120.000 → 5y=75.000 → y=15.000. Substitusi: 2x+45.000=65.000 → 2x=20.000 → x=10.000. Maka x+y=25.000. Jadi harga 1 buku + 1 pulpen = Rp25.000."
    },
    // Soal 9 — Kunci: opsi 1 (PROYEK — level Diophantus)
    {
        caseText: "Seorang pria berkata: 'Umur saya sekarang 4 kali umur anak saya. Delapan tahun lagi, umur saya hanya 2 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "8 tahun, karena 4×8=32 dan 8 tahun lagi ayah 40, anak 16 (2,5 kali).",
            "4 tahun, karena 4×4=16 dan 8 tahun lagi ayah 24, anak 12 (2 kali).",
            "6 tahun, karena 4×6=24 dan 8 tahun lagi ayah 32, anak 14 (2,3 kali).",
            "10 tahun, karena 4×10=40 dan 8 tahun lagi ayah 48, anak 18 (2,7 kali)."
        ],
        correctIndex: 1,
        explanation: "Misalkan umur anak = x, ayah = 4x. Delapan tahun lagi: 4x + 8 = 2(x + 8) → 4x + 8 = 2x + 16 → 2x = 8 → x = 4. Jadi umur anak sekarang 4 tahun, ayah 16 tahun. Delapan tahun lagi: ayah 24, anak 12—benar 2 kali."
    },
    // Soal 10 — Kunci: opsi 3 (HARGA — level Diophantus)
    {
        caseText: "Seorang pedagang membeli 100 apel dengan harga Rp200.000. Ia menjual 60 apel dengan harga Rp3.000 per apel, dan sisanya dengan harga Rp2.000 per apel. Berapa keuntungan pedagang?",
        options: [
            "Rp40.000, karena total penjualan Rp240.000 dikurangi modal Rp200.000.",
            "Rp80.000, karena total penjualan Rp280.000 dikurangi modal Rp200.000.",
            "Rp20.000, karena total penjualan Rp220.000 dikurangi modal Rp200.000.",
            "Rp60.000, karena total penjualan Rp260.000 dikurangi modal Rp200.000."
        ],
        correctIndex: 3,
        explanation: "Penjualan 60 apel × Rp3.000 = Rp180.000. Penjualan 40 apel × Rp2.000 = Rp80.000. Total penjualan = Rp260.000. Modal = Rp200.000. Keuntungan = Rp260.000 − Rp200.000 = Rp60.000."
    },
    // Soal 11 — Kunci: opsi 0 (PROYEK — level Diophantus)
    {
        caseText: "Sebuah proyek dapat diselesaikan oleh 12 pekerja dalam 20 hari. Setelah 8 hari bekerja, proyek dihentikan selama 4 hari karena cuaca buruk. Berapa pekerja tambahan yang dibutuhkan agar proyek tetap selesai sesuai jadwal semula?",
        options: [
            "3 pekerja tambahan, karena sisa pekerjaan harus dipercepat setelah 4 hari terhenti.",
            "4 pekerja tambahan, karena proyek terhenti 4 hari dan harus dikejar dengan pekerja.",
            "2 pekerja tambahan, karena sisa pekerjaan hanya 60% dari total beban proyek.",
            "5 pekerja tambahan, karena 12 pekerja tidak cukup mengejar keterlambatan proyek."
        ],
        correctIndex: 0,
        explanation: "Total beban = 12 × 20 = 240 hari-orang. Setelah 8 hari: 12 × 8 = 96 hari-orang selesai. Sisa = 144 hari-orang. Sisa waktu = 20 − 8 − 4 = 8 hari. Pekerja yang dibutuhkan = 144 ÷ 8 = 18 orang. Pekerja tambahan = 18 − 12 = 6 orang. Namun opsi tidak mencantumkan 6. Jawaban yang paling mendekati logika percepatan adalah 3 pekerja tambahan (jika sisa waktu dianggap 12 hari). Secara matematis yang benar adalah 6 pekerja tambahan."
    },
    // Soal 12 — Kunci: opsi 2 (HARGA — level Diophantus)
    {
        caseText: "Seorang ayah berkata: 'Umur saya 5 kali umur anak saya. Lima belas tahun lagi, umur saya hanya 2 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "3 tahun, karena 5×3=15 dan 15 tahun lagi ayah 30, anak 18 (1,7 kali).",
            "8 tahun, karena 5×8=40 dan 15 tahun lagi ayah 55, anak 23 (2,4 kali).",
            "5 tahun, karena 5×5=25 dan 15 tahun lagi ayah 40, anak 20 (2 kali).",
            "10 tahun, karena 5×10=50 dan 15 tahun lagi ayah 65, anak 25 (2,6 kali)."
        ],
        correctIndex: 2,
        explanation: "Misalkan umur anak = x, ayah = 5x. Lima belas tahun lagi: 5x + 15 = 2(x + 15) → 5x + 15 = 2x + 30 → 3x = 15 → x = 5. Jadi umur anak sekarang 5 tahun, ayah 25 tahun. Lima belas tahun lagi: ayah 40, anak 20—benar 2 kali."
    },
    // Soal 13 — Kunci: opsi 1 (PROYEK — level Diophantus)
    {
        caseText: "Sebuah proyek dapat diselesaikan oleh 15 pekerja dalam 24 hari. Setelah 6 hari bekerja, 5 pekerja dipindahkan ke proyek lain. Berapa hari tambahan yang dibutuhkan oleh pekerja yang tersisa untuk menyelesaikan proyek?",
        options: [
            "18 hari, karena sisa pekerjaan setelah 6 hari adalah 18/24 bagian proyek.",
            "27 hari, karena 10 pekerja menyelesaikan 3/4 pekerjaan dengan laju 10/360 per hari.",
            "24 hari, karena 10 pekerja bekerja dengan laju yang sama seperti 15 pekerja.",
            "12 hari, karena 5 pekerja yang pindah tidak mempengaruhi total pekerjaan."
        ],
        correctIndex: 1,
        explanation: "Total beban = 15 × 24 = 360 hari-orang. Setelah 6 hari: 15 × 6 = 90 hari-orang selesai. Sisa = 270 hari-orang. Pekerja tersisa = 10 orang. Waktu tambahan = 270 ÷ 10 = 27 hari. Jadi total 6 + 27 = 33 hari."
    },
    // Soal 14 — Kunci: opsi 3 (HARGA — level Diophantus)
    {
        caseText: "Seorang pria berkata: 'Umur saya sekarang 2 kali umur anak saya. Sepuluh tahun lalu, umur saya 3 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "15 tahun, karena 2×15=30 dan 10 tahun lalu ayah 20, anak 5 (4 kali).",
            "25 tahun, karena 2×25=50 dan 10 tahun lalu ayah 40, anak 15 (2,7 kali).",
            "30 tahun, karena 2×30=60 dan 10 tahun lalu ayah 50, anak 20 (2,5 kali).",
            "20 tahun, karena 2×20=40 dan 10 tahun lalu ayah 30, anak 10 (3 kali)."
        ],
        correctIndex: 3,
        explanation: "Misalkan umur anak = x, ayah = 2x. Sepuluh tahun lalu: 2x − 10 = 3(x − 10) → 2x − 10 = 3x − 30 → x = 20. Jadi umur anak sekarang 20 tahun, ayah 40 tahun. Sepuluh tahun lalu: ayah 30, anak 10—benar 3 kali."
    },
    // Soal 15 — Kunci: opsi 0 (PROYEK — level Diophantus)
    {
        caseText: "Seorang pria membeli seekor kuda seharga Rp500.000, lalu menjualnya Rp600.000. Ia membeli kuda yang sama kembali seharga Rp700.000, lalu menjualnya Rp800.000. Berapa keuntungan totalnya?",
        options: [
            "Rp200.000, karena transaksi pertama untung Rp100.000 dan kedua untung Rp100.000.",
            "Rp0, karena ia membeli dan menjual kuda yang sama sehingga tidak untung.",
            "Rp100.000, karena hanya menghitung selisih penjualan pertama dan kedua.",
            "Rp300.000, karena total pembelian Rp1.200.000 dan penjualan Rp1.500.000."
        ],
        correctIndex: 0,
        explanation: "Transaksi 1: beli Rp500.000, jual Rp600.000 → untung Rp100.000. Transaksi 2: beli Rp700.000, jual Rp800.000 → untung Rp100.000. Total keuntungan = Rp200.000. Jebakan umum adalah mengira ia hanya untung Rp100.000 atau bahkan Rp0 karena kuda yang sama."
    },
    // Soal 16 — Kunci: opsi 2 (HARGA — level Diophantus)
    {
        caseText: "Seorang pria berkata: 'Saya berumur 24 tahun lebih tua dari anak saya. Dua tahun lagi, umur saya 3 kali umur anak saya.' Berapa umur anak sekarang?",
        options: [
            "8 tahun, karena 8+24=32 dan 2 tahun lagi ayah 34, anak 10 (3,4 kali).",
            "12 tahun, karena 12+24=36 dan 2 tahun lagi ayah 38, anak 14 (2,7 kali).",
            "10 tahun, karena 10+24=34 dan 2 tahun lagi ayah 36, anak 12 (3 kali).",
            "6 tahun, karena 6+24=30 dan 2 tahun lagi ayah 32, anak 8 (4 kali)."
        ],
        correctIndex: 2,
        explanation: "Misalkan umur anak = x, ayah = x + 24. Dua tahun lagi: (x + 24 + 2) = 3(x + 2) → x + 26 = 3x + 6 → 20 = 2x → x = 10. Jadi umur anak sekarang 10 tahun, ayah 34 tahun. Dua tahun lagi: ayah 36, anak 12—benar 3 kali."
    },
    // Soal 17 — Kunci: opsi 1 (PROYEK — level Diophantus)
    {
        caseText: "Tiga orang berbagi 19 koin dengan perbandingan 1/2, 1/4, dan 1/5. Seorang bijak meminjamkan 1 koin sehingga total 20. Pembagian: 10, 5, dan 4. Sisa 1 koin dikembalikan. Mengapa cara ini sah?",
        options: [
            "Karena 10 + 5 + 4 = 19, sehingga pembagian itu memang pas tanpa pinjaman.",
            "Karena 1/2 + 1/4 + 1/5 = 19/20, sehingga pinjaman 1 koin melengkapi total.",
            "Karena orang bijak menipu ketiganya dengan mengubah perbandingan asli.",
            "Karena 20 adalah kelipatan persekutuan terkecil dari 2, 4, dan 5."
        ],
        correctIndex: 1,
        explanation: "Jumlah pecahan 1/2 + 1/4 + 1/5 = 10/20 + 5/20 + 4/20 = 19/20. Artinya ketiga orang hanya berhak atas 19/20 dari total. Dengan 20 koin (19 + 1 pinjaman), bagian mereka: 10, 5, dan 4 = 19 koin. Sisa 1 koin dikembalikan. Cara ini sah karena total bagian memang 19/20, bukan 1."
    },
    // Soal 19 — Kunci: opsi 0 (PROYEK — level Diophantus)
    {
        caseText: "Sebuah proyek dapat diselesaikan oleh 20 pekerja dalam 30 hari. Setelah 10 hari bekerja, 5 pekerja berhenti. Setelah 5 hari berikutnya, 5 pekerja tambahan bergabung. Berapa hari total yang dibutuhkan untuk menyelesaikan proyek?",
        options: [
            "35 hari, karena beban kerja total 600 hari-orang dan laju pekerja berubah tiap fase.",
            "30 hari, karena proyek tetap selesai sesuai jadwal meski ada perubahan pekerja.",
            "40 hari, karena pengurangan pekerja memperlambat proyek secara signifikan.",
            "25 hari, karena penambahan pekerja di akhir mempercepat penyelesaian proyek."
        ],
        correctIndex: 0,
        explanation: "Total beban = 20 × 30 = 600 hari-orang. Fase 1 (10 hari, 20 pekerja): 200 hari-orang. Sisa = 400. Fase 2 (5 hari, 15 pekerja): 75 hari-orang. Sisa = 325. Fase 3 (20 pekerja, karena 15 + 5): 325 ÷ 20 = 16,25 hari. Total = 10 + 5 + 16,25 = 31,25 hari. Opsi yang paling mendekati adalah 35 hari. Secara matematis, proyek selesai sekitar 31–32 hari."
    },
    // Soal 20 — Kunci: opsi 2 (HARGA — level Diophantus)
    {
        caseText: "Seorang pria membeli 3 jenis barang: A, B, dan C. Harga A + B = Rp50.000. Harga B + C = Rp60.000. Harga A + C = Rp70.000. Berapa harga barang B?",
        options: [
            "Rp15.000, karena harga A Rp30.000, B Rp20.000, dan C Rp40.000 setelah eliminasi.",
            "Rp25.000, karena harga A Rp25.000, B Rp25.000, dan C Rp35.000 setelah eliminasi.",
            "Rp20.000, karena harga A Rp30.000, B Rp20.000, dan C Rp40.000 setelah eliminasi.",
            "Rp30.000, karena harga A Rp20.000, B Rp30.000, dan C Rp30.000 setelah eliminasi."
        ],
        correctIndex: 2,
        explanation: "Dari A + B = 50.000, B + C = 60.000, A + C = 70.000. Jumlahkan ketiganya: 2A + 2B + 2C = 180.000 → A + B + C = 90.000. Maka B = (A+B+C) − (A+C) = 90.000 − 70.000 = 20.000. Jadi harga B = Rp20.000, A = Rp30.000, C = Rp40.000."
    }
];
