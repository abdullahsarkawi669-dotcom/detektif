var tempQuestions = [
    // Soal 1 — Kunci: opsi 2
    {
        caseText: "Sebuah lukisan mahal hilang dari museum. Pintu museum terkunci, alarm berfungsi, dan tidak ada jejak pembobolan. Namun lukisan itu diganti dengan replika yang sangat mirip. Detektif menemukan bahwa bingkai replika masih berbau cat baru. Apa kesimpulannya?",
        options: [
            "Pencuri memalsukan alarm agar tidak berbunyi saat lukisan diganti.",
            "Lukisan asli sebenarnya tidak pernah ada dan hanya legenda museum.",
            "Pencuri adalah orang dalam yang mengganti lukisan sebelum museum tutup.",
            "Bingkai berbau cat baru karena museum baru saja merenovasi ruangan."
        ],
        correctIndex: 2,
        explanation: "Bingkai replika yang masih berbau cat baru menunjukkan replika itu dibuat dan dipasang belum lama. Karena tidak ada jejak pembobolan dan alarm berfungsi, pelaku harus memiliki akses internal—kemungkinan staf museum yang mengganti lukisan sebelum museum tutup, lalu membawa lukisan asli keluar."
    },
    // Soal 2 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di kereta api. Ia mengatakan dompetnya ada di saku celana, dan ia baru sadar hilang setelah turun. Detektif melihat saku celana pria itu dalam keadaan utuh tanpa sobekan. Apa yang mencurigakan?",
        options: [
            "Saku utuh tanpa sobekan menunjukkan dompet tidak dicuri dari saku.",
            "Pencuri profesional bisa mengambil dompet tanpa merusak saku sama sekali.",
            "Dompet pria itu terjatuh dari saku saat ia berdesakan di kereta.",
            "Saku celana pria itu memang longgar sehingga dompet mudah keluar."
        ],
        correctIndex: 0,
        explanation: "Jika dompet dicuri dari saku celana, pencuri harus memasukkan tangan ke saku—dan itu biasanya meninggalkan tanda, sobekan, atau setidaknya saku terasa longgar. Saku yang utuh tanpa tanda menunjukkan dompet tidak diambil dari saku. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 3 — Kunci: opsi 3
    {
        caseText: "Seorang detektif diminta menemukan siapa yang mencuri kue di kantor. Tiga karyawan diperiksa. Ana berkata, 'Saya sedang menyalin dokumen di ruang fotokopi.' Budi berkata, 'Saya sedang rapat di ruang meeting.' Citra berkata, 'Saya sedang makan siang di kantin.' Detektif tahu ruang fotokopi sedang rusak sejak pagi. Siapa pembohongnya?",
        options: [
            "Budi, karena rapat di ruang meeting tidak pernah diadakan pada jam makan.",
            "Citra, karena kantin kantor tutup pada jam makan siang hari itu.",
            "Tidak ada, karena ketiganya memiliki alasan yang masuk akal dan jujur.",
            "Ana, karena ruang fotokopi rusak sehingga tidak mungkin ia menyalin dokumen."
        ],
        correctIndex: 3,
        explanation: "Detektif mengetahui ruang fotokopi rusak sejak pagi. Ana mengaku sedang menyalin dokumen di ruang fotokopi—sesuatu yang tidak mungkin dilakukan jika mesin fotokopi rusak. Alibi Ana adalah kebohongan yang membuktikan keterlibatannya dalam pencurian kue."
    },
    // Soal 4 — Kunci: opsi 1
    {
        caseText: "Seorang wanita melaporkan bahwa perhiasannya hilang dari kamar hotel. Ia mengatakan kamar terkunci dan hanya ia yang memegang kunci. Detektif melihat jendela kamar terbuka dan ada bekas kaki di dinding luar. Namun bekas kaki itu mengarah ke atas, bukan ke bawah. Apa kesimpulannya?",
        options: [
            "Bekas kaki mengarah ke atas menunjukkan seseorang memanjat keluar kamar.",
            "Pencuri memanjat ke atas untuk masuk, bukan turun setelah mencuri.",
            "Bekas kaki itu sudah ada sejak lama dan tidak terkait dengan pencurian.",
            "Pencuri memanjat dari atap hotel lalu turun ke jendela kamar korban."
        ],
        correctIndex: 1,
        explanation: "Bekas kaki yang mengarah ke atas menunjukkan seseorang memanjat dari bawah ke atas—bukan turun setelah mencuri. Ini berarti pencuri masuk melalui jendela dengan memanjat dari bawah, lalu keluar melalui pintu (yang mungkin dibuka dari dalam). Jendela terbuka dan bekas kaki adalah jalur masuk, bukan jalur keluar."
    },
    // Soal 5 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku dirampok di jalan. Ia mengatakan perampok merampas jam tangannya. Detektif melihat pergelangan tangan pria itu tidak memiliki bekas apapun, padahal jam tangan biasanya meninggalkan bekas tekanan. Apa kesimpulannya?",
        options: [
            "Jam tangan pria itu longgar sehingga mudah dilepas tanpa meninggalkan bekas.",
            "Perampok menggunakan alat khusus untuk melepas jam tanpa menyentuh kulit.",
            "Tidak ada bekas menunjukkan jam tangan tidak dirampas paksa dari tangannya.",
            "Kulit pria itu tidak sensitif sehingga tekanan jam tidak terlihat sama sekali."
        ],
        correctIndex: 2,
        explanation: "Jam tangan yang dirampas paksa akan meninggalkan bekas tekanan, kemerahan, atau lecet di pergelangan tangan. Tidak adanya bekas sama sekali menunjukkan jam itu tidak ditarik paksa—kemungkinan pria itu melepasnya sendiri dan mengarang cerita perampokan, misalnya untuk mengklaim asuransi."
    },
    // Soal 6 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki hilangnya uang di sebuah kasir toko. Tiga kasir diperiksa. Kasir A berkata, 'Saya menghitung uang di laci sepanjang shift.' Kasir B berkata, 'Saya melayani pelanggan di depan sepanjang shift.' Kasir C berkata, 'Saya istirahat ke toilet selama 15 menit.' Detektif melihat rekaman CCTV dan tidak ada pelanggan sama sekali sepanjang shift. Siapa yang berbohong?",
        options: [
            "Kasir A, karena menghitung uang sepanjang shift adalah hal yang tidak wajar.",
            "Kasir C, karena toilet toko tutup sehingga ia tidak mungkin ke toilet.",
            "Tidak ada, karena ketiganya bisa saja melakukan aktivitasnya masing-masing.",
            "Kasir B, karena tidak ada pelanggan sehingga ia tidak mungkin melayani siapa pun."
        ],
        correctIndex: 3,
        explanation: "Rekaman CCTV menunjukkan tidak ada pelanggan sama sekali sepanjang shift. Kasir B mengaku melayani pelanggan di depan sepanjang shift—sesuatu yang tidak mungkin jika tidak ada pelanggan. Alibi Kasir B adalah kebohongan yang menunjukkan ia mungkin menggunakan waktunya untuk hal lain, termasuk mengambil uang."
    },
    // Soal 7 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di taman. Ia mengatakan tasnya diletakkan di bangku, dan ia pergi sebentar ke toilet. Detektif melihat bangku itu berada di bawah pohon besar, dan ada sarang burung di atasnya. Apa yang mencurigakan dari cerita wanita itu?",
        options: [
            "Burung di pohon itu mungkin mencuri tas wanita karena tertarik warna.",
            "Tas yang diletakkan di bawah sarang burung seharusnya kotor oleh kotoran burung.",
            "Toilet taman terlalu jauh dari bangku sehingga wanita itu berbohong.",
            "Bangku taman itu tidak mungkin digunakan untuk meletakkan tas berharga."
        ],
        correctIndex: 1,
        explanation: "Bangku yang berada tepat di bawah sarang burung besar seharusnya terkena kotoran burung. Jika wanita itu benar-benar meletakkan tasnya di sana, tas itu akan kotor. Fakta bahwa tasnya (yang ia klaim dicuri) tidak menunjukkan tanda kotoran burung mengarah pada kemungkinan ia tidak pernah meletakkan tas di bangku itu—ceritanya palsu."
    },
    // Soal 8 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku sepedanya dicuri dari parkiran. Ia mengatakan sepeda dikunci dengan rantai ke tiang parkiran. Detektif melihat tiang parkiran masih utuh, tetapi rantai sepeda ditemukan tergeletak di tanah dalam keadaan terpotong rapi. Apa kesimpulannya?",
        options: [
            "Rantai dipotong dengan alat pemotong, bukan dibuka dengan kunci.",
            "Rantai itu putus sendiri karena sudah lama dan berkarat dimakan usia.",
            "Sepeda pria itu tidak pernah dikunci sehingga pencuri mudah mengambilnya.",
            "Tiang parkiran sengaja dipotong pencuri agar rantai bisa dilepas."
        ],
        correctIndex: 0,
        explanation: "Rantai yang terpotong rapi menunjukkan penggunaan alat pemotong seperti gunting besi, bukan dibuka dengan kunci. Tiang yang masih utuh membuktikan pencuri tidak memotong tiang, melainkan rantainya. Ini konsisten dengan pencurian sepeda yang dikunci—pelaku memotong rantai untuk membawa kabur sepeda."
    },
    // Soal 9 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus penipuan. Seorang pria mengklaim telah mentransfer uang ke rekening rekan bisnisnya, tetapi rekan itu mengatakan uang tidak pernah masuk. Detektif memeriksa bukti transfer dan melihat nomor rekening tujuan berbeda satu digit dari rekening rekan bisnis. Apa kesimpulannya?",
        options: [
            "Rekan bisnis sengaja mengubah nomor rekening agar uang tidak masuk.",
            "Bank melakukan kesalahan sistem sehingga transfer tidak sampai ke tujuan.",
            "Bukti transfer itu palsu dan dibuat sendiri oleh pria tersebut.",
            "Pria itu salah memasukkan nomor rekening sehingga uang masuk ke orang lain."
        ],
        correctIndex: 3,
        explanation: "Nomor rekening tujuan yang berbeda satu digit dari rekening rekan bisnis menunjukkan kemungkinan besar pria itu salah memasukkan nomor rekening. Uang transfer masuk ke rekening orang lain yang kebetulan nomornya mirip. Ini adalah kesalahan transfer, bukan penipuan—detektif perlu membantu melacak pemilik rekening yang menerima uang."
    },
    // Soal 10 — Kunci: opsi 2
    {
        caseText: "Seorang wanita melaporkan bahwa anaknya hilang di mall. Ia mengatakan anaknya menghilang saat ia mencoba pakaian di kamar fitting. Detektif memeriksa rekaman CCTV dan melihat anak itu keluar dari mall sendirian melalui pintu utama. Apa kesimpulannya?",
        options: [
            "Anak itu diculik seseorang yang menyamar sebagai petugas keamanan mall.",
            "Rekaman CCTV mall itu rusak sehingga tidak bisa dijadikan bukti akurat.",
            "Anak itu keluar sendiri, bukan diculik; ibu mungkin tidak mengawasinya.",
            "Anak itu sebenarnya masih di dalam mall dan bersembunyi dari ibunya."
        ],
        correctIndex: 2,
        explanation: "Rekaman CCTV menunjukkan anak itu keluar dari mall sendirian melalui pintu utama—bukan diculik atau dibawa orang lain. Ini berarti anak pergi atas kemauan sendiri, mungkin saat ibunya sedang mencoba pakaian. Detektif perlu mencari anak di sekitar mall, bukan mencurigai penculikan."
    },
    // Soal 11 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku dompetnya hilang di restoran. Ia mengatakan dompetnya diletakkan di meja, dan ia pergi ke kasir untuk membayar. Detektif melihat meja itu berada di dekat pintu keluar, dan ada tanda 'hati-hati lantai licin' di dekatnya. Apa yang mencurigakan?",
        options: [
            "Tanda lantai licin menunjukkan restoran itu sedang dalam renovasi.",
            "Dompet di meja dekat pintu keluar mudah diambil orang yang lewat.",
            "Pria itu seharusnya tidak pergi ke kasir untuk membayar makanan.",
            "Meja dekat pintu keluar tidak mungkin digunakan untuk pelanggan."
        ],
        correctIndex: 1,
        explanation: "Meja yang berada dekat pintu keluar adalah lokasi yang sangat rawan—siapa pun yang lewat bisa dengan mudah mengambil dompet tanpa menarik perhatian. Ini bukan kejanggalan cerita, melainkan penjelasan mengapa dompet bisa hilang: pelaku kemungkinan orang yang lewat di dekat meja saat pria pergi ke kasir."
    },
    // Soal 12 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya dokumen penting di kantor. Tiga karyawan diperiksa. Karyawan X berkata, 'Saya lembur sendirian di kantor sampai jam 9 malam.' Karyawan Y berkata, 'Saya pulang jam 5 sore bersama karyawan lain.' Karyawan Z berkata, 'Saya tidak masuk kantor hari itu karena sakit.' Detektif melihat rekaman absensi: X lembur, Y pulang jam 5, Z tidak masuk. Namun detektif menemukan sidik jari Z di lemari dokumen. Apa kesimpulannya?",
        options: [
            "Z berbohong; sidik jarinya di lemari membuktikan ia masuk kantor hari itu.",
            "X berbohong karena lembur sendirian adalah alibi yang terlalu sempurna.",
            "Y berbohong karena pulang bersama karyawan lain tidak bisa dibuktikan.",
            "Tidak ada yang berbohong; sidik jari Z mungkin sudah lama di lemari."
        ],
        correctIndex: 0,
        explanation: "Z mengaku tidak masuk kantor hari itu, tetapi sidik jarinya ditemukan di lemari dokumen—tempat yang seharusnya tidak ia sentuh jika benar tidak masuk. Sidik jari bisa saja sudah lama, tetapi jika dokumen hilang pada hari itu dan sidik jari Z ada di lemari, ia perlu diperiksa lebih lanjut. Alibi Z adalah yang paling mencurigakan."
    },
    // Soal 13 — Kunci: opsi 3
    {
        caseText: "Seorang wanita mengaku gelangnya hilang saat berenang di kolam umum. Ia mengatakan gelangnya terlepas di air. Detektif melihat gelang itu ditemukan di dasar kolam, tetapi dalam keadaan terkunci rapi, bukan terbuka. Apa kesimpulannya?",
        options: [
            "Gelang itu memang bisa terlepas lalu mengunci sendiri saat jatuh ke air.",
            "Seseorang sengaja melepas gelang itu dan membuangnya ke dalam kolam.",
            "Gelang itu palsu sehingga tidak berharga dan sengaja dibuang pemiliknya.",
            "Gelang yang terkunci rapi tidak mungkin terlepas sendiri saat berenang."
        ],
        correctIndex: 3,
        explanation: "Gelang yang ditemukan dalam keadaan terkunci rapi tidak mungkin terlepas sendiri—jika terlepas saat berenang, kuncinya akan terbuka. Ini menunjukkan gelang itu sengaja dilepas dan dibuang ke kolam oleh seseorang, atau cerita wanita itu palsu. Detektif perlu memeriksa apakah ada orang lain yang terlibat."
    },
    // Soal 14 — Kunci: opsi 2
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di bandara. Ia mengatakan koper diletakkan di konveyor bagasi, tetapi tidak keluar di bandara tujuan. Detektif melihat label bagasi pria itu masih menempel di koper lain yang mirip. Apa kesimpulannya?",
        options: [
            "Koper pria itu dicuri seseorang yang mengganti label bagasinya.",
            "Koper pria itu tidak pernah masuk ke konveyor karena kesalahan petugas.",
            "Koper pria itu tertukar dengan koper lain yang mirip di konveyor.",
            "Label bagasi pria itu sengaja dipindahkan ke koper lain oleh pencuri."
        ],
        correctIndex: 2,
        explanation: "Label bagasi pria itu menempel di koper lain yang mirip menunjukkan koper tertukar—bukan dicuri. Di bandara, koper yang mirip sering tertukar karena penumpang mengambil koper yang salah. Detektif perlu menghubungi pemilik koper lain untuk menukar kembali."
    },
    // Soal 15 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di pasar. Ia mengatakan dompetnya ada di dalam tas gantung, dan ia baru sadar hilang setelah sampai rumah. Detektif melihat tas gantung wanita itu memiliki resleting yang masih tertutup rapat. Apa kesimpulannya?",
        options: [
            "Pencuri membuka resleting dengan hati-hati lalu menutupnya kembali rapi.",
            "Resleting tertutup rapat menunjukkan dompet tidak dicuri dari dalam tas.",
            "Dompet wanita itu terjatuh dari tas karena resletingnya tidak terkunci.",
            "Tas gantung itu memang mudah dibuka tanpa terlihat dari luar."
        ],
        correctIndex: 1,
        explanation: "Jika dompet dicuri dari dalam tas gantung, resleting harus dibuka—dan biasanya pencuri tidak menutupnya kembali dengan rapi. Resleting yang masih tertutup rapat menunjukkan dompet tidak diambil dari tas. Kemungkinan wanita itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 16 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian uang di sebuah acara amal. Kotak donasi ditemukan kosong, padahal acara baru berlangsung satu jam. Detektif melihat kotak donasi berada di dekat pintu masuk, dan tidak ada petugas yang menjaga. Apa kesimpulannya?",
        options: [
            "Kotak donasi tanpa penjagaan di dekat pintu mudah diambil isinya.",
            "Uang donasi tidak pernah dimasukkan ke kotak sejak awal acara.",
            "Kotak donasi itu rusak sehingga uangnya jatuh keluar dengan sendirinya.",
            "Petugas acara sengaja mengosongkan kotak untuk menghitung uang."
        ],
        correctIndex: 0,
        explanation: "Kotak donasi yang tidak dijaga dan berada di dekat pintu masuk adalah target empuk—siapa pun bisa mengambil isinya tanpa terlihat. Ini menjelaskan mengapa kotak bisa kosong dalam waktu singkat. Detektif perlu memeriksa rekaman CCTV di sekitar pintu masuk untuk mengidentifikasi pelaku."
    },
    // Soal 17 — Kunci: opsi 3
    {
        caseText: "Seorang pria mengaku motornya hilang dari parkiran. Ia mengatakan motor dikunci setir dan dikunci ganda. Detektif melihat tidak ada bekas ban motor di tanah parkiran yang basah. Apa kesimpulannya?",
        options: [
            "Motor bisa diangkat oleh dua orang sehingga tidak meninggalkan bekas ban.",
            "Hujan deras menghapus semua bekas ban motor di tanah parkiran basah.",
            "Motor pria itu diparkir di lokasi lain dan ia lupa tempatnya.",
            "Tidak ada bekas ban berarti motor tidak pernah diparkir di lokasi itu."
        ],
        correctIndex: 3,
        explanation: "Tanah basah akan merekam jejak ban atau bekas parkir motor. Tidak adanya bekas ban sama sekali menunjukkan motor tidak pernah diparkir di lokasi itu—atau cerita pria itu palsu. Meskipun motor bisa diangkat, bekas parkir (misalnya standar motor) tetap akan terlihat di tanah basah. Detektif curiga pria itu mengarang cerita kehilangan."
    },
    // Soal 18 — Kunci: opsi 2
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di kamar hotel. Ia mengatakan cincin diletakkan di meja rias, dan ia baru sadar hilang setelah mandi. Detektif melihat meja rias berada di dekat jendela yang terbuka, dan ada burung yang sering masuk ke kamar. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri petugas hotel yang masuk saat wanita mandi.",
            "Cincin wanita itu terjatuh ke lantai dan menggelinding ke bawah meja.",
            "Burung yang masuk melalui jendela mungkin mengambil cincin yang berkilau.",
            "Jendela terbuka menunjukkan seseorang masuk dan mencuri cincin tersebut."
        ],
        correctIndex: 2,
        explanation: "Burung yang sering masuk ke kamar melalui jendela terbuka bisa tertarik pada benda berkilau seperti cincin. Burung gagak dan sejenisnya dikenal suka mengambil benda berkilau. Ini penjelasan yang lebih masuk akal daripada pencurian, karena tidak ada tanda pembobolan atau orang masuk."
    },
    // Soal 19 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di bus. Ia mengatakan dompetnya ada di tas ransel yang ia bawa di punggung. Detektif melihat ransel pria itu memiliki resleting yang masih terkunci gembok kecil. Apa kesimpulannya?",
        options: [
            "Pencuri membuka gembok dengan kunci duplikat lalu menguncinya kembali.",
            "Gembok masih terkunci menunjukkan dompet tidak dicuri dari dalam ransel.",
            "Gembok kecil itu mudah dibuka tanpa alat sehingga pencuri bisa membukanya.",
            "Dompet pria itu terjatuh dari ransel karena resletingnya tidak terkunci."
        ],
        correctIndex: 1,
        explanation: "Gembok yang masih terkunci pada resleting ransel menunjukkan tidak ada yang membuka ransel tersebut. Jika dompet dicuri dari dalam ransel, gembok harus dibuka—dan itu akan meninggalkan tanda atau tidak terkunci kembali. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 20 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya buku langka di perpustakaan. Tiga pengunjung diperiksa. Pengunjung A berkata, 'Saya membaca buku di meja pojok.' Pengunjung B berkata, 'Saya mencari buku di rak bagian sejarah.' Pengunjung C berkata, 'Saya meminjam buku melalui mesin peminjaman otomatis.' Detektif tahu mesin peminjaman otomatis sedang rusak sejak pagi. Siapa pembohongnya?",
        options: [
            "Pengunjung C, karena mesin peminjaman otomatis rusak sehingga tidak mungkin digunakan.",
            "Pengunjung A, karena meja pojok perpustakaan sedang digunakan petugas.",
            "Pengunjung B, karena rak bagian sejarah sedang dikunci oleh pustakawan.",
            "Tidak ada, karena ketiganya bisa saja melakukan aktivitasnya masing-masing."
        ],
        correctIndex: 0,
        explanation: "Detektif mengetahui mesin peminjaman otomatis rusak sejak pagi. Pengunjung C mengaku meminjam buku melalui mesin itu—sesuatu yang tidak mungkin dilakukan jika mesin rusak. Alibi Pengunjung C adalah kebohongan yang membuktikan keterlibatannya dalam hilangnya buku langka."
    },
	    // Soal 21 — Kunci: opsi 1
    {
        caseText: "Seorang pria melaporkan bahwa koper kerjanya hilang di lobi hotel. Ia mengatakan koper diletakkan di samping kursi, dan ia pergi ke resepsionis sebentar. Detektif melihat kursi itu berada tepat di depan pintu putar hotel yang ramai. Apa kesimpulannya?",
        options: [
            "Koper itu sebenarnya masih ada di lobi dan pria itu salah melihat.",
            "Koper di dekat pintu putar ramai mudah diambil orang tanpa dicurigai.",
            "Petugas hotel sengaja memindahkan koper ke ruang penyimpanan barang.",
            "Pria itu lupa membawa koper dari kamar hotel sebelum turun ke lobi."
        ],
        correctIndex: 1,
        explanation: "Kursi yang berada tepat di depan pintu putar yang ramai adalah lokasi rawan—banyak orang lewat dan bisa mengambil koper tanpa menarik perhatian. Ini menjelaskan bagaimana koper bisa hilang dalam waktu singkat saat pria pergi ke resepsionis. Detektif perlu memeriksa rekaman CCTV di sekitar pintu putar."
    },
    // Soal 22 — Kunci: opsi 3
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di supermarket. Ia mengatakan dompetnya ada di keranjang belanja, dan ia baru sadar hilang saat di kasir. Detektif melihat keranjang belanja wanita itu masih berisi barang belanjaan yang tersusun rapi. Apa yang mencurigakan?",
        options: [
            "Pencuri mengambil dompet dengan sangat hati-hati tanpa mengacak barang.",
            "Dompet wanita itu terjatuh dari keranjang saat ia mendorong troli.",
            "Barang belanjaan yang tersusun rapi menunjukkan tidak ada yang menyentuh keranjang.",
            "Kasir supermarket sengaja mengambil dompet saat memindai barang belanjaan."
        ],
        correctIndex: 2,
        explanation: "Jika dompet dicuri dari keranjang belanja, pencuri harus mengacak atau setidaknya menyentuh barang belanjaan untuk mencapainya. Barang yang masih tersusun rapi menunjukkan tidak ada yang menyentuh keranjang—kemungkinan dompet tidak pernah ada di keranjang, atau wanita itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 23 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya laptop di ruang kerja bersama. Tiga karyawan diperiksa. Karyawan P berkata, 'Saya di ruang rapat sepanjang pagi.' Karyawan Q berkata, 'Saya lembur di meja saya sampai malam.' Karyawan R berkata, 'Saya izin pulang lebih awal karena sakit.' Detektif melihat rekaman CCTV: P memang di ruang rapat, Q pulang jam 5 sore, R izin pulang lebih awal. Siapa yang berbohong?",
        options: [
            "Karyawan Q, karena CCTV menunjukkan ia pulang jam 5 sore, bukan lembur sampai malam.",
            "Karyawan P, karena ruang rapat tidak digunakan pada pagi hari itu.",
            "Karyawan R, karena izin pulang lebih awal tidak tercatat di absensi.",
            "Tidak ada, karena ketiganya memiliki alasan yang bisa dibuktikan kebenarannya."
        ],
        correctIndex: 0,
        explanation: "Karyawan Q mengaku lembur di meja sampai malam, tetapi rekaman CCTV menunjukkan ia pulang jam 5 sore. Alibi Q adalah kebohongan yang membuktikan ia mungkin menggunakan waktu setelah pulang untuk hal lain—atau ia berbohong untuk menutupi keterlibatannya dalam hilangnya laptop."
    },
    // Soal 24 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku sepeda motornya dicuri dari halaman rumah. Ia mengatakan motor diparkir di halaman dan ia menemukannya hilang pagi ini. Detektif melihat pagar halaman rumah pria itu dalam keadaan terkunci dari dalam, dan tidak ada tanda pembobolan. Apa kesimpulannya?",
        options: [
            "Pencuri memanjat pagar tanpa merusaknya sehingga tidak meninggalkan tanda.",
            "Pencuri memiliki kunci duplikat pagar yang dibuat tanpa sepengetahuan pemilik.",
            "Pagar terkunci dari dalam menunjukkan motor tidak mungkin dibawa keluar malam itu.",
            "Motor pria itu diparkir di luar halaman dan ia lupa memindahkannya."
        ],
        correctIndex: 2,
        explanation: "Pagar yang terkunci dari dalam tanpa tanda pembobolan menunjukkan tidak ada orang luar yang bisa masuk atau keluar membawa motor. Jika motor benar-benar dicuri malam itu, pencuri harus membuka pagar—dan itu akan meninggalkan tanda. Kemungkinan motor tidak pernah diparkir di halaman, atau pria itu mengarang cerita pencurian."
    },
    // Soal 25 — Kunci: opsi 1
    {
        caseText: "Seorang wanita melaporkan bahwa perhiasannya hilang dari kamar hotel. Ia mengatakan perhiasan disimpan di dalam brankas kamar. Detektif melihat brankas dalam keadaan terkunci rapi dan tidak ada tanda pembobolan. Namun detektif menemukan bahwa kode brankas tertulis di buku catatan yang diletakkan di meja kamar. Apa kesimpulannya?",
        options: [
            "Pencuri membobol brankas dengan alat khusus tanpa meninggalkan tanda.",
            "Kode brankas yang tertulis di buku catatan memudahkan siapa pun membukanya.",
            "Perhiasan wanita itu sebenarnya tidak pernah dimasukkan ke dalam brankas.",
            "Brankas kamar hotel itu rusak sehingga tidak bisa mengunci dengan benar."
        ],
        correctIndex: 1,
        explanation: "Brankas yang terkunci rapi tanpa tanda pembobolan menunjukkan brankas dibuka dengan kode yang benar—bukan dibobol. Kode brankas yang tertulis di buku catatan di meja kamar memudahkan siapa pun yang masuk ke kamar (misalnya petugas kebersihan) untuk membuka brankas dan mengambil perhiasan."
    },
    // Soal 26 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku dompetnya hilang di taksi. Ia mengatakan dompetnya ada di saku jaket, dan ia baru sadar hilang setelah turun. Detektif melihat jaket pria itu memiliki saku yang dalam dan tertutup kancing. Apa kesimpulannya?",
        options: [
            "Saku dalam dan terkancing menunjukkan dompet sulit dicuri tanpa disadari.",
            "Pencuri taksi bisa membuka kancing saku dengan cepat tanpa ketahuan.",
            "Dompet pria itu terjatuh dari saku saat ia membuka kancing jaketnya.",
            "Saku jaket yang dalam tidak menjamin dompet aman dari pencopetan."
        ],
        correctIndex: 0,
        explanation: "Saku jaket yang dalam dan tertutup kancing membuat dompet sulit dicuri tanpa disadari—pencuri harus membuka kancing dan memasukkan tangan, yang pasti terasa oleh korban. Jika pria itu benar-benar membawa dompet di saku seperti itu, ia seharusnya sadar saat dicuri. Kemungkinan dompet hilang karena sebab lain dan ceritanya palsu."
    },
    // Soal 27 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian uang di kasir restoran. Tiga karyawan diperiksa. Karyawan A berkata, 'Saya mencuci piring di dapur sepanjang shift.' Karyawan B berkata, 'Saya melayani pelanggan di meja nomor 1 sampai 5.' Karyawan C berkata, 'Saya membersihkan lantai di ruang makan.' Detektif melihat rekaman CCTV: A memang di dapur, C menyapu ruang makan, tetapi B terlihat mengobrol di meja nomor 8. Siapa yang berbohong?",
        options: [
            "Karyawan A, karena mencuci piring sepanjang shift adalah hal yang tidak wajar.",
            "Karyawan C, karena menyapu lantai ruang makan bukan tugasnya sebagai pelayan.",
            "Tidak ada, karena ketiganya bisa saja melakukan pekerjaannya masing-masing.",
            "Karyawan B, karena CCTV menunjukkan ia mengobrol di meja nomor 8, bukan melayani meja 1 sampai 5."
        ],
        correctIndex: 3,
        explanation: "Karyawan B mengaku melayani pelanggan di meja nomor 1 sampai 5, tetapi CCTV menunjukkan ia mengobrol di meja nomor 8. Alibi B adalah kebohongan yang membuktikan ia tidak berada di tempat yang ia klaim—kemungkinan ia menggunakan waktunya untuk mengambil uang di kasir."
    },
    // Soal 28 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di halte bus. Ia mengatakan tasnya diletakkan di bangku halte, dan ia berdiri di dekatnya. Detektif melihat bangku halte itu berada tepat di bawah papan jadwal bus, dan ada tanda 'dilarang duduk' di bangku tersebut. Apa yang mencurigakan?",
        options: [
            "Tas di bangku halte mudah diambil orang yang lewat di depan halte.",
            "Papan jadwal bus di atas bangku bisa jatuh dan menimpa tas wanita itu.",
            "Ada tanda dilarang duduk, sehingga tidak mungkin wanita itu meletakkan tasnya di sana.",
            "Bangku halte itu terlalu rendah untuk meletakkan tas berharga seorang wanita."
        ],
        correctIndex: 2,
        explanation: "Tanda 'dilarang duduk' di bangku halte menunjukkan bangku itu tidak boleh digunakan—termasuk untuk meletakkan barang. Jika wanita itu benar-benar meletakkan tasnya di sana, ia melanggar aturan yang jelas terlihat. Fakta bahwa ia mengaku meletakkan tas di bangku terlarang mengarah pada kemungkinan ceritanya palsu atau ia tidak benar-benar meletakkan tas di sana."
    },
    // Soal 29 — Kunci: opsi 1
    {
        caseText: "Seorang pria melaporkan bahwa jam tangannya hilang di gym. Ia mengatakan jam diletakkan di loker, dan ia baru sadar hilang setelah mandi. Detektif melihat loker pria itu dalam keadaan terkunci dan tidak ada tanda pembobolan. Namun detektif menemukan bahwa nomor loker pria itu sama dengan nomor loker yang ia sebutkan, tetapi loker itu ternyata milik orang lain. Apa kesimpulannya?",
        options: [
            "Pencuri membobol loker dengan alat khusus tanpa meninggalkan tanda.",
            "Pria itu salah mengingat nomor loker sehingga jamnya ada di loker lain.",
            "Jam pria itu dicuri petugas gym yang memiliki kunci master semua loker.",
            "Loker gym itu rusak sehingga siapa pun bisa membukanya dengan mudah."
        ],
        correctIndex: 1,
        explanation: "Pria itu menyebutkan nomor loker yang ternyata milik orang lain—ini menunjukkan ia salah mengingat nomor lokernya sendiri. Jam tangannya kemungkinan masih ada di loker yang benar, bukan dicuri. Detektif perlu memeriksa loker dengan nomor yang benar sebelum menyimpulkan pencurian."
    },
    // Soal 30 — Kunci: opsi 0
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di pasar malam. Ia mengatakan dompetnya ada di dalam tas selempang yang ia bawa di depan tubuh. Detektif melihat tas selempang wanita itu memiliki resleting yang masih tertutup rapat dan tidak ada tanda dibuka paksa. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak dicuri dari dalam tas.",
            "Pencuri di pasar malam bisa membuka resleting tanpa terlihat oleh korban.",
            "Dompet wanita itu terjatuh dari tas selempang saat ia berdesakan.",
            "Tas selempang di depan tubuh tetap rawan dicopet tanpa disadari."
        ],
        correctIndex: 0,
        explanation: "Resleting yang masih tertutup rapat dan tidak ada tanda dibuka paksa menunjukkan tidak ada yang membuka tas tersebut. Jika dompet dicuri dari dalam tas, resleting harus dibuka—dan pencuri biasanya tidak menutupnya kembali dengan rapi. Kemungkinan wanita itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 31 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya dokumen rahasia di kantor. Tiga karyawan diperiksa. Karyawan X berkata, 'Saya di ruang server sepanjang pagi.' Karyawan Y berkata, 'Saya di ruang rapat bersama klien.' Karyawan Z berkata, 'Saya di kantin sejak jam 10 pagi.' Detektif melihat rekaman CCTV: X memang di ruang server, Y di ruang rapat, tetapi Z terlihat keluar dari ruang arsip dokumen pada jam 11. Siapa yang berbohong?",
        options: [
            "Karyawan X, karena ruang server tidak boleh dimasuki tanpa izin khusus.",
            "Karyawan Y, karena klien tidak pernah datang ke kantor pada hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan.",
            "Karyawan Z, karena CCTV menunjukkan ia keluar dari ruang arsip, bukan di kantin."
        ],
        correctIndex: 3,
        explanation: "Karyawan Z mengaku di kantin sejak jam 10 pagi, tetapi CCTV menunjukkan ia keluar dari ruang arsip dokumen pada jam 11. Alibi Z adalah kebohongan yang membuktikan ia berada di ruang arsip—tempat dokumen rahasia hilang. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 32 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku motornya dicuri dari parkiran mal. Ia mengatakan motor diparkir di zona B dan ia menemukannya hilang setelah berbelanja. Detektif melihat rekaman CCTV parkiran: pria itu masuk ke mal dengan berjalan kaki, bukan mengendarai motor. Apa kesimpulannya?",
        options: [
            "Motor pria itu diparkir di zona lain yang tidak terpantau kamera.",
            "Motor pria itu ditarik derek petugas mal sebelum ia selesai berbelanja.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada motor hilang.",
            "Rekaman CCTV parkiran mal itu rusak dan tidak bisa dijadikan bukti."
        ],
        correctIndex: 2,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di mal dengan berjalan kaki, bukan mengendarai motor. Jika ia tidak membawa motor, tidak mungkin ada motor yang hilang dari parkiran. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan motor untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 33 — Kunci: opsi 1
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di restoran. Ia mengatakan cincin diletakkan di meja saat ia mencuci tangan, dan ia baru sadar hilang setelah kembali. Detektif melihat meja itu berada di dekat wastafel umum, dan ada tanda 'hati-hati lantai licin' di dekat wastafel. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri pelayan yang membersihkan meja saat wanita pergi.",
            "Meja dekat wastafel ramai dilewati orang sehingga cincin mudah hilang.",
            "Cincin wanita itu terjatuh ke lantai dan menggelinding ke saluran air.",
            "Tanda lantai licin menunjukkan restoran sedang dalam renovasi besar."
        ],
        correctIndex: 1,
        explanation: "Meja yang berada di dekat wastafel umum adalah lokasi ramai—banyak orang lewat untuk mencuci tangan. Cincin yang diletakkan di meja seperti itu mudah hilang, baik karena diambil orang yang lewat maupun karena terjatuh saat meja tersenggol. Ini menjelaskan mengapa cincin bisa hilang dalam waktu singkat."
    },
    // Soal 34 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di bus kota. Ia mengatakan dompetnya ada di tas jinjing yang ia letakkan di pangkuan. Detektif melihat tas jinjing pria itu memiliki resleting yang masih tertutup rapat, tetapi ada sobekan kecil di bagian bawah tas. Apa kesimpulannya?",
        options: [
            "Sobekan di bagian bawah tas menunjukkan dompet diambil tanpa membuka resleting.",
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Sobekan kecil itu sudah ada sejak lama dan tidak terkait dengan pencurian.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 0,
        explanation: "Sobekan kecil di bagian bawah tas—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui sobekan tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian bawah tas yang tidak terlihat oleh korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 35 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian perhiasan di sebuah pameran. Tiga pengunjung diperiksa. Pengunjung A berkata, 'Saya melihat lukisan di sayap kiri pameran.' Pengunjung B berkata, 'Saya membeli minuman di kafetaria pameran.' Pengunjung C berkata, 'Saya sedang menelepon di luar gedung.' Detektif melihat rekaman CCTV: A memang di sayap kiri, B di kafetaria, tetapi C terlihat berada di dekat vitrin perhiasan pada saat kejadian. Siapa yang berbohong?",
        options: [
            "Pengunjung A, karena sayap kiri pameran sedang ditutup untuk renovasi.",
            "Pengunjung B, karena kafetaria pameran tutup pada hari kejadian tersebut.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan.",
            "Pengunjung C, karena CCTV menunjukkan ia berada di dekat vitrin perhiasan, bukan di luar gedung."
        ],
        correctIndex: 3,
        explanation: "Pengunjung C mengaku sedang menelepon di luar gedung, tetapi CCTV menunjukkan ia berada di dekat vitrin perhiasan pada saat kejadian. Alibi C adalah kebohongan yang membuktikan ia berada di TKP saat pencurian terjadi. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 36 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku tasnya hilang di perpustakaan. Ia mengatakan tasnya diletakkan di kursi sebelahnya, dan ia pergi ke rak buku sebentar. Detektif melihat kursi itu berada di area yang ditandai 'area tenang' dengan aturan tidak boleh meninggalkan barang berharga. Apa kesimpulannya?",
        options: [
            "Tas itu dicuri seseorang yang melihat wanita pergi ke rak buku.",
            "Perpustakaan seharusnya menyediakan loker untuk menyimpan tas pengunjung.",
            "Wanita itu melanggar aturan dengan meninggalkan tas di area tenang, sehingga ceritanya mencurigakan.",
            "Area tenang perpustakaan tidak mungkin digunakan untuk meletakkan tas berharga."
        ],
        correctIndex: 2,
        explanation: "Area tenang yang memiliki aturan jelas 'tidak boleh meninggalkan barang berharga' seharusnya membuat pengunjung berhati-hati. Wanita itu mengaku meninggalkan tasnya di kursi di area tersebut—melanggar aturan yang terpampang. Ini bisa berarti ceritanya palsu, atau ia memang lalai sehingga tasnya hilang. Detektif perlu memeriksa rekaman CCTV area tersebut."
    },
    // Soal 37 — Kunci: opsi 1
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di terminal bus. Ia mengatakan koper diletakkan di samping kursi tunggu, dan ia pergi ke toilet. Detektif melihat kursi tunggu itu berada tepat di depan pintu keluar terminal yang ramai. Apa kesimpulannya?",
        options: [
            "Koper pria itu sebenarnya masih ada di terminal dan ia salah melihat.",
            "Koper di depan pintu keluar ramai mudah diambil orang tanpa dicurigai.",
            "Petugas terminal sengaja memindahkan koper ke ruang kehilangan barang.",
            "Pria itu lupa membawa koper dari bus sebelum turun di terminal."
        ],
        correctIndex: 1,
        explanation: "Kursi tunggu yang berada tepat di depan pintu keluar terminal yang ramai adalah lokasi rawan—banyak orang lewat dan bisa mengambil koper tanpa menarik perhatian. Ini menjelaskan bagaimana koper bisa hilang saat pria pergi ke toilet. Detektif perlu memeriksa rekaman CCTV di sekitar pintu keluar."
    },
    // Soal 38 — Kunci: opsi 0
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di minimarket. Ia mengatakan dompetnya ada di tas tangan yang ia gantung di lengan. Detektif melihat tas tangan wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas potongan kecil di bagian samping tas. Apa kesimpulannya?",
        options: [
            "Bekas potongan di samping tas menunjukkan dompet diambil tanpa membuka resleting.",
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas potongan itu sudah ada sejak lama dan tidak terkait dengan kasus.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 0,
        explanation: "Bekas potongan kecil di samping tas—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui celah potongan tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian samping tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 39 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya uang di sebuah toko. Tiga karyawan diperiksa. Karyawan M berkata, 'Saya mengatur barang di rak sepanjang pagi.' Karyawan N berkata, 'Saya melayani pelanggan di kasir.' Karyawan O berkata, 'Saya mengantar barang ke gudang.' Detektif melihat rekaman CCTV: M memang di rak, N di kasir, tetapi O terlihat masuk ke ruang kasir pada jam 10 pagi. Siapa yang berbohong?",
        options: [
            "Karyawan M, karena mengatur barang di rak sepanjang pagi adalah hal yang mencurigakan.",
            "Karyawan N, karena kasir toko tutup pada jam 10 pagi hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan.",
            "Karyawan O, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan mengantar barang ke gudang."
        ],
        correctIndex: 3,
        explanation: "Karyawan O mengaku mengantar barang ke gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 10 pagi—saat uang hilang. Alibi O adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 40 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku sepedanya dicuri dari depan kantor. Ia mengatakan sepeda diparkir di rak sepeda dan ia menemukannya hilang saat pulang kerja. Detektif melihat rak sepeda di depan kantor memiliki CCTV, dan rekaman menunjukkan pria itu tiba di kantor dengan berjalan kaki pagi itu. Apa kesimpulannya?",
        options: [
            "Sepeda pria itu diparkir di tempat lain yang tidak terpantau kamera.",
            "Sepeda pria itu dicuri sebelum ia tiba di kantor pada pagi hari.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada sepeda hilang.",
            "Rekaman CCTV kantor itu rusak sehingga tidak bisa dijadikan bukti."
        ],
        correctIndex: 2,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di kantor dengan berjalan kaki pada pagi hari. Jika ia tidak membawa sepeda, tidak mungkin ada sepeda yang dicuri dari rak. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan sepeda untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
	    // Soal 41 — Kunci: opsi 3
    {
        caseText: "Seorang pria melaporkan bahwa dompetnya hilang di kafe. Ia mengatakan dompetnya diletakkan di meja, dan ia pergi ke toilet sebentar. Detektif melihat meja itu berada di sudut kafe yang sepi, jauh dari pintu keluar. Apa yang mencurigakan dari cerita pria itu?",
        options: [
            "Meja di sudut sepi seharusnya aman sehingga dompet tidak mungkin hilang.",
            "Toilet kafe terlalu jauh dari meja sehingga pria itu berbohong.",
            "Dompet pria itu mungkin terjatuh ke lantai saat ia berdiri dari meja.",
            "Meja di sudut sepi justru lebih rawan karena tidak terpantau orang lain."
        ],
        correctIndex: 3,
        explanation: "Meja di sudut sepi yang jauh dari pintu keluar justru lebih rawan—tidak ada orang yang melihat, sehingga pencuri bisa mengambil dompet tanpa dicurigai. Pria itu mengira meja sepi lebih aman, padahal justru sebaliknya. Ini menjelaskan mengapa dompet bisa hilang dalam waktu singkat."
    },
    // Soal 42 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di halte bus. Ia mengatakan tasnya diletakkan di bangku halte, dan ia berdiri di dekatnya sambil melihat ponsel. Detektif melihat bangku halte itu berada di area yang gelap dan lampunya mati. Apa kesimpulannya?",
        options: [
            "Tas itu dicuri seseorang yang memanfaatkan kegelapan area halte bus.",
            "Wanita itu berbohong karena halte bus tidak pernah gelap pada malam hari.",
            "Tas wanita itu terjatuh dari bangku karena angin kencang di halte.",
            "Lampu halte yang mati menunjukkan halte itu sudah lama tidak digunakan."
        ],
        correctIndex: 0,
        explanation: "Area halte yang gelap dan lampunya mati memudahkan pencuri mengambil tas tanpa terlihat—terutama karena wanita itu sedang fokus pada ponselnya. Kegelapan menjelaskan bagaimana tas bisa hilang tanpa disadari korban. Detektif perlu memeriksa apakah ada saksi atau rekaman CCTV di sekitar halte."
    },
    // Soal 43 — Kunci: opsi 2
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya kamera di studio foto. Tiga fotografer diperiksa. Fotografer A berkata, 'Saya memotret di luar studio sepanjang pagi.' Fotografer B berkata, 'Saya mengedit foto di ruang komputer.' Fotografer C berkata, 'Saya istirahat di ruang tunggu.' Detektif melihat rekaman CCTV: A memang di luar, B di ruang komputer, tetapi C terlihat masuk ke ruang penyimpanan kamera. Siapa yang berbohong?",
        options: [
            "Fotografer A, karena memotret di luar studio sepanjang pagi adalah hal yang tidak wajar.",
            "Fotografer B, karena ruang komputer studio sedang dalam perbaikan.",
            "Fotografer C, karena CCTV menunjukkan ia masuk ke ruang penyimpanan kamera.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 2,
        explanation: "Fotografer C mengaku istirahat di ruang tunggu, tetapi CCTV menunjukkan ia masuk ke ruang penyimpanan kamera—tempat kamera hilang. Alibi C adalah kebohongan yang membuktikan ia berada di TKP saat kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 44 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku motornya dicuri dari parkiran. Ia mengatakan motor diparkir di zona C dan ia menemukannya hilang setelah berbelanja. Detektif melihat tanah di parkiran zona C masih basah karena hujan, tetapi tidak ada jejak ban motor di sana. Apa kesimpulannya?",
        options: [
            "Tidak ada jejak ban berarti motor tidak pernah diparkir di zona C.",
            "Pencuri mengangkat motor sehingga tidak meninggalkan jejak di tanah basah.",
            "Hujan deras menghapus semua jejak ban motor di parkiran zona C.",
            "Motor pria itu diparkir di zona lain dan ia lupa tempatnya."
        ],
        correctIndex: 0,
        explanation: "Tanah basah akan merekam jejak ban atau bekas parkir motor. Tidak adanya jejak ban sama sekali menunjukkan motor tidak pernah diparkir di zona C—atau cerita pria itu palsu. Meskipun motor bisa diangkat, bekas parkir (misalnya standar motor) tetap akan terlihat. Detektif curiga pria itu mengarang cerita kehilangan."
    },
    // Soal 45 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa perhiasannya hilang dari kamar hotel. Ia mengatakan perhiasan disimpan di dalam lemari pakaian. Detektif melihat lemari dalam keadaan terkunci, tetapi kuncinya tergantung di pintu lemari. Apa kesimpulannya?",
        options: [
            "Pencuri membobol lemari dengan alat khusus tanpa meninggalkan tanda.",
            "Perhiasan wanita itu sebenarnya tidak pernah dimasukkan ke dalam lemari.",
            "Lemari kamar hotel itu rusak sehingga tidak bisa mengunci dengan benar.",
            "Kunci yang tergantung di pintu lemari memudahkan siapa pun membukanya."
        ],
        correctIndex: 3,
        explanation: "Lemari yang terkunci tetapi kuncinya tergantung di pintu lemari sama saja dengan tidak terkunci—siapa pun yang masuk ke kamar bisa membuka lemari dan mengambil perhiasan. Ini menjelaskan bagaimana perhiasan bisa hilang meskipun lemari 'terkunci'. Detektif perlu memeriksa siapa saja yang masuk ke kamar."
    },
    // Soal 46 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di kereta api. Ia mengatakan dompetnya ada di saku celana, dan ia baru sadar hilang setelah turun. Detektif melihat saku celana pria itu memiliki resleting yang masih tertutup rapat. Apa kesimpulannya?",
        options: [
            "Pencuri membuka resleting saku dengan cepat tanpa ketahuan korban.",
            "Resleting tertutup rapat menunjukkan dompet tidak dicuri dari saku.",
            "Dompet pria itu terjatuh dari saku saat ia berdesakan di kereta.",
            "Saku beresleting tetap rawan dicopet tanpa disadari pemiliknya."
        ],
        correctIndex: 1,
        explanation: "Resleting saku yang masih tertutup rapat menunjukkan tidak ada yang membuka saku tersebut. Jika dompet dicuri dari saku, resleting harus dibuka—dan pencuri biasanya tidak menutupnya kembali dengan rapi. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 47 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian uang di sebuah kantor. Tiga karyawan diperiksa. Karyawan X berkata, 'Saya di ruang rapat sepanjang pagi.' Karyawan Y berkata, 'Saya di meja saya mengerjakan laporan.' Karyawan Z berkata, 'Saya di ruang istirahat minum kopi.' Detektif melihat rekaman CCTV: X memang di ruang rapat, Z di ruang istirahat, tetapi Y terlihat masuk ke ruang keuangan pada jam 10. Siapa yang berbohong?",
        options: [
            "Karyawan Y, karena CCTV menunjukkan ia masuk ke ruang keuangan, bukan di meja.",
            "Karyawan X, karena ruang rapat tidak digunakan pada pagi hari itu.",
            "Karyawan Z, karena ruang istirahat kantor tutup pada jam 10 pagi.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Karyawan Y mengaku di meja mengerjakan laporan, tetapi CCTV menunjukkan ia masuk ke ruang keuangan pada jam 10—saat uang hilang. Alibi Y adalah kebohongan yang membuktikan ia berada di ruang keuangan pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 48 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di pasar. Ia mengatakan dompetnya ada di dalam tas gantung yang ia bawa di bahu. Detektif melihat tas gantung wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada benang yang tertarik di bagian jahitan tas. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Benang tertarik menunjukkan tas itu sudah lama dan akan segera rusak.",
            "Benang tertarik di jahitan menunjukkan dompet diambil melalui celah jahitan.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 2,
        explanation: "Benang yang tertarik di bagian jahitan—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui celah jahitan yang direnggangkan. Ini teknik pencopetan yang umum: merenggangkan jahitan tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 49 — Kunci: opsi 3
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di stasiun kereta. Ia mengatakan koper diletakkan di samping kursi tunggu, dan ia pergi ke loket untuk membeli tiket. Detektif melihat kursi tunggu itu berada di area yang ditandai 'area tunggu khusus penumpang'. Apa kesimpulannya?",
        options: [
            "Koper pria itu sebenarnya masih ada di stasiun dan ia salah melihat.",
            "Petugas stasiun sengaja memindahkan koper ke ruang kehilangan barang.",
            "Area tunggu khusus penumpang tidak mungkin digunakan untuk meletakkan koper.",
            "Koper di area tunggu ramai mudah diambil orang tanpa dicurigai."
        ],
        correctIndex: 3,
        explanation: "Area tunggu khusus penumpang adalah lokasi ramai—banyak orang lewat dan bisa mengambil koper tanpa menarik perhatian. Ini menjelaskan bagaimana koper bisa hilang saat pria pergi ke loket. Detektif perlu memeriksa rekaman CCTV di sekitar area tunggu."
    },
    // Soal 50 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di taman. Ia mengatakan tasnya diletakkan di bangku, dan ia pergi ke toilet sebentar. Detektif melihat bangku itu berada di bawah pohon besar yang rindang, dan ada sarang lebah di dahan atasnya. Apa yang mencurigakan dari cerita wanita itu?",
        options: [
            "Lebah di pohon itu mungkin menyerang wanita saat ia kembali ke bangku.",
            "Tas yang diletakkan di bawah sarang lebah seharusnya membuat wanita waspada.",
            "Toilet taman terlalu jauh dari bangku sehingga wanita itu berbohong.",
            "Bangku di bawah pohon rindang tidak mungkin digunakan untuk meletakkan tas."
        ],
        correctIndex: 1,
        explanation: "Bangku yang berada tepat di bawah sarang lebah adalah lokasi yang berbahaya—wanita itu seharusnya waspada dan tidak meninggalkan tasnya di sana. Fakta bahwa ia mengaku meletakkan tas di bawah sarang lebah tanpa ragu mengarah pada kemungkinan ceritanya palsu atau ia tidak benar-benar meletakkan tas di sana."
    },
    // Soal 51 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya buku langka di perpustakaan. Tiga pengunjung diperiksa. Pengunjung A berkata, 'Saya membaca di meja baca utama.' Pengunjung B berkata, 'Saya mencari buku di rak sastra.' Pengunjung C berkata, 'Saya menggunakan komputer katalog.' Detektif melihat rekaman CCTV: A memang di meja baca, C di komputer, tetapi B terlihat masuk ke ruang koleksi langka. Siapa yang berbohong?",
        options: [
            "Pengunjung B, karena CCTV menunjukkan ia masuk ke ruang koleksi langka, bukan di rak sastra.",
            "Pengunjung A, karena meja baca utama sedang digunakan petugas perpustakaan.",
            "Pengunjung C, karena komputer katalog perpustakaan sedang rusak sejak pagi.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Pengunjung B mengaku mencari buku di rak sastra, tetapi CCTV menunjukkan ia masuk ke ruang koleksi langka—tempat buku langka hilang. Alibi B adalah kebohongan yang membuktikan ia berada di TKP saat kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 52 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku jam tangannya hilang di gym. Ia mengatakan jam diletakkan di loker, dan ia baru sadar hilang setelah mandi. Detektif melihat loker pria itu dalam keadaan terkunci dan tidak ada tanda pembobolan. Namun detektif menemukan bahwa kunci loker itu masih menancap di lubang kunci. Apa kesimpulannya?",
        options: [
            "Pencuri membobol loker dengan alat khusus tanpa meninggalkan tanda.",
            "Jam pria itu sebenarnya tidak pernah dimasukkan ke dalam loker.",
            "Kunci yang masih menancap menunjukkan loker tidak benar-benar terkunci.",
            "Loker gym itu rusak sehingga siapa pun bisa membukanya dengan mudah."
        ],
        correctIndex: 2,
        explanation: "Kunci yang masih menancap di lubang kunci menunjukkan loker sebenarnya tidak terkunci dengan benar—siapa pun bisa membuka dan mengambil isinya. Ini menjelaskan bagaimana jam bisa hilang meskipun loker tampak 'terkunci'. Detektif perlu memeriksa siapa saja yang berada di ruang loker saat kejadian."
    },
    // Soal 53 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di kolam renang hotel. Ia mengatakan cincin diletakkan di kursi pantai, dan ia baru sadar hilang setelah berenang. Detektif melihat kursi pantai itu berada di area yang ramai pengunjung, dan ada tanda 'barang berharga ditanggung sendiri' di dekatnya. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri petugas kolam renang yang membersihkan area kursi.",
            "Cincin wanita itu terjatuh ke lantai dan menggelinding ke saluran air.",
            "Tanda peringatan itu menunjukkan hotel tidak bertanggung jawab atas kehilangan.",
            "Kursi di area ramai membuat cincin mudah hilang tanpa diketahui pemiliknya."
        ],
        correctIndex: 3,
        explanation: "Kursi pantai di area ramai adalah lokasi rawan—banyak orang lewat dan cincin kecil mudah hilang, baik karena diambil orang maupun karena terjatuh tanpa disadari. Tanda peringatan 'barang berharga ditanggung sendiri' justru menegaskan bahwa area tersebut rawan kehilangan. Detektif perlu memeriksa apakah cincin benar-benar hilang atau terjatuh di sekitar kursi."
    },
    // Soal 54 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di bus kota. Ia mengatakan dompetnya ada di tas ransel yang ia bawa di punggung. Detektif melihat ransel pria itu memiliki resleting yang masih tertutup rapat, tetapi ada lubang kecil di bagian belakang ransel. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari ransel.",
            "Lubang kecil di belakang ransel menunjukkan dompet diambil tanpa membuka resleting.",
            "Lubang itu sudah ada sejak lama dan tidak terkait dengan pencopetan.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 1,
        explanation: "Lubang kecil di bagian belakang ransel—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui lubang tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian belakang tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 55 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian uang di sebuah toko buku. Tiga karyawan diperiksa. Karyawan P berkata, 'Saya menata buku di rak depan sepanjang pagi.' Karyawan Q berkata, 'Saya melayani pembeli di kasir.' Karyawan R berkata, 'Saya mengecek stok di gudang.' Detektif melihat rekaman CCTV: P memang di rak depan, Q di kasir, tetapi R terlihat masuk ke ruang kasir pada jam 11. Siapa yang berbohong?",
        options: [
            "Karyawan R, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang.",
            "Karyawan P, karena menata buku di rak depan sepanjang pagi tidak wajar.",
            "Karyawan Q, karena kasir toko buku tutup pada jam 11 pagi hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Karyawan R mengaku mengecek stok di gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 11—saat uang hilang. Alibi R adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 56 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di mal. Ia mengatakan tasnya diletakkan di kursi food court, dan ia pergi memesan makanan. Detektif melihat kursi itu berada tepat di depan eskalator yang ramai. Apa kesimpulannya?",
        options: [
            "Tas itu dicuri seseorang yang melihat wanita pergi memesan makanan.",
            "Eskalator mal terlalu ramai sehingga tidak mungkin ada pencuri di sana.",
            "Kursi di depan eskalator ramai mudah dilewati orang yang bisa mengambil tas.",
            "Food court mal seharusnya menyediakan loker untuk menyimpan tas pengunjung."
        ],
        correctIndex: 2,
        explanation: "Kursi yang berada tepat di depan eskalator ramai adalah lokasi rawan—banyak orang lewat dan bisa mengambil tas tanpa menarik perhatian. Ini menjelaskan bagaimana tas bisa hilang saat wanita pergi memesan makanan. Detektif perlu memeriksa rekaman CCTV di sekitar eskalator."
    },
    // Soal 57 — Kunci: opsi 3
    {
        caseText: "Seorang pria melaporkan bahwa sepedanya dicuri dari depan toko. Ia mengatakan sepeda diparkir di rak sepeda dan ia menemukannya hilang saat pulang kerja. Detektif melihat rak sepeda di depan toko memiliki CCTV, dan rekaman menunjukkan pria itu tiba di toko dengan berjalan kaki pagi itu. Apa kesimpulannya?",
        options: [
            "Sepeda pria itu diparkir di tempat lain yang tidak terpantau kamera.",
            "Sepeda pria itu dicuri sebelum ia tiba di toko pada pagi hari.",
            "Rekaman CCTV toko itu rusak sehingga tidak bisa dijadikan bukti.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada sepeda hilang."
        ],
        correctIndex: 3,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di toko dengan berjalan kaki pada pagi hari. Jika ia tidak membawa sepeda, tidak mungkin ada sepeda yang dicuri dari rak. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan sepeda untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 58 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di restoran. Ia mengatakan dompetnya ada di tas tangan yang ia letakkan di kursi sebelahnya. Detektif melihat tas tangan wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas tarikan keras di bagian resleting. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas tarikan keras di resleting menunjukkan tas sempat dicoba dibuka paksa.",
            "Bekas tarikan itu sudah ada sejak lama dan tidak terkait dengan kasus.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 1,
        explanation: "Bekas tarikan keras di bagian resleting—meskipun resleting masih tertutup—menunjukkan seseorang sempat mencoba membuka tas secara paksa. Meskipun akhirnya gagal atau berhasil menutupnya kembali, bekas tarikan itu adalah bukti adanya upaya pencopetan. Detektif perlu memeriksa apakah dompet benar-benar hilang atau hanya dipindahkan."
    },
    // Soal 59 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya kamera di sebuah acara pernikahan. Tiga kru diperiksa. Kru A berkata, 'Saya memotret di aula utama sepanjang acara.' Kru B berkata, 'Saya mengatur lampu di panggung.' Kru C berkata, 'Saya istirahat di ruang kru.' Detektif melihat rekaman CCTV: A memang di aula, B di panggung, tetapi C terlihat masuk ke ruang penyimpanan kamera. Siapa yang berbohong?",
        options: [
            "Kru C, karena CCTV menunjukkan ia masuk ke ruang penyimpanan kamera.",
            "Kru A, karena memotret di aula utama sepanjang acara adalah hal yang tidak wajar.",
            "Kru B, karena mengatur lampu di panggung bukan tugas kru fotografi.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Kru C mengaku istirahat di ruang kru, tetapi CCTV menunjukkan ia masuk ke ruang penyimpanan kamera—tempat kamera hilang. Alibi C adalah kebohongan yang membuktikan ia berada di TKP saat kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 60 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku motornya dicuri dari parkiran. Ia mengatakan motor diparkir di zona D dan ia menemukannya hilang setelah berbelanja. Detektif melihat rekaman CCTV parkiran: pria itu masuk ke mal dengan berjalan kaki, bukan mengendarai motor. Apa kesimpulannya?",
        options: [
            "Motor pria itu diparkir di zona lain yang tidak terpantau kamera.",
            "Motor pria itu ditarik derek petugas mal sebelum ia selesai berbelanja.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada motor hilang.",
            "Rekaman CCTV parkiran mal itu rusak dan tidak bisa dijadikan bukti."
        ],
        correctIndex: 2,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di mal dengan berjalan kaki, bukan mengendarai motor. Jika ia tidak membawa motor, tidak mungkin ada motor yang hilang dari parkiran. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan motor untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
	    // Soal 61 — Kunci: opsi 2
    {
        caseText: "Seorang wanita melaporkan bahwa kalungnya hilang di salon. Ia mengatakan kalung diletakkan di meja rias, dan ia baru sadar hilang setelah selesai perawatan. Detektif melihat meja rias itu berada di dekat pintu masuk salon yang ramai. Apa kesimpulannya?",
        options: [
            "Kalung itu dicuri oleh pelanggan lain yang duduk di sebelahnya.",
            "Kalung wanita itu terjatuh ke lantai dan terinjak oleh pengunjung salon.",
            "Meja rias dekat pintu masuk ramai dilewati orang sehingga kalung mudah hilang.",
            "Salon seharusnya menyediakan loker untuk menyimpan barang berharga pelanggan."
        ],
        correctIndex: 2,
        explanation: "Meja rias yang berada di dekat pintu masuk salon yang ramai adalah lokasi rawan—banyak orang lewat dan kalung kecil mudah hilang, baik karena diambil orang maupun karena terjatuh tanpa disadari. Ini menjelaskan mengapa kalung bisa hilang dalam waktu singkat. Detektif perlu memeriksa rekaman CCTV di sekitar pintu masuk."
    },
    // Soal 62 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di kereta bawah tanah. Ia mengatakan dompetnya ada di saku belakang celana. Detektif melihat saku belakang celana pria itu memiliki kancing yang masih terpasang rapi. Apa kesimpulannya?",
        options: [
            "Kancing masih terpasang menunjukkan dompet tidak dicuri dari saku belakang.",
            "Pencuri profesional bisa membuka kancing saku tanpa disadari korban.",
            "Dompet pria itu terjatuh dari saku saat ia duduk di kursi kereta.",
            "Saku belakang dengan kancing tetap rawan dicopet di kereta yang ramai."
        ],
        correctIndex: 0,
        explanation: "Kancing saku belakang yang masih terpasang rapi menunjukkan tidak ada yang membuka saku tersebut. Jika dompet dicuri dari saku, kancing harus dibuka—dan pencuri biasanya tidak memasangnya kembali. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 63 — Kunci: opsi 3
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya uang di sebuah apotek. Tiga karyawan diperiksa. Karyawan X berkata, 'Saya meracik obat di ruang belakang.' Karyawan Y berkata, 'Saya melayani pembeli di depan.' Karyawan Z berkata, 'Saya mengecek stok obat di gudang.' Detektif melihat rekaman CCTV: X di ruang belakang, Y di depan, tetapi Z terlihat masuk ke ruang kasir pada jam 14. Siapa yang berbohong?",
        options: [
            "Karyawan X, karena meracik obat di ruang belakang adalah tugas yang mencurigakan.",
            "Karyawan Y, karena apotek tutup pada jam 14 siang hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan.",
            "Karyawan Z, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang."
        ],
        correctIndex: 3,
        explanation: "Karyawan Z mengaku mengecek stok obat di gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 14—saat uang hilang. Alibi Z adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 64 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di pantai. Ia mengatakan tasnya diletakkan di bawah payung, dan ia pergi berenang sebentar. Detektif melihat payung itu berada di area pantai yang ramai pengunjung, dan ada tanda 'awas arus deras' di dekatnya. Apa kesimpulannya?",
        options: [
            "Tanda awas arus deras menunjukkan pantai itu ditutup untuk pengunjung.",
            "Tas di bawah payung di area ramai mudah diambil orang tanpa dicurigai.",
            "Tas wanita itu terbawa angin laut dan jatuh ke dalam air pantai.",
            "Payung pantai di area ramai tidak mungkin digunakan untuk meletakkan tas."
        ],
        correctIndex: 1,
        explanation: "Payung di area pantai yang ramai adalah lokasi rawan—banyak orang lewat dan tas bisa diambil tanpa menarik perhatian, terutama saat pemiliknya sedang berenang. Ini menjelaskan bagaimana tas bisa hilang dalam waktu singkat. Detektif perlu memeriksa apakah ada saksi atau pengunjung lain di sekitar payung."
    },
    // Soal 65 — Kunci: opsi 0
    {
        caseText: "Seorang pria melaporkan bahwa laptopnya hilang di kafe. Ia mengatakan laptop diletakkan di meja, dan ia pergi ke kasir untuk memesan minuman. Detektif melihat meja itu berada di dekat pintu keluar kafe yang ramai. Apa kesimpulannya?",
        options: [
            "Laptop di meja dekat pintu keluar ramai mudah diambil orang yang lewat.",
            "Laptop pria itu sebenarnya masih ada di kafe dan ia salah melihat.",
            "Petugas kafe sengaja memindahkan laptop ke ruang penyimpanan barang.",
            "Pria itu lupa membawa laptop dari rumah sebelum pergi ke kafe."
        ],
        correctIndex: 0,
        explanation: "Meja yang berada di dekat pintu keluar kafe yang ramai adalah lokasi rawan—banyak orang lewat dan laptop bisa diambil tanpa menarik perhatian. Ini menjelaskan bagaimana laptop bisa hilang saat pria pergi ke kasir. Detektif perlu memeriksa rekaman CCTV di sekitar pintu keluar."
    },
    // Soal 66 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di kamar hotel. Ia mengatakan cincin diletakkan di meja rias, dan ia baru sadar hilang setelah kembali dari makan malam. Detektif melihat meja rias itu berada di dekat jendela yang terbuka, dan ada celah di lantai dekat meja. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri petugas hotel yang masuk saat wanita makan malam.",
            "Cincin wanita itu sebenarnya tidak pernah diletakkan di meja rias.",
            "Jendela terbuka menunjukkan seseorang masuk dan mencuri cincin tersebut.",
            "Cincin kecil bisa terjatuh dan masuk ke celah lantai di dekat meja rias."
        ],
        correctIndex: 3,
        explanation: "Cincin yang kecil dan diletakkan di meja rias dekat celah lantai bisa saja terjatuh dan masuk ke celah tersebut tanpa disadari. Ini penjelasan yang lebih masuk akal daripada pencurian, karena tidak ada tanda orang masuk. Detektif perlu memeriksa celah lantai sebelum menyimpulkan pencurian."
    },
    // Soal 67 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku motornya dicuri dari parkiran. Ia mengatakan motor diparkir di zona E dan ia menemukannya hilang setelah berbelanja. Detektif melihat tanah di parkiran zona E masih basah karena hujan, tetapi tidak ada jejak ban motor di sana. Apa kesimpulannya?",
        options: [
            "Pencuri mengangkat motor sehingga tidak meninggalkan jejak di tanah basah.",
            "Tidak ada jejak ban berarti motor tidak pernah diparkir di zona E.",
            "Hujan deras menghapus semua jejak ban motor di parkiran zona E.",
            "Motor pria itu diparkir di zona lain dan ia lupa tempatnya."
        ],
        correctIndex: 1,
        explanation: "Tanah basah akan merekam jejak ban atau bekas parkir motor. Tidak adanya jejak ban sama sekali menunjukkan motor tidak pernah diparkir di zona E—atau cerita pria itu palsu. Meskipun motor bisa diangkat, bekas parkir (misalnya standar motor) tetap akan terlihat. Detektif curiga pria itu mengarang cerita kehilangan."
    },
    // Soal 68 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di bus. Ia mengatakan dompetnya ada di dalam tas jinjing yang ia letakkan di pangkuan. Detektif melihat tas jinjing wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas jahitan yang lepas di bagian bawah tas. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas jahitan lepas menunjukkan tas itu sudah lama dan akan segera rusak.",
            "Jahitan lepas di bagian bawah menunjukkan dompet diambil melalui celah tersebut.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 2,
        explanation: "Jahitan yang lepas di bagian bawah tas—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui celah jahitan tersebut. Ini teknik pencopetan yang umum: merenggangkan jahitan tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 69 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya perhiasan di sebuah butik. Tiga karyawan diperiksa. Karyawan A berkata, 'Saya menata pakaian di rak depan.' Karyawan B berkata, 'Saya melayani pelanggan di ruang ganti.' Karyawan C berkata, 'Saya mengecek stok di gudang.' Detektif melihat rekaman CCTV: A di rak depan, B di ruang ganti, tetapi C terlihat masuk ke ruang kasir pada jam 13. Siapa yang berbohong?",
        options: [
            "Karyawan C, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang.",
            "Karyawan A, karena menata pakaian di rak depan adalah tugas yang mencurigakan.",
            "Karyawan B, karena butik tutup pada jam 13 siang hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Karyawan C mengaku mengecek stok di gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 13—saat perhiasan hilang. Alibi C adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 70 — Kunci: opsi 3
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di bandara. Ia mengatakan koper diletakkan di konveyor bagasi, tetapi tidak keluar di bandara tujuan. Detektif melihat label bagasi pria itu masih menempel di koper lain yang mirip. Apa kesimpulannya?",
        options: [
            "Koper pria itu dicuri seseorang yang mengganti label bagasinya.",
            "Koper pria itu tidak pernah masuk ke konveyor karena kesalahan petugas.",
            "Label bagasi pria itu sengaja dipindahkan ke koper lain oleh pencuri.",
            "Koper pria itu tertukar dengan koper lain yang mirip di konveyor."
        ],
        correctIndex: 3,
        explanation: "Label bagasi pria itu menempel di koper lain yang mirip menunjukkan koper tertukar—bukan dicuri. Di bandara, koper yang mirip sering tertukar karena penumpang mengambil koper yang salah. Detektif perlu menghubungi pemilik koper lain untuk menukar kembali."
    },
    // Soal 71 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di restoran. Ia mengatakan tasnya diletakkan di kursi sebelahnya, dan ia pergi ke toilet. Detektif melihat kursi itu berada di area yang ditandai 'area merokok' dengan aturan tidak boleh meninggalkan barang. Apa yang mencurigakan?",
        options: [
            "Tas itu dicuri seseorang yang melihat wanita pergi ke toilet.",
            "Wanita itu melanggar aturan dengan meninggalkan tas di area merokok.",
            "Area merokok restoran tidak mungkin digunakan untuk meletakkan tas.",
            "Restoran seharusnya menyediakan loker untuk menyimpan tas pengunjung."
        ],
        correctIndex: 1,
        explanation: "Area merokok yang memiliki aturan jelas 'tidak boleh meninggalkan barang' seharusnya membuat pengunjung berhati-hati. Wanita itu mengaku meninggalkan tasnya di kursi di area tersebut—melanggar aturan yang terpampang. Ini bisa berarti ceritanya palsu, atau ia memang lalai sehingga tasnya hilang."
    },
    // Soal 72 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di halte bus. Ia mengatakan dompetnya ada di saku jaket, dan ia baru sadar hilang setelah bus datang. Detektif melihat saku jaket pria itu memiliki resleting yang masih tertutup rapat. Apa kesimpulannya?",
        options: [
            "Pencuri membuka resleting saku dengan cepat tanpa ketahuan korban.",
            "Dompet pria itu terjatuh dari saku saat ia berlari mengejar bus.",
            "Resleting tertutup rapat menunjukkan dompet tidak dicuri dari saku.",
            "Saku beresleting tetap rawan dicopet tanpa disadari pemiliknya."
        ],
        correctIndex: 2,
        explanation: "Resleting saku yang masih tertutup rapat menunjukkan tidak ada yang membuka saku tersebut. Jika dompet dicuri dari saku, resleting harus dibuka—dan pencuri biasanya tidak menutupnya kembali dengan rapi. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 73 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian uang di sebuah klinik. Tiga karyawan diperiksa. Karyawan P berkata, 'Saya memeriksa pasien di ruang periksa.' Karyawan Q berkata, 'Saya mengurus administrasi di meja depan.' Karyawan R berkata, 'Saya istirahat di ruang karyawan.' Detektif melihat rekaman CCTV: P di ruang periksa, Q di meja depan, tetapi R terlihat masuk ke ruang kasir pada jam 15. Siapa yang berbohong?",
        options: [
            "Karyawan R, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di ruang karyawan.",
            "Karyawan P, karena memeriksa pasien di ruang periksa adalah tugas yang mencurigakan.",
            "Karyawan Q, karena klinik tutup pada jam 15 sore hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Karyawan R mengaku istirahat di ruang karyawan, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 15—saat uang hilang. Alibi R adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 74 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa perhiasannya hilang dari kamar hotel. Ia mengatakan perhiasan disimpan di dalam laci meja rias. Detektif melihat laci itu dalam keadaan tertutup rapi, tetapi ada goresan baru di sekitar lubang kunci laci. Apa kesimpulannya?",
        options: [
            "Goresan itu sudah ada sejak lama dan tidak terkait dengan kehilangan.",
            "Perhiasan wanita itu sebenarnya tidak pernah dimasukkan ke dalam laci.",
            "Laci kamar hotel itu rusak sehingga tidak bisa mengunci dengan benar.",
            "Goresan baru di lubang kunci menunjukkan laci dibuka paksa oleh seseorang."
        ],
        correctIndex: 3,
        explanation: "Goresan baru di sekitar lubang kunci laci menunjukkan laci itu baru saja dibuka paksa—kemungkinan dengan alat seperti obeng atau penjepit. Meskipun laci tertutup rapi, goresan adalah bukti adanya upaya pembobolan. Ini mengarah pada pencurian oleh orang yang memiliki akses ke kamar."
    },
    // Soal 75 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku motornya dicuri dari depan rumah. Ia mengatakan motor diparkir di depan rumah dan ia menemukannya hilang pagi ini. Detektif melihat pagar rumah pria itu dalam keadaan terkunci dari dalam, dan tidak ada tanda pembobolan. Apa kesimpulannya?",
        options: [
            "Pencuri memanjat pagar tanpa merusaknya sehingga tidak meninggalkan tanda.",
            "Pagar terkunci dari dalam menunjukkan motor tidak mungkin dibawa keluar malam itu.",
            "Pencuri memiliki kunci duplikat pagar yang dibuat tanpa sepengetahuan pemilik.",
            "Motor pria itu diparkir di luar halaman dan ia lupa memindahkannya."
        ],
        correctIndex: 1,
        explanation: "Pagar yang terkunci dari dalam tanpa tanda pembobolan menunjukkan tidak ada orang luar yang bisa masuk atau keluar membawa motor. Jika motor benar-benar dicuri malam itu, pencuri harus membuka pagar—dan itu akan meninggalkan tanda. Kemungkinan motor tidak pernah diparkir di halaman, atau pria itu mengarang cerita pencurian."
    },
    // Soal 76 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di taksi. Ia mengatakan dompetnya ada di dalam tas tangan yang ia letakkan di kursi sebelahnya. Detektif melihat tas tangan wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas tarikan di bagian resleting. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas tarikan itu sudah ada sejak lama dan tidak terkait dengan kasus.",
            "Bekas tarikan di resleting menunjukkan tas sempat dicoba dibuka paksa.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 2,
        explanation: "Bekas tarikan di bagian resleting—meskipun resleting masih tertutup—menunjukkan seseorang sempat mencoba membuka tas secara paksa. Meskipun akhirnya gagal atau berhasil menutupnya kembali, bekas tarikan itu adalah bukti adanya upaya pencopetan. Detektif perlu memeriksa apakah dompet benar-benar hilang atau hanya dipindahkan."
    },
    // Soal 77 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya kamera di sebuah studio foto. Tiga fotografer diperiksa. Fotografer A berkata, 'Saya memotret di luar studio sepanjang pagi.' Fotografer B berkata, 'Saya mengedit foto di ruang komputer.' Fotografer C berkata, 'Saya istirahat di ruang tunggu.' Detektif melihat rekaman CCTV: A di luar, B di ruang komputer, tetapi C terlihat masuk ke ruang penyimpanan kamera. Siapa yang berbohong?",
        options: [
            "Fotografer C, karena CCTV menunjukkan ia masuk ke ruang penyimpanan kamera.",
            "Fotografer A, karena memotret di luar studio sepanjang pagi adalah hal yang tidak wajar.",
            "Fotografer B, karena ruang komputer studio sedang dalam perbaikan.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Fotografer C mengaku istirahat di ruang tunggu, tetapi CCTV menunjukkan ia masuk ke ruang penyimpanan kamera—tempat kamera hilang. Alibi C adalah kebohongan yang membuktikan ia berada di TKP saat kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 78 — Kunci: opsi 3
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di pasar. Ia mengatakan dompetnya ada di dalam tas ransel yang ia bawa di punggung. Detektif melihat ransel pria itu memiliki resleting yang masih tertutup rapat, tetapi ada lubang kecil di bagian samping ransel. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari ransel.",
            "Lubang itu sudah ada sejak lama dan tidak terkait dengan pencopetan.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi.",
            "Lubang kecil di samping ransel menunjukkan dompet diambil tanpa membuka resleting."
        ],
        correctIndex: 3,
        explanation: "Lubang kecil di bagian samping ransel—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui lubang tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian samping tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 79 — Kunci: opsi 1
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di kolam renang hotel. Ia mengatakan cincin diletakkan di kursi pantai, dan ia baru sadar hilang setelah berenang. Detektif melihat kursi pantai itu berada di area yang ramai pengunjung, dan ada tanda 'barang berharga ditanggung sendiri' di dekatnya. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri petugas kolam renang yang membersihkan area kursi.",
            "Kursi di area ramai membuat cincin mudah hilang tanpa diketahui pemiliknya.",
            "Cincin wanita itu terjatuh ke lantai dan menggelinding ke saluran air.",
            "Tanda peringatan itu menunjukkan hotel tidak bertanggung jawab atas kehilangan."
        ],
        correctIndex: 1,
        explanation: "Kursi pantai di area ramai adalah lokasi rawan—banyak orang lewat dan cincin kecil mudah hilang, baik karena diambil orang maupun karena terjatuh tanpa disadari. Tanda peringatan 'barang berharga ditanggung sendiri' justru menegaskan bahwa area tersebut rawan kehilangan. Detektif perlu memeriksa apakah cincin benar-benar hilang atau terjatuh di sekitar kursi."
    },
    // Soal 80 — Kunci: opsi 2
    {
        caseText: "Seorang pria melaporkan bahwa sepedanya dicuri dari depan toko. Ia mengatakan sepeda diparkir di rak sepeda dan ia menemukannya hilang saat pulang kerja. Detektif melihat rak sepeda di depan toko memiliki CCTV, dan rekaman menunjukkan pria itu tiba di toko dengan berjalan kaki pagi itu. Apa kesimpulannya?",
        options: [
            "Sepeda pria itu diparkir di tempat lain yang tidak terpantau kamera.",
            "Sepeda pria itu dicuri sebelum ia tiba di toko pada pagi hari.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada sepeda hilang.",
            "Rekaman CCTV toko itu rusak sehingga tidak bisa dijadikan bukti."
        ],
        correctIndex: 2,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di toko dengan berjalan kaki pada pagi hari. Jika ia tidak membawa sepeda, tidak mungkin ada sepeda yang dicuri dari rak. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan sepeda untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
	    // Soal 81 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa dompetnya hilang di pasar tradisional. Ia mengatakan dompetnya ada di dalam tas jinjing yang ia letakkan di keranjang belanja. Detektif melihat keranjang belanja wanita itu masih penuh barang belanjaan yang tersusun rapi. Apa yang mencurigakan?",
        options: [
            "Pencuri mengambil dompet dengan sangat hati-hati tanpa mengacak barang.",
            "Dompet wanita itu terjatuh dari keranjang saat ia mendorong belanjaan.",
            "Barang belanjaan yang tersusun rapi menunjukkan tidak ada yang menyentuh keranjang.",
            "Pencuri di pasar tradisional bisa membuka tas tanpa terlihat oleh korban."
        ],
        correctIndex: 2,
        explanation: "Jika dompet dicuri dari keranjang belanja, pencuri harus mengacak atau setidaknya menyentuh barang belanjaan untuk mencapainya. Barang yang masih tersusun rapi menunjukkan tidak ada yang menyentuh keranjang—kemungkinan dompet tidak pernah ada di keranjang, atau wanita itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 82 — Kunci: opsi 0
    {
        caseText: "Seorang pria mengaku jam tangannya hilang di gym. Ia mengatakan jam diletakkan di loker, dan ia baru sadar hilang setelah mandi. Detektif melihat loker pria itu dalam keadaan terkunci dan tidak ada tanda pembobolan. Namun detektif menemukan bahwa nomor loker pria itu sama dengan nomor loker yang ia sebutkan, tetapi loker itu ternyata milik orang lain. Apa kesimpulannya?",
        options: [
            "Pria itu salah mengingat nomor loker sehingga jamnya ada di loker lain.",
            "Pencuri membobol loker dengan alat khusus tanpa meninggalkan tanda.",
            "Jam pria itu dicuri petugas gym yang memiliki kunci master semua loker.",
            "Loker gym itu rusak sehingga siapa pun bisa membukanya dengan mudah."
        ],
        correctIndex: 0,
        explanation: "Pria itu menyebutkan nomor loker yang ternyata milik orang lain—ini menunjukkan ia salah mengingat nomor lokernya sendiri. Jam tangannya kemungkinan masih ada di loker yang benar, bukan dicuri. Detektif perlu memeriksa loker dengan nomor yang benar sebelum menyimpulkan pencurian."
    },
    // Soal 83 — Kunci: opsi 2
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya uang di sebuah toko kelontong. Tiga karyawan diperiksa. Karyawan A berkata, 'Saya menata barang di rak sepanjang pagi.' Karyawan B berkata, 'Saya melayani pembeli di kasir.' Karyawan C berkata, 'Saya mengantar barang ke gudang.' Detektif melihat rekaman CCTV: A di rak, B di kasir, tetapi C terlihat masuk ke ruang kasir pada jam 10. Siapa yang berbohong?",
        options: [
            "Karyawan A, karena menata barang di rak sepanjang pagi adalah hal yang mencurigakan.",
            "Karyawan B, karena kasir toko tutup pada jam 10 pagi hari itu.",
            "Karyawan C, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 2,
        explanation: "Karyawan C mengaku mengantar barang ke gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 10—saat uang hilang. Alibi C adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 84 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di halte bus. Ia mengatakan tasnya diletakkan di bangku halte, dan ia berdiri di dekatnya sambil melihat ponsel. Detektif melihat bangku halte itu berada di area yang gelap dan lampunya mati. Apa kesimpulannya?",
        options: [
            "Wanita itu berbohong karena halte bus tidak pernah gelap pada malam hari.",
            "Tas itu dicuri seseorang yang memanfaatkan kegelapan area halte bus.",
            "Tas wanita itu terjatuh dari bangku karena angin kencang di halte.",
            "Lampu halte yang mati menunjukkan halte itu sudah lama tidak digunakan."
        ],
        correctIndex: 1,
        explanation: "Area halte yang gelap dan lampunya mati memudahkan pencuri mengambil tas tanpa terlihat—terutama karena wanita itu sedang fokus pada ponselnya. Kegelapan menjelaskan bagaimana tas bisa hilang tanpa disadari korban. Detektif perlu memeriksa apakah ada saksi atau rekaman CCTV di sekitar halte."
    },
    // Soal 85 — Kunci: opsi 0
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di terminal bus. Ia mengatakan koper diletakkan di samping kursi tunggu, dan ia pergi ke toilet. Detektif melihat kursi tunggu itu berada tepat di depan pintu keluar terminal yang ramai. Apa kesimpulannya?",
        options: [
            "Koper di depan pintu keluar ramai mudah diambil orang tanpa dicurigai.",
            "Koper pria itu sebenarnya masih ada di terminal dan ia salah melihat.",
            "Petugas terminal sengaja memindahkan koper ke ruang kehilangan barang.",
            "Pria itu lupa membawa koper dari bus sebelum turun di terminal."
        ],
        correctIndex: 0,
        explanation: "Kursi tunggu yang berada tepat di depan pintu keluar terminal yang ramai adalah lokasi rawan—banyak orang lewat dan bisa mengambil koper tanpa menarik perhatian. Ini menjelaskan bagaimana koper bisa hilang saat pria pergi ke toilet. Detektif perlu memeriksa rekaman CCTV di sekitar pintu keluar."
    },
    // Soal 86 — Kunci: opsi 3
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di minimarket. Ia mengatakan dompetnya ada di tas tangan yang ia gantung di lengan. Detektif melihat tas tangan wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas potongan kecil di bagian samping tas. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas potongan itu sudah ada sejak lama dan tidak terkait dengan kasus.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi.",
            "Bekas potongan di samping tas menunjukkan dompet diambil tanpa membuka resleting."
        ],
        correctIndex: 3,
        explanation: "Bekas potongan kecil di samping tas—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui celah potongan tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian samping tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 87 — Kunci: opsi 1
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya buku langka di perpustakaan. Tiga pengunjung diperiksa. Pengunjung A berkata, 'Saya membaca di meja baca utama.' Pengunjung B berkata, 'Saya mencari buku di rak sastra.' Pengunjung C berkata, 'Saya menggunakan komputer katalog.' Detektif melihat rekaman CCTV: A di meja baca, C di komputer, tetapi B terlihat masuk ke ruang koleksi langka. Siapa yang berbohong?",
        options: [
            "Pengunjung A, karena meja baca utama sedang digunakan petugas perpustakaan.",
            "Pengunjung B, karena CCTV menunjukkan ia masuk ke ruang koleksi langka, bukan di rak sastra.",
            "Pengunjung C, karena komputer katalog perpustakaan sedang rusak sejak pagi.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 1,
        explanation: "Pengunjung B mengaku mencari buku di rak sastra, tetapi CCTV menunjukkan ia masuk ke ruang koleksi langka—tempat buku langka hilang. Alibi B adalah kebohongan yang membuktikan ia berada di TKP saat kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 88 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di bus kota. Ia mengatakan dompetnya ada di tas ransel yang ia bawa di punggung. Detektif melihat ransel pria itu memiliki resleting yang masih tertutup rapat, tetapi ada lubang kecil di bagian belakang ransel. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari ransel.",
            "Lubang itu sudah ada sejak lama dan tidak terkait dengan pencopetan.",
            "Lubang kecil di belakang ransel menunjukkan dompet diambil tanpa membuka resleting.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 2,
        explanation: "Lubang kecil di bagian belakang ransel—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui lubang tersebut tanpa membuka resleting. Ini teknik pencopetan yang umum: merobek bagian belakang tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 89 — Kunci: opsi 0
    {
        caseText: "Seorang wanita melaporkan bahwa kalungnya hilang di salon. Ia mengatakan kalung diletakkan di meja rias, dan ia baru sadar hilang setelah selesai perawatan. Detektif melihat meja rias itu berada di dekat pintu masuk salon yang ramai. Apa kesimpulannya?",
        options: [
            "Meja rias dekat pintu masuk ramai dilewati orang sehingga kalung mudah hilang.",
            "Kalung itu dicuri oleh pelanggan lain yang duduk di sebelahnya.",
            "Kalung wanita itu terjatuh ke lantai dan terinjak oleh pengunjung salon.",
            "Salon seharusnya menyediakan loker untuk menyimpan barang berharga pelanggan."
        ],
        correctIndex: 0,
        explanation: "Meja rias yang berada di dekat pintu masuk salon yang ramai adalah lokasi rawan—banyak orang lewat dan kalung kecil mudah hilang, baik karena diambil orang maupun karena terjatuh tanpa disadari. Ini menjelaskan mengapa kalung bisa hilang dalam waktu singkat. Detektif perlu memeriksa rekaman CCTV di sekitar pintu masuk."
    },
    // Soal 90 — Kunci: opsi 3
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di kereta bawah tanah. Ia mengatakan dompetnya ada di saku belakang celana. Detektif melihat saku belakang celana pria itu memiliki kancing yang masih terpasang rapi. Apa kesimpulannya?",
        options: [
            "Pencuri profesional bisa membuka kancing saku tanpa disadari korban.",
            "Dompet pria itu terjatuh dari saku saat ia duduk di kursi kereta.",
            "Saku belakang dengan kancing tetap rawan dicopet di kereta yang ramai.",
            "Kancing masih terpasang menunjukkan dompet tidak dicuri dari saku belakang."
        ],
        correctIndex: 3,
        explanation: "Kancing saku belakang yang masih terpasang rapi menunjukkan tidak ada yang membuka saku tersebut. Jika dompet dicuri dari saku, kancing harus dibuka—dan pencuri biasanya tidak memasangnya kembali. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    },
    // Soal 91 — Kunci: opsi 2
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya uang di sebuah apotek. Tiga karyawan diperiksa. Karyawan X berkata, 'Saya meracik obat di ruang belakang.' Karyawan Y berkata, 'Saya melayani pembeli di depan.' Karyawan Z berkata, 'Saya mengecek stok obat di gudang.' Detektif melihat rekaman CCTV: X di ruang belakang, Y di depan, tetapi Z terlihat masuk ke ruang kasir pada jam 14. Siapa yang berbohong?",
        options: [
            "Karyawan X, karena meracik obat di ruang belakang adalah tugas yang mencurigakan.",
            "Karyawan Y, karena apotek tutup pada jam 14 siang hari itu.",
            "Karyawan Z, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 2,
        explanation: "Karyawan Z mengaku mengecek stok obat di gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 14—saat uang hilang. Alibi Z adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 92 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di pantai. Ia mengatakan tasnya diletakkan di bawah payung, dan ia pergi berenang sebentar. Detektif melihat payung itu berada di area pantai yang ramai pengunjung, dan ada tanda 'awas arus deras' di dekatnya. Apa kesimpulannya?",
        options: [
            "Tanda awas arus deras menunjukkan pantai itu ditutup untuk pengunjung.",
            "Tas di bawah payung di area ramai mudah diambil orang tanpa dicurigai.",
            "Tas wanita itu terbawa angin laut dan jatuh ke dalam air pantai.",
            "Payung pantai di area ramai tidak mungkin digunakan untuk meletakkan tas."
        ],
        correctIndex: 1,
        explanation: "Payung di area pantai yang ramai adalah lokasi rawan—banyak orang lewat dan tas bisa diambil tanpa menarik perhatian, terutama saat pemiliknya sedang berenang. Ini menjelaskan bagaimana tas bisa hilang dalam waktu singkat. Detektif perlu memeriksa apakah ada saksi atau pengunjung lain di sekitar payung."
    },
    // Soal 93 — Kunci: opsi 0
    {
        caseText: "Seorang pria melaporkan bahwa laptopnya hilang di kafe. Ia mengatakan laptop diletakkan di meja, dan ia pergi ke kasir untuk memesan minuman. Detektif melihat meja itu berada di dekat pintu keluar kafe yang ramai. Apa kesimpulannya?",
        options: [
            "Laptop di meja dekat pintu keluar ramai mudah diambil orang yang lewat.",
            "Laptop pria itu sebenarnya masih ada di kafe dan ia salah melihat.",
            "Petugas kafe sengaja memindahkan laptop ke ruang penyimpanan barang.",
            "Pria itu lupa membawa laptop dari rumah sebelum pergi ke kafe."
        ],
        correctIndex: 0,
        explanation: "Meja yang berada di dekat pintu keluar kafe yang ramai adalah lokasi rawan—banyak orang lewat dan laptop bisa diambil tanpa menarik perhatian. Ini menjelaskan bagaimana laptop bisa hilang saat pria pergi ke kasir. Detektif perlu memeriksa rekaman CCTV di sekitar pintu keluar."
    },
    // Soal 94 — Kunci: opsi 3
    {
        caseText: "Seorang wanita melaporkan bahwa cincinnya hilang di kamar hotel. Ia mengatakan cincin diletakkan di meja rias, dan ia baru sadar hilang setelah kembali dari makan malam. Detektif melihat meja rias itu berada di dekat jendela yang terbuka, dan ada celah di lantai dekat meja. Apa kesimpulannya?",
        options: [
            "Cincin itu dicuri petugas hotel yang masuk saat wanita makan malam.",
            "Cincin wanita itu sebenarnya tidak pernah diletakkan di meja rias.",
            "Jendela terbuka menunjukkan seseorang masuk dan mencuri cincin tersebut.",
            "Cincin kecil bisa terjatuh dan masuk ke celah lantai di dekat meja rias."
        ],
        correctIndex: 3,
        explanation: "Cincin yang kecil dan diletakkan di meja rias dekat celah lantai bisa saja terjatuh dan masuk ke celah tersebut tanpa disadari. Ini penjelasan yang lebih masuk akal daripada pencurian, karena tidak ada tanda orang masuk. Detektif perlu memeriksa celah lantai sebelum menyimpulkan pencurian."
    },
    // Soal 95 — Kunci: opsi 1
    {
        caseText: "Seorang pria mengaku motornya dicuri dari parkiran. Ia mengatakan motor diparkir di zona E dan ia menemukannya hilang setelah berbelanja. Detektif melihat tanah di parkiran zona E masih basah karena hujan, tetapi tidak ada jejak ban motor di sana. Apa kesimpulannya?",
        options: [
            "Pencuri mengangkat motor sehingga tidak meninggalkan jejak di tanah basah.",
            "Tidak ada jejak ban berarti motor tidak pernah diparkir di zona E.",
            "Hujan deras menghapus semua jejak ban motor di parkiran zona E.",
            "Motor pria itu diparkir di zona lain dan ia lupa tempatnya."
        ],
        correctIndex: 1,
        explanation: "Tanah basah akan merekam jejak ban atau bekas parkir motor. Tidak adanya jejak ban sama sekali menunjukkan motor tidak pernah diparkir di zona E—atau cerita pria itu palsu. Meskipun motor bisa diangkat, bekas parkir (misalnya standar motor) tetap akan terlihat. Detektif curiga pria itu mengarang cerita kehilangan."
    },
    // Soal 96 — Kunci: opsi 2
    {
        caseText: "Seorang wanita mengaku dompetnya dicuri di bus. Ia mengatakan dompetnya ada di dalam tas jinjing yang ia letakkan di pangkuan. Detektif melihat tas jinjing wanita itu memiliki resleting yang masih tertutup rapat, tetapi ada bekas jahitan yang lepas di bagian bawah tas. Apa kesimpulannya?",
        options: [
            "Resleting tertutup rapat menunjukkan dompet tidak mungkin diambil dari tas.",
            "Bekas jahitan lepas menunjukkan tas itu sudah lama dan akan segera rusak.",
            "Jahitan lepas di bagian bawah menunjukkan dompet diambil melalui celah tersebut.",
            "Pencuri membuka resleting lalu menutupnya kembali dengan sangat rapi."
        ],
        correctIndex: 2,
        explanation: "Jahitan yang lepas di bagian bawah tas—bukan resleting yang dibuka—menunjukkan pencuri mungkin mengeluarkan dompet melalui celah jahitan tersebut. Ini teknik pencopetan yang umum: merenggangkan jahitan tas yang tidak terlihat korban. Resleting yang tetap tertutup justru mendukung teori ini."
    },
    // Soal 97 — Kunci: opsi 0
    {
        caseText: "Seorang detektif menyelidiki kasus hilangnya perhiasan di sebuah butik. Tiga karyawan diperiksa. Karyawan A berkata, 'Saya menata pakaian di rak depan.' Karyawan B berkata, 'Saya melayani pelanggan di ruang ganti.' Karyawan C berkata, 'Saya mengecek stok di gudang.' Detektif melihat rekaman CCTV: A di rak depan, B di ruang ganti, tetapi C terlihat masuk ke ruang kasir pada jam 13. Siapa yang berbohong?",
        options: [
            "Karyawan C, karena CCTV menunjukkan ia masuk ke ruang kasir, bukan di gudang.",
            "Karyawan A, karena menata pakaian di rak depan adalah tugas yang mencurigakan.",
            "Karyawan B, karena butik tutup pada jam 13 siang hari itu.",
            "Tidak ada, karena ketiganya bisa saja berada di tempat yang disebutkan."
        ],
        correctIndex: 0,
        explanation: "Karyawan C mengaku mengecek stok di gudang, tetapi CCTV menunjukkan ia masuk ke ruang kasir pada jam 13—saat perhiasan hilang. Alibi C adalah kebohongan yang membuktikan ia berada di ruang kasir pada waktu kejadian. Ia perlu diperiksa lebih lanjut."
    },
    // Soal 98 — Kunci: opsi 3
    {
        caseText: "Seorang pria melaporkan bahwa kopernya hilang di bandara. Ia mengatakan koper diletakkan di konveyor bagasi, tetapi tidak keluar di bandara tujuan. Detektif melihat label bagasi pria itu masih menempel di koper lain yang mirip. Apa kesimpulannya?",
        options: [
            "Koper pria itu dicuri seseorang yang mengganti label bagasinya.",
            "Koper pria itu tidak pernah masuk ke konveyor karena kesalahan petugas.",
            "Label bagasi pria itu sengaja dipindahkan ke koper lain oleh pencuri.",
            "Koper pria itu tertukar dengan koper lain yang mirip di konveyor."
        ],
        correctIndex: 3,
        explanation: "Label bagasi pria itu menempel di koper lain yang mirip menunjukkan koper tertukar—bukan dicuri. Di bandara, koper yang mirip sering tertukar karena penumpang mengambil koper yang salah. Detektif perlu menghubungi pemilik koper lain untuk menukar kembali."
    },
    // Soal 99 — Kunci: opsi 1
    {
        caseText: "Seorang wanita mengaku tasnya dicuri di restoran. Ia mengatakan tasnya diletakkan di kursi sebelahnya, dan ia pergi ke toilet. Detektif melihat kursi itu berada di area yang ditandai 'area merokok' dengan aturan tidak boleh meninggalkan barang. Apa yang mencurigakan?",
        options: [
            "Tas itu dicuri seseorang yang melihat wanita pergi ke toilet.",
            "Wanita itu melanggar aturan dengan meninggalkan tas di area merokok.",
            "Area merokok restoran tidak mungkin digunakan untuk meletakkan tas.",
            "Restoran seharusnya menyediakan loker untuk menyimpan tas pengunjung."
        ],
        correctIndex: 1,
        explanation: "Area merokok yang memiliki aturan jelas 'tidak boleh meninggalkan barang' seharusnya membuat pengunjung berhati-hati. Wanita itu mengaku meninggalkan tasnya di kursi di area tersebut—melanggar aturan yang terpampang. Ini bisa berarti ceritanya palsu, atau ia memang lalai sehingga tasnya hilang."
    },
    // Soal 100 — Kunci: opsi 2
    {
        caseText: "Seorang pria mengaku dompetnya dicuri di halte bus. Ia mengatakan dompetnya ada di saku jaket, dan ia baru sadar hilang setelah bus datang. Detektif melihat saku jaket pria itu memiliki resleting yang masih tertutup rapat. Apa kesimpulannya?",
        options: [
            "Pencuri membuka resleting saku dengan cepat tanpa ketahuan korban.",
            "Dompet pria itu terjatuh dari saku saat ia berlari mengejar bus.",
            "Resleting tertutup rapat menunjukkan dompet tidak dicuri dari saku.",
            "Saku beresleting tetap rawan dicopet tanpa disadari pemiliknya."
        ],
        correctIndex: 2,
        explanation: "Resleting saku yang masih tertutup rapat menunjukkan tidak ada yang membuka saku tersebut. Jika dompet dicuri dari saku, resleting harus dibuka—dan pencuri biasanya tidak menutupnya kembali dengan rapi. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan."
    }
	
];