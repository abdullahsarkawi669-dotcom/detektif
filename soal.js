const questions = [
    // Soal 1
    {
        caseText: "Dua orang memesan minuman es racun yang identik di sebuah bar. Orang pertama meminumnya dengan sangat cepat dalam sekali teguk. Orang kedua duduk santai dan meminumnya perlahan. Tragisnya, orang kedua meninggal keracunan, sedangkan orang pertama sehat walafiat. Mengapa bisa demikian?",
        options: [
            "Orang pertama memiliki sistem imun yang kebal terhadap racun.",
            "Racunnya disembunyikan di dalam es batu yang disajikan.",
            "Gelas orang kedua diam-diam ditukar saat dia lengah.",
            "Minuman itu sebenarnya tidak beracun, ia mati karena serangan jantung."
        ],
        correctIndex: 1,
        explanation: "Racun tersebut sengaja dibekukan di dalam es batu. Karena orang pertama meminumnya dengan sangat cepat, es batunya belum sempat mencair dan melepaskan racun ke minumannya. Orang kedua minum perlahan, memberikan waktu bagi es untuk mencair dan meracuni minumannya."
    },
    // Soal 2
    {
        caseText: "Seorang pria ditemukan gantung diri di sebuah ruangan kosong dengan pintu yang terkunci rapat dari dalam. Tidak ada meja, kursi, atau benda apapun untuk dipanjat. Jendelanya tertutup rapat. Satu-satunya petunjuk di TKP hanyalah genangan air di bawah tubuhnya. Bagaimana dia melakukannya?",
        options: [
            "Atap ruangan tersebut bisa diturunkan secara mekanis.",
            "Seseorang membunuhnya lalu keluar melalui ventilasi udara.",
            "Dia memanjat menggunakan tali penyangga yang kemudian dilepasnya.",
            "Dia berdiri di atas balok es yang kemudian mencair sepenuhnya."
        ],
        correctIndex: 3,
        explanation: "Pria tersebut membawa sebuah balok es besar ke dalam ruangan dan menggunakannya sebagai pijakan. Dia mengalungkan tali, berdiri di atas es, dan menunggu. Karena ruangan bersuhu normal, es tersebut perlahan mencair habis, meninggalkannya tergantung dengan genangan air di bawahnya."
    },
    // Soal 3
    {
        caseText: "Seorang detektif menanyai 3 tersangka atas kasus pencurian rumah yang terjadi pada hari Minggu pagi. Tukang kebun beralasan, 'Saya sedang di halaman belakang menyiram bunga.' Koki beralasan, 'Saya sedang di dapur memasak sarapan.' Pembantu beralasan, 'Saya sedang di depan rumah mengambil surat kiriman pos di kotak pos.' Siapakah pembohongnya?",
        options: [
            "Tukang kebun",
            "Koki",
            "Pembantu",
            "Tidak ada, semuanya berkata jujur"
        ],
        correctIndex: 2,
        explanation: "Pembohongnya adalah Pembantu. Kejadian tersebut terjadi pada hari Minggu pagi. Kantor pos tidak melakukan pengiriman surat pada hari Minggu. Oleh karena itu, alasannya sedang mengambil surat adalah kebohongan yang membuktikan kesalahannya."
    },
    // Soal 4
    {
        caseText: "Terdapat 3 buah saklar lampu di luar sebuah ruangan tertutup. Di dalam ruangan tersebut hanya terdapat 1 lampu pijar. Anda tidak bisa melihat ke dalam. Anda hanya diizinkan masuk ke ruangan itu 1 kali saja. Bagaimana cara pasti untuk mengetahui saklar mana yang terhubung ke lampu tersebut?",
        options: [
            "Nyalakan semua saklar bersamaan, lalu masuk ke dalam.",
            "Bongkar panel saklar untuk melihat jalur kabelnya.",
            "Nyalakan saklar 1 (biarkan sebentar lalu matikan), nyalakan saklar 2, lalu masuk.",
            "Tekan tombolnya berulang kali secara acak untuk memicu korsleting."
        ],
        correctIndex: 2,
        explanation: "Nyalakan saklar 1 selama sekitar 10 menit (agar bola lampu menjadi panas), lalu matikan. Segera nyalakan saklar 2 dan masuklah ke ruangan. Jika lampu menyala, berarti saklar 2. Jika lampu mati tapi saat disentuh terasa panas, berarti saklar 1. Jika lampu mati dan dingin, berarti saklar 3."
    },
    // Soal 5
    {
        caseText: "Seorang wanita ditemukan tewas di dalam kamar hotel yang terkunci dari dalam. Jendela kamar tertutup rapat dan tidak ada lubang ventilasi yang cukup besar untuk dilalui manusia. Di lantai dekat tubuhnya terdapat pecahan kaca dan genangan air. Tidak ada tanda-tanda perkelahian. Sang detektif menyimpulkan kematian itu bukan bunuh diri. Bagaimana pembunuhnya bisa masuk dan keluar?",
        options: [
            "Pembunuh bersembunyi di bawah tempat tidur dan kabur saat pintu dibuka petugas.",
            "Pembunuh memakai kunci cadangan yang dicuri dari resepsionis.",
            "Pembunuh menembak dari luar melalui celah pintu yang longgar.",
            "Pembunuh memasukkan racun melalui pecahan kaca jendela yang dipecahkan dari luar, lalu menutupnya kembali."
        ],
        correctIndex: 1,
        explanation: "Pembunuh adalah staf hotel yang memiliki akses ke kunci cadangan. Ia masuk, meracuni korban, lalu mengunci kembali pintu dari dalam menggunakan kunci cadangan sebelum keluar—sehingga kamar tampak terkunci rapat dari dalam. Pecahan kaca dan genangan air hanyalah pengalih perhatian."
    },
    // Soal 6
    {
        caseText: "Seorang pria kaya ditemukan tewas di ruang kerjanya dengan luka tembak di kepala. Di tangannya tergenggam pistol, dan di mejanya ada surat wasiat. Polisi hampir menyimpulkan bunuh diri, tetapi seorang detektif melihat ada yang janggal: di lantai ruangan itu tidak ada darah sama sekali, padahal luka tembak di kepala seharusnya mengeluarkan banyak darah. Apa yang sebenarnya terjadi?",
        options: [
            "Pria itu ditembak di tempat lain, lalu tubuhnya dipindahkan ke ruang kerja dan pistol diletakkan di tangannya.",
            "Pria itu bunuh diri dengan pistol berperedam suara sehingga darah tidak keluar.",
            "Pria itu tewas karena serangan jantung, pistol hanya kebetulan ada di tangannya.",
            "Lantai ruangan dilapisi karpet tebal yang menyerap seluruh darah."
        ],
        correctIndex: 0,
        explanation: "Tidak adanya darah di lantai adalah petunjuk kunci. Jika benar bunuh diri di tempat itu, darah pasti menetes ke lantai. Pria tersebut dibunuh di lokasi lain, lalu jenazahnya dipindahkan ke ruang kerja, pistol diletakkan di tangannya, dan surat wasiat disiapkan untuk membuat kesan bunuh diri."
    },
    // Soal 7
    {
        caseText: "Pada suatu malam musim dingin, sebuah rumah terbakar. Pemilik rumah selamat, tetapi ia mengklaim api berasal dari korsleting listrik di ruang tamu. Seorang penyelidik menemukan bahwa jendela-jendela rumah dalam keadaan terbuka lebar padahal suhu di luar sangat dingin, dan tidak ada penghangat ruangan yang menyala. Ia langsung mencurigai pemilik rumah. Mengapa?",
        options: [
            "Karena orang yang selamat dari kebakaran selalu berbohong.",
            "Karena jendela terbuka lebar di musim dingin tanpa penghangat tidak wajar—kemungkinan sengaja dibuka agar api cepat menyebar.",
            "Karena korsleting listrik tidak mungkin terjadi di musim dingin.",
            "Karena pemilik rumah tidak menelepon pemadam kebakaran."
        ],
        correctIndex: 1,
        explanation: "Di malam musim dingin, tidak ada alasan logis membuka semua jendela lebar-lebar tanpa penghangat. Jendela terbuka mempercepat pasokan oksigen sehingga api membesar. Ini menunjukkan api sengaja dinyalakan dan pemilik membuka jendela untuk mempercepat penyebaran api, lalu mengarang alasan korsleting."
    },
    // Soal 8
    {
        caseText: "Tiga orang berada di sebuah pulau terpencil: seorang nelayan, seorang turis, dan seorang penjaga mercusuar. Pada suatu pagi, mayat turis ditemukan di pantai dengan luka di kepala. Nelayan berkata, 'Saya semalaman menangkap ikan di laut.' Penjaga mercusuar berkata, 'Saya semalaman menyalakan lampu mercusuar seperti biasa.' Siapa yang berbohong, dan mengapa?",
        options: [
            "Nelayan, karena tidak mungkin menangkap ikan pada malam hari.",
            "Turis, karena ia sebenarnya bunuh diri.",
            "Penjaga mercusuar, karena mercusuar modern menyala otomatis dan tidak perlu dinyalakan manual sepanjang malam.",
            "Tidak ada yang berbohong, kematian murni kecelakaan."
        ],
        correctIndex: 2,
        explanation: "Penjaga mercusuar berbohong. Mercusuar modern menggunakan sistem lampu yang menyala otomatis atau cukup dinyalakan sekali lalu berputar dengan mekanisme sendiri sepanjang malam. Tidak ada kebutuhan menyalakan manual sepanjang malam. Alibi ini justru mengungkap kebohongannya."
    },
    // Soal 9
    {
        caseText: "Seorang pria ditemukan tewas di tengah padang pasir. Di sekitarnya tidak ada jejak kaki sama sekali, tidak ada kendaraan, dan tidak ada sumber air. Ia hanya mengenakan pakaian renang. Bagaimana ia bisa sampai di sana?",
        options: [
            "Ia berjalan kaki dari kota terdekat lalu jejaknya tertiup angin.",
            "Ia dijatuhkan dari pesawat yang terbang di atas padang pasir.",
            "Ia tersesat saat berkemah di dekat padang pasir.",
            "Ia adalah korban pembunuhan yang tubuhnya dibuang dari helikopter."
        ],
        correctIndex: 1,
        explanation: "Pakaian renang adalah petunjuk kunci. Pria itu adalah penerjun payung atau penumpang pesawat yang jatuh/dijatuhkan dari ketinggian. Tidak adanya jejak kaki di pasir membuktikan ia tidak berjalan ke sana—ia jatuh dari atas. Angin juga menghapus jejak benturan, menyisakan tubuh tanpa jejak."
    },
    // Soal 10
    {
        caseText: "Seorang detektif menemukan mayat di sebuah kamar dengan AC menyala sangat dingin. Tubuh korban sudah membeku, tetapi jam tangannya masih berdetak normal. Dokter menyimpulkan korban tewas sekitar 12 jam lalu. Detektif langsung tahu ada yang salah dengan kesimpulan itu. Apa yang ia curigai?",
        options: [
            "Jam tangan korban adalah jam otomatis yang berhenti jika tidak digerakkan.",
            "AC yang menyala sangat dingin memperlambat pembekuan, sehingga waktu kematian tidak bisa dipastikan hanya dari suhu tubuh.",
            "Jam tangan korban sengaja diputar ulang oleh pembunuh.",
            "Korban sebenarnya masih hidup saat ditemukan."
        ],
        correctIndex: 1,
        explanation: "Suhu ruangan yang sangat dingin (AC menyala maksimal) memperlambat proses pendinginan dan pembekuan tubuh, sehingga perkiraan waktu kematian berdasarkan suhu tubuh menjadi tidak akurat. Detektif curiga pembunuh sengaja menyalakan AC untuk mengacaukan perkiraan waktu kematian dan membuat alibi."
    },
    // Soal 11
    {
        caseText: "Seorang pria tewas di dalam lift yang macet. Pintu lift ditemukan terbuka paksa dari dalam, tetapi korban tidak terluka. Di tangan korban ada potongan kertas bertuliskan 'SOS'. Lift tersebut berada di antara lantai 2 dan 3. Apa penyebab kematiannya?",
        options: [
            "Ia terjatuh saat mencoba keluar dari lift yang macet.",
            "Ia kekurangan oksigen karena lift macet terlalu lama.",
            "Ia tersengat listrik saat memaksa membuka pintu lift.",
            "Ia dibunuh seseorang yang ikut masuk ke lift sebelumnya."
        ],
        correctIndex: 1,
        explanation: "Lift yang macet di antara dua lantai dengan pintu terbuka paksa menunjukkan korban panik dan berusaha keluar. Namun penyebab kematian tanpa luka adalah kekurangan oksigen (sesak napas) karena lift macet terlalu lama dan ventilasi terbatas. Tulisan 'SOS' adalah upaya terakhirnya meminta bantuan."
    },
    // Soal 12
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di jalan sepi pada malam hari. Ia mengatakan perampok merampas tasnya dan melarikan diri. Polisi melihat tas wanita itu masih tergantung di bahunya, dan dompetnya masih utuh di dalam tas. Apa yang sebenarnya terjadi?",
        options: [
            "Wanita itu berbohong—ia mengarang cerita perampokan untuk menutupi masalah lain.",
            "Perampok gagal merampas tas dan hanya mengambil barang lain.",
            "Wanita itu lupa ia sudah mengambil tasnya kembali.",
            "Perampok adalah teman wanita itu yang mengembalikan tasnya."
        ],
        correctIndex: 0,
        explanation: "Jika benar dirampok dan tasnya dirampas, tas itu seharusnya tidak lagi berada di bahunya. Fakta bahwa tas masih tergantung dan dompet utuh membuktikan tidak pernah terjadi perampokan. Wanita itu berbohong, mungkin untuk mengalihkan perhatian dari masalah keuangan atau alasan lain."
    },
    // Soal 13
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobilnya yang terparkir di garasi tertutup. Mesin mobil masih menyala dan pintu garasi tertutup rapat. Tidak ada luka pada tubuhnya. Polisi menyimpulkan bunuh diri karena menghirup gas karbon monoksida. Namun detektif menemukan kunci mobil masih di kantong korban dan jendela mobil sedikit terbuka. Mengapa detektif meragukan bunuh diri?",
        options: [
            "Karena karbon monoksida tidak berbahaya jika jendela sedikit terbuka.",
            "Karena jika korban sengaja bunuh diri, ia tidak akan membuka jendela—jendela terbuka menunjukkan ia berusaha bertahan hidup atau ada orang lain yang menyalakan mesin.",
            "Karena kunci mobil di kantong membuktikan korban tidak sempat masuk mobil.",
            "Karena mobil tidak mungkin menyala di garasi tertutup."
        ],
        correctIndex: 1,
        explanation: "Orang yang sengaja bunuh diri dengan gas karbon monoksida tidak akan membuka jendela—justru ia menutup rapat semua celah agar gas terperangkap. Jendela sedikit terbuka menunjukkan korban mungkin tidak berniat mati, atau seseorang menyalakan mesin lalu meninggalkannya. Ini mengarah pada kemungkinan pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 14
    {
        caseText: "Seorang pria mengaku menemukan mayat tetangganya di ruang tamu pada pukul 08.00 pagi. Ia berkata, 'Saya melihat pintu rumahnya terbuka, jadi saya masuk dan menemukan tubuhnya.' Detektif curiga pada pria itu karena satu detail: korban memiliki anjing penjaga yang sangat agresif terhadap orang asing, tetapi anjing itu tenang saat polisi datang. Apa yang sebenarnya terjadi?",
        options: [
            "Anjing itu sudah mati sebelum korban tewas.",
            "Anjing itu mengenal pria tersebut—berarti pria itu sudah sering masuk ke rumah korban, bukan sekadar penemu pertama.",
            "Anjing itu ditenangkan oleh polisi sebelum pria datang.",
            "Anjing itu tidak agresif terhadap siapa pun."
        ],
        correctIndex: 1,
        explanation: "Anjing penjaga yang agresif terhadap orang asing seharusnya menggonggong atau menyerang pria yang mengaku baru pertama kali masuk. Fakta bahwa anjing itu tenang menunjukkan anjing mengenal pria tersebut dengan baik—artinya pria itu sudah sering masuk ke rumah korban. Ini membuktikan ia bukan sekadar penemu, melainkan orang yang terlibat."
    },
    // Soal 15
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian lukisan di sebuah galeri seni. Lukisan mahal hilang dari dinding, tetapi tidak ada tanda-tanda pembobolan pintu atau jendela. Kamera CCTV mati selama 30 menit sebelum pencurian. Siapa pelaku yang paling mungkin?",
        options: [
            "Pencuri profesional yang memotong listrik dari luar.",
            "Seseorang dari dalam galeri yang mengetahui cara mematikan CCTV dan memiliki akses kunci.",
            "Pengunjung yang bersembunyi di dalam galeri sebelum tutup.",
            "Petugas kebersihan yang datang setiap malam."
        ],
        correctIndex: 1,
        explanation: "Tidak adanya tanda pembobolan dan CCTV yang mati tepat sebelum pencurian menunjukkan pelaku memiliki akses internal—mengetahui lokasi kamera, cara mematikannya, dan memiliki kunci. Pelaku dari dalam galeri (staf/penjaga) adalah yang paling mungkin, karena pencuri luar akan meninggalkan jejak pembobolan."
    },
    // Soal 16
    {
        caseText: "Seorang pria ditemukan tewas di kamar mandi dengan luka di pergelangan tangan. Di lantai ada pisau dan genangan darah. Polisi menyimpulkan bunuh diri. Namun detektif melihat bahwa luka di pergelangan tangan korban adalah luka horizontal, bukan vertikal. Mengapa ini penting?",
        options: [
            "Luka horizontal selalu disebabkan oleh pembunuhan.",
            "Luka bunuh diri biasanya vertikal (sejajar lengan), sedangkan luka horizontal lebih sering disebabkan oleh orang lain yang menggorok dari samping.",
            "Luka horizontal membuktikan korban kidal.",
            "Luka horizontal tidak mungkin berdarah banyak."
        ],
        correctIndex: 1,
        explanation: "Dalam kasus luka pergelangan tangan, bunuh diri umumnya menghasilkan luka vertikal (sejajar dengan arah lengan) karena korban mengiris ke arah tubuhnya sendiri. Luka horizontal (melintang) lebih konsisten dengan serangan orang lain yang menggorok dari samping. Detektif curiga ini pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 17
    {
        caseText: "Seorang wanita mengaku suaminya menghilang setelah keluar rumah untuk membeli rokok pada malam hari. Ia melaporkan ke polisi keesokan paginya. Detektif menemukan bahwa istri korban baru saja mencairkan asuransi jiwa suaminya minggu lalu. Namun bukti ini belum cukup. Petunjuk lain apa yang paling menguatkan kecurigaan?",
        options: [
            "Istri korban terlihat menangis saat melapor.",
            "Di rumah korban, semua foto suami masih dipajang rapi.",
            "Istri korban tidak pernah menelepon atau mencari suaminya ke rumah sakit dan kantor polisi sebelum melapor.",
            "Istri korban memiliki pacar."
        ],
        correctIndex: 2,
        explanation: "Orang yang benar-benar kehilangan pasangan biasanya akan mencari ke mana-mana—rumah sakit, kantor polisi, keluarga—sebelum melapor. Fakta bahwa istri langsung melapor tanpa upaya pencarian menunjukkan ia sudah tahu suaminya tidak akan kembali. Ini, ditambah pencairan asuransi, memperkuat kecurigaan pembunuhan berencana."
    },
    // Soal 18
    {
        caseText: "Seorang pria tewas di dalam perpustakaan pribadinya. Ia ditemukan duduk di kursi dengan buku terbuka di pangkuan dan secangkir kopi di meja. Tidak ada tanda kekerasan. Detektif curiga ia diracun. Petunjuk apa yang paling mendukung kecurigaan itu?",
        options: [
            "Buku yang dibacanya adalah buku tentang racun.",
            "Kopi di cangkirnya masih hangat padahal ia sudah tewas berjam-jam.",
            "Tidak ada sidik jari di cangkir kopi selain milik korban.",
            "Jendela perpustakaan terbuka."
        ],
        correctIndex: 1,
        explanation: "Kopi yang masih hangat padahal korban sudah tewas berjam-jam adalah anomali besar. Ini menunjukkan seseorang baru saja menuangkan kopi panas ke cangkir—kemungkinan untuk menutupi bahwa kopi asli (yang beracun) sudah diminum korban. Pelaku berusaha membuat seolah korban baru saja minum kopi biasa."
    },
    // Soal 19
    {
        caseText: "Seorang pria ditemukan tewas di lantai dapur dengan pecahan gelas di sekitarnya. Ia memegang sobekan kain di tangan. Istrinya mengatakan ia terjatuh dan kepalanya terbentur meja. Detektif melihat sobekan kain di tangan korban cocok dengan sobekan di ujung celemek istri. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan tidak sengaja mencengkeram celemek istri.",
            "Istri terlibat—korban sempat mencengkeram celemeknya saat terjadi perkelahian, lalu istri berbohong tentang kecelakaan.",
            "Celemek itu milik orang lain yang kebetulan lewat.",
            "Sobekan kain tidak ada hubungannya dengan kematian."
        ],
        correctIndex: 1,
        explanation: "Sobekan kain di tangan korban yang cocok dengan celemek istri adalah bukti fisik kuat. Ini menunjukkan korban sempat mencengkeram celemek istrinya saat terjadi konflik—sesuatu yang tidak akan terjadi pada kecelakaan jatuh biasa. Istri berbohong untuk menutupi perkelahian yang berujung kematian."
    },
    // Soal 20
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pemilik toko emas. Mayatnya ditemukan di ruang belakang toko dengan luka tusuk. Pintu depan toko terkunci, tetapi jendela kecil di belakang terbuka. Di lantai ada jejak lumpur yang mengarah ke jendela. Namun detektif melihat lumpur itu sudah kering dan retak, sementara jendela baru saja dibuka. Apa yang sebenarnya terjadi?",
        options: [
            "Pembunuh masuk lewat jendela dan lupa menutupnya.",
            "Jejak lumpur itu sengaja dibuat untuk menyesatkan—pembunuh sebenarnya masuk lewat pintu depan dan mengarang cerita pencurian.",
            "Pembunuh datang dua kali ke toko.",
            "Lumpur berasal dari korban sendiri."
        ],
        correctIndex: 1,
        explanation: "Lumpur yang sudah kering dan retak menunjukkan jejak itu dibuat jauh sebelum kejadian, sementara jendela baru saja dibuka. Ini adalah upaya mengalihkan penyelidikan ke arah pencurian dari luar. Pembunuh sebenarnya orang yang memiliki akses masuk normal (pintu depan), lalu sengaja membuat jejak palsu di jendela."
    },
	    // Soal 21
    {
        caseText: "Seorang pria melaporkan bahwa istrinya hilang saat berenang di pantai. Ia mengatakan istrinya terseret arus. Detektif melihat pria itu masih mengenakan jam tangan mahal dan sepatu pantai yang bersih, sementara ia mengaku ikut berenang menyelamatkan istrinya. Apa yang mencurigakan?",
        options: [
            "Pria itu tidak bisa berenang.",
            "Jika benar ia ikut berenang menyelamatkan istrinya, jam tangan mahal dan sepatu pantainya tidak mungkin tetap bersih dan masih dipakai.",
            "Jam tangan mahal tidak tahan air.",
            "Sepatu pantai tidak boleh dipakai saat berenang."
        ],
        correctIndex: 1,
        explanation: "Pria itu mengaku ikut berenang menyelamatkan istrinya, tetapi jam tangan mahal masih terpasang dan sepatu pantainya bersih. Orang yang benar-benar terjun ke laut untuk menyelamatkan seseorang tidak akan sempat memikirkan jam tangan mahal, dan sepatunya pasti basah/berpasir. Ini menunjukkan ia tidak pernah masuk air—alibinya palsu."
    },
    // Soal 22
    {
        caseText: "Seorang pria ditemukan tewas di dalam kantor yang pintunya terkunci dari luar. Satu-satunya kunci ada di kantong korban. Jendela kantor di lantai 10 tidak bisa dibuka. Bagaimana pembunuh bisa masuk dan keluar?",
        options: [
            "Pembunuh menggunakan pintu rahasia di balik lemari.",
            "Pembunuh adalah orang yang mengunci pintu dari luar setelah membunuh, lalu memasukkan kunci ke kantong korban melalui celah bawah pintu.",
            "Pembunuh memanjat dari lantai 9.",
            "Korban bunuh diri."
        ],
        correctIndex: 1,
        explanation: "Jika pintu terkunci dari luar dan kunci ada di kantong korban, pelaku bisa saja mengunci pintu dari luar, lalu memasukkan kunci melalui celah bawah pintu ke dalam kantong korban yang sudah tergeletak dekat pintu. Ini menciptakan kesan kamar terkunci dari dalam padahal pelaku sudah keluar."
    },
    // Soal 23
    {
        caseText: "Seorang wanita ditemukan tewas di taman dengan luka di kepala. Di dekatnya ada batu besar berlumuran darah. Seorang pria mengaku melihat korban terjatuh dan kepalanya membentur batu. Namun detektif melihat darah di batu hanya ada di satu sisi, dan posisi batu jauh dari jalur setapak. Apa kesimpulannya?",
        options: [
            "Korban memang terjatuh dan tidak sengaja membentur batu.",
            "Batu itu dipindahkan—darah hanya di satu sisi menunjukkan batu diayunkan ke kepala korban, bukan korban yang jatuh ke batu.",
            "Batu itu sudah ada di sana sejak lama.",
            "Pria itu berbohong karena ia yang memindahkan mayat."
        ],
        correctIndex: 1,
        explanation: "Jika korban jatuh dan kepalanya membentur batu, darah akan tersebar di area benturan dan batu berada di posisi tetap. Darah hanya di satu sisi batu menunjukkan batu itu diayunkan mengenai kepala korban—pola khas pembunuhan dengan senjata tumpul. Posisi batu yang jauh dari jalur setapak juga tidak masuk akal untuk kecelakaan jatuh."
    },
    // Soal 24
    {
        caseText: "Seorang pria mengaku dirampok di depan ATM. Ia mengatakan perampok mengambil uang yang baru saja ia tarik. Polisi memeriksa rekening korban dan menemukan tidak ada penarikan uang sama sekali pada hari itu. Apa yang sebenarnya terjadi?",
        options: [
            "Perampok mengambil uang sebelum korban sempat menariknya.",
            "Pria itu berbohong—tidak ada penarikan uang, berarti tidak ada uang yang bisa dirampok, sehingga cerita perampokan adalah palsu.",
            "ATM rusak sehingga penarikan tidak tercatat.",
            "Korban menarik uang dari ATM lain."
        ],
        correctIndex: 1,
        explanation: "Jika korban benar-benar baru menarik uang lalu dirampok, harus ada catatan penarikan di rekeningnya. Fakta bahwa tidak ada penarikan sama sekali membuktikan cerita itu palsu. Pria itu mengarang perampokan, mungkin untuk menutupi kehilangan uang karena alasan lain atau untuk mengklaim asuransi."
    },
    // Soal 25
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar tidur dengan luka tembak di dada. Di tangannya ada pistol, tetapi tidak ada bubuk mesiu di tangan korban. Polisi menyimpulkan bunuh diri. Detektif menolak kesimpulan itu. Mengapa?",
        options: [
            "Karena pistol tidak mungkin dipegang korban.",
            "Karena orang yang menembak dirinya sendiri pasti memiliki bekas bubuk mesiu di tangan—tidak adanya bubuk menunjukkan pistol diletakkan di tangan korban setelah ditembak.",
            "Karena luka tembak di dada selalu disebabkan pembunuhan.",
            "Karena korban tidak memiliki riwayat depresi."
        ],
        correctIndex: 1,
        explanation: "Saat pistol ditembakkan dari jarak dekat, bubuk mesiu akan menempel di tangan penembak. Jika korban benar-benar bunuh diri, tangannya harus memiliki bekas bubuk mesiu. Tidak adanya bekas ini membuktikan pistol diletakkan di tangan korban setelah ia ditembak orang lain."
    },
    // Soal 26
    {
        caseText: "Seorang wanita melaporkan bahwa rumahnya dibobol malam tadi. Ia mengatakan pencuri masuk melalui jendela dapur yang pecah. Detektif melihat pecahan kaca jendela tersebar di luar rumah, bukan di dalam. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca dari dalam lalu keluar.",
            "Kaca dipecahkan dari dalam—jika dipecahkan dari luar, pecahannya seharusnya jatuh ke dalam. Ini menunjukkan cerita pembobolan adalah palsu.",
            "Angin meniup pecahan kaca ke luar.",
            "Pencuri memecahkan kaca dari luar dengan palu."
        ],
        correctIndex: 1,
        explanation: "Hukum fisika sederhana: jika kaca dipecahkan dari luar, pecahannya akan jatuh ke dalam ruangan. Fakta bahwa pecahan kaca tersebar di luar menunjukkan kaca dipecahkan dari dalam. Wanita itu mengarang cerita pembobolan—mungkin untuk mengklaim asuransi atau menutupi hal lain."
    },
    // Soal 27
    {
        caseText: "Seorang pria tewas di ruang tamunya. Ia ditemukan dengan luka di kepala dan jendela ruang tamu terbuka. Di lantai ada pot bunga yang pecah. Polisi menduga korban dibunuh dengan pot bunga. Namun detektif melihat pot bunga itu berada di dekat jendela, bukan di dekat tubuh korban. Apa yang sebenarnya terjadi?",
        options: [
            "Korban tersandung pot bunga dan jatuh.",
            "Pot bunga itu dipindahkan—kemungkinan korban dibunuh dengan cara lain, lalu pot bunga diletakkan dekat jendela untuk menyesatkan penyelidikan ke arah perampokan.",
            "Pot bunga jatuh karena angin dari jendela.",
            "Korban bunuh diri dengan memukul kepalanya sendiri."
        ],
        correctIndex: 1,
        explanation: "Jika pot bunga digunakan sebagai senjata, pot itu seharusnya berada dekat tubuh korban. Posisinya yang jauh di dekat jendela menunjukkan pot itu sengaja diletakkan di sana sebagai pengalih perhatian—untuk membuat polisi mengira ada perampok yang masuk lewat jendela dan menggunakan pot sebagai senjata."
    },
    // Soal 28
    {
        caseText: "Seorang pria mengaku istrinya tenggelam di kolam renang rumah mereka. Ia mengatakan istrinya tidak bisa berenang dan terpeleset. Detektif melihat kolam renang tersebut hanya memiliki kedalaman 1,2 meter di seluruh bagian, dan korban memiliki tinggi 170 cm. Apa kesimpulannya?",
        options: [
            "Korban bisa tenggelam di air dangkal jika panik.",
            "Kolam sedalam 1,2 meter tidak mungkin menenggelamkan orang dewasa setinggi 170 cm yang bisa berdiri—cerita suami sangat tidak masuk akal.",
            "Korban tenggelam karena kepalanya terbentur.",
            "Kolam renang tersebut sebenarnya lebih dalam."
        ],
        correctIndex: 1,
        explanation: "Kolam dengan kedalaman seragam 1,2 meter memungkinkan orang dewasa setinggi 170 cm untuk berdiri dengan kepala di atas air. Tenggelam di kolam seperti itu sangat tidak mungkin kecuali ada faktor lain (pingsan, dilumpuhkan). Cerita suami patut dicurigai—kemungkinan ia menenggelamkan istrinya secara paksa."
    },
    // Soal 29
    {
        caseText: "Seorang detektif memeriksa TKP pembunuhan di sebuah apartemen. Ia menemukan bahwa korban tewas dengan luka tusuk, tetapi tidak ada sidik jari sama sekali di TKP—bahkan tidak ada sidik jari korban sendiri di barang-barang pribadinya. Apa yang paling mungkin terjadi?",
        options: [
            "Pembunuh menggunakan sarung tangan dan menyeka seluruh TKP untuk menghapus sidik jarinya.",
            "Korban baru pindah dan belum menyentuh barang-barangnya.",
            "TKP sudah dibersihkan oleh petugas kebersihan.",
            "Sidik jari tidak selalu tertinggal di barang."
        ],
        correctIndex: 0,
        explanation: "Tidak adanya sidik jari sama sekali—termasuk milik korban sendiri—sangat tidak wajar. Ini menunjukkan seseorang sengaja menyeka seluruh permukaan untuk menghapus sidik jari. Pembunuh yang menggunakan sarung tangan dan membersihkan TKP secara menyeluruh adalah penjelasan paling logis."
    },
    // Soal 30
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di tepi jurang. Mobil dalam keadaan netral, bukan di gigi parkir. Rem tangan tidak ditarik. Polisi menduga kecelakaan. Detektif curiga pembunuhan. Apa alasannya?",
        options: [
            "Karena mobil seharusnya tidak bisa berhenti di tepi jurang.",
            "Karena jika korban mengemudi sendiri, ia pasti menaruh gigi parkir atau menarik rem tangan sebelum berhenti—fakta mobil dalam posisi netral menunjukkan seseorang memindahkan tubuhnya atau mendorong mobil.",
            "Karena korban tidak memiliki SIM.",
            "Karena jurang terlalu dangkal untuk kecelakaan fatal."
        ],
        correctIndex: 1,
        explanation: "Pengemudi yang berhenti di tepi jurang—apalagi dalam keadaan waspada—pasti menaruh gigi parkir atau menarik rem tangan. Mobil dalam posisi netral tanpa rem tangan menunjukkan mobil itu didorong atau dipindahkan oleh orang lain. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 31
    {
        caseText: "Seorang wanita mengaku suaminya terjatuh dari tangga dan tewas. Detektif melihat tubuh korban berada di dasar tangga dengan kepala di sisi dinding, kaki di sisi ruangan. Luka di kepala korban ada di bagian belakang. Apa yang mencurigakan?",
        options: [
            "Orang yang jatuh dari tangga biasanya melukai bagian depan kepala, bukan belakang.",
            "Jika korban jatuh dari tangga, tubuhnya seharusnya bergerak menjauhi tangga (kepala di sisi ruangan), bukan sebaliknya—posisi tubuh menunjukkan ia diletakkan di sana.",
            "Tidak ada yang mencurigakan, jatuh dari tangga bisa berakhir dengan posisi apa pun.",
            "Luka di belakang kepala membuktikan korban bunuh diri."
        ],
        correctIndex: 1,
        explanation: "Orang yang jatuh dari tangga akan bergerak menjauhi tangga karena momentum—kepala cenderung berada di sisi ruangan, bukan menempel dinding. Posisi tubuh korban yang terbalik (kepala di dinding, kaki di ruangan) menunjukkan tubuhnya dipindahkan dan diletakkan di dasar tangga untuk menyamarkan pembunuhan sebagai kecelakaan."
    },
    // Soal 32
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah rumah. Ia menemukan bahwa korban tewas pada pukul 21.00. Tersangka utama memiliki alibi: ia mengaku sedang menonton pertandingan sepak bola di stadion dan menunjukkan tiket pertandingan yang dimulai pukul 20.00. Detektif menemukan tiket itu tidak memiliki sobekan penanda masuk. Apa artinya?",
        options: [
            "Tersangka membeli tiket tetapi tidak masuk stadion—alibinya palsu.",
            "Tiket itu palsu.",
            "Stadion tidak memerlukan sobekan tiket.",
            "Tersangka menonton dari luar stadion."
        ],
        correctIndex: 0,
        explanation: "Tiket pertandingan biasanya disobek saat penonton masuk stadion. Tiket yang masih utuh tanpa sobekan menunjukkan tersangka membeli tiket tetapi tidak pernah masuk. Ia menggunakan tiket sebagai alibi palsu, padahal ia tidak berada di stadion saat pembunuhan terjadi."
    },
    // Soal 33
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka tembak. Pintu kamar terkunci dari dalam, dan kunci cadangan hotel tidak pernah digunakan. Jendela kamar tidak bisa dibuka. Namun detektif menemukan lubang kecil di dinding yang tertutup lukisan. Apa yang sebenarnya terjadi?",
        options: [
            "Pembunuh menembak melalui lubang di dinding lalu menutupnya dengan lukisan.",
            "Korban bunuh diri.",
            "Pembunuh masuk melalui pintu sebelum dikunci korban.",
            "Lubang itu sudah ada sejak lama."
        ],
        correctIndex: 0,
        explanation: "Lubang kecil di dinding yang tertutup lukisan adalah jalur peluru. Pembunuh menembak dari kamar sebelah melalui lubang tersebut, lalu lukisan diletakkan kembali untuk menutupi lubang. Ini menjelaskan bagaimana korban bisa tertembak meski kamar terkunci dari dalam."
    },
    // Soal 34
    {
        caseText: "Seorang wanita melaporkan bahwa dompetnya dicopet di pasar. Ia mengatakan pelaku adalah pria berbaju merah yang berlari ke arah utara. Polisi menemukan pria berbaju merah di lokasi, tetapi ia tidak membawa dompet. Namun detektif melihat pria itu mengenakan jaket tebal meskipun cuaca panas. Apa kesimpulannya?",
        options: [
            "Pria itu tidak bersalah karena tidak membawa dompet.",
            "Pria itu menyembunyikan dompet di dalam jaketnya—jaket tebal di cuaca panas mencurigakan dan kemungkinan digunakan untuk menyembunyikan barang curian.",
            "Dompet sudah dibuang pelaku lain.",
            "Jaket tebal tidak ada hubungannya dengan kasus."
        ],
        correctIndex: 1,
        explanation: "Memakai jaket tebal di cuaca panas adalah hal yang tidak wajar dan mencurigakan. Kemungkinan besar pria itu menyembunyikan dompet curian di dalam jaketnya. Petugas perlu memeriksa bagian dalam jaket untuk menemukan barang bukti."
    },
    // Soal 35
    {
        caseText: "Seorang pria ditemukan tewas di kebun belakang rumahnya. Ia memegang gunting rumput dan ada luka di lehernya. Polisi menduga kecelakaan—korban tersandung dan gunting rumput melukainya. Detektif melihat luka di leher korban berupa goresan lurus yang sangat rapi. Apa kesimpulannya?",
        options: [
            "Gunting rumput memang bisa menyebabkan luka rapi.",
            "Luka yang sangat rapi tidak mungkin disebabkan kecelakaan—ini adalah luka yang disengaja, bukan akibat terjatuh pada gunting rumput yang akan menghasilkan luka tidak beraturan.",
            "Korban bunuh diri dengan gunting rumput.",
            "Gunting rumput tidak berbahaya."
        ],
        correctIndex: 1,
        explanation: "Luka akibat kecelakaan (terjatuh pada gunting rumput) akan menghasilkan luka yang tidak beraturan, compang-camping, dan disertai memar. Luka goresan lurus yang sangat rapi menunjukkan sayatan yang disengaja dengan benda tajam. Detektif curiga ini pembunuhan yang disamarkan sebagai kecelakaan kerja."
    },
    // Soal 36
    {
        caseText: "Seorang pria mengaku istrinya bunuh diri dengan meminum racun. Ia menemukan tubuh istrinya di dapur dengan gelas berisi racun di sampingnya. Detektif melihat gelas tersebut berada di posisi yang tidak sesuai—pegangan gelas menghadap ke arah yang salah untuk orang yang minum sendiri. Apa artinya?",
        options: [
            "Gelas itu dipegang dengan tangan kiri korban.",
            "Gelas itu diletakkan oleh orang lain—posisi pegangan yang tidak wajar menunjukkan gelas tidak digunakan korban sendiri, melainkan diletakkan setelah korban diracun.",
            "Korban kidal.",
            "Posisi gelas tidak penting."
        ],
        correctIndex: 1,
        explanation: "Orang yang minum dari gelas akan memegangnya dengan pegangan menghadap ke sisi yang nyaman. Posisi pegangan yang tidak wajar menunjukkan gelas itu diletakkan setelah korban tewas—bukti bahwa suami menempatkan gelas beracun di samping istri untuk menciptakan kesan bunuh diri."
    },
    // Soal 37
    {
        caseText: "Seorang detektif menyelidiki hilangnya seorang anak dari rumahnya. Ibu anak itu mengatakan anaknya hilang saat bermain di halaman. Detektif melihat sepatu anak itu masih rapi di dalam rumah, padahal ibu mengatakan anaknya bermain di halaman. Apa yang mencurigakan?",
        options: [
            "Anak itu bermain tanpa sepatu.",
            "Jika anak benar-benar bermain di halaman, sepatunya seharusnya kotor atau tidak ada di dalam rumah—sepatu yang rapi di dalam menunjukkan anak tidak pernah keluar bermain.",
            "Ibu anak itu berbohong tentang cuaca.",
            "Sepatu itu milik orang lain."
        ],
        correctIndex: 1,
        explanation: "Anak yang bermain di halaman pasti memakai sepatu dan sepatunya akan kotor. Fakta bahwa sepatu masih rapi di dalam rumah menunjukkan anak tidak pernah keluar bermain seperti yang dikatakan ibunya. Ini mengarah pada kemungkinan ibu menyembunyikan fakta sebenarnya tentang hilangnya anak."
    },
    // Soal 38
    {
        caseText: "Seorang pria ditemukan tewas di dalam gudang dengan luka di kepala. Pintu gudang terkunci dari luar, dan kunci hanya dipegang oleh pemilik gudang. Pemilik gudang mengaku tidak tahu apa-apa. Detektif menemukan bahwa jendela gudang memiliki kasa yang terpasang rapi dari dalam. Apa kesimpulannya?",
        options: [
            "Pembunuh masuk melalui jendela dan memasang kasa dari dalam.",
            "Korban sudah berada di dalam gudang sebelum dikunci—pemilik gudang yang mengunci korban di dalam, lalu korban tewas di dalam.",
            "Korban bunuh diri.",
            "Pembunuh memakai kunci duplikat."
        ],
        correctIndex: 1,
        explanation: "Karena pintu terkunci dari luar dan kasa jendela terpasang rapi dari dalam, tidak ada jalan masuk bagi pembunuh dari luar. Ini berarti korban sudah berada di dalam gudang sebelum pintu dikunci. Pemilik gudang—satu-satunya pemegang kunci—kemungkinan mengunci korban di dalam setelah terjadi konflik."
    },
    // Soal 39
    {
        caseText: "Seorang wanita melaporkan bahwa ia diserang di parkiran mal. Ia mengatakan penyerang memukul kepalanya dari belakang dan merampas tasnya. Detektif melihat luka di kepala wanita itu berada di bagian depan. Apa kesimpulannya?",
        options: [
            "Wanita itu berbohong—luka di depan tidak konsisten dengan serangan dari belakang, kemungkinan ia terluka karena hal lain dan mengarang cerita.",
            "Penyerang memukul dari depan.",
            "Wanita itu terjatuh dan kepalanya terbentur.",
            "Luka di depan bisa terjadi meski diserang dari belakang."
        ],
        correctIndex: 0,
        explanation: "Jika benar diserang dari belakang, luka harusnya berada di belakang kepala. Luka di bagian depan tidak konsisten dengan cerita wanita tersebut. Kemungkinan ia terluka karena sebab lain (misalnya terjatuh) dan mengarang cerita penyerangan untuk menutupi hal lain."
    },
    // Soal 40
    {
        caseText: "Seorang pria tewas di kamar mandi hotel. Ia ditemukan dengan luka di pergelangan tangan dan air di bak mandi berwarna merah. Polisi menduga bunuh diri. Detektif melihat air di bak mandi sudah dingin dan tidak ada cipratan air di lantai. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri di bak mandi.",
            "Tidak ada cipratan air menunjukkan korban tidak bergerak saat tewas di bak—kemungkinan ia dibunuh di tempat lain, lalu tubuhnya diletakkan di bak mandi yang sudah diisi air untuk menyamarkan pembunuhan sebagai bunuh diri.",
            "Korban tenggelam sebelum lukanya berdarah.",
            "Air dingin membuktikan korban tewas lama."
        ],
        correctIndex: 1,
        explanation: "Orang yang bunuh diri dengan mengiris pergelangan tangan di bak mandi akan bergerak dan mencipratkan air ke lantai. Tidak adanya cipratan air menunjukkan korban tidak bergerak di dalam bak—ia sudah tewas saat diletakkan di sana. Pembunuh mengisi bak dengan air dan darah untuk menciptakan kesan bunuh diri."
    },
	    // Soal 41
    {
        caseText: "Seorang detektif menyelidiki kasus penipuan asuransi. Seorang pria mengklaim mobilnya dicuri, tetapi detektif menemukan bahwa odometer mobil tersebut menunjukkan penambahan 200 km sejak terakhir dilaporkan. Apa artinya?",
        options: [
            "Mobil itu digunakan oleh pencuri sebelum ditinggalkan.",
            "Pria itu berbohong—mobil tidak dicuri, ia sendiri yang mengendarainya sejauh 200 km, mungkin untuk menyembunyikan mobil atau mengklaim asuransi secara palsu.",
            "Odometer rusak.",
            "Pencuri mengendarai mobil ke tempat lain."
        ],
        correctIndex: 1,
        explanation: "Jika mobil benar-benar dicuri, pencuri mungkin mengendarainya, tetapi pria itu melaporkan mobil hilang tanpa menyebutkan penggunaannya. Penambahan 200 km sejak laporan terakhir menunjukkan mobil digunakan setelah 'dicuri'—kemungkinan oleh pemiliknya sendiri. Ini mengarah pada penipuan asuransi."
    },
    // Soal 42
    {
        caseText: "Seorang pria ditemukan tewas di ruang kerja dengan luka tembak. Di mejanya ada surat bunuh diri yang diketik. Detektif curiga surat itu palsu. Petunjuk apa yang paling mendukung kecurigaan?",
        options: [
            "Surat itu tidak ditandatangani.",
            "Surat itu diketik, bukan ditulis tangan—surat bunuh diri biasanya ditulis tangan, dan mesin tik di ruangan itu tidak memiliki sidik jari korban.",
            "Surat itu berisi kata-kata yang tidak baku.",
            "Korban tidak memiliki mesin tik."
        ],
        correctIndex: 1,
        explanation: "Surat bunuh diri umumnya ditulis tangan karena dibuat dalam kondisi emosional. Surat yang diketik mencurigakan, apalagi jika mesin tiknya tidak memiliki sidik jari korban—berarti orang lain yang mengetik surat itu. Ini menunjukkan surat dibuat oleh pembunuh untuk menyamarkan pembunuhan sebagai bunuh diri."
    },
    // Soal 43
    {
        caseText: "Seorang wanita mengaku rumahnya kemalingan pada malam hari. Ia mengatakan pencuri masuk melalui pintu depan yang tidak terkunci dan mengambil perhiasan di lemari. Detektif melihat pintu depan dalam keadaan terkunci dari dalam, dan tidak ada tanda paksa. Apa kesimpulannya?",
        options: [
            "Pencuri mengunci pintu dari dalam sebelum kabur.",
            "Wanita itu berbohong—pintu terkunci dari dalam dan tidak ada tanda paksa berarti tidak ada orang luar yang masuk; kemungkinan ia mengarang cerita untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain.",
            "Pencuri memiliki kunci duplikat.",
            "Pencuri masuk melalui jendela."
        ],
        correctIndex: 1,
        explanation: "Jika pencuri masuk melalui pintu depan yang tidak terkunci, pintu tidak mungkin terkunci dari dalam setelahnya—pencuri akan keluar dan pintu tetap terbuka atau terkunci dari luar. Pintu yang terkunci dari dalam tanpa tanda paksa menunjukkan tidak ada orang luar yang masuk. Cerita wanita itu palsu."
    },
    // Soal 44
    {
        caseText: "Seorang pria ditemukan tewas di tepi sungai dengan luka di kepala. Ia memegang pancing. Polisi menduga ia terpeleset dan kepalanya terbentur batu. Detektif melihat pancing korban dalam keadaan terlipat rapi dan tidak ada ikan di embernya. Apa kesimpulannya?",
        options: [
            "Korban belum sempat memancing.",
            "Pancing yang terlipat rapi menunjukkan korban belum memancing—jika ia terpeleset saat memancing, pancingnya akan dalam keadaan terulur. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan.",
            "Korban memancing tanpa umpan.",
            "Ikan-ikannya kabur."
        ],
        correctIndex: 1,
        explanation: "Jika korban benar-benar sedang memancing dan terpeleset, pancingnya akan dalam keadaan terulur (digunakan). Pancing yang terlipat rapi menunjukkan korban belum mulai memancing—atau pancing itu sengaja diletakkan di tangannya setelah ia dibunuh. Ini adalah pembunuhan yang disamarkan sebagai kecelakaan memancing."
    },
    // Soal 45
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pria di apartemennya. Korban ditemukan tewas dengan luka tusuk. Pintu apartemen terkunci dari dalam, tetapi jendela kamar mandi terbuka. Di lantai kamar mandi ada genangan air dan handuk basah. Apa yang paling mungkin terjadi?",
        options: [
            "Korban bunuh diri di kamar mandi.",
            "Pembunuh masuk melalui jendela kamar mandi, membunuh korban, lalu mandi untuk membersihkan diri sebelum kabur—handuk basah dan genangan air menunjukkan seseorang baru saja mandi.",
            "Korban terpeleset di kamar mandi.",
            "Air itu berasal dari pipa bocor."
        ],
        correctIndex: 1,
        explanation: "Jendela kamar mandi yang terbuka adalah jalur masuk, sementara handuk basah dan genangan air menunjukkan seseorang baru saja mandi di sana. Pembunuh masuk lewat jendela, membunuh korban, lalu mandi untuk membersihkan darah dari tubuhnya sebelum kabur. Ini menjelaskan pintu yang tetap terkunci dari dalam."
    },
    // Soal 46
    {
        caseText: "Seorang wanita ditemukan tewas di dapur dengan luka bakar di tangan. Di dekatnya ada kompor yang masih menyala dan panci berisi minyak panas. Suaminya mengatakan istrinya tidak sengaja menyenggol panci. Detektif melihat luka bakar korban hanya di telapak tangan, bukan di lengan atau wajah. Apa kesimpulannya?",
        options: [
            "Korban memang tidak sengaja menyenggol panci.",
            "Luka bakar hanya di telapak tangan menunjukkan korban memegang sesuatu yang panas dengan sengaja—kemungkinan ia dipaksa memegang panci atau benda panas oleh orang lain, bukan terkena cipratan minyak yang akan mengenai area lebih luas.",
            "Korban memiliki kulit yang tidak sensitif.",
            "Minyak panas tidak menyebabkan luka bakar."
        ],
        correctIndex: 1,
        explanation: "Cipratan minyak panas dari panci yang tersenggol akan mengenai area yang lebih luas—lengan, wajah, atau tubuh. Luka bakar yang terbatas di telapak tangan menunjukkan korban memegang benda panas secara langsung, mungkin dipaksa. Ini mengarah pada kekerasan dalam rumah tangga yang berujung kematian."
    },
    // Soal 47
    {
        caseText: "Seorang pria melaporkan bahwa motornya dicuri dari depan rumah. Ia mengatakan motor itu diparkir di depan rumah dan ia menemukannya hilang pagi ini. Detektif melihat tanah di depan rumah masih basah karena hujan semalaman, tetapi tidak ada jejak ban motor di tanah. Apa kesimpulannya?",
        options: [
            "Pencuri mengangkat motor tanpa menyentuh tanah.",
            "Pria itu berbohong—jika motor benar-benar diparkir di depan rumah saat hujan, seharusnya ada jejak ban atau bekas parkir di tanah basah; tidak adanya jejak menunjukkan motor tidak pernah diparkir di sana.",
            "Hujan menghapus semua jejak.",
            "Motor ditarik ke dalam rumah."
        ],
        correctIndex: 1,
        explanation: "Tanah basah karena hujan akan merekam jejak ban atau bekas parkir motor. Tidak adanya jejak sama sekali menunjukkan motor tidak pernah diparkir di depan rumah saat hujan. Pria itu berbohong—mungkin motor sudah lama hilang atau ia mengarang cerita pencurian untuk mengklaim asuransi."
    },
    // Soal 48
    {
        caseText: "Seorang detektif menemukan mayat seorang pria di dalam lemari pakaian. Tubuhnya dalam keadaan terlipat, dan tidak ada tanda-tanda perkelahian. Pintu lemari terkunci dari luar. Apa yang paling mungkin terjadi?",
        options: [
            "Korban bersembunyi di lemari dan terkunci di dalam.",
            "Korban dibunuh di tempat lain, lalu tubuhnya dimasukkan ke lemari dan pintunya dikunci untuk menunda penemuan—tubuh yang terlipat tanpa tanda perkelahian menunjukkan ia sudah tewas saat dimasukkan.",
            "Korban bunuh diri di dalam lemari.",
            "Korban terjatuh ke dalam lemari."
        ],
        correctIndex: 1,
        explanation: "Tubuh yang terlipat tanpa tanda perkelahian menunjukkan korban sudah tewas sebelum dimasukkan ke lemari. Pintu yang terkunci dari luar bertujuan menunda penemuan mayat, memberi pembunuh waktu untuk melarikan diri atau menghilangkan barang bukti. Ini adalah upaya menyembunyikan tubuh, bukan TKP asli."
    },
    // Soal 49
    {
        caseText: "Seorang wanita mengaku dirampok di dalam taksi. Ia mengatakan sopir taksi merampas dompetnya dan membuangnya di pinggir jalan. Polisi menemukan dompet wanita itu di dalam tasnya sendiri, yang masih dibawanya. Apa kesimpulannya?",
        options: [
            "Sopir taksi mengembalikan dompet tanpa sepengetahuan wanita.",
            "Wanita itu berbohong—dompet yang masih ada di tasnya membuktikan tidak pernah terjadi perampasan; ia mengarang cerita, mungkin untuk menutupi kehilangan uang karena sebab lain.",
            "Wanita itu memiliki dua dompet.",
            "Sopir taksi salah orang."
        ],
        correctIndex: 1,
        explanation: "Jika dompet benar-benar dirampas dan dibuang, dompet itu tidak mungkin masih berada di dalam tas wanita. Fakta bahwa dompet masih ada membuktikan tidak pernah terjadi perampokan. Wanita itu berbohong, mungkin untuk mengalihkan perhatian dari masalah keuangan pribadi."
    },
    // Soal 50
    {
        caseText: "Seorang pria ditemukan tewas di ruang tamu dengan luka di kepala. Di dekatnya ada vas bunga yang pecah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur vas. Detektif melihat pecahan vas tersebar ke arah yang berlawanan dengan tubuh korban. Apa kesimpulannya?",
        options: [
            "Vas itu pecah karena korban jatuh menimpanya.",
            "Pecahan vas yang tersebar menjauhi tubuh menunjukkan vas itu dilempar atau diayunkan ke arah korban—jika korban jatuh menimpa vas, pecahannya akan tersebar ke segala arah atau ke arah tubuh, bukan menjauh.",
            "Vas itu pecah karena angin.",
            "Istri korban membersihkan pecahan vas."
        ],
        correctIndex: 1,
        explanation: "Pola pecahan menunjukkan arah gaya. Jika korban jatuh menimpa vas, pecahan akan tersebar ke segala arah atau tertahan tubuh. Pecahan yang tersebar menjauhi tubuh menunjukkan vas itu diayunkan/dilempar mengenai kepala korban—pola khas pembunuhan dengan senjata tumpul. Istri korban berbohong."
    },
    // Soal 51
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah perkebunan. Korban ditemukan tewas di gudang dengan luka di leher. Pintu gudang tidak terkunci, tetapi ada lumpur di lantai yang mengarah ke luar. Detektif melihat lumpur itu membentuk jejak sepatu yang sama dengan sepatu korban. Apa kesimpulannya?",
        options: [
            "Korban berjalan ke gudang lalu dibunuh.",
            "Jejak lumpur itu dibuat oleh korban sendiri—kemungkinan pembunuh sengaja membuat jejak palsu menggunakan sepatu korban untuk menyesatkan penyelidikan, atau korban sudah berada di gudang sebelum dibunuh.",
            "Pembunuh memakai sepatu korban.",
            "Lumpur berasal dari luar gudang."
        ],
        correctIndex: 1,
        explanation: "Jejak sepatu yang sama dengan sepatu korban mengarah ke luar gudang mencurigakan—jika korban dibunuh di dalam, ia tidak akan berjalan keluar. Kemungkinan pembunuh memakai sepatu korban untuk membuat jejak palsu, atau korban berjalan ke gudang sendiri sebelum dibunuh. Detektif perlu memeriksa arah dan urutan jejak lebih teliti."
    },
    // Soal 52
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka tembak. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Polisi menyimpulkan bunuh diri. Namun detektif menemukan bahwa pistol itu adalah pistol otomatis yang memerlukan tekanan pelatuk cukup berat. Korban memiliki jari telunjuk yang cedera dan diperban. Apa kesimpulannya?",
        options: [
            "Korban tetap bisa menembak dirinya sendiri meski jari cedera.",
            "Korban tidak mungkin menembak dirinya sendiri dengan jari telunjuk yang cedera dan diperban—kemungkinan pistol diletakkan di tangannya dan bubuk mesiu ditaburkan untuk menyamarkan pembunuhan sebagai bunuh diri.",
            "Pistol itu rusak.",
            "Korban menembak dengan jari lain."
        ],
        correctIndex: 1,
        explanation: "Pistol otomatis memerlukan tekanan pelatuk yang cukup berat. Korban dengan jari telunjuk cedera dan diperban tidak mungkin mampu menekan pelatuk dengan cukup kuat. Bubuk mesiu di tangan bisa ditaburkan oleh pembunuh. Ini adalah pembunuhan yang disamarkan sebagai bunuh diri dengan bukti forensik yang dipalsukan."
    },
    // Soal 53
    {
        caseText: "Seorang wanita melaporkan bahwa anaknya diculik di depan sekolah. Ia mengatakan penculik menggunakan mobil hitam. Detektif memeriksa rekaman CCTV sekolah dan melihat wanita itu datang menjemput anaknya, tetapi anaknya tidak terlihat di sekolah sejak pagi. Apa kesimpulannya?",
        options: [
            "Anak itu diculik sebelum masuk sekolah.",
            "Wanita itu berbohong—jika anaknya tidak terlihat di sekolah sejak pagi, berarti anak itu tidak pernah datang ke sekolah; cerita penculikan di depan sekolah adalah palsu.",
            "CCTV sekolah rusak.",
            "Anak itu bersembunyi di sekolah."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan anak tidak pernah datang ke sekolah sejak pagi. Jika anak tidak pernah ada di sekolah, tidak mungkin ia diculik di depan sekolah. Wanita itu berbohong—kemungkinan anak hilang karena sebab lain (misalnya dibawa kabur atau dititipkan) dan ia mengarang cerita penculikan."
    },
    // Soal 54
    {
        caseText: "Seorang pria ditemukan tewas di dalam tenda saat berkemah. Tidak ada luka pada tubuhnya. Di dalam tenda ada kompor gas portable yang masih menyala. Polisi menduga ia meninggal karena menghirup gas. Detektif melihat pintu tenda dalam keadaan tertutup rapat dan tidak ada ventilasi. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan gas.",
            "Korban meninggal karena menghirup karbon monoksida dari kompor gas yang menyala di ruang tertutup tanpa ventilasi—ini kecelakaan, bukan pembunuhan atau bunuh diri.",
            "Korban diracun oleh orang lain.",
            "Kompor gas meledak."
        ],
        correctIndex: 1,
        explanation: "Kompor gas yang menyala di dalam tenda tertutup rapat tanpa ventilasi menghasilkan karbon monoksida yang mematikan. Korban meninggal karena menghirup gas tersebut—ini kecelakaan tragis, bukan pembunuhan. Tidak adanya luka dan posisi kompor yang masih menyala mendukung kesimpulan ini."
    },
    // Soal 55
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah kantor. Korban ditemukan tewas di ruang rapat dengan luka di kepala. Di ruangan itu ada proyektor yang masih menyala dan laptop korban terbuka. Detektif melihat jam di dinding ruangan berhenti pada pukul 14.30. Namun rekaman CCTV menunjukkan korban masuk ke ruang rapat pukul 15.00. Apa kesimpulannya?",
        options: [
            "Jam dinding rusak dan tidak bisa dijadikan bukti.",
            "Jam dinding sengaja dihentikan pada pukul 14.30 untuk menciptakan alibi palsu—pembunuh ingin membuat seolah korban tewas sebelum ia masuk ruang rapat, padahal CCTV membuktikan korban masuk pukul 15.00.",
            "Korban masuk ruang rapat dua kali.",
            "CCTV salah mencatat waktu."
        ],
        correctIndex: 1,
        explanation: "Ketidaksesuaian antara jam dinding (14.30) dan CCTV (15.00) menunjukkan jam dinding sengaja dihentikan. Pembunuh ingin menciptakan kesan korban tewas sebelum pukul 15.00—mungkin untuk memberi alibi bagi seseorang. CCTV membuktikan korban masih hidup dan masuk ruang rapat pukul 15.00, sehingga jam dinding adalah bukti palsu."
    },
    // Soal 56
    {
        caseText: "Seorang pria mengaku istrinya meninggal karena terjatuh dari tangga. Detektif melihat tubuh korban berada di dasar tangga dengan luka di bagian belakang kepala. Namun detektif juga menemukan bahwa anak tangga di dekat tubuh korban dalam keadaan bersih, sementara anak tangga lainnya berdebu. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan tidak menyentuh anak tangga itu.",
            "Anak tangga yang bersih menunjukkan seseorang baru saja membersihkannya—kemungkinan untuk menghilangkan bukti darah atau jejak lain; ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan.",
            "Anak tangga itu baru dipasang.",
            "Debu berasal dari luar rumah."
        ],
        correctIndex: 1,
        explanation: "Anak tangga yang bersih di antara anak tangga berdebu adalah anomali. Ini menunjukkan seseorang sengaja membersihkan area tertentu—kemungkinan untuk menghilangkan darah atau bukti yang mengarah pada pembunuhan. Korban kemungkinan dibunuh di tempat lain atau dipukul di tangga, lalu darahnya dibersihkan."
    },
    // Soal 57
    {
        caseText: "Seorang wanita ditemukan tewas di kamar tidurnya. Ia memegang botol obat tidur kosong. Polisi menduga overdosis. Detektif melihat botol obat itu memiliki tutup yang sulit dibuka (child-proof cap) dan tangan korban memiliki luka lecet di jari-jari. Apa kesimpulannya?",
        options: [
            "Korban kesulitan membuka botol lalu menyerah.",
            "Luka lecet di jari korban menunjukkan ia berusaha membuka botol—tetapi jika ia bunuh diri dengan overdosis, ia akan membuka botol dengan hati-hati; luka lecet menunjukkan botol itu dipaksa dibuka oleh orang lain atau korban berusaha mempertahankan diri.",
            "Botol obat itu palsu.",
            "Korban alergi obat tidur."
        ],
        correctIndex: 1,
        explanation: "Botol dengan child-proof cap memerlukan teknik khusus untuk dibuka. Luka lecet di jari korban menunjukkan upaya paksa membuka botol—sesuatu yang tidak perlu dilakukan jika korban membuka botolnya sendiri dengan tenang. Kemungkinan korban dipaksa menelan obat atau botol dibuka paksa oleh pembunuh."
    },
    // Soal 58
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terbakar. Polisi menduga kecelakaan. Detektif menemukan bahwa pintu mobil dalam keadaan terkunci dari dalam, tetapi jendela pengemudi pecah. Di dalam mobil tidak ada kunci. Apa kesimpulannya?",
        options: [
            "Korban terkunci di dalam mobil dan terbakar.",
            "Kunci mobil tidak ada di dalam mobil meski pintu terkunci dari dalam menunjukkan seseorang mengunci mobil dari luar menggunakan kunci cadangan, lalu membakarnya—ini pembunuhan yang disamarkan sebagai kecelakaan.",
            "Kunci mobil meleleh karena panas.",
            "Korban membuang kunci keluar jendela."
        ],
        correctIndex: 1,
        explanation: "Pintu yang terkunci dari dalam tetapi kunci tidak ada di dalam mobil adalah kontradiksi. Jika korban mengunci dari dalam, kunci harusnya ada di dalam. Tidak adanya kunci menunjukkan seseorang mengunci mobil dari luar dengan kunci cadangan setelah menempatkan korban di dalam, lalu membakar mobil. Jendela yang pecah bisa jadi upaya korban mencoba keluar."
    },
    // Soal 59
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian di sebuah toko perhiasan. Pemilik toko melaporkan bahwa vitrinya dipecahkan dan perhiasan hilang. Detektif melihat pecahan kaca vitrin tersebar di luar vitrin, bukan di dalam. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca dari dalam vitrin.",
            "Kaca dipecahkan dari dalam vitrin—jika dipecahkan dari luar, pecahannya akan jatuh ke dalam vitrin. Ini menunjukkan pemilik toko mengarang cerita pencurian untuk mengklaim asuransi.",
            "Pencuri memakai palu dari luar.",
            "Kaca vitrin pecah karena tekanan."
        ],
        correctIndex: 1,
        explanation: "Sama seperti kasus jendela: kaca yang dipecahkan dari luar akan jatuh ke dalam. Pecahan kaca yang tersebar di luar vitrin menunjukkan kaca dipecahkan dari dalam. Pemilik toko kemungkinan mengarang cerita pencurian—mungkin untuk mengklaim asuransi atau menutupi penjualan ilegal."
    },
    // Soal 60
    {
        caseText: "Seorang pria ditemukan tewas di dalam kolam renang hotel. Ia mengambang dengan wajah menghadap ke bawah. Tidak ada luka pada tubuhnya. Polisi menduga ia tenggelam karena tidak bisa berenang. Detektif melihat korban masih memakai sandal dan kacamata renang yang terpasang rapi. Apa kesimpulannya?",
        options: [
            "Korban memang tidak bisa berenang.",
            "Sandal dan kacamata renang yang masih terpasang rapi menunjukkan korban tidak berenang—orang yang tenggelam saat berenang biasanya kehilangan sandal atau kacamatanya. Kemungkinan korban sudah tewas sebelum diletakkan di kolam.",
            "Korban tenggelam saat berjalan di tepi kolam.",
            "Sandal dan kacamata tidak penting."
        ],
        correctIndex: 1,
        explanation: "Orang yang benar-benar tenggelam saat berenang akan kehilangan sandal atau kacamata renangnya karena gerakan panik. Sandal dan kacamata yang masih terpasang rapi menunjukkan korban tidak berenang—ia sudah tewas sebelum diletakkan di kolam. Ini pembunuhan yang disamarkan sebagai kecelakaan tenggelam."
    },
	// Soal 61
    {
        caseText: "Seorang pria ditemukan tewas di kamar mandi apartemennya dengan luka di kepala. Pintu kamar mandi tidak terkunci. Di lantai ada sabun yang licin dan pecahan kaca. Polisi menduga korban terpeleset dan kepalanya membentur wastafel. Detektif melihat pecahan kaca berada di bawah tubuh korban, bukan di sekitarnya. Apa kesimpulannya?",
        options: [
            "Korban terpeleset dan pecahan kaca menimpanya.",
            "Pecahan kaca di bawah tubuh korban menunjukkan korban sudah terjatuh sesudah kaca pecah—atau kaca sengaja diletakkan di bawah tubuh untuk menciptakan kesan kecelakaan; ini mengarah pada pembunuhan.",
            "Kaca pecah karena korban jatuh.",
            "Sabun menyebabkan korban terpeleset."
        ],
        correctIndex: 1,
        explanation: "Jika korban terpeleset dan kepalanya membentur wastafel, pecahan kaca (jika ada) akan tersebar di sekitar tubuh. Pecahan kaca yang berada di bawah tubuh menunjukkan kaca itu sudah ada di lantai sebelum korban jatuh—atau sengaja diletakkan di sana. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 62
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di dalam bus. Ia mengatakan perampok merampas kalung emasnya. Detektif melihat leher wanita itu tidak memiliki bekas luka atau kemerahan, padahal kalung emas biasanya meninggalkan bekas jika ditarik paksa. Apa kesimpulannya?",
        options: [
            "Kalung itu longgar sehingga mudah dilepas.",
            "Tidak adanya bekas di leher menunjukkan kalung tidak ditarik paksa—kemungkinan wanita itu melepas kalungnya sendiri dan mengarang cerita perampokan, mungkin untuk mengklaim asuransi.",
            "Perampok menggunakan gunting.",
            "Kulit wanita itu tidak sensitif."
        ],
        correctIndex: 1,
        explanation: "Kalung emas yang dirampas paksa akan meninggalkan bekas luka, kemerahan, atau bahkan lecet di leher korban. Tidak adanya bekas sama sekali menunjukkan kalung itu tidak ditarik paksa—kemungkinan wanita itu melepasnya sendiri dan mengarang cerita perampokan untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain."
    },
    // Soal 63
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar hotel dengan luka tusuk. Pintu kamar terkunci dari dalam, dan kunci ada di meja. Jendela kamar tertutup rapat. Detektif menemukan bahwa kunci kamar itu memiliki sidik jari yang tidak cocok dengan korban. Apa kesimpulannya?",
        options: [
            "Kunci itu milik kamar lain.",
            "Sidik jari yang tidak cocok pada kunci menunjukkan orang lain menyentuh kunci itu—kemungkinan pembunuh mengunci pintu dari dalam, meninggalkan kunci di meja, lalu keluar melalui jalur lain sebelum korban ditemukan.",
            "Korban menggunakan sarung tangan.",
            "Sidik jari korban terhapus."
        ],
        correctIndex: 1,
        explanation: "Kunci yang seharusnya hanya dipegang korban memiliki sidik jari orang lain—ini petunjuk kuat bahwa orang lain terlibat. Pembunuh mungkin mengunci pintu dari dalam, meletakkan kunci di meja, lalu keluar melalui jalur lain. Sidik jarinya tertinggal karena lupa menghapusnya."
    },
    // Soal 64
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah restoran. Korban tewas di meja makannya dengan racun di gelas wine. Rekaman CCTV menunjukkan pelayan menuangkan wine ke gelas korban, tetapi tidak ada orang lain yang menyentuh gelas itu. Detektif menemukan bahwa pelayan membawa botol wine dari belakang dan sempat menghilang dari pandangan kamera selama 30 detik. Apa kesimpulannya?",
        options: [
            "Pelayan meracun wine di botol saat berada di belakang—30 detik cukup untuk memasukkan racun ke botol.",
            "Korban meracuni dirinya sendiri.",
            "Racun sudah ada di gelas sebelum pelayan menuang.",
            "Pelayan tidak bersalah karena tidak menyentuh gelas."
        ],
        correctIndex: 0,
        explanation: "Pelayan sempat menghilang dari pandangan kamera selama 30 detik—waktu yang cukup untuk memasukkan racun ke dalam botol wine. Meskipun ia tidak menyentuh gelas korban, racun bisa masuk melalui wine yang dituangkan. Ini menjelaskan bagaimana racun bisa masuk tanpa ada yang menyentuh gelas secara langsung."
    },
    // Soal 65
    {
        caseText: "Seorang pria ditemukan tewas di kebunnya dengan luka di kepala. Di dekatnya ada cangkul yang berlumuran darah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur cangkul. Detektif melihat cangkul itu dalam posisi tegak bersandar di pohon, bukan tergeletak di tanah. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan cangkul berdiri sendiri.",
            "Cangkul yang bersandar tegak di pohon tidak mungkin menyebabkan luka akibat jatuh—jika korban jatuh menimpa cangkul, cangkul akan tergeletak. Posisi tegak menunjukkan cangkul sengaja diletakkan setelah digunakan untuk membunuh.",
            "Cangkul itu sudah lama bersandar di pohon.",
            "Angin membuat cangkul berdiri."
        ],
        correctIndex: 1,
        explanation: "Cangkul yang bersandar tegak di pohon tidak konsisten dengan cerita jatuh menimpa cangkul—jika korban jatuh menimpanya, cangkul akan tergeletak di tanah. Posisi tegak menunjukkan cangkul sengaja diletakkan kembali setelah digunakan untuk membunuh. Istri korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 66
    {
        caseText: "Seorang wanita mengaku rumahnya dibobol dan perhiasannya hilang. Ia mengatakan pencuri masuk melalui pintu belakang yang tidak terkunci. Detektif melihat pintu belakang dalam keadaan berdebu dan tidak ada jejak tangan di gagang pintunya. Apa kesimpulannya?",
        options: [
            "Pencuri memakai sarung tangan.",
            "Gagang pintu berdebu tanpa jejak tangan menunjukkan pintu itu tidak pernah dibuka—kemungkinan wanita itu berbohong tentang jalur masuk pencuri, atau perhiasan hilang karena sebab lain.",
            "Pencuri masuk melalui jendela.",
            "Debu menutupi jejak tangan."
        ],
        correctIndex: 1,
        explanation: "Gagang pintu yang berdebu tebal tanpa jejak tangan menunjukkan pintu itu sudah lama tidak dibuka. Jika pencuri benar-benar masuk melalui pintu itu, debu akan terganggu dan ada jejak tangan. Ini membuktikan cerita wanita itu palsu—perhiasan hilang karena sebab lain, bukan pembobolan."
    },
    // Soal 67
    {
        caseText: "Seorang pria ditemukan tewas di dalam lift yang macet di antara lantai 5 dan 6. Lift memiliki tombol darurat yang berfungsi. Detektif melihat tombol darurat tidak ditekan, dan korban memegang ponsel dengan layar mati. Apa kesimpulannya?",
        options: [
            "Korban tidak tahu ada tombol darurat.",
            "Korban tidak menekan tombol darurat dan ponselnya mati menunjukkan ia mungkin sudah tewas sebelum lift macet—kemungkinan tubuhnya dimasukkan ke lift, lalu lift dihentikan secara sengaja.",
            "Korban panik dan lupa menekan tombol.",
            "Tombol darurat rusak."
        ],
        correctIndex: 1,
        explanation: "Lift macet dengan tombol darurat berfungsi tetapi tidak ditekan, dan ponsel korban mati—ini anomali. Orang yang terjebak di lift pasti akan menekan tombol darurat atau menelepon. Kemungkinan korban sudah tewas sebelum lift macet, lalu tubuhnya dimasukkan dan lift dihentikan secara sengaja. Ini pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 68
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang guru. Korban ditemukan tewas di kelas dengan luka di kepala. Di papan tulis ada tulisan 'PR' yang ditulis dengan kapur. Detektif melihat tulisan itu sangat rapi dan tidak ada bekas kapur di tangan korban. Apa kesimpulannya?",
        options: [
            "Korban menulis PR sebelum dibunuh.",
            "Tulisan rapi tanpa bekas kapur di tangan korban menunjukkan tulisan itu dibuat oleh orang lain—kemungkinan pembunuh menulis 'PR' untuk mengalihkan penyelidikan atau menciptakan kesan korban sedang mengajar.",
            "Murid menulis PR di papan.",
            "Kapur tidak meninggalkan bekas."
        ],
        correctIndex: 1,
        explanation: "Menulis di papan tulis dengan kapur pasti meninggalkan bekas kapur di tangan. Tidak adanya bekas kapur di tangan korban menunjukkan ia tidak menulis tulisan itu. Tulisan 'PR' yang rapi kemungkinan dibuat pembunuh untuk menciptakan kesan korban sedang mengajar saat dibunuh—atau sebagai pengalih perhatian."
    },
    // Soal 69
    {
        caseText: "Seorang pria melaporkan bahwa istrinya hilang saat berbelanja di mal. Ia mengatakan istrinya masuk ke toilet dan tidak keluar lagi. Detektif memeriksa rekaman CCTV toilet dan melihat istri pria itu keluar dari toilet melalui pintu lain dan berjalan ke parkiran bersama seorang pria. Apa kesimpulannya?",
        options: [
            "Istri pria itu diculik.",
            "Istri pria itu pergi secara sukarela dengan pria lain—rekaman CCTV membuktikan ia tidak hilang secara misterius, melainkan sengaja pergi; suami mungkin tidak mengetahui atau menyembunyikan fakta ini.",
            "Pria di parkiran adalah petugas mal.",
            "CCTV toilet rusak."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan istri pria itu keluar dari toilet melalui pintu lain dan berjalan ke parkiran bersama pria lain—ini membuktikan ia pergi secara sukarela, bukan diculik atau hilang secara misterius. Suami mungkin tidak tahu atau sengaja melaporkan hilang untuk menutupi fakta bahwa istrinya pergi."
    },
    // Soal 70
    {
        caseText: "Seorang pria ditemukan tewas di ruang tamu dengan luka tembak. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Namun detektif melihat luka tembak berada di bagian belakang kepala. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menembak belakang kepalanya.",
            "Luka tembak di belakang kepala tidak konsisten dengan bunuh diri—orang tidak bisa menembak belakang kepalanya sendiri dengan pistol. Kemungkinan pistol diletakkan di tangan korban dan bubuk mesiu ditaburkan untuk menyamarkan pembunuhan.",
            "Korban menembak dirinya sendiri dengan cermin.",
            "Pistol itu pistol khusus."
        ],
        correctIndex: 1,
        explanation: "Luka tembak di belakang kepala sangat tidak konsisten dengan bunuh diri—seseorang tidak bisa mengarahkan pistol ke belakang kepalanya sendiri dan menembak. Bubuk mesiu di tangan bisa ditaburkan oleh pembunuh. Ini adalah pembunuhan yang disamarkan sebagai bunuh diri dengan bukti forensik palsu."
    },
    // Soal 71
    {
        caseText: "Seorang wanita melaporkan bahwa tasnya dicuri di kafe. Ia mengatakan tasnya diletakkan di kursi sebelahnya, dan pelaku mengambilnya saat ia pergi ke toilet. Detektif melihat rekaman CCTV dan menemukan bahwa wanita itu tidak pernah pergi ke toilet selama berada di kafe. Apa kesimpulannya?",
        options: [
            "Wanita itu lupa ia sudah ke toilet.",
            "Wanita itu berbohong—CCTV membuktikan ia tidak pernah ke toilet, sehingga cerita tas dicuri saat ia ke toilet adalah palsu; kemungkinan ia mengarang cerita untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain.",
            "CCTV kafe rusak.",
            "Pelaku mengambil tas saat wanita itu tertidur."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV membuktikan wanita itu tidak pernah pergi ke toilet selama di kafe. Jika ia tidak pernah ke toilet, cerita tas dicuri saat ia ke toilet adalah bohong. Kemungkinan ia mengarang cerita pencurian untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain."
    },
    // Soal 72
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di pinggir jalan. Mesin mobil mati, dan kunci ada di lubang kontak. Detektif melihat kaca jendela mobil dalam keadaan tertutup rapat, tetapi ada bekas cakar di bagian dalam kaca. Apa kesimpulannya?",
        options: [
            "Korban mencoba keluar karena terkunci.",
            "Bekas cakar di bagian dalam kaca menunjukkan korban mencoba keluar—kemungkinan ia terkunci di dalam mobil tanpa sirkulasi udara dan meninggal karena sesak napas; ini bisa kecelakaan atau pembunuhan dengan sengaja mengunci korban.",
            "Korban membunuh diri dengan menutup semua jendela.",
            "Bekas cakar berasal dari hewan."
        ],
        correctIndex: 1,
        explanation: "Bekas cakar di bagian dalam kaca menunjukkan korban panik dan mencoba keluar. Dengan jendela tertutup rapat dan mesin mati, tidak ada sirkulasi udara—korban bisa meninggal karena sesak napas atau panas. Ini bisa kecelakaan (korban tidak sengaja terkunci) atau pembunuhan (sengaja dikunci). Detektif perlu memeriksa apakah pintu terkunci dari luar."
    },
    // Soal 73
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang nelayan. Korban ditemukan tewas di perahunya dengan luka di kepala. Di perahu ada jaring ikan yang masih basah dan ikan-ikan segar. Detektif melihat luka di kepala korban berada di bagian depan, dan ada serpihan kayu di luka tersebut. Apa kesimpulannya?",
        options: [
            "Korban terbentur dayung saat memancing.",
            "Serpihan kayu di luka menunjukkan korban dipukul dengan benda kayu—kemungkinan dayung atau gagang jaring; luka di depan menunjukkan korban menghadap penyerang saat dipukul, bukan terjatuh.",
            "Korban terpeleset dan kepalanya membentur perahu.",
            "Ikan-ikan menyerang korban."
        ],
        correctIndex: 1,
        explanation: "Serpihan kayu di luka menunjukkan senjata yang digunakan adalah benda kayu. Luka di bagian depan kepala menunjukkan korban menghadap penyerang saat dipukul—berbeda dengan kecelakaan jatuh yang biasanya melukai bagian belakang atau samping kepala. Ini mengarah pada pembunuhan dengan senjata tumpul kayu."
    },
    // Soal 74
    {
        caseText: "Seorang pria mengaku istrinya bunuh diri dengan menggantung diri di garasi. Detektif melihat tali yang digunakan sangat pendek dan tidak ada benda untuk dipijak di dekatnya. Korban memiliki tinggi 160 cm, sementara tali tergantung di ketinggian 250 cm. Apa kesimpulannya?",
        options: [
            "Korban melompat dari tangga.",
            "Tali yang tergantung di ketinggian 250 cm dengan korban setinggi 160 cm dan tanpa benda pijakan tidak memungkinkan korban menggantung diri sendiri—kemungkinan ia dibunuh lalu digantung untuk menyamarkan pembunuhan sebagai bunuh diri.",
            "Korban memang tinggi.",
            "Tali itu terlalu pendek untuk bunuh diri."
        ],
        correctIndex: 1,
        explanation: "Korban setinggi 160 cm tidak mungkin mencapai tali di ketinggian 250 cm tanpa benda pijakan. Jika tidak ada benda pijakan di dekatnya, korban tidak bisa menggantung diri sendiri. Kemungkinan ia dibunuh terlebih dahulu, lalu tubuhnya digantung oleh pembunuh untuk menciptakan kesan bunuh diri."
    },
    // Soal 75
    {
        caseText: "Seorang wanita ditemukan tewas di kamar tidurnya dengan luka di pergelangan tangan. Di lantai ada pisau dan genangan darah. Suaminya mengatakan istrinya bunuh diri. Detektif melihat luka di pergelangan tangan korban berada di sisi kanan, sementara korban adalah orang kidal. Apa kesimpulannya?",
        options: [
            "Orang kidal bisa melukai pergelangan tangan kanannya.",
            "Luka di pergelangan tangan kanan pada orang kidal tidak konsisten dengan bunuh diri—orang kidal cenderung melukai pergelangan tangan kiri atau menggunakan tangan kiri untuk melukai tangan kanan dengan posisi canggung; ini mengarah pada pembunuhan.",
            "Korban menggunakan tangan kanan karena panik.",
            "Luka di pergelangan tangan kanan selalu disebabkan pembunuhan."
        ],
        correctIndex: 1,
        explanation: "Orang kidal menggunakan tangan kiri sebagai tangan dominan. Untuk bunuh diri dengan mengiris pergelangan tangan, orang kidal biasanya melukai pergelangan tangan kiri atau menggunakan tangan kiri untuk mengiris tangan kanan dengan posisi canggung. Luka di pergelangan tangan kanan yang rapi pada orang kidal mengarah pada pembunuhan—kemungkinan pelaku tidak mengetahui korban kidal."
    },
    // Soal 76
    {
        caseText: "Seorang pria ditemukan tewas di kantornya dengan luka tembak. Di mejanya ada surat bunuh diri yang ditulis tangan. Detektif membandingkan tulisan tangan di surat dengan tulisan tangan korban di dokumen kantor dan menemukan perbedaan signifikan dalam bentuk huruf. Apa kesimpulannya?",
        options: [
            "Korban menulis surat dalam keadaan emosional sehingga tulisannya berubah.",
            "Perbedaan signifikan dalam bentuk huruf menunjukkan surat itu bukan ditulis korban—kemungkinan pembunuh menulis surat bunuh diri palsu untuk menyamarkan pembunuhan.",
            "Tulisan tangan bisa berubah seiring waktu.",
            "Dokumen kantor ditulis oleh orang lain."
        ],
        correctIndex: 1,
        explanation: "Perbedaan signifikan dalam bentuk huruf antara surat bunuh diri dan dokumen korban menunjukkan surat itu ditulis oleh orang lain. Meskipun tulisan tangan bisa berubah karena emosi, perbedaan bentuk huruf yang mendasar menunjukkan penulis yang berbeda. Ini adalah surat bunuh diri palsu."
    },
    // Soal 77
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian di sebuah museum. Sebuah patung mahal hilang dari ruang pameran. Detektif melihat pintu ruang pameran tidak terkunci, dan alarm tidak berbunyi. Kaca vitrin patung pecah, tetapi pecahannya hanya ada di dalam vitrin. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca dari luar vitrin.",
            "Pecahan kaca hanya di dalam vitrin menunjukkan kaca dipecahkan dari dalam—kemungkinan pelaku adalah orang dalam museum yang memiliki akses, atau pencurian dilakukan dengan cara lain (misalnya patung diganti dengan replika).",
            "Alarm museum rusak.",
            "Pencuri memakai sarung tangan."
        ],
        correctIndex: 1,
        explanation: "Kaca yang dipecahkan dari luar akan menyebarkan pecahan ke dalam vitrin. Jika pecahan hanya ada di dalam, kaca dipecahkan dari dalam vitrin—sesuatu yang tidak mungkin dilakukan pencuri dari luar. Kemungkinan pelaku adalah orang dalam museum yang memiliki akses ke vitrin, atau patung diganti dengan replika sebelumnya."
    },
    // Soal 78
    {
        caseText: "Seorang pria melaporkan bahwa dompetnya dicuri di pasar. Ia mengatakan dompetnya diambil dari tas belanja yang ia bawa. Detektif melihat tas belanja pria itu dalam keadaan tertutup rapat dan tidak ada tanda-tanda dibuka paksa. Apa kesimpulannya?",
        options: [
            "Pencuri membuka tas dengan hati-hati.",
            "Tas yang tertutup rapat tanpa tanda dibuka paksa menunjukkan dompet tidak dicuri dari tas—kemungkinan pria itu kehilangan dompet karena sebab lain (misalnya jatuh) dan mengarang cerita pencopetan.",
            "Pencuri memakai gunting untuk membuka tas.",
            "Tas belanja itu memang mudah dibuka."
        ],
        correctIndex: 1,
        explanation: "Jika dompet dicuri dari tas belanja, tas itu harus dibuka—dan pembukaan paksa akan meninggalkan tanda. Tas yang tertutup rapat tanpa tanda dibuka menunjukkan dompet tidak diambil dari tas. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan untuk menutupi kelalaiannya."
    },
    // Soal 79
    {
        caseText: "Seorang wanita ditemukan tewas di dapur dengan luka di kepala. Di dekatnya ada wajan besi yang berlumuran darah. Suaminya mengatakan istrinya terjatuh dan kepalanya membentur wajan. Detektif melihat wajan itu berada di rak atas, bukan di lantai. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan wajan jatuh dari rak.",
            "Wajan yang berada di rak atas tidak konsisten dengan cerita jatuh menimpa wajan—jika korban jatuh dan kepalanya membentur wajan, wajan harusnya berada di lantai. Posisi wajan di rak atas menunjukkan wajan sengaja dikembalikan setelah digunakan untuk membunuh.",
            "Wajan itu sudah lama di rak atas.",
            "Korban memanjat rak untuk mengambil wajan."
        ],
        correctIndex: 1,
        explanation: "Wajan besi yang berada di rak atas tidak mungkin menyebabkan luka akibat jatuh—jika korban jatuh menimpanya, wajan akan berada di lantai. Posisi wajan di rak atas menunjukkan wajan sengaja dikembalikan ke tempatnya setelah digunakan untuk membunuh. Suami korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 80
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka di kepala. Pintu kamar terkunci dari dalam, dan kunci ada di saku korban. Detektif menemukan bahwa jendela kamar memiliki kasa yang terpasang dari luar, bukan dari dalam. Apa kesimpulannya?",
        options: [
            "Pembunuh masuk melalui jendela dan memasang kasa dari luar.",
            "Kasa yang terpasang dari luar menunjukkan jendela bisa dibuka dari luar—pembunuh masuk melalui jendela, membunuh korban, lalu keluar dan memasang kasa kembali; pintu terkunci dari dalam sengaja dibuat untuk menyesatkan.",
            "Korban bunuh diri.",
            "Kasa jendela sudah lama terpasang dari luar."
        ],
        correctIndex: 1,
        explanation: "Kasa jendela yang seharusnya dipasang dari dalam tetapi terpasang dari luar menunjukkan jendela itu dibuka dari luar. Pembunuh masuk melalui jendela, membunuh korban, lalu keluar dan memasang kasa kembali—mungkin terburu-buru sehingga salah sisi. Pintu yang terkunci dari dalam adalah pengalih perhatian."
    },
	// Soal 81
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di halte bus. Ia mengatakan perampok merampas gelang emasnya. Detektif melihat pergelangan tangan wanita itu memiliki bekas tekanan yang sangat rapi dan melingkar, seperti bekas gelang yang terlalu ketat, bukan bekas tarikan paksa. Apa kesimpulannya?",
        options: [
            "Gelang itu memang ketat sehingga mudah lepas.",
            "Bekas tekanan rapi dan melingkar menunjukkan gelang tidak ditarik paksa—kemungkinan wanita itu melepas gelangnya sendiri dan mengarang cerita perampokan; bekas itu berasal dari gelang yang memang ketat.",
            "Perampok menggunakan alat khusus.",
            "Kulit wanita itu mudah berbekas."
        ],
        correctIndex: 1,
        explanation: "Gelang yang dirampas paksa akan meninggalkan bekas luka gores, lecet, atau memar yang tidak beraturan. Bekas tekanan rapi dan melingkar menunjukkan gelang itu dipakai dalam waktu lama (terlalu ketat) dan dilepas dengan hati-hati. Kemungkinan wanita itu melepas gelangnya sendiri dan mengarang cerita perampokan."
    },
    // Soal 82
    {
        caseText: "Seorang pria ditemukan tewas di dalam gudang dengan luka di kepala. Di dekatnya ada palu berlumuran darah. Pintu gudang terkunci dari luar, dan kunci dipegang oleh tetangga korban. Tetangga mengatakan ia tidak membuka gudang sejak seminggu lalu. Detektif melihat jendela gudang memiliki engsel yang berkarat dan tidak bisa dibuka. Apa kesimpulannya?",
        options: [
            "Tetangga berbohong—ia yang membunuh korban.",
            "Korban sudah berada di dalam gudang sebelum pintu dikunci—kemungkinan ia masuk sendiri, lalu tetangga mengunci gudang tanpa mengetahui korban masih di dalam; kematian bisa disebabkan kecelakaan atau pembunuhan oleh orang lain yang memiliki akses.",
            "Korban bunuh diri dengan palu.",
            "Palu itu jatuh dari rak."
        ],
        correctIndex: 1,
        explanation: "Pintu terkunci dari luar dan jendela berkarat yang tidak bisa dibuka menunjukkan tidak ada jalan masuk bagi pembunuh dari luar. Kemungkinan korban sudah berada di dalam gudang sebelum pintu dikunci. Tetangga mungkin mengunci gudang tanpa mengetahui korban masih di dalam. Detektif perlu menyelidiki siapa yang memiliki akses lain ke gudang."
    },
    // Soal 83
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang dokter. Korban ditemukan tewas di ruang praktiknya dengan luka di leher. Di mejanya ada jarum suntik dan botol obat. Detektif melihat luka di leher korban adalah luka sayat, bukan luka tusuk jarum. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menyayat lehernya.",
            "Luka sayat yang tidak sesuai dengan jarum suntik menunjukkan senjata yang digunakan bukan jarum—kemungkinan pembunuh menggunakan benda tajam lain dan meninggalkan jarum suntik sebagai pengalih perhatian.",
            "Jarum suntik itu rusak.",
            "Korban bereaksi alergi terhadap obat."
        ],
        correctIndex: 1,
        explanation: "Luka sayat di leher tidak mungkin disebabkan oleh jarum suntik—jarum hanya meninggalkan luka tusuk kecil. Keberadaan jarum suntik dan botol obat di meja kemungkinan adalah pengalih perhatian yang sengaja diletakkan pembunuh untuk mengarahkan penyelidikan pada overdosis atau kesalahan medis, padahal korban dibunuh dengan benda tajam."
    },
    // Soal 84
    {
        caseText: "Seorang pria mengaku istrinya tenggelam di bak mandi. Ia mengatakan istrinya tidak sengaja terpeleset saat mandi. Detektif melihat air di bak mandi sudah dingin dan tidak ada cipratan air di lantai kamar mandi. Apa kesimpulannya?",
        options: [
            "Korban memang terpeleset dan tenggelam.",
            "Air dingin dan tidak ada cipratan air menunjukkan korban tidak bergerak di bak—kemungkinan ia sudah tewas sebelum diletakkan di bak mandi; ini pembunuhan yang disamarkan sebagai kecelakaan.",
            "Korban mandi dengan air dingin.",
            "Bak mandi bocor."
        ],
        correctIndex: 1,
        explanation: "Orang yang tenggelam saat mandi akan mencipratkan air ke lantai karena gerakan panik. Tidak adanya cipratan air dan air yang sudah dingin menunjukkan korban tidak bergerak di bak—ia sudah tewas sebelum diletakkan di sana. Suami korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 85
    {
        caseText: "Seorang wanita ditemukan tewas di ruang tamu dengan luka di kepala. Di dekatnya ada patung kecil yang berlumuran darah. Pintu rumah terkunci dari dalam, tetapi jendela ruang tamu terbuka. Detektif melihat patung itu berada di posisi yang tidak wajar—di atas meja, bukan di lantai. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan patung menimpanya.",
            "Patung yang berada di atas meja menunjukkan patung itu sengaja diletakkan kembali setelah digunakan untuk membunuh—atau pembunuh menggunakan patung lalu meletakkannya di meja untuk menciptakan kesan kecelakaan.",
            "Patung itu jatuh dari rak.",
            "Angin dari jendela membuat patung bergeser."
        ],
        correctIndex: 1,
        explanation: "Jika korban dipukul dengan patung, patung itu akan berada di lantai dekat tubuh korban. Patung yang berada di atas meja menunjukkan seseorang sengaja meletakkannya kembali setelah digunakan—sesuatu yang tidak akan dilakukan korban yang terjatuh. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 86
    {
        caseText: "Seorang pria melaporkan bahwa motornya hilang dari parkiran mal. Ia mengatakan motor diparkir di zona A dan ia menemukannya hilang setelah berbelanja 2 jam. Detektif memeriksa rekaman CCTV parkiran dan melihat pria itu tiba dengan berjalan kaki, bukan mengendarai motor. Apa kesimpulannya?",
        options: [
            "Pria itu parkir motor di zona lain.",
            "Pria itu berbohong—CCTV membuktikan ia tiba dengan berjalan kaki, bukan mengendarai motor; berarti tidak ada motor yang hilang, dan ia mengarang cerita untuk mengklaim asuransi atau menutupi hal lain.",
            "Motor pria itu ditarik derek.",
            "CCTV parkiran rusak."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di mal dengan berjalan kaki, bukan mengendarai motor. Jika ia tidak membawa motor, tidak mungkin ada motor yang hilang dari parkiran. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan motor untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 87
    {
        caseText: "Seorang pria ditemukan tewas di kamar tidurnya dengan luka tembak di dada. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Detektif melihat luka tembak memiliki pola kontak jarak dekat, tetapi posisi pistol di tangan korban terbalik (pegangan menghadap ke atas). Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan posisi tangan yang tidak wajar.",
            "Pola kontak jarak dekat konsisten dengan bunuh diri, tetapi posisi pistol yang terbalik menunjukkan pistol itu diletakkan di tangan korban setelah ditembak—kemungkinan pembunuh menembak dari jarak dekat lalu meletakkan pistol di tangan korban.",
            "Pistol itu rusak.",
            "Korban menembak dirinya sendiri dengan cara yang tidak biasa."
        ],
        correctIndex: 1,
        explanation: "Pola kontak jarak dekat menunjukkan pistol ditembakkan dari jarak sangat dekat—bisa bunuh diri atau pembunuhan. Namun posisi pistol yang terbalik di tangan korban tidak wajar untuk bunuh diri—orang yang menembak dirinya sendiri akan memegang pistol dengan posisi normal. Posisi terbalik menunjukkan pistol diletakkan oleh orang lain setelah korban ditembak."
    },
    // Soal 88
    {
        caseText: "Seorang wanita mengaku dirampok di dalam lift. Ia mengatakan perampok merampas tasnya dan kabur saat pintu lift terbuka. Detektif memeriksa rekaman CCTV lift dan melihat wanita itu masuk lift sendirian dan keluar dengan tas yang masih dibawanya. Apa kesimpulannya?",
        options: [
            "Perampok bersembunyi di dalam lift.",
            "Wanita itu berbohong—CCTV membuktikan ia masuk dan keluar lift sendirian dengan tas masih dibawanya; tidak ada perampokan yang terjadi, dan ia mengarang cerita untuk menutupi kehilangan karena sebab lain.",
            "CCTV lift rusak.",
            "Perampok memakai seragam petugas."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV lift menunjukkan wanita itu masuk dan keluar sendirian dengan tas masih dibawanya. Tidak ada perampok, tidak ada perampasan. Wanita itu berbohong—kemungkinan ia kehilangan uang atau barang karena sebab lain dan mengarang cerita perampokan untuk menutupinya."
    },
    // Soal 89
    {
        caseText: "Seorang pria ditemukan tewas di kebun dengan luka di kepala. Di dekatnya ada batu besar berlumuran darah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur batu. Detektif melihat batu itu berada di posisi yang tidak wajar—di atas tanah berumput, tetapi tidak ada bekas tekanan atau lubang di tanah di bawahnya. Apa kesimpulannya?",
        options: [
            "Batu itu memang sudah ada di sana.",
            "Tidak adanya bekas tekanan di tanah menunjukkan batu itu tidak berada di sana saat korban jatuh—kemungkinan batu dipindahkan ke dekat korban setelah digunakan untuk membunuh; ini pembunuhan yang disamarkan sebagai kecelakaan.",
            "Rumput menyerap tekanan batu.",
            "Batu itu ringan."
        ],
        correctIndex: 1,
        explanation: "Batu besar yang berada di tanah berumput seharusnya meninggalkan bekas tekanan atau lubang di tanah karena beratnya. Tidak adanya bekas tekanan menunjukkan batu itu baru dipindahkan ke sana—kemungkinan digunakan untuk membunuh korban di tempat lain, lalu diletakkan di dekat tubuh untuk menciptakan kesan kecelakaan."
    },
    // Soal 90
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang pedagang. Korban ditemukan tewas di tokonya dengan luka tusuk. Pintu toko terkunci dari dalam, dan kunci ada di tangan korban. Detektif melihat luka tusuk korban berada di punggung. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menusuk punggungnya sendiri.",
            "Luka tusuk di punggung tidak konsisten dengan bunuh diri—korban tidak mungkin menusuk punggungnya sendiri; kemungkinan pembunuh menyerang dari belakang, lalu meletakkan kunci di tangan korban untuk menciptakan kesan korban mengunci diri dari dalam.",
            "Korban terjatuh menimpa pisau.",
            "Pisau itu jatuh dari rak."
        ],
        correctIndex: 1,
        explanation: "Luka tusuk di punggung sangat tidak konsisten dengan bunuh diri—seseorang tidak bisa menusuk punggungnya sendiri dengan cukup dalam untuk menyebabkan kematian. Kemungkinan pembunuh menyerang korban dari belakang, lalu meletakkan kunci di tangan korban dan mengunci pintu dari dalam sebelum kabur melalui jalur lain."
    },
    // Soal 91
    {
        caseText: "Seorang pria mengaku istrinya meninggal karena serangan jantung. Detektif melihat tubuh korban memiliki bintik-bintik merah di wajah dan leher, serta mata yang merah. Apa yang paling mungkin terjadi?",
        options: [
            "Korban memang meninggal karena serangan jantung.",
            "Bintik merah di wajah dan leher serta mata merah adalah tanda sesak napas atau dicekik—kemungkinan korban dicekik, bukan meninggal karena serangan jantung; suami berbohong.",
            "Korban alergi makanan.",
            "Korban terkena penyakit kulit."
        ],
        correctIndex: 1,
        explanation: "Bintik merah di wajah dan leher (petechiae) serta mata merah adalah tanda klasik sesak napas atau dicekik—pembuluh darah kecil pecah karena tekanan. Ini tidak konsisten dengan serangan jantung. Kemungkinan korban dicekik oleh suaminya, lalu suami mengarang cerita serangan jantung."
    },
    // Soal 92
    {
        caseText: "Seorang wanita ditemukan tewas di kamar mandi hotel. Ia ditemukan dengan luka di pergelangan tangan dan air di bak mandi berwarna merah. Polisi menduga bunuh diri. Detektif melihat luka di pergelangan tangan korban berada di sisi yang tidak wajar untuk bunuh diri—luka berada di bagian dalam pergelangan tangan kanan, sementara korban tidak kidal. Apa kesimpulannya?",
        options: [
            "Korban kidal sehingga melukai tangan kanannya.",
            "Luka di bagian dalam pergelangan tangan kanan pada orang tidak kidal tidak konsisten dengan bunuh diri—orang tidak kidal biasanya melukai pergelangan tangan kiri atau menggunakan tangan kiri untuk melukai tangan kanan dengan posisi canggung; ini mengarah pada pembunuhan.",
            "Luka bisa berada di mana saja.",
            "Korban menggunakan tangan kanan karena panik."
        ],
        correctIndex: 1,
        explanation: "Orang tidak kidal menggunakan tangan kanan sebagai tangan dominan. Untuk bunuh diri dengan mengiris pergelangan tangan, orang tidak kidal biasanya melukai pergelangan tangan kiri atau menggunakan tangan kanan untuk mengiris tangan kiri. Luka di pergelangan tangan kanan yang tidak wajar mengarah pada pembunuhan—kemungkinan pelaku tidak mengetahui korban tidak kidal."
    },
    // Soal 93
    {
        caseText: "Seorang pria ditemukan tewas di ruang kerja dengan luka tembak. Di mejanya ada surat bunuh diri yang ditulis tangan. Detektif memeriksa surat itu dan menemukan bahwa tinta di surat masih basah saat mayat ditemukan, padahal korban sudah tewas berjam-jam. Apa kesimpulannya?",
        options: [
            "Korban menulis surat sebelum meninggal.",
            "Tinta yang masih basah padahal korban sudah tewas berjam-jam menunjukkan surat itu baru ditulis—kemungkinan pembunuh menulis surat bunuh diri palsu setelah membunuh korban; ini pembunuhan yang disamarkan sebagai bunuh diri.",
            "Tinta berkualitas buruk.",
            "Surat itu ditulis di tempat lain."
        ],
        correctIndex: 1,
        explanation: "Tinta yang masih basah saat mayat ditemukan (berjam-jam setelah kematian) menunjukkan surat itu baru ditulis—tidak mungkin oleh korban yang sudah tewas. Kemungkinan pembunuh menulis surat bunuh diri palsu setelah membunuh korban untuk mengalihkan penyelidikan. Ini adalah bukti kuat pembunuhan yang disamarkan."
    },
    // Soal 94
    {
        caseText: "Seorang wanita melaporkan bahwa ia diserang di taman pada malam hari. Ia mengatakan penyerang memukul kepalanya dari belakang dan merampas tasnya. Detektif melihat luka di kepala wanita itu berada di bagian depan, dan tasnya masih tergantung di bahunya. Apa kesimpulannya?",
        options: [
            "Penyerang memukul dari depan.",
            "Luka di depan tidak konsisten dengan serangan dari belakang, dan tas yang masih tergantung menunjukkan tidak ada perampasan—kemungkinan wanita itu berbohong tentang penyerangan dan perampokan; ia mungkin terluka karena sebab lain.",
            "Penyerang memukul dua kali.",
            "Tas wanita itu tidak berharga."
        ],
        correctIndex: 1,
        explanation: "Jika benar diserang dari belakang, luka harusnya berada di belakang kepala. Luka di depan tidak konsisten. Ditambah tas yang masih tergantung di bahu—jika benar dirampas, tas tidak akan ada di sana. Kombinasi kedua fakta ini menunjukkan wanita itu berbohong tentang penyerangan dan perampokan."
    },
    // Soal 95
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di garasi rumahnya. Mesin mobil menyala dan pintu garasi tertutup rapat. Polisi menduga bunuh diri karena menghirup karbon monoksida. Detektif melihat jendela mobil sedikit terbuka dan kunci mobil masih di kantong korban. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan sengaja menghirup gas.",
            "Jendela sedikit terbuka menunjukkan korban berusaha bertahan hidup—orang yang sengaja bunuh diri tidak akan membuka jendela; kemungkinan seseorang menyalakan mesin lalu meninggalkan korban, atau korban tidak sengaja terpapar gas.",
            "Karbon monoksida tidak berbahaya jika jendela terbuka.",
            "Kunci di kantong membuktikan korban tidak masuk mobil."
        ],
        correctIndex: 1,
        explanation: "Orang yang sengaja bunuh diri dengan gas karbon monoksida akan menutup rapat semua celah agar gas terperangkap. Jendela yang sedikit terbuka menunjukkan korban berusaha bertahan hidup atau tidak berniat mati. Kemungkinan seseorang menyalakan mesin dan meninggalkan korban, atau ini kecelakaan. Detektif curiga pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 96
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar pendingin (cold storage) sebuah restoran. Pintu kamar pendingin terkunci dari luar, dan hanya manajer restoran yang memiliki kunci. Suhu di dalam sangat dingin. Detektif melihat korban tidak mengenakan jaket tebal, padahal ia bekerja di restoran itu dan tahu betul suhu kamar pendingin. Apa kesimpulannya?",
        options: [
            "Korban lupa membawa jaketnya.",
            "Korban tidak mengenakan jaket tebal menunjukkan ia tidak masuk ke kamar pendingin dengan sukarela—kemungkinan ia dipaksa atau sudah tewas sebelum dimasukkan; manajer yang memegang kunci perlu diperiksa.",
            "Jaket korban hilang dicuri.",
            "Kamar pendingin tidak terlalu dingin."
        ],
        correctIndex: 1,
        explanation: "Pekerja restoran yang tahu suhu kamar pendingin sangat dingin pasti akan mengenakan jaket tebal jika masuk dengan sukarela. Korban yang tidak mengenakan jaket menunjukkan ia tidak masuk dengan kesadaran sendiri—kemungkinan dipaksa atau sudah tewas sebelum dimasukkan. Manajer sebagai satu-satunya pemegang kunci menjadi tersangka utama."
    },
    // Soal 97
    {
        caseText: "Seorang pria melaporkan bahwa sepedanya dicuri dari depan toko tempat ia bekerja. Ia mengatakan sepeda diparkir di rak sepeda dan ia menemukannya hilang saat pulang kerja. Detektif melihat rak sepeda di depan toko memiliki CCTV, dan rekaman menunjukkan pria itu tiba di toko dengan berjalan kaki pagi itu. Apa kesimpulannya?",
        options: [
            "Sepeda pria itu diparkir di tempat lain.",
            "Pria itu berbohong—CCTV membuktikan ia tiba dengan berjalan kaki, bukan bersepeda; berarti tidak ada sepeda yang hilang, dan ia mengarang cerita untuk mengklaim asuransi atau menutupi hal lain.",
            "Sepeda pria itu dicuri sebelum ia tiba.",
            "CCTV toko rusak."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di toko dengan berjalan kaki pada pagi hari. Jika ia tidak membawa sepeda, tidak mungkin ada sepeda yang dicuri dari rak. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan sepeda untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 98
    {
        caseText: "Seorang wanita ditemukan tewas di dalam perpustakaan pribadinya. Ia duduk di kursi dengan buku terbuka di pangkuan. Tidak ada tanda kekerasan. Detektif melihat halaman buku yang terbuka dalam keadaan bersih dan tidak terlipat, sementara korban memiliki kebiasaan melipat sudut halaman buku yang sedang dibaca. Apa kesimpulannya?",
        options: [
            "Korban belum mulai membaca buku itu.",
            "Buku yang terbuka tanpa lipatan sudut halaman tidak konsisten dengan kebiasaan korban—kemungkinan buku itu sengaja dibuka dan diletakkan di pangkuan korban setelah ia tewas, untuk menciptakan kesan ia sedang membaca.",
            "Korban membaca buku baru.",
            "Korban membaca dengan hati-hati."
        ],
        correctIndex: 1,
        explanation: "Korban memiliki kebiasaan melipat sudut halaman buku yang sedang dibaca. Buku yang terbuka tanpa lipatan sudut halaman menunjukkan buku itu belum lama dibuka—atau sengaja dibuka dan diletakkan di pangkuan korban setelah ia tewas. Ini adalah upaya menciptakan kesan korban sedang membaca saat meninggal, padahal kematiannya mungkin disebabkan hal lain (misalnya diracun)."
    },
    // Soal 99
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pria di kantornya. Korban ditemukan tewas dengan luka di kepala. Di mejanya ada dua cangkir kopi yang masih hangat, padahal korban biasanya minum kopi sendirian. Detektif melihat cangkir kedua memiliki lipstik di bibirnya. Apa kesimpulannya?",
        options: [
            "Korban minum kopi dengan rekannya.",
            "Cangkir kedua dengan lipstik menunjukkan ada perempuan yang bersama korban sebelum kematiannya—kemungkinan perempuan itu adalah pembunuh atau saksi kunci; ia perlu diperiksa karena berada di TKP saat kejadian.",
            "Lipstik itu milik korban.",
            "Cangkir itu sudah lama di meja."
        ],
        correctIndex: 1,
        explanation: "Dua cangkir kopi hangat menunjukkan korban tidak minum sendirian—ada orang lain bersamanya. Cangkir dengan lipstik menunjukkan tamu itu perempuan. Karena korban tewas dengan luka di kepala dan perempuan itu berada di TKP saat kejadian, ia adalah saksi kunci atau pelaku. Detektif perlu menyelidiki identitas dan keterlibatannya."
    },
    // Soal 100
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar hotel. Tidak ada luka pada tubuhnya. Detektif melihat jam tangan korban berhenti pada pukul 02.15, dan jam dinding kamar juga berhenti pada pukul 02.15. Namun rekaman CCTV hotel menunjukkan korban masuk ke kamar pukul 23.00 dan tidak keluar lagi. Detektif curiga jam-jam itu sengaja dihentikan. Mengapa?",
        options: [
            "Karena jam tangan dan jam dinding tidak mungkin berhenti bersamaan.",
            "Karena jam yang berhenti bersamaan pada waktu yang sama terlalu kebetulan—kemungkinan pembunuh sengaja menghentikan jam untuk menciptakan waktu kematian palsu, padahal korban tewas pada waktu lain setelah pukul 23.00.",
            "Karena korban suka mengoleksi jam.",
            "Karena CCTV hotel salah mencatat waktu."
        ],
        correctIndex: 1,
        explanation: "Dua jam berbeda (jam tangan dan jam dinding) yang berhenti pada waktu yang sama persis (02.15) terlalu kebetulan untuk terjadi secara alami. Kemungkinan pembunuh sengaja menghentikan kedua jam untuk menciptakan waktu kematian palsu—misalnya untuk memberi alibi bagi seseorang. CCTV membuktikan korban masih hidup dan masuk kamar pukul 23.00, sehingga waktu 02.15 adalah rekayasa."
    }
];
