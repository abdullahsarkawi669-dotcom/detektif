const questions = [
    // Soal 1
    {
        caseText: "Dua orang memesan minuman es racun yang identik di sebuah bar. Orang pertama meminumnya dengan sangat cepat dalam sekali teguk. Orang kedua duduk santai dan meminumnya perlahan. Tragisnya, orang kedua meninggal keracunan, sedangkan orang pertama sehat walafiat. Mengapa bisa demikian?",
        options: [
            "Orang pertama memiliki sistem imun tubuh yang sangat kebal terhadap semua jenis racun.",
            "Racunnya sengaja disembunyikan di dalam es batu yang disajikan di dalam minuman tersebut.",
            "Gelas milik orang kedua diam-diam ditukar oleh seseorang saat dia sedang lengah.",
            "Minuman itu sebenarnya sama sekali tidak beracun, ia mati karena serangan jantung."
        ],
        correctIndex: 1,
        explanation: "Racun tersebut sengaja dibekukan di dalam es batu. Karena orang pertama meminumnya dengan sangat cepat, es batunya belum sempat mencair dan melepaskan racun ke minumannya. Orang kedua minum perlahan, memberikan waktu bagi es untuk mencair dan meracuni minumannya."
    },
    // Soal 2
    {
        caseText: "Seorang pria ditemukan gantung diri di sebuah ruangan kosong dengan pintu yang terkunci rapat dari dalam. Tidak ada meja, kursi, atau benda apapun untuk dipanjat. Jendelanya tertutup rapat. Satu-satunya petunjuk di TKP hanyalah genangan air di bawah tubuhnya. Bagaimana dia melakukannya?",
        options: [
            "Atap ruangan tersebut ternyata bisa diturunkan secara mekanis dari luar ruangan.",
            "Seseorang membunuhnya terlebih dahulu lalu keluar melalui ventilasi udara di atap.",
            "Dia memanjat menggunakan tali penyangga yang kemudian dilepasnya setelah tergantung.",
            "Dia berdiri di atas balok es besar yang kemudian mencair sepenuhnya sebelum ditemukan."
        ],
        correctIndex: 3,
        explanation: "Pria tersebut membawa sebuah balok es besar ke dalam ruangan dan menggunakannya sebagai pijakan. Dia mengalungkan tali, berdiri di atas es, dan menunggu. Karena ruangan bersuhu normal, es tersebut perlahan mencair habis, meninggalkannya tergantung dengan genangan air di bawahnya."
    },
    // Soal 3
    {
        caseText: "Seorang detektif menanyai 3 tersangka atas kasus pencurian rumah yang terjadi pada hari Minggu pagi. Tukang kebun beralasan, 'Saya sedang di halaman belakang menyiram bunga.' Koki beralasan, 'Saya sedang di dapur memasak sarapan.' Pembantu beralasan, 'Saya sedang di depan rumah mengambil surat kiriman pos di kotak pos.' Siapakah pembohongnya?",
        options: [
            "Tukang kebun, karena menyiram bunga pada hari Minggu pagi adalah hal yang dilarang.",
            "Koki, karena memasak sarapan pada hari Minggu pagi tidak pernah dilakukan siapa pun.",
            "Pembantu, karena kantor pos tidak mengantar surat pada hari Minggu pagi.",
            "Tidak ada, karena semuanya memiliki alasan yang masuk akal dan berkata jujur."
        ],
        correctIndex: 2,
        explanation: "Pembohongnya adalah Pembantu. Kejadian tersebut terjadi pada hari Minggu pagi. Kantor pos tidak melakukan pengiriman surat pada hari Minggu. Oleh karena itu, alasannya sedang mengambil surat adalah kebohongan yang membuktikan kesalahannya."
    },
    // Soal 4
    {
        caseText: "Terdapat 3 buah saklar lampu di luar sebuah ruangan tertutup. Di dalam ruangan tersebut hanya terdapat 1 lampu pijar. Anda tidak bisa melihat ke dalam. Anda hanya diizinkan masuk ke ruangan itu 1 kali saja. Bagaimana cara pasti untuk mengetahui saklar mana yang terhubung ke lampu tersebut?",
        options: [
            "Nyalakan semua saklar secara bersamaan, lalu masuk dan periksa lampu mana yang menyala.",
            "Bongkar panel saklar untuk melihat jalur kabel yang terhubung ke lampu di dalam.",
            "Nyalakan saklar 1 (biarkan sebentar lalu matikan), nyalakan saklar 2, lalu masuk.",
            "Tekan tombolnya berulang kali secara acak untuk memicu korsleting pada lampu."
        ],
        correctIndex: 2,
        explanation: "Nyalakan saklar 1 selama sekitar 10 menit (agar bola lampu menjadi panas), lalu matikan. Segera nyalakan saklar 2 dan masuklah ke ruangan. Jika lampu menyala, berarti saklar 2. Jika lampu mati tapi saat disentuh terasa panas, berarti saklar 1. Jika lampu mati dan dingin, berarti saklar 3."
    },
    // Soal 5
    {
        caseText: "Seorang wanita ditemukan tewas di dalam kamar hotel yang terkunci dari dalam. Jendela kamar tertutup rapat dan tidak ada lubang ventilasi yang cukup besar untuk dilalui manusia. Di lantai dekat tubuhnya terdapat pecahan kaca dan genangan air. Tidak ada tanda-tanda perkelahian. Sang detektif menyimpulkan kematian itu bukan bunuh diri. Bagaimana pembunuhnya bisa masuk dan keluar?",
        options: [
            "Pembunuh bersembunyi di bawah tempat tidur dan kabur saat pintu dibuka petugas.",
            "Pembunuh memakai kunci cadangan yang dicuri dari resepsionis hotel tersebut.",
            "Pembunuh menembak dari luar melalui celah pintu yang longgar dan tidak terkunci.",
            "Pembunuh memasukkan racun melalui pecahan kaca jendela yang dipecahkan dari luar."
        ],
        correctIndex: 1,
        explanation: "Pembunuh adalah staf hotel yang memiliki akses ke kunci cadangan. Ia masuk, meracuni korban, lalu mengunci kembali pintu dari dalam menggunakan kunci cadangan sebelum keluar—sehingga kamar tampak terkunci rapat dari dalam. Pecahan kaca dan genangan air hanyalah pengalih perhatian."
    },
    // Soal 6
    {
        caseText: "Seorang pria kaya ditemukan tewas di ruang kerjanya dengan luka tembak di kepala. Di tangannya tergenggam pistol, dan di mejanya ada surat wasiat. Polisi hampir menyimpulkan bunuh diri, tetapi seorang detektif melihat ada yang janggal: di lantai ruangan itu tidak ada darah sama sekali, padahal luka tembak di kepala seharusnya mengeluarkan banyak darah. Apa yang sebenarnya terjadi?",
        options: [
            "Pria itu ditembak di tempat lain, lalu tubuhnya dipindahkan dan pistol diletakkan di tangannya.",
            "Pria itu bunuh diri dengan pistol berperedam suara sehingga darah tidak keluar sama sekali.",
            "Pria itu tewas karena serangan jantung, dan pistol hanya kebetulan ada di tangannya.",
            "Lantai ruangan dilapisi karpet tebal yang menyerap seluruh darah yang keluar."
        ],
        correctIndex: 0,
        explanation: "Tidak adanya darah di lantai adalah petunjuk kunci. Jika benar bunuh diri di tempat itu, darah pasti menetes ke lantai. Pria tersebut dibunuh di lokasi lain, lalu jenazahnya dipindahkan ke ruang kerja, pistol diletakkan di tangannya, dan surat wasiat disiapkan untuk membuat kesan bunuh diri."
    },
    // Soal 7
    {
        caseText: "Pada suatu malam musim dingin, sebuah rumah terbakar. Pemilik rumah selamat, tetapi ia mengklaim api berasal dari korsleting listrik di ruang tamu. Seorang penyelidik menemukan bahwa jendela-jendela rumah dalam keadaan terbuka lebar padahal suhu di luar sangat dingin, dan tidak ada penghangat ruangan yang menyala. Ia langsung mencurigai pemilik rumah. Mengapa?",
        options: [
            "Karena setiap orang yang selamat dari kebakaran pasti selalu berbohong kepada petugas.",
            "Karena jendela terbuka lebar di musim dingin tanpa penghangat tidak wajar dan sengaja agar api cepat membesar.",
            "Karena korsleting listrik tidak mungkin terjadi pada malam hari di musim dingin.",
            "Karena pemilik rumah tidak segera menelepon pemadam kebakaran saat melihat api."
        ],
        correctIndex: 1,
        explanation: "Di malam musim dingin, tidak ada alasan logis membuka semua jendela lebar-lebar tanpa penghangat. Jendela terbuka mempercepat pasokan oksigen sehingga api membesar. Ini menunjukkan api sengaja dinyalakan dan pemilik membuka jendela untuk mempercepat penyebaran api, lalu mengarang alasan korsleting."
    },
    // Soal 8
    {
        caseText: "Tiga orang berada di sebuah pulau terpencil: seorang nelayan, seorang turis, dan seorang penjaga mercusuar. Pada suatu pagi, mayat turis ditemukan di pantai dengan luka di kepala. Nelayan berkata, 'Saya semalaman menangkap ikan di laut.' Penjaga mercusuar berkata, 'Saya semalaman menyalakan lampu mercusuar seperti biasa.' Siapa yang berbohong, dan mengapa?",
        options: [
            "Nelayan, karena tidak mungkin ada orang yang menangkap ikan pada malam hari.",
            "Turis, karena ia sebenarnya sengaja mengakhiri hidupnya sendiri di pantai.",
            "Penjaga mercusuar, karena mercusuar modern menyala otomatis tanpa perlu dinyalakan manual.",
            "Tidak ada yang berbohong, karena kematian turis murni disebabkan kecelakaan."
        ],
        correctIndex: 2,
        explanation: "Penjaga mercusuar berbohong. Mercusuar modern menggunakan sistem lampu yang menyala otomatis atau cukup dinyalakan sekali lalu berputar dengan mekanisme sendiri sepanjang malam. Tidak ada kebutuhan menyalakan manual sepanjang malam. Alibi ini justru mengungkap kebohongannya."
    },
    // Soal 9
    {
        caseText: "Seorang pria ditemukan tewas di tengah padang pasir. Di sekitarnya tidak ada jejak kaki sama sekali, tidak ada kendaraan, dan tidak ada sumber air. Ia hanya mengenakan pakaian renang. Bagaimana ia bisa sampai di sana?",
        options: [
            "Ia berjalan kaki dari kota terdekat lalu jejak kakinya tertiup angin gurun.",
            "Ia dijatuhkan dari pesawat yang terbang di atas padang pasir tersebut.",
            "Ia tersesat saat berkemah di dekat padang pasir bersama rombongan.",
            "Ia adalah korban pembunuhan yang tubuhnya dibuang dari atas helikopter."
        ],
        correctIndex: 1,
        explanation: "Pakaian renang adalah petunjuk kunci. Pria itu adalah penerjun payung atau penumpang pesawat yang jatuh/dijatuhkan dari ketinggian. Tidak adanya jejak kaki di pasir membuktikan ia tidak berjalan ke sana—ia jatuh dari atas. Angin juga menghapus jejak benturan, menyisakan tubuh tanpa jejak."
    },
    // Soal 10
    {
        caseText: "Seorang detektif menemukan mayat di sebuah kamar dengan AC menyala sangat dingin. Tubuh korban sudah membeku, tetapi jam tangannya masih berdetak normal. Dokter menyimpulkan korban tewas sekitar 12 jam lalu. Detektif langsung tahu ada yang salah dengan kesimpulan itu. Apa yang ia curigai?",
        options: [
            "Jam tangan korban adalah jam otomatis yang berhenti jika tidak digerakkan.",
            "AC yang menyala sangat dingin memperlambat pembekuan sehingga waktu kematian tidak akurat.",
            "Jam tangan korban sengaja diputar ulang oleh pembunuh untuk mengacaukan waktu.",
            "Korban sebenarnya masih hidup saat ditemukan, hanya saja tubuhnya sudah membeku."
        ],
        correctIndex: 1,
        explanation: "Suhu ruangan yang sangat dingin (AC menyala maksimal) memperlambat proses pendinginan dan pembekuan tubuh, sehingga perkiraan waktu kematian berdasarkan suhu tubuh menjadi tidak akurat. Detektif curiga pembunuh sengaja menyalakan AC untuk mengacaukan perkiraan waktu kematian dan membuat alibi."
    },
    // Soal 11
    {
        caseText: "Seorang pria tewas di dalam lift yang macet. Pintu lift ditemukan terbuka paksa dari dalam, tetapi korban tidak terluka. Di tangan korban ada potongan kertas bertuliskan 'SOS'. Lift tersebut berada di antara lantai 2 dan 3. Apa penyebab kematiannya?",
        options: [
            "Ia terjatuh dari ketinggian saat mencoba keluar dari lift yang macet tersebut.",
            "Ia kekurangan oksigen karena lift macet terlalu lama dan ventilasinya terbatas.",
            "Ia tersengat listrik saat memaksa membuka pintu lift dengan tangan kosong.",
            "Ia dibunuh oleh seseorang yang ikut masuk ke dalam lift sebelumnya."
        ],
        correctIndex: 1,
        explanation: "Lift yang macet di antara dua lantai dengan pintu terbuka paksa menunjukkan korban panik dan berusaha keluar. Namun penyebab kematian tanpa luka adalah kekurangan oksigen (sesak napas) karena lift macet terlalu lama dan ventilasi terbatas. Tulisan 'SOS' adalah upaya terakhirnya meminta bantuan."
    },
    // Soal 12
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di jalan sepi pada malam hari. Ia mengatakan perampok merampas tasnya dan melarikan diri. Polisi melihat tas wanita itu masih tergantung di bahunya, dan dompetnya masih utuh di dalam tas. Apa yang sebenarnya terjadi?",
        options: [
            "Wanita itu berbohong dan mengarang cerita perampokan untuk menutupi masalah lain.",
            "Perampok gagal merampas tas dan hanya mengambil barang lain yang ada di dalamnya.",
            "Wanita itu lupa bahwa ia sudah mengambil kembali tasnya dari tangan perampok.",
            "Perampok adalah teman wanita itu yang sengaja mengembalikan tasnya kepadanya."
        ],
        correctIndex: 0,
        explanation: "Jika benar dirampok dan tasnya dirampas, tas itu seharusnya tidak lagi berada di bahunya. Fakta bahwa tas masih tergantung dan dompet utuh membuktikan tidak pernah terjadi perampokan. Wanita itu berbohong, mungkin untuk mengalihkan perhatian dari masalah keuangan atau alasan lain."
    },
    // Soal 13
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobilnya yang terparkir di garasi tertutup. Mesin mobil masih menyala dan pintu garasi tertutup rapat. Tidak ada luka pada tubuhnya. Polisi menyimpulkan bunuh diri karena menghirup gas karbon monoksida. Namun detektif menemukan kunci mobil masih di kantong korban dan jendela mobil sedikit terbuka. Mengapa detektif meragukan bunuh diri?",
        options: [
            "Karena gas karbon monoksida tidak berbahaya jika jendela mobil sedikit terbuka.",
            "Karena orang yang bunuh diri tidak akan membuka jendela; ini menunjukkan ia berusaha bertahan.",
            "Karena kunci mobil di kantong membuktikan korban tidak sempat masuk ke dalam mobil.",
            "Karena mobil tidak mungkin bisa menyala di dalam garasi yang tertutup rapat."
        ],
        correctIndex: 1,
        explanation: "Orang yang sengaja bunuh diri dengan gas karbon monoksida tidak akan membuka jendela—justru ia menutup rapat semua celah agar gas terperangkap. Jendela sedikit terbuka menunjukkan korban mungkin tidak berniat mati, atau seseorang menyalakan mesin lalu meninggalkannya. Ini mengarah pada kemungkinan pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 14
    {
        caseText: "Seorang pria mengaku menemukan mayat tetangganya di ruang tamu pada pukul 08.00 pagi. Ia berkata, 'Saya melihat pintu rumahnya terbuka, jadi saya masuk dan menemukan tubuhnya.' Detektif curiga pada pria itu karena satu detail: korban memiliki anjing penjaga yang sangat agresif terhadap orang asing, tetapi anjing itu tenang saat polisi datang. Apa yang sebenarnya terjadi?",
        options: [
            "Anjing itu sudah mati jauh sebelum korban tewas, sehingga tidak bisa menyerang.",
            "Anjing itu mengenal pria tersebut, berarti pria itu sudah sering masuk ke rumah korban.",
            "Anjing itu ditenangkan oleh polisi terlebih dahulu sebelum pria itu datang.",
            "Anjing itu sebenarnya tidak agresif terhadap siapa pun yang datang ke rumah."
        ],
        correctIndex: 1,
        explanation: "Anjing penjaga yang agresif terhadap orang asing seharusnya menggonggong atau menyerang pria yang mengaku baru pertama kali masuk. Fakta bahwa anjing itu tenang menunjukkan anjing mengenal pria tersebut dengan baik—artinya pria itu sudah sering masuk ke rumah korban. Ini membuktikan ia bukan sekadar penemu, melainkan orang yang terlibat."
    },
    // Soal 15
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian lukisan di sebuah galeri seni. Lukisan mahal hilang dari dinding, tetapi tidak ada tanda-tanda pembobolan pintu atau jendela. Kamera CCTV mati selama 30 menit sebelum pencurian. Siapa pelaku yang paling mungkin?",
        options: [
            "Pencuri profesional yang memotong aliran listrik galeri dari luar gedung.",
            "Seseorang dari dalam galeri yang tahu cara mematikan CCTV dan punya akses kunci.",
            "Pengunjung yang bersembunyi di dalam galeri sebelum jam tutup tiba.",
            "Petugas kebersihan yang datang setiap malam untuk membersihkan galeri."
        ],
        correctIndex: 1,
        explanation: "Tidak adanya tanda pembobolan dan CCTV yang mati tepat sebelum pencurian menunjukkan pelaku memiliki akses internal—mengetahui lokasi kamera, cara mematikannya, dan memiliki kunci. Pelaku dari dalam galeri (staf/penjaga) adalah yang paling mungkin, karena pencuri luar akan meninggalkan jejak pembobolan."
    },
    // Soal 16
    {
        caseText: "Seorang pria ditemukan tewas di kamar mandi dengan luka di pergelangan tangan. Di lantai ada pisau dan genangan darah. Polisi menyimpulkan bunuh diri. Namun detektif melihat bahwa luka di pergelangan tangan korban adalah luka horizontal, bukan vertikal. Mengapa ini penting?",
        options: [
            "Luka horizontal pada pergelangan tangan selalu disebabkan oleh tindakan pembunuhan.",
            "Luka bunuh diri biasanya vertikal, sedangkan luka horizontal lebih sering akibat serangan orang lain.",
            "Luka horizontal membuktikan bahwa korban sebenarnya adalah orang yang kidal.",
            "Luka horizontal tidak mungkin mengeluarkan darah sebanyak luka vertikal."
        ],
        correctIndex: 1,
        explanation: "Dalam kasus luka pergelangan tangan, bunuh diri umumnya menghasilkan luka vertikal (sejajar dengan arah lengan) karena korban mengiris ke arah tubuhnya sendiri. Luka horizontal (melintang) lebih konsisten dengan serangan orang lain yang menggorok dari samping. Detektif curiga ini pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 17
    {
        caseText: "Seorang wanita mengaku suaminya menghilang setelah keluar rumah untuk membeli rokok pada malam hari. Ia melaporkan ke polisi keesokan paginya. Detektif menemukan bahwa istri korban baru saja mencairkan asuransi jiwa suaminya minggu lalu. Namun bukti ini belum cukup. Petunjuk lain apa yang paling menguatkan kecurigaan?",
        options: [
            "Istri korban terlihat menangis tersedu-sedu saat melapor ke kantor polisi.",
            "Di rumah korban, semua foto suami masih dipajang dengan sangat rapi.",
            "Istri korban tidak pernah mencari suaminya ke rumah sakit atau kantor polisi.",
            "Istri korban diketahui memiliki seorang pacar yang tinggal di kota lain."
        ],
        correctIndex: 2,
        explanation: "Orang yang benar-benar kehilangan pasangan biasanya akan mencari ke mana-mana—rumah sakit, kantor polisi, keluarga—sebelum melapor. Fakta bahwa istri langsung melapor tanpa upaya pencarian menunjukkan ia sudah tahu suaminya tidak akan kembali. Ini, ditambah pencairan asuransi, memperkuat kecurigaan pembunuhan berencana."
    },
    // Soal 18
    {
        caseText: "Seorang pria tewas di dalam perpustakaan pribadinya. Ia ditemukan duduk di kursi dengan buku terbuka di pangkuan dan secangkir kopi di meja. Tidak ada tanda kekerasan. Detektif curiga ia diracun. Petunjuk apa yang paling mendukung kecurigaan itu?",
        options: [
            "Buku yang sedang dibacanya adalah buku yang membahas tentang berbagai jenis racun.",
            "Kopi di cangkirnya masih hangat padahal ia sudah tewas berjam-jam sebelumnya.",
            "Tidak ada sidik jari di cangkir kopi selain sidik jari milik korban sendiri.",
            "Jendela perpustakaan pribadinya dalam keadaan terbuka lebar sejak pagi."
        ],
        correctIndex: 1,
        explanation: "Kopi yang masih hangat padahal korban sudah tewas berjam-jam adalah anomali besar. Ini menunjukkan seseorang baru saja menuangkan kopi panas ke cangkir—kemungkinan untuk menutupi bahwa kopi asli (yang beracun) sudah diminum korban. Pelaku berusaha membuat seolah korban baru saja minum kopi biasa."
    },
    // Soal 19
    {
        caseText: "Seorang pria ditemukan tewas di lantai dapur dengan pecahan gelas di sekitarnya. Ia memegang sobekan kain di tangan. Istrinya mengatakan ia terjatuh dan kepalanya terbentur meja. Detektif melihat sobekan kain di tangan korban cocok dengan sobekan di ujung celemek istri. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan secara tidak sengaja mencengkeram celemek istrinya.",
            "Istri terlibat; korban mencengkeram celemeknya saat perkelahian lalu ia berbohong.",
            "Celemek itu milik orang lain yang kebetulan lewat di depan rumah tersebut.",
            "Sobekan kain di tangan korban sama sekali tidak ada hubungannya dengan kematian."
        ],
        correctIndex: 1,
        explanation: "Sobekan kain di tangan korban yang cocok dengan celemek istri adalah bukti fisik kuat. Ini menunjukkan korban sempat mencengkeram celemek istrinya saat terjadi konflik—sesuatu yang tidak akan terjadi pada kecelakaan jatuh biasa. Istri berbohong untuk menutupi perkelahian yang berujung kematian."
    },
    // Soal 20
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pemilik toko emas. Mayatnya ditemukan di ruang belakang toko dengan luka tusuk. Pintu depan toko terkunci, tetapi jendela kecil di belakang terbuka. Di lantai ada jejak lumpur yang mengarah ke jendela. Namun detektif melihat lumpur itu sudah kering dan retak, sementara jendela baru saja dibuka. Apa yang sebenarnya terjadi?",
        options: [
            "Pembunuh masuk lewat jendela belakang dan lupa menutupnya kembali saat kabur.",
            "Jejak lumpur sengaja dibuat untuk menyesatkan; pembunuh masuk lewat pintu depan.",
            "Pembunuh datang dua kali ke toko, pertama untuk mengintai lalu untuk membunuh.",
            "Lumpur di lantai berasal dari sepatu korban sendiri yang baru pulang dari luar."
        ],
        correctIndex: 1,
        explanation: "Lumpur yang sudah kering dan retak menunjukkan jejak itu dibuat jauh sebelum kejadian, sementara jendela baru saja dibuka. Ini adalah upaya mengalihkan penyelidikan ke arah pencurian dari luar. Pembunuh sebenarnya orang yang memiliki akses masuk normal (pintu depan), lalu sengaja membuat jejak palsu di jendela."
    },
	    // Soal 21
    {
        caseText: "Seorang pria melaporkan bahwa istrinya hilang saat berenang di pantai. Ia mengatakan istrinya terseret arus. Detektif melihat pria itu masih mengenakan jam tangan mahal dan sepatu pantai yang bersih, sementara ia mengaku ikut berenang menyelamatkan istrinya. Apa yang mencurigakan?",
        options: [
            "Pria itu sama sekali tidak bisa berenang, sehingga mustahil ia ikut terjun ke laut.",
            "Jika ia benar ikut berenang, jam tangan mahal dan sepatu pantainya tidak mungkin tetap bersih.",
            "Jam tangan mahal yang dipakainya tidak tahan air laut sehingga pasti sudah rusak.",
            "Sepatu pantai tidak boleh dipakai saat berenang di laut karena akan terlepas."
        ],
        correctIndex: 1,
        explanation: "Pria itu mengaku ikut berenang menyelamatkan istrinya, tetapi jam tangan mahal masih terpasang dan sepatu pantainya bersih. Orang yang benar-benar terjun ke laut untuk menyelamatkan seseorang tidak akan sempat memikirkan jam tangan mahal, dan sepatunya pasti basah/berpasir. Ini menunjukkan ia tidak pernah masuk air—alibinya palsu."
    },
    // Soal 22
    {
        caseText: "Seorang pria ditemukan tewas di dalam kantor yang pintunya terkunci dari luar. Satu-satunya kunci ada di kantong korban. Jendela kantor di lantai 10 tidak bisa dibuka. Bagaimana pembunuh bisa masuk dan keluar?",
        options: [
            "Pembunuh menggunakan pintu rahasia yang tersembunyi di balik lemari buku kantor.",
            "Pembunuh mengunci dari luar lalu memasukkan kunci ke kantong korban lewat celah pintu.",
            "Pembunuh memanjat dari lantai 9 melalui jendela yang tidak terkunci sama sekali.",
            "Korban bunuh diri dengan cara mengunci dirinya sendiri dari dalam ruangan tersebut."
        ],
        correctIndex: 1,
        explanation: "Jika pintu terkunci dari luar dan kunci ada di kantong korban, pelaku bisa saja mengunci pintu dari luar, lalu memasukkan kunci melalui celah bawah pintu ke dalam kantong korban yang sudah tergeletak dekat pintu. Ini menciptakan kesan kamar terkunci dari dalam padahal pelaku sudah keluar."
    },
    // Soal 23
    {
        caseText: "Seorang wanita ditemukan tewas di taman dengan luka di kepala. Di dekatnya ada batu besar berlumuran darah. Seorang pria mengaku melihat korban terjatuh dan kepalanya membentur batu. Namun detektif melihat darah di batu hanya ada di satu sisi, dan posisi batu jauh dari jalur setapak. Apa kesimpulannya?",
        options: [
            "Korban memang terjatuh dan secara tidak sengaja kepalanya membentur batu tersebut.",
            "Batu itu dipindahkan; darah di satu sisi menunjukkan batu diayunkan ke kepala korban.",
            "Batu itu sudah ada di sana sejak lama dan tidak ada hubungannya dengan kematian.",
            "Pria itu berbohong karena dialah yang memindahkan mayat korban ke lokasi itu."
        ],
        correctIndex: 1,
        explanation: "Jika korban jatuh dan kepalanya membentur batu, darah akan tersebar di area benturan dan batu berada di posisi tetap. Darah hanya di satu sisi batu menunjukkan batu itu diayunkan mengenai kepala korban—pola khas pembunuhan dengan senjata tumpul. Posisi batu yang jauh dari jalur setapak juga tidak masuk akal untuk kecelakaan jatuh."
    },
    // Soal 24
    {
        caseText: "Seorang pria mengaku dirampok di depan ATM. Ia mengatakan perampok mengambil uang yang baru saja ia tarik. Polisi memeriksa rekening korban dan menemukan tidak ada penarikan uang sama sekali pada hari itu. Apa yang sebenarnya terjadi?",
        options: [
            "Perampok mengambil uang korban sebelum korban sempat menariknya dari ATM.",
            "Pria itu berbohong; tidak ada penarikan berarti tidak ada uang yang bisa dirampok.",
            "Mesin ATM rusak sehingga penarikan uang korban tidak tercatat di rekening.",
            "Korban menarik uang dari ATM lain yang berada di luar kota pada hari itu."
        ],
        correctIndex: 1,
        explanation: "Jika korban benar-benar baru menarik uang lalu dirampok, harus ada catatan penarikan di rekeningnya. Fakta bahwa tidak ada penarikan sama sekali membuktikan cerita itu palsu. Pria itu mengarang perampokan, mungkin untuk menutupi kehilangan uang karena alasan lain atau untuk mengklaim asuransi."
    },
    // Soal 25
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar tidur dengan luka tembak di dada. Di tangannya ada pistol, tetapi tidak ada bubuk mesiu di tangan korban. Polisi menyimpulkan bunuh diri. Detektif menolak kesimpulan itu. Mengapa?",
        options: [
            "Karena pistol yang ada di tangan korban sama sekali tidak mungkin dipegang olehnya.",
            "Karena orang yang menembak dirinya sendiri pasti memiliki bekas bubuk mesiu di tangannya.",
            "Karena setiap luka tembak di bagian dada selalu disebabkan oleh tindakan pembunuhan.",
            "Karena korban diketahui tidak memiliki riwayat depresi atau masalah kejiwaan."
        ],
        correctIndex: 1,
        explanation: "Saat pistol ditembakkan dari jarak dekat, bubuk mesiu akan menempel di tangan penembak. Jika korban benar-benar bunuh diri, tangannya harus memiliki bekas bubuk mesiu. Tidak adanya bekas ini membuktikan pistol diletakkan di tangan korban setelah ia ditembak orang lain."
    },
    // Soal 26
    {
        caseText: "Seorang wanita melaporkan bahwa rumahnya dibobol malam tadi. Ia mengatakan pencuri masuk melalui jendela dapur yang pecah. Detektif melihat pecahan kaca jendela tersebar di luar rumah, bukan di dalam. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca dari dalam rumah lalu keluar melalui jendela tersebut.",
            "Kaca dipecahkan dari dalam; jika dari luar, pecahannya seharusnya jatuh ke dalam.",
            "Angin kencang meniup pecahan kaca jendela ke luar rumah pada malam itu.",
            "Pencuri memecahkan kaca dari luar menggunakan palu sehingga pecahannya keluar."
        ],
        correctIndex: 1,
        explanation: "Hukum fisika sederhana: jika kaca dipecahkan dari luar, pecahannya akan jatuh ke dalam ruangan. Fakta bahwa pecahan kaca tersebar di luar menunjukkan kaca dipecahkan dari dalam. Wanita itu mengarang cerita pembobolan—mungkin untuk mengklaim asuransi atau menutupi hal lain."
    },
    // Soal 27
    {
        caseText: "Seorang pria tewas di ruang tamunya. Ia ditemukan dengan luka di kepala dan jendela ruang tamu terbuka. Di lantai ada pot bunga yang pecah. Polisi menduga korban dibunuh dengan pot bunga. Namun detektif melihat pot bunga itu berada di dekat jendela, bukan di dekat tubuh korban. Apa yang sebenarnya terjadi?",
        options: [
            "Korban tersandung pot bunga dan jatuh hingga kepalanya terbentur lantai.",
            "Pot bunga sengaja diletakkan dekat jendela untuk menyesatkan ke arah perampokan.",
            "Pot bunga jatuh karena angin kencang yang masuk dari jendela yang terbuka.",
            "Korban bunuh diri dengan memukulkan pot bunga ke kepalanya sendiri."
        ],
        correctIndex: 1,
        explanation: "Jika pot bunga digunakan sebagai senjata, pot itu seharusnya berada dekat tubuh korban. Posisinya yang jauh di dekat jendela menunjukkan pot itu sengaja diletakkan di sana sebagai pengalih perhatian—untuk membuat polisi mengira ada perampok yang masuk lewat jendela dan menggunakan pot sebagai senjata."
    },
    // Soal 28
    {
        caseText: "Seorang pria mengaku istrinya tenggelam di kolam renang rumah mereka. Ia mengatakan istrinya tidak bisa berenang dan terpeleset. Detektif melihat kolam renang tersebut hanya memiliki kedalaman 1,2 meter di seluruh bagian, dan korban memiliki tinggi 170 cm. Apa kesimpulannya?",
        options: [
            "Korban bisa tenggelam di air dangkal jika ia panik dan tidak bisa berdiri.",
            "Kolam sedalam 1,2 meter tidak mungkin menenggelamkan orang dewasa setinggi 170 cm.",
            "Korban tenggelam karena kepalanya terbentur tepi kolam sebelum jatuh ke air.",
            "Kolam renang tersebut sebenarnya memiliki bagian yang jauh lebih dalam."
        ],
        correctIndex: 1,
        explanation: "Kolam dengan kedalaman seragam 1,2 meter memungkinkan orang dewasa setinggi 170 cm untuk berdiri dengan kepala di atas air. Tenggelam di kolam seperti itu sangat tidak mungkin kecuali ada faktor lain (pingsan, dilumpuhkan). Cerita suami patut dicurigai—kemungkinan ia menenggelamkan istrinya secara paksa."
    },
    // Soal 29
    {
        caseText: "Seorang detektif memeriksa TKP pembunuhan di sebuah apartemen. Ia menemukan bahwa korban tewas dengan luka tusuk, tetapi tidak ada sidik jari sama sekali di TKP—bahkan tidak ada sidik jari korban sendiri di barang-barang pribadinya. Apa yang paling mungkin terjadi?",
        options: [
            "Pembunuh memakai sarung tangan dan menyeka seluruh TKP untuk menghapus sidik jari.",
            "Korban baru pindah ke apartemen itu dan belum menyentuh barang-barangnya.",
            "TKP sudah dibersihkan oleh petugas kebersihan sebelum polisi datang.",
            "Sidik jari memang tidak selalu tertinggal pada permukaan barang tertentu."
        ],
        correctIndex: 0,
        explanation: "Tidak adanya sidik jari sama sekali—termasuk milik korban sendiri—sangat tidak wajar. Ini menunjukkan seseorang sengaja menyeka seluruh permukaan untuk menghapus sidik jari. Pembunuh yang menggunakan sarung tangan dan membersihkan TKP secara menyeluruh adalah penjelasan paling logis."
    },
    // Soal 30
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di tepi jurang. Mobil dalam keadaan netral, bukan di gigi parkir. Rem tangan tidak ditarik. Polisi menduga kecelakaan. Detektif curiga pembunuhan. Apa alasannya?",
        options: [
            "Karena mobil seharusnya tidak bisa berhenti sendiri di tepi jurang yang curam.",
            "Karena pengemudi yang berhenti di tepi jurang pasti menaruh gigi parkir atau rem tangan.",
            "Karena korban diketahui tidak memiliki SIM sehingga tidak mungkin mengemudi.",
            "Karena jurang tersebut terlalu dangkal untuk menyebabkan kematian fatal."
        ],
        correctIndex: 1,
        explanation: "Pengemudi yang berhenti di tepi jurang—apalagi dalam keadaan waspada—pasti menaruh gigi parkir atau menarik rem tangan. Mobil dalam posisi netral tanpa rem tangan menunjukkan mobil itu didorong atau dipindahkan oleh orang lain. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 31
    {
        caseText: "Seorang wanita mengaku suaminya terjatuh dari tangga dan tewas. Detektif melihat tubuh korban berada di dasar tangga dengan kepala di sisi dinding, kaki di sisi ruangan. Luka di kepala korban ada di bagian belakang. Apa yang mencurigakan?",
        options: [
            "Orang yang jatuh dari tangga biasanya melukai bagian depan kepala, bukan belakang.",
            "Posisi tubuh terbalik menunjukkan korban dipindahkan dan diletakkan di dasar tangga.",
            "Tidak ada yang mencurigakan karena jatuh dari tangga bisa berakhir posisi apa pun.",
            "Luka di bagian belakang kepala membuktikan bahwa korban sebenarnya bunuh diri."
        ],
        correctIndex: 1,
        explanation: "Orang yang jatuh dari tangga akan bergerak menjauhi tangga karena momentum—kepala cenderung berada di sisi ruangan, bukan menempel dinding. Posisi tubuh korban yang terbalik (kepala di dinding, kaki di ruangan) menunjukkan tubuhnya dipindahkan dan diletakkan di dasar tangga untuk menyamarkan pembunuhan sebagai kecelakaan."
    },
    // Soal 32
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah rumah. Ia menemukan bahwa korban tewas pada pukul 21.00. Tersangka utama memiliki alibi: ia mengaku sedang menonton pertandingan sepak bola di stadion dan menunjukkan tiket pertandingan yang dimulai pukul 20.00. Detektif menemukan tiket itu tidak memiliki sobekan penanda masuk. Apa artinya?",
        options: [
            "Tersangka membeli tiket tetapi tidak masuk stadion, sehingga alibinya palsu.",
            "Tiket pertandingan itu palsu dan dibuat sendiri oleh tersangka untuk alibi.",
            "Stadion sepak bola tidak memerlukan sobekan tiket saat penonton masuk.",
            "Tersangka menonton pertandingan dari luar stadion tanpa membeli tiket."
        ],
        correctIndex: 0,
        explanation: "Tiket pertandingan biasanya disobek saat penonton masuk stadion. Tiket yang masih utuh tanpa sobekan menunjukkan tersangka membeli tiket tetapi tidak pernah masuk. Ia menggunakan tiket sebagai alibi palsu, padahal ia tidak berada di stadion saat pembunuhan terjadi."
    },
    // Soal 33
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka tembak. Pintu kamar terkunci dari dalam, dan kunci cadangan hotel tidak pernah digunakan. Jendela kamar tidak bisa dibuka. Namun detektif menemukan lubang kecil di dinding yang tertutup lukisan. Apa yang sebenarnya terjadi?",
        options: [
            "Pembunuh menembak melalui lubang di dinding lalu menutupnya kembali dengan lukisan.",
            "Korban bunuh diri dengan menembak dirinya sendiri dari dalam kamar hotel.",
            "Pembunuh masuk melalui pintu sebelum korban mengunci dirinya dari dalam.",
            "Lubang kecil di dinding itu sudah ada sejak lama dan tidak terkait kasus."
        ],
        correctIndex: 0,
        explanation: "Lubang kecil di dinding yang tertutup lukisan adalah jalur peluru. Pembunuh menembak dari kamar sebelah melalui lubang tersebut, lalu lukisan diletakkan kembali untuk menutupi lubang. Ini menjelaskan bagaimana korban bisa tertembak meski kamar terkunci dari dalam."
    },
    // Soal 34
    {
        caseText: "Seorang wanita melaporkan bahwa dompetnya dicopet di pasar. Ia mengatakan pelaku adalah pria berbaju merah yang berlari ke arah utara. Polisi menemukan pria berbaju merah di lokasi, tetapi ia tidak membawa dompet. Namun detektif melihat pria itu mengenakan jaket tebal meskipun cuaca panas. Apa kesimpulannya?",
        options: [
            "Pria itu tidak bersalah karena tidak ditemukan dompet di tubuhnya.",
            "Pria itu menyembunyikan dompet di dalam jaket tebal yang dipakainya.",
            "Dompet sudah dibuang oleh pelaku lain sebelum polisi menangkapnya.",
            "Jaket tebal yang dipakai pria itu tidak ada hubungannya dengan kasus."
        ],
        correctIndex: 1,
        explanation: "Memakai jaket tebal di cuaca panas adalah hal yang tidak wajar dan mencurigakan. Kemungkinan besar pria itu menyembunyikan dompet curian di dalam jaketnya. Petugas perlu memeriksa bagian dalam jaket untuk menemukan barang bukti."
    },
    // Soal 35
    {
        caseText: "Seorang pria ditemukan tewas di kebun belakang rumahnya. Ia memegang gunting rumput dan ada luka di lehernya. Polisi menduga kecelakaan—korban tersandung dan gunting rumput melukainya. Detektif melihat luka di leher korban berupa goresan lurus yang sangat rapi. Apa kesimpulannya?",
        options: [
            "Gunting rumput memang bisa menyebabkan luka leher yang sangat rapi.",
            "Luka yang sangat rapi menunjukkan sayatan disengaja, bukan akibat kecelakaan.",
            "Korban bunuh diri dengan menggoreskan gunting rumput ke lehernya sendiri.",
            "Gunting rumput tidak berbahaya dan tidak mungkin melukai leher korban."
        ],
        correctIndex: 1,
        explanation: "Luka akibat kecelakaan (terjatuh pada gunting rumput) akan menghasilkan luka yang tidak beraturan, compang-camping, dan disertai memar. Luka goresan lurus yang sangat rapi menunjukkan sayatan yang disengaja dengan benda tajam. Detektif curiga ini pembunuhan yang disamarkan sebagai kecelakaan kerja."
    },
    // Soal 36
    {
        caseText: "Seorang pria mengaku istrinya bunuh diri dengan meminum racun. Ia menemukan tubuh istrinya di dapur dengan gelas berisi racun di sampingnya. Detektif melihat gelas tersebut berada di posisi yang tidak sesuai—pegangan gelas menghadap ke arah yang salah untuk orang yang minum sendiri. Apa artinya?",
        options: [
            "Gelas itu dipegang dengan tangan kiri korban yang memang tidak biasa.",
            "Gelas diletakkan orang lain; posisi pegangan tidak wajar untuk korban.",
            "Korban sebenarnya adalah orang kidal sehingga posisi gelas jadi aneh.",
            "Posisi pegangan gelas tidak penting dan tidak bisa dijadikan bukti."
        ],
        correctIndex: 1,
        explanation: "Orang yang minum dari gelas akan memegangnya dengan pegangan menghadap ke sisi yang nyaman. Posisi pegangan yang tidak wajar menunjukkan gelas itu diletakkan setelah korban tewas—bukti bahwa suami menempatkan gelas beracun di samping istri untuk menciptakan kesan bunuh diri."
    },
    // Soal 37
    {
        caseText: "Seorang detektif menyelidiki hilangnya seorang anak dari rumahnya. Ibu anak itu mengatakan anaknya hilang saat bermain di halaman. Detektif melihat sepatu anak itu masih rapi di dalam rumah, padahal ibu mengatakan anaknya bermain di halaman. Apa yang mencurigakan?",
        options: [
            "Anak itu memang biasa bermain di halaman tanpa memakai sepatu sama sekali.",
            "Sepatu rapi di dalam menunjukkan anak tidak pernah keluar bermain di halaman.",
            "Ibu anak itu berbohong tentang kondisi cuaca saat anaknya hilang.",
            "Sepatu yang ada di dalam rumah itu sebenarnya milik orang lain."
        ],
        correctIndex: 1,
        explanation: "Anak yang bermain di halaman pasti memakai sepatu dan sepatunya akan kotor. Fakta bahwa sepatu masih rapi di dalam rumah menunjukkan anak tidak pernah keluar bermain seperti yang dikatakan ibunya. Ini mengarah pada kemungkinan ibu menyembunyikan fakta sebenarnya tentang hilangnya anak."
    },
    // Soal 38
    {
        caseText: "Seorang pria ditemukan tewas di dalam gudang dengan luka di kepala. Pintu gudang terkunci dari luar, dan kunci hanya dipegang oleh pemilik gudang. Pemilik gudang mengaku tidak tahu apa-apa. Detektif menemukan bahwa jendela gudang memiliki kasa yang terpasang rapi dari dalam. Apa kesimpulannya?",
        options: [
            "Pembunuh masuk melalui jendela dan memasang kasa dari dalam gudang.",
            "Korban sudah berada di dalam gudang sebelum pintunya dikunci oleh pemilik.",
            "Korban bunuh diri di dalam gudang dengan cara memukul kepalanya sendiri.",
            "Pembunuh memakai kunci duplikat yang dibuat tanpa sepengetahuan pemilik."
        ],
        correctIndex: 1,
        explanation: "Karena pintu terkunci dari luar dan kasa jendela terpasang rapi dari dalam, tidak ada jalan masuk bagi pembunuh dari luar. Ini berarti korban sudah berada di dalam gudang sebelum pintu dikunci. Pemilik gudang—satu-satunya pemegang kunci—kemungkinan mengunci korban di dalam setelah terjadi konflik."
    },
    // Soal 39
    {
        caseText: "Seorang wanita melaporkan bahwa ia diserang di parkiran mal. Ia mengatakan penyerang memukul kepalanya dari belakang dan merampas tasnya. Detektif melihat luka di kepala wanita itu berada di bagian depan. Apa kesimpulannya?",
        options: [
            "Wanita itu berbohong; luka di depan tidak konsisten dengan serangan dari belakang.",
            "Penyerang memukul dari depan meskipun wanita itu mengaku diserang dari belakang.",
            "Wanita itu terjatuh sendiri dan kepalanya terbentur lantai parkiran mal.",
            "Luka di bagian depan kepala bisa terjadi meski diserang dari belakang."
        ],
        correctIndex: 0,
        explanation: "Jika benar diserang dari belakang, luka harusnya berada di belakang kepala. Luka di bagian depan tidak konsisten dengan cerita wanita tersebut. Kemungkinan ia terluka karena sebab lain (misalnya terjatuh) dan mengarang cerita penyerangan untuk menutupi hal lain."
    },
    // Soal 40
    {
        caseText: "Seorang pria tewas di kamar mandi hotel. Ia ditemukan dengan luka di pergelangan tangan dan air di bak mandi berwarna merah. Polisi menduga bunuh diri. Detektif melihat air di bak mandi sudah dingin dan tidak ada cipratan air di lantai. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri di dalam bak mandi dengan mengiris pergelangan tangannya.",
            "Tidak ada cipratan air menunjukkan korban sudah tewas sebelum diletakkan di bak.",
            "Korban tenggelam di bak mandi sebelum luka di pergelangan tangannya berdarah.",
            "Air bak mandi yang dingin membuktikan korban sudah tewas sejak lama sekali."
        ],
        correctIndex: 1,
        explanation: "Orang yang bunuh diri dengan mengiris pergelangan tangan di bak mandi akan bergerak dan mencipratkan air ke lantai. Tidak adanya cipratan air menunjukkan korban tidak bergerak di dalam bak—ia sudah tewas saat diletakkan di sana. Pembunuh mengisi bak dengan air dan darah untuk menciptakan kesan bunuh diri."
    },
	// Soal 41
    {
        caseText: "Seorang detektif menyelidiki kasus penipuan asuransi. Seorang pria mengklaim mobilnya dicuri, tetapi detektif menemukan bahwa odometer mobil tersebut menunjukkan penambahan 200 km sejak terakhir dilaporkan. Apa artinya?",
        options: [
            "Mobil itu digunakan oleh pencuri sebelum akhirnya ditinggalkan di suatu tempat.",
            "Pria itu berbohong; mobil tidak dicuri dan ia sendiri yang mengendarainya 200 km.",
            "Odometer mobil tersebut rusak sehingga angka yang tertera tidak bisa dipercaya.",
            "Pencuri mengendarai mobil itu ke tempat lain lalu mengembalikannya tanpa sepengetahuan."
        ],
        correctIndex: 1,
        explanation: "Jika mobil benar-benar dicuri, pencuri mungkin mengendarainya, tetapi pria itu melaporkan mobil hilang tanpa menyebutkan penggunaannya. Penambahan 200 km sejak laporan terakhir menunjukkan mobil digunakan setelah 'dicuri'—kemungkinan oleh pemiliknya sendiri. Ini mengarah pada penipuan asuransi."
    },
    // Soal 42
    {
        caseText: "Seorang pria ditemukan tewas di ruang kerja dengan luka tembak. Di mejanya ada surat bunuh diri yang diketik. Detektif curiga surat itu palsu. Petunjuk apa yang paling mendukung kecurigaan?",
        options: [
            "Surat itu sama sekali tidak ditandatangani oleh korban di bagian bawahnya.",
            "Surat diketik, bukan ditulis tangan, dan mesin tiknya tanpa sidik jari korban.",
            "Surat itu berisi kata-kata yang tidak baku dan tidak sesuai tata bahasa.",
            "Korban diketahui sama sekali tidak memiliki mesin tik di ruang kerjanya."
        ],
        correctIndex: 1,
        explanation: "Surat bunuh diri umumnya ditulis tangan karena dibuat dalam kondisi emosional. Surat yang diketik mencurigakan, apalagi jika mesin tiknya tidak memiliki sidik jari korban—berarti orang lain yang mengetik surat itu. Ini menunjukkan surat dibuat oleh pembunuh untuk menyamarkan pembunuhan sebagai bunuh diri."
    },
    // Soal 43
    {
        caseText: "Seorang wanita mengaku rumahnya kemalingan pada malam hari. Ia mengatakan pencuri masuk melalui pintu depan yang tidak terkunci dan mengambil perhiasan di lemari. Detektif melihat pintu depan dalam keadaan terkunci dari dalam, dan tidak ada tanda paksa. Apa kesimpulannya?",
        options: [
            "Pencuri mengunci pintu dari dalam sebelum kabur melalui jendela belakang.",
            "Wanita itu berbohong; pintu terkunci dari dalam berarti tidak ada orang luar masuk.",
            "Pencuri memiliki kunci duplikat yang dibuat tanpa sepengetahuan pemilik rumah.",
            "Pencuri masuk melalui jendela karena pintu depan ternyata terkunci rapat."
        ],
        correctIndex: 1,
        explanation: "Jika pencuri masuk melalui pintu depan yang tidak terkunci, pintu tidak mungkin terkunci dari dalam setelahnya—pencuri akan keluar dan pintu tetap terbuka atau terkunci dari luar. Pintu yang terkunci dari dalam tanpa tanda paksa menunjukkan tidak ada orang luar yang masuk. Cerita wanita itu palsu."
    },
    // Soal 44
    {
        caseText: "Seorang pria ditemukan tewas di tepi sungai dengan luka di kepala. Ia memegang pancing. Polisi menduga ia terpeleset dan kepalanya terbentur batu. Detektif melihat pancing korban dalam keadaan terlipat rapi dan tidak ada ikan di embernya. Apa kesimpulannya?",
        options: [
            "Korban belum sempat memancing karena tiba-tiba terpeleset dan jatuh.",
            "Pancing terlipat rapi menunjukkan korban belum memancing; ini pembunuhan.",
            "Korban memancing tanpa umpan sehingga tidak ada ikan yang tertangkap.",
            "Ikan-ikan di ember kabur saat korban terpeleset ke dalam sungai."
        ],
        correctIndex: 1,
        explanation: "Jika korban benar-benar sedang memancing dan terpeleset, pancingnya akan dalam keadaan terulur (digunakan). Pancing yang terlipat rapi menunjukkan korban belum mulai memancing—atau pancing itu sengaja diletakkan di tangannya setelah ia dibunuh. Ini adalah pembunuhan yang disamarkan sebagai kecelakaan memancing."
    },
    // Soal 45
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pria di apartemennya. Korban ditemukan tewas dengan luka tusuk. Pintu apartemen terkunci dari dalam, tetapi jendela kamar mandi terbuka. Di lantai kamar mandi ada genangan air dan handuk basah. Apa yang paling mungkin terjadi?",
        options: [
            "Korban bunuh diri di kamar mandi setelah menusuk dirinya sendiri.",
            "Pembunuh masuk lewat jendela, membunuh, lalu mandi sebelum kabur.",
            "Korban terpeleset di kamar mandi dan kepalanya terbentur lantai.",
            "Air di lantai kamar mandi berasal dari pipa yang bocor sejak lama."
        ],
        correctIndex: 1,
        explanation: "Jendela kamar mandi yang terbuka adalah jalur masuk, sementara handuk basah dan genangan air menunjukkan seseorang baru saja mandi di sana. Pembunuh masuk lewat jendela, membunuh korban, lalu mandi untuk membersihkan darah dari tubuhnya sebelum kabur. Ini menjelaskan pintu yang tetap terkunci dari dalam."
    },
    // Soal 46
    {
        caseText: "Seorang wanita ditemukan tewas di dapur dengan luka bakar di tangan. Di dekatnya ada kompor yang masih menyala dan panci berisi minyak panas. Suaminya mengatakan istrinya tidak sengaja menyenggol panci. Detektif melihat luka bakar korban hanya di telapak tangan, bukan di lengan atau wajah. Apa kesimpulannya?",
        options: [
            "Korban memang tidak sengaja menyenggol panci berisi minyak panas itu.",
            "Luka bakar hanya di telapak tangan menunjukkan korban dipaksa memegang panci.",
            "Korban memiliki kulit yang tidak sensitif terhadap panas minyak goreng.",
            "Minyak panas yang tumpah tidak akan menyebabkan luka bakar pada kulit."
        ],
        correctIndex: 1,
        explanation: "Cipratan minyak panas dari panci yang tersenggol akan mengenai area yang lebih luas—lengan, wajah, atau tubuh. Luka bakar yang terbatas di telapak tangan menunjukkan korban memegang benda panas secara langsung, mungkin dipaksa. Ini mengarah pada kekerasan dalam rumah tangga yang berujung kematian."
    },
    // Soal 47
    {
        caseText: "Seorang pria melaporkan bahwa motornya dicuri dari depan rumah. Ia mengatakan motor itu diparkir di depan rumah dan ia menemukannya hilang pagi ini. Detektif melihat tanah di depan rumah masih basah karena hujan semalaman, tetapi tidak ada jejak ban motor di tanah. Apa kesimpulannya?",
        options: [
            "Pencuri mengangkat motor tanpa menyentuh tanah sehingga tidak ada jejak.",
            "Pria itu berbohong; tidak ada jejak ban berarti motor tidak pernah diparkir di sana.",
            "Hujan semalaman telah menghapus semua jejak ban motor di tanah basah.",
            "Motor ditarik ke dalam rumah oleh pemiliknya sebelum hujan turun."
        ],
        correctIndex: 1,
        explanation: "Tanah basah karena hujan akan merekam jejak ban atau bekas parkir motor. Tidak adanya jejak sama sekali menunjukkan motor tidak pernah diparkir di depan rumah saat hujan. Pria itu berbohong—mungkin motor sudah lama hilang atau ia mengarang cerita pencurian untuk mengklaim asuransi."
    },
    // Soal 48
    {
        caseText: "Seorang detektif menemukan mayat seorang pria di dalam lemari pakaian. Tubuhnya dalam keadaan terlipat, dan tidak ada tanda-tanda perkelahian. Pintu lemari terkunci dari luar. Apa yang paling mungkin terjadi?",
        options: [
            "Korban bersembunyi di dalam lemari dan tidak sengaja terkunci di dalam.",
            "Korban dibunuh di tempat lain, lalu tubuhnya dimasukkan ke lemari dan dikunci.",
            "Korban bunuh diri di dalam lemari dengan cara yang tidak bisa dijelaskan.",
            "Korban terjatuh ke dalam lemari saat sedang mengambil pakaian di dalamnya."
        ],
        correctIndex: 1,
        explanation: "Tubuh yang terlipat tanpa tanda perkelahian menunjukkan korban sudah tewas sebelum dimasukkan ke lemari. Pintu yang terkunci dari luar bertujuan menunda penemuan mayat, memberi pembunuh waktu untuk melarikan diri atau menghilangkan barang bukti. Ini adalah upaya menyembunyikan tubuh, bukan TKP asli."
    },
    // Soal 49
    {
        caseText: "Seorang wanita mengaku dirampok di dalam taksi. Ia mengatakan sopir taksi merampas dompetnya dan membuangnya di pinggir jalan. Polisi menemukan dompet wanita itu di dalam tasnya sendiri, yang masih dibawanya. Apa kesimpulannya?",
        options: [
            "Sopir taksi mengembalikan dompet tanpa sepengetahuan wanita tersebut.",
            "Wanita itu berbohong; dompet masih di tasnya berarti tidak ada perampasan.",
            "Wanita itu memiliki dua dompet dan salah satunya dirampas oleh sopir.",
            "Sopir taksi merampok dompet wanita lain, bukan dompet wanita tersebut."
        ],
        correctIndex: 1,
        explanation: "Jika dompet benar-benar dirampas dan dibuang, dompet itu tidak mungkin masih berada di dalam tas wanita. Fakta bahwa dompet masih ada membuktikan tidak pernah terjadi perampokan. Wanita itu berbohong, mungkin untuk mengalihkan perhatian dari masalah keuangan pribadi."
    },
    // Soal 50
    {
        caseText: "Seorang pria ditemukan tewas di ruang tamu dengan luka di kepala. Di dekatnya ada vas bunga yang pecah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur vas. Detektif melihat pecahan vas tersebar ke arah yang berlawanan dengan tubuh korban. Apa kesimpulannya?",
        options: [
            "Vas itu pecah karena korban jatuh dan menimpanya dengan seluruh tubuh.",
            "Pecahan menjauhi tubuh menunjukkan vas diayunkan ke arah korban.",
            "Vas itu pecah karena angin kencang yang masuk dari jendela yang terbuka.",
            "Istri korban membersihkan pecahan vas sebelum polisi tiba di lokasi."
        ],
        correctIndex: 1,
        explanation: "Pola pecahan menunjukkan arah gaya. Jika korban jatuh menimpa vas, pecahan akan tersebar ke segala arah atau tertahan tubuh. Pecahan yang tersebar menjauhi tubuh menunjukkan vas itu diayunkan/dilempar mengenai kepala korban—pola khas pembunuhan dengan senjata tumpul. Istri korban berbohong."
    },
    // Soal 51
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah perkebunan. Korban ditemukan tewas di gudang dengan luka di leher. Pintu gudang tidak terkunci, tetapi ada lumpur di lantai yang mengarah ke luar. Detektif melihat lumpur itu membentuk jejak sepatu yang sama dengan sepatu korban. Apa kesimpulannya?",
        options: [
            "Korban berjalan sendiri ke gudang sebelum akhirnya dibunuh oleh seseorang.",
            "Jejak lumpur kemungkinan dibuat pembunuh memakai sepatu korban untuk menyesatkan.",
            "Pembunuh memakai sepatu yang kebetulan sama dengan sepatu milik korban.",
            "Lumpur di lantai gudang berasal dari luar dan tidak terkait dengan kasus."
        ],
        correctIndex: 1,
        explanation: "Jejak sepatu yang sama dengan sepatu korban mengarah ke luar gudang mencurigakan—jika korban dibunuh di dalam, ia tidak akan berjalan keluar. Kemungkinan pembunuh memakai sepatu korban untuk membuat jejak palsu, atau korban berjalan ke gudang sendiri sebelum dibunuh. Detektif perlu memeriksa arah dan urutan jejak lebih teliti."
    },
    // Soal 52
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka tembak. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Polisi menyimpulkan bunuh diri. Namun detektif menemukan bahwa pistol itu adalah pistol otomatis yang memerlukan tekanan pelatuk cukup berat. Korban memiliki jari telunjuk yang cedera dan diperban. Apa kesimpulannya?",
        options: [
            "Korban tetap bisa menembak dirinya sendiri meski jari telunjuknya cedera.",
            "Korban tidak mungkin menembak dirinya sendiri dengan jari telunjuk yang cedera.",
            "Pistol otomatis itu rusak sehingga tidak bisa menembak sama sekali.",
            "Korban menembak dirinya sendiri menggunakan jari tengahnya, bukan telunjuk."
        ],
        correctIndex: 1,
        explanation: "Pistol otomatis memerlukan tekanan pelatuk yang cukup berat. Korban dengan jari telunjuk cedera dan diperban tidak mungkin mampu menekan pelatuk dengan cukup kuat. Bubuk mesiu di tangan bisa ditaburkan oleh pembunuh. Ini adalah pembunuhan yang disamarkan sebagai bunuh diri dengan bukti forensik yang dipalsukan."
    },
    // Soal 53
    {
        caseText: "Seorang wanita melaporkan bahwa anaknya diculik di depan sekolah. Ia mengatakan penculik menggunakan mobil hitam. Detektif memeriksa rekaman CCTV sekolah dan melihat wanita itu datang menjemput anaknya, tetapi anaknya tidak terlihat di sekolah sejak pagi. Apa kesimpulannya?",
        options: [
            "Anak itu diculik sebelum sempat masuk ke lingkungan sekolah pagi itu.",
            "Wanita itu berbohong; anaknya tidak pernah datang ke sekolah sejak pagi.",
            "Rekaman CCTV sekolah rusak sehingga tidak bisa dijadikan bukti akurat.",
            "Anak itu bersembunyi di dalam sekolah dan tidak terlihat oleh kamera."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan anak tidak pernah datang ke sekolah sejak pagi. Jika anak tidak pernah ada di sekolah, tidak mungkin ia diculik di depan sekolah. Wanita itu berbohong—kemungkinan anak hilang karena sebab lain (misalnya dibawa kabur atau dititipkan) dan ia mengarang cerita penculikan."
    },
    // Soal 54
    {
        caseText: "Seorang pria ditemukan tewas di dalam tenda saat berkemah. Tidak ada luka pada tubuhnya. Di dalam tenda ada kompor gas portable yang masih menyala. Polisi menduga ia meninggal karena menghirup gas. Detektif melihat pintu tenda dalam keadaan tertutup rapat dan tidak ada ventilasi. Apa kesimpulannya?",
        options: [
            "Korban sengaja bunuh diri dengan menghirup gas dari kompor portable.",
            "Korban meninggal karena menghirup karbon monoksida; ini kecelakaan.",
            "Korban diracun oleh orang lain yang berada di tenda bersamanya.",
            "Kompor gas portable itu meledak dan menyebabkan kematian korban."
        ],
        correctIndex: 1,
        explanation: "Kompor gas yang menyala di dalam tenda tertutup rapat tanpa ventilasi menghasilkan karbon monoksida yang mematikan. Korban meninggal karena menghirup gas tersebut—ini kecelakaan tragis, bukan pembunuhan. Tidak adanya luka dan posisi kompor yang masih menyala mendukung kesimpulan ini."
    },
    // Soal 55
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah kantor. Korban ditemukan tewas di ruang rapat dengan luka di kepala. Di ruangan itu ada proyektor yang masih menyala dan laptop korban terbuka. Detektif melihat jam di dinding ruangan berhenti pada pukul 14.30. Namun rekaman CCTV menunjukkan korban masuk ke ruang rapat pukul 15.00. Apa kesimpulannya?",
        options: [
            "Jam dinding ruangan itu rusak dan tidak bisa dijadikan bukti yang akurat.",
            "Jam dinding sengaja dihentikan untuk menciptakan alibi palsu bagi pembunuh.",
            "Korban masuk ke ruang rapat dua kali, yaitu pukul 14.30 dan pukul 15.00.",
            "CCTV kantor salah mencatat waktu sehingga rekamannya tidak bisa dipercaya."
        ],
        correctIndex: 1,
        explanation: "Ketidaksesuaian antara jam dinding (14.30) dan CCTV (15.00) menunjukkan jam dinding sengaja dihentikan. Pembunuh ingin menciptakan kesan korban tewas sebelum pukul 15.00—mungkin untuk memberi alibi bagi seseorang. CCTV membuktikan korban masih hidup dan masuk ruang rapat pukul 15.00, sehingga jam dinding adalah bukti palsu."
    },
    // Soal 56
    {
        caseText: "Seorang pria mengaku istrinya meninggal karena terjatuh dari tangga. Detektif melihat tubuh korban berada di dasar tangga dengan luka di bagian belakang kepala. Namun detektif juga menemukan bahwa anak tangga di dekat tubuh korban dalam keadaan bersih, sementara anak tangga lainnya berdebu. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan sama sekali tidak menyentuh anak tangga yang bersih itu.",
            "Anak tangga yang bersih menunjukkan seseorang baru membersihkannya dari bukti.",
            "Anak tangga itu baru dipasang sehingga debunya belum menempel seperti lain.",
            "Debu di anak tangga lain berasal dari luar rumah dan tidak terkait kasus."
        ],
        correctIndex: 1,
        explanation: "Anak tangga yang bersih di antara anak tangga berdebu adalah anomali. Ini menunjukkan seseorang sengaja membersihkan area tertentu—kemungkinan untuk menghilangkan darah atau bukti yang mengarah pada pembunuhan. Korban kemungkinan dibunuh di tempat lain atau dipukul di tangga, lalu darahnya dibersihkan."
    },
    // Soal 57
    {
        caseText: "Seorang wanita ditemukan tewas di kamar tidurnya. Ia memegang botol obat tidur kosong. Polisi menduga overdosis. Detektif melihat botol obat itu memiliki tutup yang sulit dibuka (child-proof cap) dan tangan korban memiliki luka lecet di jari-jari. Apa kesimpulannya?",
        options: [
            "Korban kesulitan membuka botol obat lalu menyerah dan meninggal.",
            "Luka lecet menunjukkan botol dibuka paksa, mungkin oleh orang lain.",
            "Botol obat tidur itu palsu dan tidak berisi obat yang sesungguhnya.",
            "Korban mengalami alergi terhadap obat tidur yang diminumnya."
        ],
        correctIndex: 1,
        explanation: "Botol dengan child-proof cap memerlukan teknik khusus untuk dibuka. Luka lecet di jari korban menunjukkan upaya paksa membuka botol—sesuatu yang tidak perlu dilakukan jika korban membuka botolnya sendiri dengan tenang. Kemungkinan korban dipaksa menelan obat atau botol dibuka paksa oleh pembunuh."
    },
    // Soal 58
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terbakar. Polisi menduga kecelakaan. Detektif menemukan bahwa pintu mobil dalam keadaan terkunci dari dalam, tetapi jendela pengemudi pecah. Di dalam mobil tidak ada kunci. Apa kesimpulannya?",
        options: [
            "Korban terkunci di dalam mobil dan tidak bisa keluar saat mobil terbakar.",
            "Kunci tidak ada meski pintu terkunci menunjukkan mobil dikunci dari luar.",
            "Kunci mobil meleleh karena panas api sehingga tidak ditemukan di dalam.",
            "Korban membuang kunci mobil keluar melalui jendela sebelum meninggal."
        ],
        correctIndex: 1,
        explanation: "Pintu yang terkunci dari dalam tetapi kunci tidak ada di dalam mobil adalah kontradiksi. Jika korban mengunci dari dalam, kunci harusnya ada di dalam. Tidak adanya kunci menunjukkan seseorang mengunci mobil dari luar dengan kunci cadangan setelah menempatkan korban di dalam, lalu membakar mobil. Jendela yang pecah bisa jadi upaya korban mencoba keluar."
    },
    // Soal 59
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian di sebuah toko perhiasan. Pemilik toko melaporkan bahwa vitrinya dipecahkan dan perhiasan hilang. Detektif melihat pecahan kaca vitrin tersebar di luar vitrin, bukan di dalam. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca vitrin dari dalam toko sebelum melarikan diri.",
            "Kaca dipecahkan dari dalam; pemilik toko mengarang cerita pencurian.",
            "Pencuri memakai palu dari luar sehingga pecahan kaca terdorong keluar.",
            "Kaca vitrin pecah karena tekanan udara dari dalam toko perhiasan."
        ],
        correctIndex: 1,
        explanation: "Sama seperti kasus jendela: kaca yang dipecahkan dari luar akan jatuh ke dalam. Pecahan kaca yang tersebar di luar vitrin menunjukkan kaca dipecahkan dari dalam. Pemilik toko kemungkinan mengarang cerita pencurian—mungkin untuk mengklaim asuransi atau menutupi penjualan ilegal."
    },
    // Soal 60
    {
        caseText: "Seorang pria ditemukan tewas di dalam kolam renang hotel. Ia mengambang dengan wajah menghadap ke bawah. Tidak ada luka pada tubuhnya. Polisi menduga ia tenggelam karena tidak bisa berenang. Detektif melihat korban masih memakai sandal dan kacamata renang yang terpasang rapi. Apa kesimpulannya?",
        options: [
            "Korban memang tidak bisa berenang sehingga tenggelam di kolam hotel.",
            "Sandal dan kacamata rapi menunjukkan korban sudah tewas sebelum diletakkan.",
            "Korban tenggelam saat berjalan di tepi kolam yang licin dan jatuh.",
            "Sandal dan kacamata renang tidak penting untuk menentukan penyebab mati."
        ],
        correctIndex: 1,
        explanation: "Orang yang benar-benar tenggelam saat berenang akan kehilangan sandal atau kacamata renangnya karena gerakan panik. Sandal dan kacamata yang masih terpasang rapi menunjukkan korban tidak berenang—ia sudah tewas sebelum diletakkan di kolam. Ini pembunuhan yang disamarkan sebagai kecelakaan tenggelam."
    },
	// Soal 61
    {
        caseText: "Seorang pria ditemukan tewas di kamar mandi apartemennya dengan luka di kepala. Pintu kamar mandi tidak terkunci. Di lantai ada sabun yang licin dan pecahan kaca. Polisi menduga korban terpeleset dan kepalanya membentur wastafel. Detektif melihat pecahan kaca berada di bawah tubuh korban, bukan di sekitarnya. Apa kesimpulannya?",
        options: [
            "Korban terpeleset dan pecahan kaca jatuh menimpa tubuhnya dari wastafel.",
            "Pecahan kaca di bawah tubuh menunjukkan korban jatuh setelah kaca sudah di lantai.",
            "Kaca pecah karena korban jatuh menimpanya dengan seluruh berat tubuhnya.",
            "Sabun di lantai kamar mandi itulah yang menyebabkan korban terpeleset."
        ],
        correctIndex: 1,
        explanation: "Jika korban terpeleset dan kepalanya membentur wastafel, pecahan kaca (jika ada) akan tersebar di sekitar tubuh. Pecahan kaca yang berada di bawah tubuh menunjukkan kaca itu sudah ada di lantai sebelum korban jatuh—atau sengaja diletakkan di sana. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 62
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di dalam bus. Ia mengatakan perampok merampas kalung emasnya. Detektif melihat leher wanita itu tidak memiliki bekas luka atau kemerahan, padahal kalung emas biasanya meninggalkan bekas jika ditarik paksa. Apa kesimpulannya?",
        options: [
            "Kalung emas itu longgar sehingga mudah dilepas tanpa meninggalkan bekas.",
            "Tidak ada bekas di leher menunjukkan kalung dilepas sendiri, cerita palsu.",
            "Perampok menggunakan gunting untuk memotong kalung tanpa menyentuh leher.",
            "Kulit wanita itu tidak sensitif sehingga tarikan keras tidak berbekas."
        ],
        correctIndex: 1,
        explanation: "Kalung emas yang dirampas paksa akan meninggalkan bekas luka, kemerahan, atau bahkan lecet di leher korban. Tidak adanya bekas sama sekali menunjukkan kalung itu tidak ditarik paksa—kemungkinan wanita itu melepasnya sendiri dan mengarang cerita perampokan untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain."
    },
    // Soal 63
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar hotel dengan luka tusuk. Pintu kamar terkunci dari dalam, dan kunci ada di meja. Jendela kamar tertutup rapat. Detektif menemukan bahwa kunci kamar itu memiliki sidik jari yang tidak cocok dengan korban. Apa kesimpulannya?",
        options: [
            "Kunci kamar itu sebenarnya milik kamar hotel lain yang berbeda.",
            "Sidik jari asing di kunci menunjukkan orang lain terlibat dalam kasus.",
            "Korban memakai sarung tangan sehingga sidik jarinya tidak menempel.",
            "Sidik jari korban terhapus karena kunci sering dipegang olehnya."
        ],
        correctIndex: 1,
        explanation: "Kunci yang seharusnya hanya dipegang korban memiliki sidik jari orang lain—ini petunjuk kuat bahwa orang lain terlibat. Pembunuh mungkin mengunci pintu dari dalam, meletakkan kunci di meja, lalu keluar melalui jalur lain. Sidik jarinya tertinggal karena lupa menghapusnya."
    },
    // Soal 64
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan di sebuah restoran. Korban tewas di meja makannya dengan racun di gelas wine. Rekaman CCTV menunjukkan pelayan menuangkan wine ke gelas korban, tetapi tidak ada orang lain yang menyentuh gelas itu. Detektif menemukan bahwa pelayan membawa botol wine dari belakang dan sempat menghilang dari pandangan kamera selama 30 detik. Apa kesimpulannya?",
        options: [
            "Pelayan meracun wine di botol saat menghilang dari pandangan kamera.",
            "Korban meracuni dirinya sendiri dengan memasukkan racun ke gelas wine.",
            "Racun sudah ada di gelas sebelum pelayan menuangkan wine ke gelas.",
            "Pelayan tidak bersalah karena ia tidak menyentuh gelas korban langsung."
        ],
        correctIndex: 0,
        explanation: "Pelayan sempat menghilang dari pandangan kamera selama 30 detik—waktu yang cukup untuk memasukkan racun ke dalam botol wine. Meskipun ia tidak menyentuh gelas korban, racun bisa masuk melalui wine yang dituangkan. Ini menjelaskan bagaimana racun bisa masuk tanpa ada yang menyentuh gelas secara langsung."
    },
    // Soal 65
    {
        caseText: "Seorang pria ditemukan tewas di kebunnya dengan luka di kepala. Di dekatnya ada cangkul yang berlumuran darah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur cangkul. Detektif melihat cangkul itu dalam posisi tegak bersandar di pohon, bukan tergeletak di tanah. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan cangkul secara ajaib berdiri sendiri di pohon.",
            "Cangkul bersandar tegak tidak konsisten dengan cerita jatuh menimpanya.",
            "Cangkul itu sudah lama bersandar di pohon dan tidak terkait kasus.",
            "Angin kencang membuat cangkul berdiri tegak bersandar di pohon."
        ],
        correctIndex: 1,
        explanation: "Cangkul yang bersandar tegak di pohon tidak konsisten dengan cerita jatuh menimpa cangkul—jika korban jatuh menimpanya, cangkul akan tergeletak di tanah. Posisi tegak menunjukkan cangkul sengaja diletakkan kembali setelah digunakan untuk membunuh. Istri korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 66
    {
        caseText: "Seorang wanita mengaku rumahnya dibobol dan perhiasannya hilang. Ia mengatakan pencuri masuk melalui pintu belakang yang tidak terkunci. Detektif melihat pintu belakang dalam keadaan berdebu dan tidak ada jejak tangan di gagang pintunya. Apa kesimpulannya?",
        options: [
            "Pencuri memakai sarung tangan sehingga tidak meninggalkan jejak tangan.",
            "Gagang pintu berdebu menunjukkan pintu tidak pernah dibuka oleh pencuri.",
            "Pencuri masuk melalui jendela karena pintu belakang terkunci rapat.",
            "Debu tebal di gagang pintu menutupi jejak tangan yang ditinggalkan."
        ],
        correctIndex: 1,
        explanation: "Gagang pintu yang berdebu tebal tanpa jejak tangan menunjukkan pintu itu sudah lama tidak dibuka. Jika pencuri benar-benar masuk melalui pintu itu, debu akan terganggu dan ada jejak tangan. Ini membuktikan cerita wanita itu palsu—perhiasan hilang karena sebab lain, bukan pembobolan."
    },
    // Soal 67
    {
        caseText: "Seorang pria ditemukan tewas di dalam lift yang macet di antara lantai 5 dan 6. Lift memiliki tombol darurat yang berfungsi. Detektif melihat tombol darurat tidak ditekan, dan korban memegang ponsel dengan layar mati. Apa kesimpulannya?",
        options: [
            "Korban tidak tahu bahwa di dalam lift ada tombol darurat yang berfungsi.",
            "Korban mungkin sudah tewas sebelum lift macet; tubuhnya dimasukkan ke lift.",
            "Korban panik dan lupa menekan tombol darurat maupun menyalakan ponselnya.",
            "Tombol darurat di lift itu rusak sehingga tidak berfungsi saat ditekan."
        ],
        correctIndex: 1,
        explanation: "Lift macet dengan tombol darurat berfungsi tetapi tidak ditekan, dan ponsel korban mati—ini anomali. Orang yang terjebak di lift pasti akan menekan tombol darurat atau menelepon. Kemungkinan korban sudah tewas sebelum lift macet, lalu tubuhnya dimasukkan dan lift dihentikan secara sengaja. Ini pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 68
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang guru. Korban ditemukan tewas di kelas dengan luka di kepala. Di papan tulis ada tulisan 'PR' yang ditulis dengan kapur. Detektif melihat tulisan itu sangat rapi dan tidak ada bekas kapur di tangan korban. Apa kesimpulannya?",
        options: [
            "Korban menulis PR di papan tulis sebelum ia dibunuh oleh seseorang.",
            "Tulisan rapi tanpa bekas kapur di tangan menunjukkan orang lain menulisnya.",
            "Murid-murid korban menulis PR di papan tulis sebelum gurunya dibunuh.",
            "Kapur yang digunakan untuk menulis di papan tidak meninggalkan bekas."
        ],
        correctIndex: 1,
        explanation: "Menulis di papan tulis dengan kapur pasti meninggalkan bekas kapur di tangan. Tidak adanya bekas kapur di tangan korban menunjukkan ia tidak menulis tulisan itu. Tulisan 'PR' yang rapi kemungkinan dibuat pembunuh untuk menciptakan kesan korban sedang mengajar saat dibunuh—atau sebagai pengalih perhatian."
    },
    // Soal 69
    {
        caseText: "Seorang pria melaporkan bahwa istrinya hilang saat berbelanja di mal. Ia mengatakan istrinya masuk ke toilet dan tidak keluar lagi. Detektif memeriksa rekaman CCTV toilet dan melihat istri pria itu keluar dari toilet melalui pintu lain dan berjalan ke parkiran bersama seorang pria. Apa kesimpulannya?",
        options: [
            "Istri pria itu diculik oleh pria yang menunggunya di parkiran mal.",
            "Istri pria itu pergi secara sukarela dengan pria lain, bukan diculik.",
            "Pria di parkiran itu adalah petugas mal yang sedang membantu korban.",
            "Rekaman CCTV toilet mal itu rusak sehingga tidak bisa dipercaya."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan istri pria itu keluar dari toilet melalui pintu lain dan berjalan ke parkiran bersama pria lain—ini membuktikan ia pergi secara sukarela, bukan diculik atau hilang secara misterius. Suami mungkin tidak tahu atau sengaja melaporkan hilang untuk menutupi fakta bahwa istrinya pergi."
    },
    // Soal 70
    {
        caseText: "Seorang pria ditemukan tewas di ruang tamu dengan luka tembak. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Namun detektif melihat luka tembak berada di bagian belakang kepala. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menembak bagian belakang kepalanya sendiri.",
            "Luka di belakang kepala tidak konsisten dengan bunuh diri; ini pembunuhan.",
            "Korban menembak dirinya sendiri menggunakan cermin untuk membidik.",
            "Pistol yang digunakan korban adalah jenis pistol khusus yang tidak umum."
        ],
        correctIndex: 1,
        explanation: "Luka tembak di belakang kepala sangat tidak konsisten dengan bunuh diri—seseorang tidak bisa mengarahkan pistol ke belakang kepalanya sendiri dan menembak. Bubuk mesiu di tangan bisa ditaburkan oleh pembunuh. Ini adalah pembunuhan yang disamarkan sebagai bunuh diri dengan bukti forensik palsu."
    },
    // Soal 71
    {
        caseText: "Seorang wanita melaporkan bahwa tasnya dicuri di kafe. Ia mengatakan tasnya diletakkan di kursi sebelahnya, dan pelaku mengambilnya saat ia pergi ke toilet. Detektif melihat rekaman CCTV dan menemukan bahwa wanita itu tidak pernah pergi ke toilet selama berada di kafe. Apa kesimpulannya?",
        options: [
            "Wanita itu lupa bahwa ia sudah pergi ke toilet beberapa kali.",
            "Wanita itu berbohong; CCTV membuktikan ia tidak pernah ke toilet.",
            "Rekaman CCTV kafe itu rusak sehingga tidak bisa dijadikan bukti.",
            "Pelaku mengambil tas saat wanita itu tertidur di kursinya."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV membuktikan wanita itu tidak pernah pergi ke toilet selama di kafe. Jika ia tidak pernah ke toilet, cerita tas dicuri saat ia ke toilet adalah bohong. Kemungkinan ia mengarang cerita pencurian untuk mengklaim asuransi atau menutupi kehilangan karena sebab lain."
    },
    // Soal 72
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di pinggir jalan. Mesin mobil mati, dan kunci ada di lubang kontak. Detektif melihat kaca jendela mobil dalam keadaan tertutup rapat, tetapi ada bekas cakar di bagian dalam kaca. Apa kesimpulannya?",
        options: [
            "Korban mencoba keluar karena terkunci dan meninggal karena sesak napas.",
            "Bekas cakar di kaca berasal dari hewan yang masuk ke dalam mobil.",
            "Korban sengaja menutup semua jendela untuk mengakhiri hidupnya sendiri.",
            "Bekas cakar itu sudah ada sejak lama sebelum korban masuk ke mobil."
        ],
        correctIndex: 0,
        explanation: "Bekas cakar di bagian dalam kaca menunjukkan korban panik dan mencoba keluar. Dengan jendela tertutup rapat dan mesin mati, tidak ada sirkulasi udara—korban bisa meninggal karena sesak napas atau panas. Ini bisa kecelakaan (korban tidak sengaja terkunci) atau pembunuhan (sengaja dikunci). Detektif perlu memeriksa apakah pintu terkunci dari luar."
    },
    // Soal 73
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang nelayan. Korban ditemukan tewas di perahunya dengan luka di kepala. Di perahu ada jaring ikan yang masih basah dan ikan-ikan segar. Detektif melihat luka di kepala korban berada di bagian depan, dan ada serpihan kayu di luka tersebut. Apa kesimpulannya?",
        options: [
            "Korban terbentur dayung saat sedang memancing di atas perahunya.",
            "Serpihan kayu di luka depan menunjukkan korban dipukul menghadap penyerang.",
            "Korban terpeleset di perahu dan kepalanya membentur dinding perahu.",
            "Ikan-ikan segar di perahu menyerang korban hingga menyebabkan luka."
        ],
        correctIndex: 1,
        explanation: "Serpihan kayu di luka menunjukkan senjata yang digunakan adalah benda kayu. Luka di bagian depan kepala menunjukkan korban menghadap penyerang saat dipukul—berbeda dengan kecelakaan jatuh yang biasanya melukai bagian belakang atau samping kepala. Ini mengarah pada pembunuhan dengan senjata tumpul kayu."
    },
    // Soal 74
    {
        caseText: "Seorang pria mengaku istrinya bunuh diri dengan menggantung diri di garasi. Detektif melihat tali yang digunakan sangat pendek dan tidak ada benda untuk dipijak di dekatnya. Korban memiliki tinggi 160 cm, sementara tali tergantung di ketinggian 250 cm. Apa kesimpulannya?",
        options: [
            "Korban melompat dari tangga yang kemudian dipindahkan dari lokasi.",
            "Tali di ketinggian 250 cm tanpa pijakan tidak mungkin dicapai korban.",
            "Korban memang memiliki tinggi badan yang jauh lebih tinggi dari perkiraan.",
            "Tali yang digunakan terlalu pendek untuk menggantung diri seseorang."
        ],
        correctIndex: 1,
        explanation: "Korban setinggi 160 cm tidak mungkin mencapai tali di ketinggian 250 cm tanpa benda pijakan. Jika tidak ada benda pijakan di dekatnya, korban tidak bisa menggantung diri sendiri. Kemungkinan ia dibunuh terlebih dahulu, lalu tubuhnya digantung oleh pembunuh untuk menciptakan kesan bunuh diri."
    },
    // Soal 75
    {
        caseText: "Seorang wanita ditemukan tewas di kamar tidurnya dengan luka di pergelangan tangan. Di lantai ada pisau dan genangan darah. Suaminya mengatakan istrinya bunuh diri. Detektif melihat luka di pergelangan tangan korban berada di sisi kanan, sementara korban adalah orang kidal. Apa kesimpulannya?",
        options: [
            "Orang kidal bisa melukai pergelangan tangan kanannya dengan mudah.",
            "Luka di tangan kanan pada orang kidal tidak konsisten dengan bunuh diri.",
            "Korban menggunakan tangan kanan karena panik saat mengakhiri hidupnya.",
            "Luka di pergelangan tangan kanan selalu disebabkan oleh tindakan pembunuhan."
        ],
        correctIndex: 1,
        explanation: "Orang kidal menggunakan tangan kiri sebagai tangan dominan. Untuk bunuh diri dengan mengiris pergelangan tangan, orang kidal biasanya melukai pergelangan tangan kiri atau menggunakan tangan kiri untuk mengiris tangan kanan dengan posisi canggung. Luka di pergelangan tangan kanan yang rapi pada orang kidal mengarah pada pembunuhan—kemungkinan pelaku tidak mengetahui korban kidal."
    },
    // Soal 76
    {
        caseText: "Seorang pria ditemukan tewas di kantornya dengan luka tembak. Di mejanya ada surat bunuh diri yang ditulis tangan. Detektif membandingkan tulisan tangan di surat dengan tulisan tangan korban di dokumen kantor dan menemukan perbedaan signifikan dalam bentuk huruf. Apa kesimpulannya?",
        options: [
            "Korban menulis surat dalam keadaan emosional sehingga tulisannya berubah.",
            "Perbedaan bentuk huruf menunjukkan surat ditulis oleh orang lain.",
            "Tulisan tangan seseorang bisa berubah seiring bertambahnya usia.",
            "Dokumen kantor itu sebenarnya ditulis oleh orang lain, bukan korban."
        ],
        correctIndex: 1,
        explanation: "Perbedaan signifikan dalam bentuk huruf antara surat bunuh diri dan dokumen korban menunjukkan surat itu ditulis oleh orang lain. Meskipun tulisan tangan bisa berubah karena emosi, perbedaan bentuk huruf yang mendasar menunjukkan penulis yang berbeda. Ini adalah surat bunuh diri palsu."
    },
    // Soal 77
    {
        caseText: "Seorang detektif menyelidiki kasus pencurian di sebuah museum. Sebuah patung mahal hilang dari ruang pameran. Detektif melihat pintu ruang pameran tidak terkunci, dan alarm tidak berbunyi. Kaca vitrin patung pecah, tetapi pecahannya hanya ada di dalam vitrin. Apa kesimpulannya?",
        options: [
            "Pencuri memecahkan kaca vitrin dari luar dengan menggunakan palu.",
            "Pecahan hanya di dalam menunjukkan kaca dipecahkan dari dalam vitrin.",
            "Alarm museum rusak sehingga pencuri bisa masuk tanpa ketahuan.",
            "Pencuri memakai sarung tangan sehingga tidak meninggalkan sidik jari."
        ],
        correctIndex: 1,
        explanation: "Kaca yang dipecahkan dari luar akan menyebarkan pecahan ke dalam vitrin. Jika pecahan hanya ada di dalam, kaca dipecahkan dari dalam vitrin—sesuatu yang tidak mungkin dilakukan pencuri dari luar. Kemungkinan pelaku adalah orang dalam museum yang memiliki akses ke vitrin, atau patung diganti dengan replika sebelumnya."
    },
    // Soal 78
    {
        caseText: "Seorang pria melaporkan bahwa dompetnya dicuri di pasar. Ia mengatakan dompetnya diambil dari tas belanja yang ia bawa. Detektif melihat tas belanja pria itu dalam keadaan tertutup rapat dan tidak ada tanda-tanda dibuka paksa. Apa kesimpulannya?",
        options: [
            "Pencuri membuka tas belanja dengan sangat hati-hati tanpa merusaknya.",
            "Tas tertutup rapat menunjukkan dompet tidak dicuri dari dalam tas.",
            "Pencuri memakai gunting untuk membuka tas belanja dari samping.",
            "Tas belanja itu memang mudah dibuka sehingga tidak meninggalkan bekas."
        ],
        correctIndex: 1,
        explanation: "Jika dompet dicuri dari tas belanja, tas itu harus dibuka—dan pembukaan paksa akan meninggalkan tanda. Tas yang tertutup rapat tanpa tanda dibuka menunjukkan dompet tidak diambil dari tas. Kemungkinan pria itu kehilangan dompet karena sebab lain dan mengarang cerita pencopetan untuk menutupi kelalaiannya."
    },
    // Soal 79
    {
        caseText: "Seorang wanita ditemukan tewas di dapur dengan luka di kepala. Di dekatnya ada wajan besi yang berlumuran darah. Suaminya mengatakan istrinya terjatuh dan kepalanya membentur wajan. Detektif melihat wajan itu berada di rak atas, bukan di lantai. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan wajan jatuh dari rak atas menimpa kepalanya.",
            "Wajan di rak atas tidak konsisten dengan cerita jatuh menimpanya.",
            "Wajan itu sudah lama berada di rak atas dan tidak terkait kasus.",
            "Korban memanjat rak untuk mengambil wajan lalu terjatuh dari sana."
        ],
        correctIndex: 1,
        explanation: "Wajan besi yang berada di rak atas tidak mungkin menyebabkan luka akibat jatuh—jika korban jatuh menimpanya, wajan akan berada di lantai. Posisi wajan di rak atas menunjukkan wajan sengaja dikembalikan ke tempatnya setelah digunakan untuk membunuh. Suami korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 80
    {
        caseText: "Seorang pria ditemukan tewas di kamar hotel dengan luka di kepala. Pintu kamar terkunci dari dalam, dan kunci ada di saku korban. Detektif menemukan bahwa jendela kamar memiliki kasa yang terpasang dari luar, bukan dari dalam. Apa kesimpulannya?",
        options: [
            "Pembunuh masuk melalui jendela dan memasang kasa dari luar dengan rapi.",
            "Kasa terpasang dari luar menunjukkan jendela bisa dibuka dari luar.",
            "Korban bunuh diri dengan memukulkan kepalanya ke dinding kamar.",
            "Kasa jendela itu sudah lama terpasang dari luar sejak hotel dibangun."
        ],
        correctIndex: 1,
        explanation: "Kasa jendela yang seharusnya dipasang dari dalam tetapi terpasang dari luar menunjukkan jendela itu dibuka dari luar. Pembunuh masuk melalui jendela, membunuh korban, lalu keluar dan memasang kasa kembali—mungkin terburu-buru sehingga salah sisi. Pintu yang terkunci dari dalam adalah pengalih perhatian."
    },
	// Soal 81
    {
        caseText: "Seorang wanita melaporkan bahwa ia dirampok di halte bus. Ia mengatakan perampok merampas gelang emasnya. Detektif melihat pergelangan tangan wanita itu memiliki bekas tekanan yang sangat rapi dan melingkar, seperti bekas gelang yang terlalu ketat, bukan bekas tarikan paksa. Apa kesimpulannya?",
        options: [
            "Gelang itu memang terlalu ketat sehingga mudah lepas dengan sendirinya.",
            "Bekas rapi melingkar menunjukkan gelang dilepas sendiri, bukan ditarik paksa.",
            "Perampok menggunakan alat khusus untuk melepas gelang tanpa melukai korban.",
            "Kulit wanita itu sangat mudah berbekas sehingga tarikan ringan pun terlihat."
        ],
        correctIndex: 1,
        explanation: "Gelang yang dirampas paksa akan meninggalkan bekas luka gores, lecet, atau memar yang tidak beraturan. Bekas tekanan rapi dan melingkar menunjukkan gelang itu dipakai dalam waktu lama (terlalu ketat) dan dilepas dengan hati-hati. Kemungkinan wanita itu melepas gelangnya sendiri dan mengarang cerita perampokan."
    },
    // Soal 82
    {
        caseText: "Seorang pria ditemukan tewas di dalam gudang dengan luka di kepala. Di dekatnya ada palu berlumuran darah. Pintu gudang terkunci dari luar, dan kunci dipegang oleh tetangga korban. Tetangga mengatakan ia tidak membuka gudang sejak seminggu lalu. Detektif melihat jendela gudang memiliki engsel yang berkarat dan tidak bisa dibuka. Apa kesimpulannya?",
        options: [
            "Tetangga berbohong dan dialah yang membunuh korban di dalam gudang.",
            "Korban sudah berada di dalam gudang sebelum pintunya dikunci dari luar.",
            "Korban bunuh diri dengan memukulkan palu ke kepalanya sendiri.",
            "Palu itu jatuh dari rak dan mengenai kepala korban secara tidak sengaja."
        ],
        correctIndex: 1,
        explanation: "Pintu terkunci dari luar dan jendela berkarat yang tidak bisa dibuka menunjukkan tidak ada jalan masuk bagi pembunuh dari luar. Kemungkinan korban sudah berada di dalam gudang sebelum pintu dikunci. Tetangga mungkin mengunci gudang tanpa mengetahui korban masih di dalam. Detektif perlu menyelidiki siapa yang memiliki akses lain ke gudang."
    },
    // Soal 83
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang dokter. Korban ditemukan tewas di ruang praktiknya dengan luka di leher. Di mejanya ada jarum suntik dan botol obat. Detektif melihat luka di leher korban adalah luka sayat, bukan luka tusuk jarum. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menyayat lehernya menggunakan pisau bedah.",
            "Luka sayat tidak sesuai jarum suntik; jarum itu hanya pengalih perhatian.",
            "Jarum suntik yang ada di meja itu rusak sehingga tidak bisa digunakan.",
            "Korban mengalami reaksi alergi hebat terhadap obat yang disuntikkan."
        ],
        correctIndex: 1,
        explanation: "Luka sayat di leher tidak mungkin disebabkan oleh jarum suntik—jarum hanya meninggalkan luka tusuk kecil. Keberadaan jarum suntik dan botol obat di meja kemungkinan adalah pengalih perhatian yang sengaja diletakkan pembunuh untuk mengarahkan penyelidikan pada overdosis atau kesalahan medis, padahal korban dibunuh dengan benda tajam."
    },
    // Soal 84
    {
        caseText: "Seorang pria mengaku istrinya tenggelam di bak mandi. Ia mengatakan istrinya tidak sengaja terpeleset saat mandi. Detektif melihat air di bak mandi sudah dingin dan tidak ada cipratan air di lantai kamar mandi. Apa kesimpulannya?",
        options: [
            "Korban memang terpeleset lalu tenggelam di bak mandi tanpa sempat berteriak.",
            "Air dingin tanpa cipratan menunjukkan korban sudah tewas sebelum diletakkan.",
            "Korban mandi menggunakan air dingin sehingga suhu bak mandi jadi rendah.",
            "Bak mandi itu bocor sehingga airnya menjadi dingin dan berkurang."
        ],
        correctIndex: 1,
        explanation: "Orang yang tenggelam saat mandi akan mencipratkan air ke lantai karena gerakan panik. Tidak adanya cipratan air dan air yang sudah dingin menunjukkan korban tidak bergerak di bak—ia sudah tewas sebelum diletakkan di sana. Suami korban berbohong untuk menutupi pembunuhan."
    },
    // Soal 85
    {
        caseText: "Seorang wanita ditemukan tewas di ruang tamu dengan luka di kepala. Di dekatnya ada patung kecil yang berlumuran darah. Pintu rumah terkunci dari dalam, tetapi jendela ruang tamu terbuka. Detektif melihat patung itu berada di posisi yang tidak wajar—di atas meja, bukan di lantai. Apa kesimpulannya?",
        options: [
            "Korban terjatuh dan patung kecil itu ikut menimpa kepalanya dari meja.",
            "Patung di atas meja menunjukkan patung sengaja diletakkan kembali.",
            "Patung itu jatuh dari rak karena getaran lalu mengenai kepala korban.",
            "Angin dari jendela yang terbuka membuat patung bergeser ke atas meja."
        ],
        correctIndex: 1,
        explanation: "Jika korban dipukul dengan patung, patung itu akan berada di lantai dekat tubuh korban. Patung yang berada di atas meja menunjukkan seseorang sengaja meletakkannya kembali setelah digunakan—sesuatu yang tidak akan dilakukan korban yang terjatuh. Ini mengarah pada pembunuhan yang disamarkan sebagai kecelakaan."
    },
    // Soal 86
    {
        caseText: "Seorang pria melaporkan bahwa motornya hilang dari parkiran mal. Ia mengatakan motor diparkir di zona A dan ia menemukannya hilang setelah berbelanja 2 jam. Detektif memeriksa rekaman CCTV parkiran dan melihat pria itu tiba dengan berjalan kaki, bukan mengendarai motor. Apa kesimpulannya?",
        options: [
            "Pria itu memarkir motornya di zona lain yang tidak terpantau kamera.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada motor hilang.",
            "Motor pria itu ditarik derek petugas mal sebelum ia selesai berbelanja.",
            "Rekaman CCTV parkiran mal itu rusak dan tidak bisa dipercaya."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di mal dengan berjalan kaki, bukan mengendarai motor. Jika ia tidak membawa motor, tidak mungkin ada motor yang hilang dari parkiran. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan motor untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 87
    {
        caseText: "Seorang pria ditemukan tewas di kamar tidurnya dengan luka tembak di dada. Di tangannya ada pistol, dan ada bekas bubuk mesiu di tangan korban. Detektif melihat luka tembak memiliki pola kontak jarak dekat, tetapi posisi pistol di tangan korban terbalik (pegangan menghadap ke atas). Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan memegang pistol pada posisi tangan yang tidak wajar.",
            "Pola kontak dekat konsisten, tetapi posisi pistol terbalik menunjukkan pistol diletakkan.",
            "Pistol yang digunakan korban rusak sehingga posisinya berubah saat menembak.",
            "Korban menembak dirinya sendiri dengan cara yang tidak biasa dilakukan orang."
        ],
        correctIndex: 1,
        explanation: "Pola kontak jarak dekat menunjukkan pistol ditembakkan dari jarak sangat dekat—bisa bunuh diri atau pembunuhan. Namun posisi pistol yang terbalik di tangan korban tidak wajar untuk bunuh diri—orang yang menembak dirinya sendiri akan memegang pistol dengan posisi normal. Posisi terbalik menunjukkan pistol diletakkan oleh orang lain setelah korban ditembak."
    },
    // Soal 88
    {
        caseText: "Seorang wanita mengaku dirampok di dalam lift. Ia mengatakan perampok merampas tasnya dan kabur saat pintu lift terbuka. Detektif memeriksa rekaman CCTV lift dan melihat wanita itu masuk lift sendirian dan keluar dengan tas yang masih dibawanya. Apa kesimpulannya?",
        options: [
            "Perampok bersembunyi di dalam lift dan kabur sebelum pintu terbuka.",
            "Wanita itu berbohong; CCTV menunjukkan tidak ada perampokan terjadi.",
            "Rekaman CCTV lift itu rusak sehingga tidak bisa dijadikan bukti.",
            "Perampok memakai seragam petugas sehingga tidak terlihat di kamera."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV lift menunjukkan wanita itu masuk dan keluar sendirian dengan tas masih dibawanya. Tidak ada perampok, tidak ada perampasan. Wanita itu berbohong—kemungkinan ia kehilangan uang atau barang karena sebab lain dan mengarang cerita perampokan untuk menutupinya."
    },
    // Soal 89
    {
        caseText: "Seorang pria ditemukan tewas di kebun dengan luka di kepala. Di dekatnya ada batu besar berlumuran darah. Istri korban mengatakan suaminya terjatuh dan kepalanya membentur batu. Detektif melihat batu itu berada di posisi yang tidak wajar—di atas tanah berumput, tetapi tidak ada bekas tekanan atau lubang di tanah di bawahnya. Apa kesimpulannya?",
        options: [
            "Batu itu memang sudah ada di sana sejak lama sebelum korban terjatuh.",
            "Tidak ada bekas tekanan menunjukkan batu dipindahkan setelah membunuh.",
            "Rumput di bawah batu menyerap tekanan sehingga tidak meninggalkan lubang.",
            "Batu itu ringan sehingga tidak meninggalkan bekas tekanan di tanah."
        ],
        correctIndex: 1,
        explanation: "Batu besar yang berada di tanah berumput seharusnya meninggalkan bekas tekanan atau lubang di tanah karena beratnya. Tidak adanya bekas tekanan menunjukkan batu itu baru dipindahkan ke sana—kemungkinan digunakan untuk membunuh korban di tempat lain, lalu diletakkan di dekat tubuh untuk menciptakan kesan kecelakaan."
    },
    // Soal 90
    {
        caseText: "Seorang detektif menyelidiki kasus pembunuhan seorang pedagang. Korban ditemukan tewas di tokonya dengan luka tusuk. Pintu toko terkunci dari dalam, dan kunci ada di tangan korban. Detektif melihat luka tusuk korban berada di punggung. Apa kesimpulannya?",
        options: [
            "Korban bunuh diri dengan menusukkan pisau ke punggungnya sendiri.",
            "Luka tusuk di punggung tidak konsisten dengan bunuh diri; ini pembunuhan.",
            "Korban terjatuh dan secara tidak sengaja menimpa pisau di lantai toko.",
            "Pisau yang ada di toko itu jatuh dari rak dan menusuk punggung korban."
        ],
        correctIndex: 1,
        explanation: "Luka tusuk di punggung sangat tidak konsisten dengan bunuh diri—seseorang tidak bisa menusuk punggungnya sendiri dengan cukup dalam untuk menyebabkan kematian. Kemungkinan pembunuh menyerang korban dari belakang, lalu meletakkan kunci di tangan korban dan mengunci pintu dari dalam sebelum kabur melalui jalur lain."
    },
    // Soal 91
    {
        caseText: "Seorang pria mengaku istrinya meninggal karena serangan jantung. Detektif melihat tubuh korban memiliki bintik-bintik merah di wajah dan leher, serta mata yang merah. Apa yang paling mungkin terjadi?",
        options: [
            "Korban memang meninggal karena serangan jantung mendadak di rumahnya.",
            "Bintik merah dan mata merah adalah tanda dicekik; suami berbohong.",
            "Korban mengalami alergi makanan yang menyebabkan bintik merah di kulit.",
            "Korban terkena penyakit kulit menular yang sudah dideritanya lama."
        ],
        correctIndex: 1,
        explanation: "Bintik merah di wajah dan leher (petechiae) serta mata merah adalah tanda klasik sesak napas atau dicekik—pembuluh darah kecil pecah karena tekanan. Ini tidak konsisten dengan serangan jantung. Kemungkinan korban dicekik oleh suaminya, lalu suami mengarang cerita serangan jantung."
    },
    // Soal 92
    {
        caseText: "Seorang wanita ditemukan tewas di kamar mandi hotel. Ia ditemukan dengan luka di pergelangan tangan dan air di bak mandi berwarna merah. Polisi menduga bunuh diri. Detektif melihat luka di pergelangan tangan korban berada di sisi yang tidak wajar untuk bunuh diri—luka berada di bagian dalam pergelangan tangan kanan, sementara korban tidak kidal. Apa kesimpulannya?",
        options: [
            "Korban sebenarnya kidal sehingga melukai pergelangan tangan kanannya.",
            "Luka di tangan kanan pada orang tidak kidal mengarah pada pembunuhan.",
            "Luka di pergelangan tangan bisa berada di mana saja tanpa pola tertentu.",
            "Korban menggunakan tangan kanan karena panik saat mengakhiri hidupnya."
        ],
        correctIndex: 1,
        explanation: "Orang tidak kidal menggunakan tangan kanan sebagai tangan dominan. Untuk bunuh diri dengan mengiris pergelangan tangan, orang tidak kidal biasanya melukai pergelangan tangan kiri atau menggunakan tangan kanan untuk mengiris tangan kiri. Luka di pergelangan tangan kanan yang tidak wajar mengarah pada pembunuhan—kemungkinan pelaku tidak mengetahui korban tidak kidal."
    },
    // Soal 93
    {
        caseText: "Seorang pria ditemukan tewas di ruang kerja dengan luka tembak. Di mejanya ada surat bunuh diri yang ditulis tangan. Detektif memeriksa surat itu dan menemukan bahwa tinta di surat masih basah saat mayat ditemukan, padahal korban sudah tewas berjam-jam. Apa kesimpulannya?",
        options: [
            "Korban menulis surat itu beberapa saat sebelum ia meninggal dunia.",
            "Tinta masih basah menunjukkan surat baru ditulis setelah korban tewas.",
            "Tinta yang digunakan korban berkualitas buruk sehingga lambat mengering.",
            "Surat itu ditulis di tempat lain lalu dibawa ke ruang kerja korban."
        ],
        correctIndex: 1,
        explanation: "Tinta yang masih basah saat mayat ditemukan (berjam-jam setelah kematian) menunjukkan surat itu baru ditulis—tidak mungkin oleh korban yang sudah tewas. Kemungkinan pembunuh menulis surat bunuh diri palsu setelah membunuh korban untuk mengalihkan penyelidikan. Ini adalah bukti kuat pembunuhan yang disamarkan."
    },
    // Soal 94
    {
        caseText: "Seorang wanita melaporkan bahwa ia diserang di taman pada malam hari. Ia mengatakan penyerang memukul kepalanya dari belakang dan merampas tasnya. Detektif melihat luka di kepala wanita itu berada di bagian depan, dan tasnya masih tergantung di bahunya. Apa kesimpulannya?",
        options: [
            "Penyerang memukul dari depan meskipun wanita itu mengaku dari belakang.",
            "Luka di depan dan tas masih di bahu menunjukkan cerita wanita itu palsu.",
            "Penyerang memukul dua kali dari arah berbeda sebelum merampas tasnya.",
            "Tas wanita itu tidak berharga sehingga penyerang memilih tidak mengambilnya."
        ],
        correctIndex: 1,
        explanation: "Jika benar diserang dari belakang, luka harusnya berada di belakang kepala. Luka di depan tidak konsisten. Ditambah tas yang masih tergantung di bahu—jika benar dirampas, tas tidak akan ada di sana. Kombinasi kedua fakta ini menunjukkan wanita itu berbohong tentang penyerangan dan perampokan."
    },
    // Soal 95
    {
        caseText: "Seorang pria ditemukan tewas di dalam mobil yang terparkir di garasi rumahnya. Mesin mobil menyala dan pintu garasi tertutup rapat. Polisi menduga bunuh diri karena menghirup karbon monoksida. Detektif melihat jendela mobil sedikit terbuka dan kunci mobil masih di kantong korban. Apa kesimpulannya?",
        options: [
            "Korban sengaja bunuh diri dengan menghirup gas karbon monoksida di garasi.",
            "Jendela terbuka menunjukkan korban berusaha bertahan; ini bisa pembunuhan.",
            "Karbon monoksida tidak berbahaya jika jendela mobil dalam keadaan terbuka.",
            "Kunci di kantong membuktikan korban tidak pernah masuk ke dalam mobil."
        ],
        correctIndex: 1,
        explanation: "Orang yang sengaja bunuh diri dengan gas karbon monoksida akan menutup rapat semua celah agar gas terperangkap. Jendela yang sedikit terbuka menunjukkan korban berusaha bertahan hidup atau tidak berniat mati. Kemungkinan seseorang menyalakan mesin dan meninggalkan korban, atau ini kecelakaan. Detektif curiga pembunuhan yang disamarkan sebagai bunuh diri."
    },
    // Soal 96
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar pendingin (cold storage) sebuah restoran. Pintu kamar pendingin terkunci dari luar, dan hanya manajer restoran yang memiliki kunci. Suhu di dalam sangat dingin. Detektif melihat korban tidak mengenakan jaket tebal, padahal ia bekerja di restoran itu dan tahu betul suhu kamar pendingin. Apa kesimpulannya?",
        options: [
            "Korban lupa membawa jaketnya saat masuk ke kamar pendingin restoran.",
            "Tanpa jaket tebal menunjukkan korban tidak masuk dengan sukarela.",
            "Jaket korban hilang dicuri oleh rekan kerja lain di restoran itu.",
            "Kamar pendingin restoran tidak terlalu dingin sehingga jaket tidak perlu."
        ],
        correctIndex: 1,
        explanation: "Pekerja restoran yang tahu suhu kamar pendingin sangat dingin pasti akan mengenakan jaket tebal jika masuk dengan sukarela. Korban yang tidak mengenakan jaket menunjukkan ia tidak masuk dengan kesadaran sendiri—kemungkinan dipaksa atau sudah tewas sebelum dimasukkan. Manajer sebagai satu-satunya pemegang kunci menjadi tersangka utama."
    },
    // Soal 97
    {
        caseText: "Seorang pria melaporkan bahwa sepedanya dicuri dari depan toko tempat ia bekerja. Ia mengatakan sepeda diparkir di rak sepeda dan ia menemukannya hilang saat pulang kerja. Detektif melihat rak sepeda di depan toko memiliki CCTV, dan rekaman menunjukkan pria itu tiba di toko dengan berjalan kaki pagi itu. Apa kesimpulannya?",
        options: [
            "Sepeda pria itu diparkir di tempat lain yang tidak terpantau kamera.",
            "Pria itu berbohong; ia tiba berjalan kaki sehingga tidak ada sepeda hilang.",
            "Sepeda pria itu dicuri sebelum ia tiba di toko pada pagi hari itu.",
            "Rekaman CCTV toko itu rusak sehingga tidak bisa dijadikan bukti."
        ],
        correctIndex: 1,
        explanation: "Rekaman CCTV menunjukkan pria itu tiba di toko dengan berjalan kaki pada pagi hari. Jika ia tidak membawa sepeda, tidak mungkin ada sepeda yang dicuri dari rak. Pria itu berbohong—kemungkinan ia mengarang cerita kehilangan sepeda untuk mengklaim asuransi atau menutupi masalah keuangan."
    },
    // Soal 98
    {
        caseText: "Seorang wanita ditemukan tewas di dalam perpustakaan pribadinya. Ia duduk di kursi dengan buku terbuka di pangkuan. Tidak ada tanda kekerasan. Detektif melihat halaman buku yang terbuka dalam keadaan bersih dan tidak terlipat, sementara korban memiliki kebiasaan melipat sudut halaman buku yang sedang dibaca. Apa kesimpulannya?",
        options: [
            "Korban belum sempat mulai membaca buku yang ada di pangkuannya.",
            "Buku tanpa lipatan tidak sesuai kebiasaan korban; buku sengaja dibuka.",
            "Korban membaca buku baru sehingga belum sempat melipat halamannya.",
            "Korban membaca dengan sangat hati-hati agar buku tetap bersih dan rapi."
        ],
        correctIndex: 1,
        explanation: "Korban memiliki kebiasaan melipat sudut halaman buku yang sedang dibaca. Buku yang terbuka tanpa lipatan sudut halaman menunjukkan buku itu belum lama dibuka—atau sengaja dibuka dan diletakkan di pangkuan korban setelah ia tewas. Ini adalah upaya menciptakan kesan korban sedang membaca saat meninggal, padahal kematiannya mungkin disebabkan hal lain (misalnya diracun)."
    },
    // Soal 99
    {
        caseText: "Seorang detektif menyelidiki kematian seorang pria di kantornya. Korban ditemukan tewas dengan luka di kepala. Di mejanya ada dua cangkir kopi yang masih hangat, padahal korban biasanya minum kopi sendirian. Detektif melihat cangkir kedua memiliki lipstik di bibirnya. Apa kesimpulannya?",
        options: [
            "Korban minum kopi bersama rekannya sebelum ia tewas di kantor.",
            "Cangkir berlipstik menunjukkan ada perempuan bersama korban sebelum tewas.",
            "Lipstik di cangkir itu milik korban sendiri yang memakai produk kosmetik.",
            "Cangkir kedua sudah lama berada di meja dan tidak terkait kematian."
        ],
        correctIndex: 1,
        explanation: "Dua cangkir kopi hangat menunjukkan korban tidak minum sendirian—ada orang lain bersamanya. Cangkir dengan lipstik menunjukkan tamu itu perempuan. Karena korban tewas dengan luka di kepala dan perempuan itu berada di TKP saat kejadian, ia adalah saksi kunci atau pelaku. Detektif perlu menyelidiki identitas dan keterlibatannya."
    },
    // Soal 100
    {
        caseText: "Seorang pria ditemukan tewas di dalam kamar hotel. Tidak ada luka pada tubuhnya. Detektif melihat jam tangan korban berhenti pada pukul 02.15, dan jam dinding kamar juga berhenti pada pukul 02.15. Namun rekaman CCTV hotel menunjukkan korban masuk ke kamar pukul 23.00 dan tidak keluar lagi. Detektif curiga jam-jam itu sengaja dihentikan. Mengapa?",
        options: [
            "Karena jam tangan dan jam dinding tidak mungkin berhenti pada waktu bersamaan.",
            "Dua jam berhenti di waktu sama terlalu kebetulan; waktu kematian palsu.",
            "Karena korban dikenal sebagai kolektor jam sehingga jamnya banyak.",
            "Rekaman CCTV hotel salah mencatat waktu sehingga tidak bisa dipercaya."
        ],
        correctIndex: 1,
        explanation: "Dua jam berbeda (jam tangan dan jam dinding) yang berhenti pada waktu yang sama persis (02.15) terlalu kebetulan untuk terjadi secara alami. Kemungkinan pembunuh sengaja menghentikan kedua jam untuk menciptakan waktu kematian palsu—misalnya untuk memberi alibi bagi seseorang. CCTV membuktikan korban masih hidup dan masuk kamar pukul 23.00, sehingga waktu 02.15 adalah rekayasa."
    }
];
