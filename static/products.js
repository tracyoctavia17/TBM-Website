const PRODUCTS = [
  {
    "nama": "AGCEL 250ML x 50 BTL",
    "harga": 50000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/nutrisi/agcel-500sl.png"
  },
  {
    "nama": "AGIL 250 ML x 40 BTL",
    "harga": 145000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/herbisida/agil.png"
  },
  {
    "nama": "AGRIL 100 ML x 50 BTL",
    "harga": 50000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/herbisida/agril-240ec.png"
  },
  {
    "nama": "AGRIL 250 ML x 40 BTL",
    "harga": 90000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/herbisida/agril-240ec.png"
  },
  {
    "nama": "AKI CBA",
    "harga": 170000,
    "category": "umum",
    "brand": "cba",
    "image": "static/images/alat/aki-cba.png"
  },
  {
    "nama": "AKI DGW",
    "harga": 210000,
    "category": "umum",
    "brand": "dgw",
    "image": ""
  },
  {
    "nama": "ALAMOR 400 ML x 20 PAK",
    "harga": 170000,
    "category": "fungisida",
    "brand": "",
    "image": "static/images/herbisida/alamor-400ml.png"
  },
  {
    "nama": "ALAMOR 800 ML x 12 PAK",
    "harga": 295000,
    "category": "fungisida",
    "brand": "",
    "image": "static/images/herbisida/alamor-800ml.png"
  },
  {
    "nama": "ALAT TANAM ABC",
    "harga": 350000,
    "category": "alat",
    "brand": "",
    "image": "static/images/alat/alat-tanam-abc.png"
  },
  {
    "nama": "ALAT TANAM PRINCE",
    "harga": 275000,
    "category": "alat",
    "brand": "",
    "image": "static/images/alat/alat-tanam-prince.png"
  },
  {
    "nama": "ALIKA 100 ML x 50 BTL",
    "harga": 70000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": "static/images/insektisida/alika-100ml.png"
  },
  {
    "nama": "ALIKA 250 ML x 40 BTL",
    "harga": 150000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": "static/images/insektisida/alika-250ml.png"
  },
  {
    "nama": "ALITA 100 ML x 50 BTL",
    "harga": 40000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/alita-150ec.png"
  },
  {
    "nama": "ALITA 250 ML x 20 BTL",
    "harga": 85000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/alita-150ec.png"
  },
  {
    "nama": "ALLY 20 WDG x 20 BKS",
    "harga": 7000,
    "category": "umum",
    "brand": "",
    "image": "static/images/herbisida/ally-20wg.png"
  },
  {
    "nama": "ALMERON 1 L x 20 BTL",
    "harga": 220000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ALMERON 500 ML x 20 BTL",
    "harga": 120000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "AMANDY 400 ML x 40 BTL",
    "harga": 35000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "AMURON 100 ML x 100 BTL",
    "harga": 90000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/amuron-70ec.png"
  },
  {
    "nama": "AMURON 250 ML x 40 BTL",
    "harga": 175000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/amuron-70ec.png"
  },
  {
    "nama": "ANTAS 1 L x 10 BTL",
    "harga": 255000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTAS 500 ML x 20 BTL",
    "harga": 135000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTIJI 1 L x 10 BTL",
    "harga": 300000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTIJI 500 ML x 20 BTL",
    "harga": 165000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTRACOL 1 KG x 12 BKS",
    "harga": 175000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTRACOL 250 GR x 40 BKS",
    "harga": 50000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ANTRACOL 500 GR x 20 BKS",
    "harga": 97000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "AVATAR 100 ML x 36 BTL",
    "harga": 115000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "AVATAR 200 ML x 18 BTL",
    "harga": 200000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BABLASS 1 L x 20 BTL",
    "harga": 55000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BABLASS 5 L x 4 GLN",
    "harga": 255000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BAMBU IJO 10 BTL x 40 PAK",
    "harga": 7500,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BASAGRAN 1 L x 10 BTL",
    "harga": 265000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BASAGRAN 500 ML x 20 BTL",
    "harga": 150000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BASMILANG 1 L x 20 BTL",
    "harga": 63000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BASMILANG 5 L x 4 GLN",
    "harga": 295000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BENFURON 25 GR 10 BKS x 16 PAK",
    "harga": 20000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BENFURON 5 GR 20 BKS x 20 PAK",
    "harga": 5000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BENPLUS 40 GR 10 BKS x 20 PAK",
    "harga": 12000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BESTNOID 100 GR x 50 BKS",
    "harga": 85000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BISI  99 1 KG x 20 KG",
    "harga": 85000,
    "category": "bibit",
    "brand": "bisi",
    "image": "static/images/bisi/bisi-99.png"
  },
  {
    "nama": "BISI 18 1 KG x 20 KG",
    "harga": 100000,
    "category": "bibit",
    "brand": "bisi",
    "image": ""
  },
  {
    "nama": "BISI 2 1 KG x 20 KG",
    "harga": 74000,
    "category": "bibit",
    "brand": "bisi",
    "image": "static/images/bisi/bisi-2-1kg.png"
  },
  {
    "nama": "BISI 959 1 KG x 20 KG",
    "harga": 90000,
    "category": "bibit",
    "brand": "bisi",
    "image": "static/images/bisi/bisi-959.png"
  },
  {
    "nama": "BISI MACHO 1 KG x 20 KG",
    "harga": 87000,
    "category": "bibit",
    "brand": "bisi",
    "image": "static/images/bisi/BISI_235_MACHO.png"
  },
  {
    "nama": "BISI MASKOT 1 KG x 20 KG",
    "harga": 85000,
    "category": "bibit",
    "brand": "bisi",
    "image": "static/images/bisi/maskot-bisi234.png"
  },
  {
    "nama": "BOOM JAGUNG KECIL x 30 PAK",
    "harga": 85000,
    "category": "bibit",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BOOM PADI KECIL x 30 PAK",
    "harga": 85000,
    "category": "bibit",
    "brand": "",
    "image": ""
  },
  {
    "nama": "BUFOS 150 SL 1L x 20 BTL",
    "harga": 60000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/herbisida/bufos-150sl-1l.png"
  },
  {
    "nama": "BUFOS 150 SL 5L x 4 GLN",
    "harga": 275000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/herbisida/bufos-150sl-5l.png"
  },
  {
    "nama": "CALARIS 1 L x 10 PAK",
    "harga": 310000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "CALARIS 500 ML x 20 PAK",
    "harga": 160000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "CBA 1 L x 20 BTL",
    "harga": 68000,
    "category": "umum",
    "brand": "cba",
    "image": ""
  },
  {
    "nama": "CBA 400 ML x 20 BTL",
    "harga": 32000,
    "category": "umum",
    "brand": "cba",
    "image": ""
  },
  {
    "nama": "CBA 5 L x 4 GLN",
    "harga": 310000,
    "category": "umum",
    "brand": "cba",
    "image": ""
  },
  {
    "nama": "CENTATRIN 1 L x 20 BTL",
    "harga": 100000,
    "category": "herbisida",
    "brand": "",
    "image": "static/images/herbisida/centatrin-500sc.png"
  },
  {
    "nama": "CENTATRIN 5 L x 4 GLN",
    "harga": 460000,
    "category": "herbisida",
    "brand": "",
    "image": "static/images/herbisida/centatrin-500sc.png"
  },
  {
    "nama": "CEPHA 100 ML x 50 BTL",
    "harga": 40000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CHLORMITE 200 ML x 48 BTL",
    "harga": 55000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CHLORMITE 400 ML x 24 BTL",
    "harga": 95000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "COPCIDE 100 GR x 100 BKS",
    "harga": 35000,
    "category": "fungisida",
    "brand": "",
    "image": "static/images/fungisida/copcide-77wp.png"
  },
  {
    "nama": "CORNBELT 500 ML x 20 PAK",
    "harga": 290000,
    "category": "bibit",
    "brand": "",
    "image": "static/images/herbisida/cornbelt-336sc.png"
  },
  {
    "nama": "CORONA 200 ML x 36 BTL",
    "harga": 155000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CORONA 80 ML x 36 BTL",
    "harga": 70000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "COZENE 400 GR x 20 BKS",
    "harga": 65000,
    "category": "fungisida",
    "brand": "",
    "image": "static/images/fungisida/cozene-400g.png"
  },
  {
    "nama": "CRUISER 12.5 ML x 20 BTL",
    "harga": 35000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "CRUMBLE 100 ML x 50 BTL",
    "harga": 90000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CRUMBLE 250 ML x 50 BTL",
    "harga": 215000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CURACRON 100 ML x 50 BTL",
    "harga": 38000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/curacron-100ml.png"
  },
  {
    "nama": "CURACRON 250 ML x 40 BTL",
    "harga": 80000,
    "category": "insektisida",
    "brand": "",
    "image": "static/images/insektisida/curacron-100ml.png"
  },
  {
    "nama": "CYPERMAX 1 L x 20 BTL",
    "harga": 110000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "CYPERMAX 500 ML x 20 BTL",
    "harga": 60000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DANGKE 100 GR x 100 BKS",
    "harga": 25000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DANGKE 250 GR x 40 BKS",
    "harga": 58000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DANGKE 400 GR x 30 BKS",
    "harga": 95000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DEBESTAN 100 GR x 50 BKS",
    "harga": 75000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DEBESTAR 250ML x 50 BTL",
    "harga": 130000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DEMOLISH 100 ML x 36 BTL",
    "harga": 80000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "DEMOLISH 250 ML x 36 BTL",
    "harga": 140000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EM 4 1 L x 15 BTL",
    "harga": 35000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMACEL 1 L x 10 BTL",
    "harga": 300000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMACEL 250 ML x 40 BTL",
    "harga": 85000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMACEL 500 ML x 20 BTL",
    "harga": 160000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMAZO 100 ML x 50 BTL",
    "harga": 80000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMAZO 250 ML x 40 BTL",
    "harga": 170000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EMKAPE 1 KG x 20 KG",
    "harga": 55000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EROS GOLD 100 GR x 50 BKS",
    "harga": 25000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EXPLORE 80 ML x 36 BTL",
    "harga": 47000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "EXTRATINE 400 ML x 20 BTL",
    "harga": 50000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FARMECTIN 1 L x 10 BTL",
    "harga": 180000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FARMECTIN 100 ML x 100 BTL",
    "harga": 30000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FARMECTIN 250 ML x 50 BTL",
    "harga": 55000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FASTAC 100 ML x 48 BTL",
    "harga": 25000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FASTDONE 1 L x 10 BTL",
    "harga": 230000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FASTDONE 500 ML x 20 BTL",
    "harga": 130000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FENITE 100 ML x 50 BTL",
    "harga": 95000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FENITE 200 ML x 20 BTL",
    "harga": 185000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FITOMIC 500 ML x 40 BTL",
    "harga": 60000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FLYTOP 100 ML x 50 BTL",
    "harga": 90000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FLYTOP 250 ML x 20 BTL",
    "harga": 215000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FORDAM 400 ML x 40 BTL",
    "harga": 35000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FORDAM 5 L x 4 GLN",
    "harga": 370000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FORDAM 800 ML x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FOSTIN 1 L x 16 BTL",
    "harga": 170000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FOSTIN 100 ML x 50 BTL",
    "harga": 25000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "FOSTIN 400 ML x 20 BTL",
    "harga": 75000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALATOP 620 SL 1 L x 20 BTL",
    "harga": 87000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALATOP 620 SL 20 L",
    "harga": 1550000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALATOP 620 SL 5 L x 4 GLN",
    "harga": 410000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALATOP 620 SL 500 ML x 20 BTL",
    "harga": 47000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALLANT 1 L x 10 BTL",
    "harga": 300000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GALLANT 500 ML x 20 BTL",
    "harga": 160000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GANDASIL BUAH 100 GR x 144 BKS",
    "harga": 15000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GANDASIL BUAH 500 GR x 24 BKS",
    "harga": 60000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GANDASIL DAUN 100 GR x 144 BKS",
    "harga": 15000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GANDASIL DAUN 500 GR x 24 BKS",
    "harga": 55000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GAUCHO 20 ML x 100 BTL",
    "harga": 43000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "GAUCHO 50 ML x 50 BTL",
    "harga": 93000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "GIBGRO 10 SP 40 BKS x 25 PAK",
    "harga": 4500,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GIBGRO 20 SP 40 BKS x 25 PAK",
    "harga": 7000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GLUBEST 200 SL 1 L x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GLUBEST 200 SL 20 L",
    "harga": 1110000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GLUBEST 200 SL 5 L x 4 GLN",
    "harga": 295000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GOMAX 276 SL 10 L x 3 GLN",
    "harga": 440000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GOMAX 276 SL 1L x 20 BTL",
    "harga": 50000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GOMAX 276 SL 20 L",
    "harga": 860000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GOMAX 276 SL 5 L x 4 GLN",
    "harga": 230000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GRAMOXONE 1 L x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "GRAMOXONE 5 L x 4 GLN",
    "harga": 295000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "GREAT 200 GR x 20 BKS",
    "harga": 45000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GRIMAXONE 1 L x 20 BTL",
    "harga": 45000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GRIMAXONE 5 L x 4 GLN",
    "harga": 210000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GROWER 1 KG x 24 kg",
    "harga": 33000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "GROWER 50 KG",
    "harga": 18000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "INCIPIO 100 ML x 50 BTL",
    "harga": 190000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "INSTA JUMBO 300 SL 1 L x 20 BTL",
    "harga": 85000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "INSTA JUMBO 300 SL 20 L",
    "harga": 1500000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "INSTA JUMBO 300 SL 5 L x 4 GLN",
    "harga": 380000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "INSTA JUMBO 300 SL 500 ML x 40 BTL",
    "harga": 45000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KANITRAT 1 KG x 20 BKS",
    "harga": 40000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARATE + BORON 25 KG",
    "harga": 16000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG BAWANG 60 X 100",
    "harga": 2000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG BERAS GAJAH",
    "harga": 3000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG BERAS SRIKANDI",
    "harga": 3000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG GABAH GAJAH",
    "harga": 4000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG KUDA LAUT",
    "harga": 4000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG POLOS SRIKANDI 60 x 98",
    "harga": 4000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KARUNG STRIP MERAH",
    "harga": 3200,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KAYABAS 1 L x 12 PAK",
    "harga": 265000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KAYABAS 500 ML x 20 PAK",
    "harga": 150000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KILL UP 1 L x 20 BTL",
    "harga": 6500,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KILL UP 5 L x 4 GLN",
    "harga": 305000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KINGLON 1 L x 20 BTL",
    "harga": 180000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KINGLON 100 ML x 100 BTL",
    "harga": 28000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KINGLON 250 ML x 50 BTL",
    "harga": 60000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KINGLON 500 ML x 40 BTL",
    "harga": 100000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KLENSECT EXTRA 200 ML x 48 BTL",
    "harga": 47000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KLENSECT EXTRA 400 ML x 24 BTL",
    "harga": 85000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KNO3 PAK TANI 1 KG x 20 BKS",
    "harga": 50000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "KRAN OTOMATIS",
    "harga": 30000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "LARAS PIPA TELESKOPIK",
    "harga": 35000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "LASER 1 L x 16 BTL",
    "harga": 150000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "LASER 100 ML x 50 BTL",
    "harga": 25000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "LASER 500 ML x 20 BTL",
    "harga": 80000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "LINDOMIN 400 ML x 20 BTL",
    "harga": 45000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MARSHAL 25 GR 40 BKS x 5 PAK",
    "harga": 10000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MARSHAL 500 ML x 24 BTL",
    "harga": 80000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MATADOR 250 ML x 40 BTL",
    "harga": 72000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MATADOR 80 ML x 100 BTL",
    "harga": 30000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MATARIN 250 ML x 20 BTL",
    "harga": 45000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MATARIN 500 ML x 20 BTL",
    "harga": 75000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MAXXCIDE 100 GR 10 BKS x 10 PAK",
    "harga": 30000,
    "category": "insektisida",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXCIDE 400 GR x 50 BKS",
    "harga": 95000,
    "category": "insektisida",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXFURON 25 GR 10 BKS x 24 PAK",
    "harga": 18000,
    "category": "insektisida",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXFURON 5 GR 10 BKS x 10 PAK",
    "harga": 4000,
    "category": "insektisida",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXFURON 50 GR 10 BKS x 10 PAK",
    "harga": 30000,
    "category": "insektisida",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXIGRO-B 1 KG x 20 BKS",
    "harga": 55000,
    "category": "pupuk",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXIGRO-B 500 GR x 40 BKS",
    "harga": 30000,
    "category": "pupuk",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXIGRO-D 1 KG x 20 BKS",
    "harga": 40000,
    "category": "pupuk",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MAXXIGRO-D 500 GR x 40 BKS",
    "harga": 25000,
    "category": "pupuk",
    "brand": "maxxi",
    "image": ""
  },
  {
    "nama": "MEKARMAP 1 KG x 20 BKS",
    "harga": 50000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MKP 1 KG x 20 BKS",
    "harga": 65000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULSA CBA",
    "harga": 830000,
    "category": "alat",
    "brand": "cba",
    "image": ""
  },
  {
    "nama": "MULSA PROTANA 40 CM",
    "harga": 825000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULSA PROTANA 60 CM",
    "harga": 825000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULSA QUEEN 60 CM",
    "harga": 625000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULTI PADI PLUS 1 KG x 20 BKS",
    "harga": 48000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULTI TOMIL 200 GR x 90 BKS",
    "harga": 40000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MULTI TOMIL 400 GR x 50 BKS",
    "harga": 70000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MUTIARA 1 KG x 24 KG",
    "harga": 32000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "MUTIARA 50 KG",
    "harga": 17500,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NEOCRON 1 L x 15 BTL",
    "harga": 315000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NEOCRON 250 ML x 20 BTL",
    "harga": 90000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NEOCRON 500 ML x 20 BTL",
    "harga": 165000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NK 212 1 KG x 20 KG",
    "harga": 86000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk212-1kg.png"
  },
  {
    "nama": "NK 212 5 KG x 4 SAK",
    "harga": 405000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk212-1kg.png"
  },
  {
    "nama": "NK 212 SAKTI 1 KG x 20 KG",
    "harga": 108000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk212-1kg.png"
  },
  {
    "nama": "NK PERKASA 1 KG x 20 KG",
    "harga": 117000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk6172perkasa-1kg.png"
  },
  {
    "nama": "NK PERKASA 5 KG x 4 SAK",
    "harga": 550000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk6172perkasa-1kg.png"
  },
  {
    "nama": "NK PERKASA SAKTI 1 KG x 20 KG",
    "harga": 154000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk6172perkasa-1kg.png"
  },
  {
    "nama": "NK SUMO 1 KG x 20 KG",
    "harga": 116000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk7328sumo-1kg.png"
  },
  {
    "nama": "NK SUMO 5 KG x 4 SAK",
    "harga": 570000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk7328sumo-1kg.png"
  },
  {
    "nama": "NK SUMO SAKTI 1 KG x 20 KG",
    "harga": 147000,
    "category": "bibit",
    "brand": "nk",
    "image": "static/images/syngenta/nk7328sumo-1kg.png"
  },
  {
    "nama": "NOMINEE 100 ML x 50 BTL",
    "harga": 80000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "NOMINEE 250 ML x 40 BTL",
    "harga": 185000,
    "category": "herbisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "NORDOX 100 GR x 150 BKS",
    "harga": 30000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOXONE 1 L x 20 BTL",
    "harga": 60000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOXONE 5 L x 4 GLN",
    "harga": 275000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOZZLE LUBANG 4",
    "harga": 20000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOZZLE LUBANG 5",
    "harga": 20000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOZZLE LUBANG 6",
    "harga": 25000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NOZZLE LUBANG 8",
    "harga": 30000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "NPK PELANGI 16.16.16 @ 5KG",
    "harga": 12000,
    "category": "pupuk",
    "brand": "petrokimia",
    "image": ""
  },
  {
    "nama": "NPK PELANGI 20.10.10",
    "harga": 10000,
    "category": "pupuk",
    "brand": "petrokimia",
    "image": ""
  },
  {
    "nama": "NPK PELANGI 50 KG",
    "harga": 11000,
    "category": "pupuk",
    "brand": "petrokimia",
    "image": ""
  },
  {
    "nama": "NUGRASS 250ML x 40 BTL",
    "harga": 95000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ODORI 1 L x 10 BTL",
    "harga": 270000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ODORI 500 ML x 20 BTL",
    "harga": 140000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "OPTIMUS 1 L x 20 BTL",
    "harga": 60000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "OPTIMUS 5 L x 4 GLN",
    "harga": 285000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "OXADAN 1 KG x 10 BKS",
    "harga": 30000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "OXADAN 2 KG x 5 BKS",
    "harga": 55000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PADI CIHERANG 5 KG x 8 BKS",
    "harga": 80000,
    "category": "bibit",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PADIVIT - B 1 KG x 20 BKS",
    "harga": 50000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PADIVIT - B 500 GR x 40 BKS",
    "harga": 30000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PADIVIT - D 500 GR x 40 BKS",
    "harga": 22000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAG 1 L x 5 PAK",
    "harga": 233000,
    "category": "nutrisi",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAG 500 ML x 12 PAK",
    "harga": 123000,
    "category": "nutrisi",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAG PRIME 500 ML x 12 PAK",
    "harga": 160000,
    "category": "nutrisi",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAKET ANTI KRITING x 20 PAK",
    "harga": 80000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAKET JAGUNG JOSSS -B x 20 PAK",
    "harga": 105000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PAKET JAGUNG JOSSS -D x 20 PAK",
    "harga": 105000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PERTIWI 5 1 KG x 20 KG",
    "harga": 90000,
    "category": "bibit",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PHONSKA PLUS 25 KG",
    "harga": 13800,
    "category": "pupuk",
    "brand": "petrokimia",
    "image": ""
  },
  {
    "nama": "PLENUM 25 GR 10 BKS x 12 PAK",
    "harga": 45000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PRIMADAN 2 KG x 10 BKS",
    "harga": 40000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PRIMAX 1 L x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PRIMAX 5 L x 4 GLN",
    "harga": 305000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "PUPUK UREA  50 KG",
    "harga": 13000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RABBAT 100 ML x 150 BTL",
    "harga": 60000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RABBAT 250 ML x 60 BTL",
    "harga": 130000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RAMBO GOLD 1 L x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RAMBO GOLD 5 L x 4 GLN",
    "harga": 300000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RAMBO PEAK 1 L x 20 BTL",
    "harga": 75000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RAMBO PEAK 5 L x 4 GLN",
    "harga": 350000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGENT RED 100 ML x 48 BTL",
    "harga": 50000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGENT RED 50 ML x 80 BTL",
    "harga": 30000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGGI 100 ML x 100 BTL",
    "harga": 40000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGGI 50 ML x 100 BTL",
    "harga": 30000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGGI 500 ML x 20 BTL",
    "harga": 105000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "REGULATOR",
    "harga": 60000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ROGER 1 L x 20 BTL",
    "harga": 65000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ROGER 5 L x 4 GLN",
    "harga": 295000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RONDA GOLD 800 ML x 20 BTL",
    "harga": 40000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ROUNDUP 1 L x 12 BTL",
    "harga": 90000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ROUNDUP 4 L x 4 GLN",
    "harga": 335000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUDSTAR 1 L x 16 BTL",
    "harga": 280000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUDSTAR 500 ML x 20 BTL",
    "harga": 150000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUMPAS 100 ML x 100 BTL",
    "harga": 50000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUSO 1 L x 20 BTL",
    "harga": 67000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUSO 20 L",
    "harga": 1200000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "RUSO 5 L x 4 GLN",
    "harga": 310000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SAROMYL 5 GR 20 BKS x 20 PAK",
    "harga": 8000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SCORE 250 ML x 40 BTL",
    "harga": 175000,
    "category": "fungisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "SCORE 80 ML x 50 BTL",
    "harga": 65000,
    "category": "fungisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "SELANG",
    "harga": 35000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SELTIMA 250ML x 24 BTL",
    "harga": 115000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SELTIMA 500ML x 20 BTL",
    "harga": 200000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SEPRINT PADI 500 ML x 20 BTL",
    "harga": 17000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SEPRINT UMUM 300 ML x 30 BTL",
    "harga": 13000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SERVOXONE 1 L x 20 BTL",
    "harga": 45000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SEVIN 100 GR x 100 BKS",
    "harga": 50000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SIDAMETRIN 1 L x 15 BTL",
    "harga": 87000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SIDAMETRIN 100 ML x 50 BTL",
    "harga": 17000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SIDAMETRIN 400 ML x 25 BTL",
    "harga": 42000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SIDARAT x 10 BKS",
    "harga": 8000,
    "category": "umum",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPENOC 1 L x 10 BTL",
    "harga": 255000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPONTAN 1 L x 12 BTL",
    "harga": 105000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPONTAN 200 ML x 20 BTL",
    "harga": 35000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPONTAN 4 L x 4 GLN",
    "harga": 335000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPONTAN 500 ML x 20 BTL",
    "harga": 60000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPONTAN KING 1 L x 12 BTL",
    "harga": 155000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SPRINTXONE 1 L x 20 BTL",
    "harga": 35000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "STRAP BELT",
    "harga": 35000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SUPREMO 1 L x 20 BTL",
    "harga": 70000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "SUPREMO 4 L x 6 GLN",
    "harga": 265000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TALI RAVIA",
    "harga": 20000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TANGKY BHINEKA",
    "harga": 400000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TANGKY CBA",
    "harga": 525000,
    "category": "alat",
    "brand": "cba",
    "image": ""
  },
  {
    "nama": "TANGKY KEJORA",
    "harga": 450000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TANGKY NAYA",
    "harga": 550000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TAS PLASTIK 15 x 31",
    "harga": 50000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TAS PLASTIK 21 x 39",
    "harga": 50000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TAS PLASTIK 28 x 48",
    "harga": 50000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TERPAL 2 x 3",
    "harga": 50000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TERPAL 3 x 4",
    "harga": 95000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TERPAL 4 x 5",
    "harga": 140000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TERPAL 5 x 7",
    "harga": 240000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TERPAL 6 x 8",
    "harga": 325000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TOMBOL SAKLAR",
    "harga": 20000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TOPSIN 200 ML x 20 BTL",
    "harga": 45000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TOPSIN 500 ML x 20 BTL",
    "harga": 90000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TRISULA 1 L x 20 BTL",
    "harga": 58000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TRISULA 500 ML x 20 BTL",
    "harga": 35000,
    "category": "herbisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "TROBOS 250 ML x 50 BTL",
    "harga": 45000,
    "category": "fungisida",
    "brand": "",
    "image": ""
  },
  {
    "nama": "ULTRADAP 1 KG x 20 BKS",
    "harga": 55000,
    "category": "pupuk",
    "brand": "",
    "image": ""
  },
  {
    "nama": "VAYEGO 100 ML x 50 BTL",
    "harga": 225000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "VIRTAKO 100 ML x 50 BTL",
    "harga": 225000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "VIRTAKO 50 ML x 100 BTL",
    "harga": 110000,
    "category": "insektisida",
    "brand": "syngenta",
    "image": ""
  },
  {
    "nama": "WARING JANGKAR ASLI",
    "harga": 500000,
    "category": "alat",
    "brand": "",
    "image": ""
  },
  {
    "nama": "WINDER 100 GR 10 BKS x 8 PAK",
    "harga": 25000,
    "category": "insektisida",
    "brand": "",
    "image": ""
  }
];
