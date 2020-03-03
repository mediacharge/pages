<script>
 $( function() {
   var availableTags = [
    "Kawasaki J 125",
"Kawasaki J 300",
"Kawasaki Ninja 1000 SX",
"Kawasaki Ninja 125",
"Kawasaki Ninja 400",
"Kawasaki Ninja 650",
"Kawasaki Ninja 650 (35 kW)",
"Kawasaki Ninja H2",
"Kawasaki Ninja H2 Carbon",
"Kawasaki Ninja H2 SX SE"",
"Kawasaki Ninja H2R",
"Kawasaki Ninja ZX-10 R SE",
"Kawasaki Ninja ZX-10 RR",
"Kawasaki Ninja ZX-6R",
"Kawasaki Versys 1000",
"Kawasaki Versys 650 (35 kW)",
"Kawasaki Versys 650 (51 kW)",
"Moto Guzzi V7 III Carbon",
"Moto Guzzi V7 III Carbon (34 kW)",
"Moto Guzzi V7 III Milano",
"Moto Guzzi V7 III Milano (34 kW)",
"Moto Guzzi V7 III Racer",
"Moto Guzzi V7 III Racer (34 kW)",
"Moto Guzzi V7 III Rough",
"Moto Guzzi V7 III Rough (34 kW)",
"Moto Guzzi V7 III Special",
"Moto Guzzi V7 III Special (34 kW)",
"Moto Guzzi V7 III Stone",
"Moto Guzzi V7 III Stone (34 kW)",
"Moto Guzzi V85 TT",
"Moto Guzzi V9 Bobber",
"Moto Guzzi V9 Bobber Sport",
"Moto Guzzi V9 Roamer",
"Moto Morini Corsaro 1200 ZZ",
"MV Agusta Brutale 1090",
"MV Agusta Brutale 1090 RR",
"MV Agusta Brutale 800",
"MV Agusta Brutale 800 RR",
"MV Agusta Brutale Dragster 800",
"MV Agusta Brutale Dragster 800 RR",
"MV Agusta F3 675",
"MV Agusta F3 675 RC",
"MV Agusta F3 800",
"MV Agusta F3 800 RC",
"MV Agusta Turismo Veloce 800",
"MV Agusta Turismo Veloce 800 Lusso",
"MV Agusta Turismo Veloce 800 Lusso RC",
"Peugeot Belville 125 Allure ABS",
"Peugeot Belville 125 RS ABS",
"Peugeot Citystar 125",
"Peugeot Citystar 125 SBC u. ABS",
"Peugeot Citystar 200 ABS",
"Peugeot Django 125 Allure ABS",
"Peugeot Django 125 Evasion ABS",
"Peugeot Django 125 Heritage SBC",
"Peugeot Django 125 Sport ABS",
"Peugeot Metropolis 400 Allure ABS",
"Peugeot Metropolis 400 RS ABS",
"Peugeot Metropolis 400 RX-R ABS",
"Peugeot Satelis 2 125 ABS",
"Peugeot Satelis 2 125 Black Edition ABS",
"Peugeot Satelis 2 125 RS ABS",
"Peugeot Speedfight 4 125",
"Peugeot Tweet 125 E ABS",
"Peugeot Tweet 125 E RS SBC",
"Peugeot Tweet 125 E SBC",
"Piaggio Beverly 300 i.e.",
"Kawasaki Vulcan S (35 kW)",
"Kawasaki Vulcan S (45 kW)",
"Kawasaki W800",
"Kawasaki W800 Café",
"Kawasaki W800 Street",
"Kawasaki Z 1000",
"Kawasaki Z 1000 R Edition",
"Kawasaki Z 125",
"Kawasaki Z 400",
"Kawasaki Z 650 (35 kW)",
"Kawasaki Z 650 (50 kW)",
"Kawasaki Z 900",
"Kawasaki Z 900 (70 kW)",
"Kawasaki Z 900 RS",
"Kawasaki Z 900 RS Cafe",
"Kawasaki Z H2",
"Kawasaki ZZR 1400 (147 kW)",
"Kawasaki ZZR 1400 (72 kW)",
"KTM 125 Duke",
"KTM 1290 Super Adventure R",
"KTM 1290 Super Adventure S",
"KTM 1290 Super Duke GT",
"KTM 1290 Super Duke R",
"KTM 390 Duke",
"KTM 690 Enduro R",
"KTM 690 SMC R",
"KTM 790 Adventure",
"KTM 790 Adventure (35 kW)",
"KTM 790 Adventure R",
"KTM 790 Adventure R (35 kW)",
"KTM 790 Duke",
"KTM 790 Duke L",
"KTM 790 Duke L (35 kW)",
"KTM 890 Duke R",
"KTM Freeride 250 F",
"KTM Freeride E-XC",
"KTM RC 125",
"KTM RC 390",
"Kymco AK 550i ABS",
"Kymco Downtown 125i ABS",
"Kymco Downtown 350i ABS",
"Kymco People GT 125i",
"Kymco People GT 300i ABS",
"Kymco Xciting 400i ABS",
"Kymco X-Town 125i ABS",
"Kymco X-Town 300i ABS",
"Moto Guzzi Audace Carbon",
"Moto Guzzi California 1400 Touring",
"Moto Guzzi Eldorado",
"Moto Guzzi MGX-21",
"Piaggio Beverly 300 i.e. Police",
"Piaggio Beverly 350 SportTouring",
"Piaggio Beverly S 300 i.e.",
"Piaggio Liberty 125 IGET 4T 3V E4",
"Piaggio Liberty 125 IGET 4T 3V Sport",
"Piaggio Medley 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS Special Edition",
"Piaggio MP3 350",
"Piaggio MP3 500 ABS-ASR SE",
"Piaggio MP3 500 hpe Business",
"Piaggio MP3 500 hpe Sport",
"Piaggio MP3 Business ABS/ASR 300 i.e.",
"Piaggio MP3 Business ABS/ASR 500 i.e.",
"Piaggio MP3 Sport ABS/ASR 300 i.e.",
"Piaggio MP3 Sport ABS/ASR 500 i.e.",
"Royal Enfield Bullet 500 EFI",
"Royal Enfield Classic 500 EFI",
"Royal Enfield CONTINENTAL GT 535 EFI",
"Royal Enfield Continental GT 650 EFI Twin",
"Royal Enfield Himalayan",
"Royal Enfield Interceptor 650 EFI Twin",
"Sommer Diesel 516",
"Suzuki Address 110 (UK110NML9)",
"Suzuki Burgman 400 (AN400AL9)",
"Suzuki GSX-R 1000 (GSX-R1000AL8)",
"Suzuki GSX-R 1000 R (GSX-R1000RAL8)",
"Suzuki GSX-R 125 (GSX-R125AL8)",
"Suzuki GSX-S 1000 (GSX-S1000AL9)",
"Suzuki GSX-S 1000 F (GSX-S1000FAL9)",
"Suzuki GSX-S 1000 S Katana (GSX-S1000SAM0)",
"Suzuki GSX-S 125 (GSX-S125AL8)",
"Suzuki GSX-S 750",
"Suzuki GSX-S 750 (35 kW)",
"Suzuki SV 650 (35 kW)",
"Suzuki SV 650 (SV650AL9)",
"Suzuki SV 650 X (SV650XAL8)",
"Suzuki V-Strom 1050",
"Suzuki V-Strom 1050 XT",
"Suzuki V-Strom 650 (35 kW)",
"Suzuki V-Strom 650 (DL650)",
"Suzuki V-Strom 650 XT (35 kW)",
"Suzuki V-Strom 650 XT (DL650)",
"SWM RS 125 R",
"SWM RS 300 R",
"SWM RS 500 R",
"SWM SM 125 R",
"SWM SM 500 R",
"SWM Superdual T",
"SWM Superdual X",
"SYM Jet4 125i",
"SYM Joyride 125i Evo",
"SYM Maxsym 400 i ABS",
"SYM Maxsym 600 i ABS",
"SYM Orbit II 125i",
"SYM Symphony SR 125i",
"SYM Symphony ST 125i",
"SYM X´Pro 125i",
"Triumph Bobber TFC",
"Triumph Bonneville Bobber",
"Triumph Bonneville Bobber Black",
"Triumph Bonneville Speedmaster",
"Triumph Bonneville T100",
"Triumph Bonneville T100 (35 kW)",
"Triumph Bonneville T100 Black",
"Triumph Bonneville T100 Black (35 kW)",
"Triumph Bonneville T100 Bud Ekins",
"Triumph Bonneville T100 Bud Ekins (35 kW)",
"Triumph Bonneville T120",
"Triumph Bonneville T120 Black",
"Triumph Bonneville T120 Bud Ekins",
"Triumph Daytona Moto2 TM 765",
"Triumph Rocket 3 GT",
"Triumph Rocket 3 R",
"Triumph Rocket 3 TFC",
"Triumph Scrambler 1200 XC",
"Triumph Scrambler 1200 XE",
"Triumph Speed Triple RS",
"Triumph Speed Triple S",
"Triumph Speed Twin",
"Triumph Street Scrambler 900",
"Triumph Street Scrambler 900 (35 kW)",
"Triumph Street Triple R",
"Triumph Street Triple R LRH",
"Triumph Street Triple RS",
"Triumph Street Triple S",
"Triumph Street Triple S (35 kW)",
"Triumph Street Triple S (70 kW)",
"Triumph Street Twin",
"Triumph Street Twin (35 kW)",
"Triumph Thruxton 1200",
"Triumph Thruxton 1200 R",
"Triumph Thruxton RS",
"Triumph Thruxton TFC",
"Triumph Tiger 1200 Alpine Edition",
"Triumph Tiger 1200 Desert Edition",
"Triumph Tiger 1200 XCA",
"Triumph Tiger 1200 XCx",
"Triumph Tiger 1200 XR",
"Triumph Tiger 1200 XRT",
"Triumph Tiger 1200 XRx",
"Triumph Tiger 1200 XRx LRH",
"Triumph Tiger 800 XCA",
"Triumph Tiger 800 XCx",
"Triumph Tiger 800 XR",
"Triumph Tiger 800 XRt",
"Triumph Tiger 800 XRx",
"Triumph Tiger 800 XRx LRH",
"Triumph Tiger 900",
"Triumph Tiger 900 GT",
"Triumph Tiger 900 GT (35 kW)",
"Triumph Tiger 900 GT LRH",
"Triumph Tiger 900 GT LRH (35 kW)",
"Triumph Tiger 900 GT Pro",
"Triumph Tiger 900 GT Pro (35 kW)",
"Triumph Tiger 900 Rally",
"Triumph Tiger 900 Rally (35 kW)",
"Triumph Tiger 900 Rally Pro",
"Triumph Tiger 900 Rally Pro (35 kW)",
"Triumph Tiger Sport",
"Vespa 946 RED",
"Vespa GTS 125 iGet ABS",
"Vespa GTS 300 ABS/ASR",
"Vespa GTS Super 125 iGet ABS",
"Vespa GTS Super 300 ABS/ASR",
"Vespa GTS Super Sport 125 iGet ABS",
"Vespa GTS Super Sport 300 ABS/ASR",
"Vespa GTS Touring 125 iGet ABS",
"Vespa GTS Touring 300 ABS/ASR",
"Vespa Primavera 125 iGet ABS",
"Vespa Primavera Touring 125 iGet ABS",
"Vespa Sei Giorni 300",
"Vespa Sprint 125 iGet ABS",
"Vespa Sprint Sport 125 iGet ABS",
"Yamaha D'elight (LTS125-C)",
"Yamaha FJR 1300 A",
"Yamaha FJR 1300 AE",
"Yamaha FJR 1300 AE Ultimate Edit.",
"Yamaha FJR 1300 AS",
"Yamaha FJR 1300 AS Ultimate Edit.",
"Yamaha MT-03 (MTN320-A)",
"Yamaha MT-07",
"Yamaha MT-07 (35 kW)",
"Yamaha MT-09",
"Yamaha MT-09 SP",
"Yamaha MT-10 (MTN1000)",
"Yamaha MT-10 SP (MTN1000)",
"Yamaha MT-10 Tourer Edition (MTN1000)",
"Yamaha MT-125",
"Yamaha Niken (MXT850)",
"Yamaha Niken GT (MXT850D)",
"Yamaha NMAX (GPD125-A)",
"Yamaha SCR 950 (XVS950XR-A)",
"Yamaha Ténéré 700 (XTZ690)",
"Yamaha Ténéré 700 (XTZ690-U)",
"Yamaha TMAX 560 (XP560D)",
"Yamaha TMAX Tech Max (XP560D)",
"Yamaha Tracer 700 (35 kW)",
"Yamaha Tracer 700 (54 kW)",
"Yamaha Tracer 900 (MTT850)",
"Yamaha Tracer 900 GT (MTT850D)",
"Yamaha Tricity 125",
"Yamaha Tricity 300 (MW300)",
"Yamaha Xenter 125 (HW125)",
"Yamaha XMax 125",
"Yamaha XMax 300",
"Yamaha XMax 300 Tech Max",
"Yamaha XMAX 400",
"Yamaha XMAX 400 Tech Max",
"Yamaha XSR 700 (MTM690, 55 kW)",
"Yamaha XSR 700 (MTM690-U, 35 kW)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 900 (MTM850)",
"Yamaha XT 1200 Z Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré Raid Edition",
"Yamaha XV 950 R (XVS950CUD-A)",
"Yamaha YS 125",
"Yamaha YZF-R 125 ABS",
"Yamaha YZF-R 125 Monster Energy",
"Yamaha YZF-R1 (YZF1000)",
"Yamaha YZF-R1M (YZF1000D)",
"Yamaha YZF-R3 (YZF320-A)",
"Yamaha YZF-R6",
"ZERO DS ZF 14.4",
"ZERO DS ZF 14.4 (11 kW)",
"ZERO DS ZF 14.4 (11 kW) m. Power Tank",
"ZERO DS ZF 14.4 m. Power Tank",
"ZERO DS ZF 7.2",
"ZERO DSR ZF 14.4",
"ZERO DSR ZF 14.4 m. Power Tank",
"ZERO FX ZF 7.2",
"ZERO FXS ZF 7.2",
"ZERO S ZF 14.4",
"ZERO S ZF 14.4 (11 kW)",
"ZERO S ZF 14.4 (11 kW) m. Power Tank",
"ZERO S ZF 14.4 m. Power Tank",
"ZERO S ZF 7.2",
"ZERO SR ZF 14.4",
"Kawasaki J 125",
"Kawasaki J 300",
"Kawasaki Ninja 1000 SX",
"Kawasaki Ninja 125",
"Kawasaki Ninja 400",
"Kawasaki Ninja 650",
"Kawasaki Ninja 650 (35 kW)",
"Kawasaki Ninja H2",
"Kawasaki Ninja H2 Carbon",
"Kawasaki Ninja H2 SX SE"",
"Kawasaki Ninja H2R",
"Kawasaki Ninja ZX-10 R SE",
"Kawasaki Ninja ZX-10 RR",
"Kawasaki Ninja ZX-6R",
"Kawasaki Versys 1000",
"Kawasaki Versys 650 (35 kW)",
"Kawasaki Versys 650 (51 kW)",
"Moto Guzzi V7 III Carbon",
"Moto Guzzi V7 III Carbon (34 kW)",
"Moto Guzzi V7 III Milano",
"Moto Guzzi V7 III Milano (34 kW)",
"Moto Guzzi V7 III Racer",
"Moto Guzzi V7 III Racer (34 kW)",
"Moto Guzzi V7 III Rough",
"Moto Guzzi V7 III Rough (34 kW)",
"Moto Guzzi V7 III Special",
"Moto Guzzi V7 III Special (34 kW)",
"Moto Guzzi V7 III Stone",
"Moto Guzzi V7 III Stone (34 kW)",
"Moto Guzzi V85 TT",
"Moto Guzzi V9 Bobber",
"Moto Guzzi V9 Bobber Sport",
"Moto Guzzi V9 Roamer",
"Moto Morini Corsaro 1200 ZZ",
"MV Agusta Brutale 1090",
"MV Agusta Brutale 1090 RR",
"MV Agusta Brutale 800",
"MV Agusta Brutale 800 RR",
"MV Agusta Brutale Dragster 800",
"MV Agusta Brutale Dragster 800 RR",
"MV Agusta F3 675",
"MV Agusta F3 675 RC",
"MV Agusta F3 800",
"MV Agusta F3 800 RC",
"MV Agusta Turismo Veloce 800",
"MV Agusta Turismo Veloce 800 Lusso",
"MV Agusta Turismo Veloce 800 Lusso RC",
"Peugeot Belville 125 Allure ABS",
"Peugeot Belville 125 RS ABS",
"Peugeot Citystar 125",
"Peugeot Citystar 125 SBC u. ABS",
"Peugeot Citystar 200 ABS",
"Peugeot Django 125 Allure ABS",
"Peugeot Django 125 Evasion ABS",
"Peugeot Django 125 Heritage SBC",
"Peugeot Django 125 Sport ABS",
"Peugeot Metropolis 400 Allure ABS",
"Peugeot Metropolis 400 RS ABS",
"Peugeot Metropolis 400 RX-R ABS",
"Peugeot Satelis 2 125 ABS",
"Peugeot Satelis 2 125 Black Edition ABS",
"Peugeot Satelis 2 125 RS ABS",
"Peugeot Speedfight 4 125",
"Peugeot Tweet 125 E ABS",
"Peugeot Tweet 125 E RS SBC",
"Peugeot Tweet 125 E SBC",
"Piaggio Beverly 300 i.e.",
"Kawasaki Vulcan S (35 kW)",
"Kawasaki Vulcan S (45 kW)",
"Kawasaki W800",
"Kawasaki W800 Café",
"Kawasaki W800 Street",
"Kawasaki Z 1000",
"Kawasaki Z 1000 R Edition",
"Kawasaki Z 125",
"Kawasaki Z 400",
"Kawasaki Z 650 (35 kW)",
"Kawasaki Z 650 (50 kW)",
"Kawasaki Z 900",
"Kawasaki Z 900 (70 kW)",
"Kawasaki Z 900 RS",
"Kawasaki Z 900 RS Cafe",
"Kawasaki Z H2",
"Kawasaki ZZR 1400 (147 kW)",
"Kawasaki ZZR 1400 (72 kW)",
"KTM 125 Duke",
"KTM 1290 Super Adventure R",
"KTM 1290 Super Adventure S",
"KTM 1290 Super Duke GT",
"KTM 1290 Super Duke R",
"KTM 390 Duke",
"KTM 690 Enduro R",
"KTM 690 SMC R",
"KTM 790 Adventure",
"KTM 790 Adventure (35 kW)",
"KTM 790 Adventure R",
"KTM 790 Adventure R (35 kW)",
"KTM 790 Duke",
"KTM 790 Duke L",
"KTM 790 Duke L (35 kW)",
"KTM 890 Duke R",
"KTM Freeride 250 F",
"KTM Freeride E-XC",
"KTM RC 125",
"KTM RC 390",
"Kymco AK 550i ABS",
"Kymco Downtown 125i ABS",
"Kymco Downtown 350i ABS",
"Kymco People GT 125i",
"Kymco People GT 300i ABS",
"Kymco Xciting 400i ABS",
"Kymco X-Town 125i ABS",
"Kymco X-Town 300i ABS",
"Moto Guzzi Audace Carbon",
"Moto Guzzi California 1400 Touring",
"Moto Guzzi Eldorado",
"Moto Guzzi MGX-21",
"Piaggio Beverly 300 i.e. Police",
"Piaggio Beverly 350 SportTouring",
"Piaggio Beverly S 300 i.e.",
"Piaggio Liberty 125 IGET 4T 3V E4",
"Piaggio Liberty 125 IGET 4T 3V Sport",
"Piaggio Medley 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS Special Edition",
"Piaggio MP3 350",
"Piaggio MP3 500 ABS-ASR SE",
"Piaggio MP3 500 hpe Business",
"Piaggio MP3 500 hpe Sport",
"Piaggio MP3 Business ABS/ASR 300 i.e.",
"Piaggio MP3 Business ABS/ASR 500 i.e.",
"Piaggio MP3 Sport ABS/ASR 300 i.e.",
"Piaggio MP3 Sport ABS/ASR 500 i.e.",
"Royal Enfield Bullet 500 EFI",
"Royal Enfield Classic 500 EFI",
"Royal Enfield CONTINENTAL GT 535 EFI",
"Royal Enfield Continental GT 650 EFI Twin",
"Royal Enfield Himalayan",
"Royal Enfield Interceptor 650 EFI Twin",
"Sommer Diesel 516",
"Suzuki Address 110 (UK110NML9)",
"Suzuki Burgman 400 (AN400AL9)",
"Suzuki GSX-R 1000 (GSX-R1000AL8)",
"Suzuki GSX-R 1000 R (GSX-R1000RAL8)",
"Suzuki GSX-R 125 (GSX-R125AL8)",
"Suzuki GSX-S 1000 (GSX-S1000AL9)",
"Suzuki GSX-S 1000 F (GSX-S1000FAL9)",
"Suzuki GSX-S 1000 S Katana (GSX-S1000SAM0)",
"Suzuki GSX-S 125 (GSX-S125AL8)",
"Suzuki GSX-S 750",
"Suzuki GSX-S 750 (35 kW)",
"Suzuki SV 650 (35 kW)",
"Suzuki SV 650 (SV650AL9)",
"Suzuki SV 650 X (SV650XAL8)",
"Suzuki V-Strom 1050",
"Suzuki V-Strom 1050 XT",
"Suzuki V-Strom 650 (35 kW)",
"Suzuki V-Strom 650 (DL650)",
"Suzuki V-Strom 650 XT (35 kW)",
"Suzuki V-Strom 650 XT (DL650)",
"SWM RS 125 R",
"SWM RS 300 R",
"SWM RS 500 R",
"SWM SM 125 R",
"SWM SM 500 R",
"SWM Superdual T",
"SWM Superdual X",
"SYM Jet4 125i",
"SYM Joyride 125i Evo",
"SYM Maxsym 400 i ABS",
"SYM Maxsym 600 i ABS",
"SYM Orbit II 125i",
"SYM Symphony SR 125i",
"SYM Symphony ST 125i",
"SYM X´Pro 125i",
"Triumph Bobber TFC",
"Triumph Bonneville Bobber",
"Triumph Bonneville Bobber Black",
"Triumph Bonneville Speedmaster",
"Triumph Bonneville T100",
"Triumph Bonneville T100 (35 kW)",
"Triumph Bonneville T100 Black",
"Triumph Bonneville T100 Black (35 kW)",
"Triumph Bonneville T100 Bud Ekins",
"Triumph Bonneville T100 Bud Ekins (35 kW)",
"Triumph Bonneville T120",
"Triumph Bonneville T120 Black",
"Triumph Bonneville T120 Bud Ekins",
"Triumph Daytona Moto2 TM 765",
"Triumph Rocket 3 GT",
"Triumph Rocket 3 R",
"Triumph Rocket 3 TFC",
"Triumph Scrambler 1200 XC",
"Triumph Scrambler 1200 XE",
"Triumph Speed Triple RS",
"Triumph Speed Triple S",
"Triumph Speed Twin",
"Triumph Street Scrambler 900",
"Triumph Street Scrambler 900 (35 kW)",
"Triumph Street Triple R",
"Triumph Street Triple R LRH",
"Triumph Street Triple RS",
"Triumph Street Triple S",
"Triumph Street Triple S (35 kW)",
"Triumph Street Triple S (70 kW)",
"Triumph Street Twin",
"Triumph Street Twin (35 kW)",
"Triumph Thruxton 1200",
"Triumph Thruxton 1200 R",
"Triumph Thruxton RS",
"Triumph Thruxton TFC",
"Triumph Tiger 1200 Alpine Edition",
"Triumph Tiger 1200 Desert Edition",
"Triumph Tiger 1200 XCA",
"Triumph Tiger 1200 XCx",
"Triumph Tiger 1200 XR",
"Triumph Tiger 1200 XRT",
"Triumph Tiger 1200 XRx",
"Triumph Tiger 1200 XRx LRH",
"Triumph Tiger 800 XCA",
"Triumph Tiger 800 XCx",
"Triumph Tiger 800 XR",
"Triumph Tiger 800 XRt",
"Triumph Tiger 800 XRx",
"Triumph Tiger 800 XRx LRH",
"Triumph Tiger 900",
"Triumph Tiger 900 GT",
"Triumph Tiger 900 GT (35 kW)",
"Triumph Tiger 900 GT LRH",
"Triumph Tiger 900 GT LRH (35 kW)",
"Triumph Tiger 900 GT Pro",
"Triumph Tiger 900 GT Pro (35 kW)",
"Triumph Tiger 900 Rally",
"Triumph Tiger 900 Rally (35 kW)",
"Triumph Tiger 900 Rally Pro",
"Triumph Tiger 900 Rally Pro (35 kW)",
"Triumph Tiger Sport",
"Vespa 946 RED",
"Vespa GTS 125 iGet ABS",
"Vespa GTS 300 ABS/ASR",
"Vespa GTS Super 125 iGet ABS",
"Vespa GTS Super 300 ABS/ASR",
"Vespa GTS Super Sport 125 iGet ABS",
"Vespa GTS Super Sport 300 ABS/ASR",
"Vespa GTS Touring 125 iGet ABS",
"Vespa GTS Touring 300 ABS/ASR",
"Vespa Primavera 125 iGet ABS",
"Vespa Primavera Touring 125 iGet ABS",
"Vespa Sei Giorni 300",
"Vespa Sprint 125 iGet ABS",
"Vespa Sprint Sport 125 iGet ABS",
"Yamaha D'elight (LTS125-C)",
"Yamaha FJR 1300 A",
"Yamaha FJR 1300 AE",
"Yamaha FJR 1300 AE Ultimate Edit.",
"Yamaha FJR 1300 AS",
"Yamaha FJR 1300 AS Ultimate Edit.",
"Yamaha MT-03 (MTN320-A)",
"Yamaha MT-07",
"Yamaha MT-07 (35 kW)",
"Yamaha MT-09",
"Yamaha MT-09 SP",
"Yamaha MT-10 (MTN1000)",
"Yamaha MT-10 SP (MTN1000)",
"Yamaha MT-10 Tourer Edition (MTN1000)",
"Yamaha MT-125",
"Yamaha Niken (MXT850)",
"Yamaha Niken GT (MXT850D)",
"Yamaha NMAX (GPD125-A)",
"Yamaha SCR 950 (XVS950XR-A)",
"Yamaha Ténéré 700 (XTZ690)",
"Yamaha Ténéré 700 (XTZ690-U)",
"Yamaha TMAX 560 (XP560D)",
"Yamaha TMAX Tech Max (XP560D)",
"Yamaha Tracer 700 (35 kW)",
"Yamaha Tracer 700 (54 kW)",
"Yamaha Tracer 900 (MTT850)",
"Yamaha Tracer 900 GT (MTT850D)",
"Yamaha Tricity 125",
"Yamaha Tricity 300 (MW300)",
"Yamaha Xenter 125 (HW125)",
"Yamaha XMax 125",
"Yamaha XMax 300",
"Yamaha XMax 300 Tech Max",
"Yamaha XMAX 400",
"Yamaha XMAX 400 Tech Max",
"Yamaha XSR 700 (MTM690, 55 kW)",
"Yamaha XSR 700 (MTM690-U, 35 kW)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 900 (MTM850)",
"Yamaha XT 1200 Z Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré Raid Edition",
"Yamaha XV 950 R (XVS950CUD-A)",
"Yamaha YS 125",
"Yamaha YZF-R 125 ABS",
"Yamaha YZF-R 125 Monster Energy",
"Yamaha YZF-R1 (YZF1000)",
"Yamaha YZF-R1M (YZF1000D)",
"Yamaha YZF-R3 (YZF320-A)",
"Yamaha YZF-R6",
"ZERO DS ZF 14.4",
"ZERO DS ZF 14.4 (11 kW)",
"ZERO DS ZF 14.4 (11 kW) m. Power Tank",
"ZERO DS ZF 14.4 m. Power Tank",
"ZERO DS ZF 7.2",
"ZERO DSR ZF 14.4",
"ZERO DSR ZF 14.4 m. Power Tank",
"ZERO FX ZF 7.2",
"ZERO FXS ZF 7.2",
"ZERO S ZF 14.4",
"ZERO S ZF 14.4 (11 kW)",
"ZERO S ZF 14.4 (11 kW) m. Power Tank",
"ZERO S ZF 14.4 m. Power Tank",
"ZERO S ZF 7.2",
"ZERO SR ZF 14.4",
"Kawasaki J 125",
"Kawasaki J 300",
"Kawasaki Ninja 1000 SX",
"Kawasaki Ninja 125",
"Kawasaki Ninja 400",
"Kawasaki Ninja 650",
"Kawasaki Ninja 650 (35 kW)",
"Kawasaki Ninja H2",
"Kawasaki Ninja H2 Carbon",
"Kawasaki Ninja H2 SX SE"",
"Kawasaki Ninja H2R",
"Kawasaki Ninja ZX-10 R SE",
"Kawasaki Ninja ZX-10 RR",
"Kawasaki Ninja ZX-6R",
"Kawasaki Versys 1000",
"Kawasaki Versys 650 (35 kW)",
"Kawasaki Versys 650 (51 kW)",
"Moto Guzzi V7 III Carbon",
"Moto Guzzi V7 III Carbon (34 kW)",
"Moto Guzzi V7 III Milano",
"Moto Guzzi V7 III Milano (34 kW)",
"Moto Guzzi V7 III Racer",
"Moto Guzzi V7 III Racer (34 kW)",
"Moto Guzzi V7 III Rough",
"Moto Guzzi V7 III Rough (34 kW)",
"Moto Guzzi V7 III Special",
"Moto Guzzi V7 III Special (34 kW)",
"Moto Guzzi V7 III Stone",
"Moto Guzzi V7 III Stone (34 kW)",
"Moto Guzzi V85 TT",
"Moto Guzzi V9 Bobber",
"Moto Guzzi V9 Bobber Sport",
"Moto Guzzi V9 Roamer",
"Moto Morini Corsaro 1200 ZZ",
"MV Agusta Brutale 1090",
"MV Agusta Brutale 1090 RR",
"MV Agusta Brutale 800",
"MV Agusta Brutale 800 RR",
"MV Agusta Brutale Dragster 800",
"MV Agusta Brutale Dragster 800 RR",
"MV Agusta F3 675",
"MV Agusta F3 675 RC",
"MV Agusta F3 800",
"MV Agusta F3 800 RC",
"MV Agusta Turismo Veloce 800",
"MV Agusta Turismo Veloce 800 Lusso",
"MV Agusta Turismo Veloce 800 Lusso RC",
"Peugeot Belville 125 Allure ABS",
"Peugeot Belville 125 RS ABS",
"Peugeot Citystar 125",
"Peugeot Citystar 125 SBC u. ABS",
"Peugeot Citystar 200 ABS",
"Peugeot Django 125 Allure ABS",
"Peugeot Django 125 Evasion ABS",
"Peugeot Django 125 Heritage SBC",
"Peugeot Django 125 Sport ABS",
"Peugeot Metropolis 400 Allure ABS",
"Peugeot Metropolis 400 RS ABS",
"Peugeot Metropolis 400 RX-R ABS",
"Peugeot Satelis 2 125 ABS",
"Peugeot Satelis 2 125 Black Edition ABS",
"Peugeot Satelis 2 125 RS ABS",
"Peugeot Speedfight 4 125",
"Peugeot Tweet 125 E ABS",
"Peugeot Tweet 125 E RS SBC",
"Peugeot Tweet 125 E SBC",
"Piaggio Beverly 300 i.e.",
"Kawasaki Vulcan S (35 kW)",
"Kawasaki Vulcan S (45 kW)",
"Kawasaki W800",
"Kawasaki W800 Café",
"Kawasaki W800 Street",
"Kawasaki Z 1000",
"Kawasaki Z 1000 R Edition",
"Kawasaki Z 125",
"Kawasaki Z 400",
"Kawasaki Z 650 (35 kW)",
"Kawasaki Z 650 (50 kW)",
"Kawasaki Z 900",
"Kawasaki Z 900 (70 kW)",
"Kawasaki Z 900 RS",
"Kawasaki Z 900 RS Cafe",
"Kawasaki Z H2",
"Kawasaki ZZR 1400 (147 kW)",
"Kawasaki ZZR 1400 (72 kW)",
"KTM 125 Duke",
"KTM 1290 Super Adventure R",
"KTM 1290 Super Adventure S",
"KTM 1290 Super Duke GT",
"KTM 1290 Super Duke R",
"KTM 390 Duke",
"KTM 690 Enduro R",
"KTM 690 SMC R",
"KTM 790 Adventure",
"KTM 790 Adventure (35 kW)",
"KTM 790 Adventure R",
"KTM 790 Adventure R (35 kW)",
"KTM 790 Duke",
"KTM 790 Duke L",
"KTM 790 Duke L (35 kW)",
"KTM 890 Duke R",
"KTM Freeride 250 F",
"KTM Freeride E-XC",
"KTM RC 125",
"KTM RC 390",
"Kymco AK 550i ABS",
"Kymco Downtown 125i ABS",
"Kymco Downtown 350i ABS",
"Kymco People GT 125i",
"Kymco People GT 300i ABS",
"Kymco Xciting 400i ABS",
"Kymco X-Town 125i ABS",
"Kymco X-Town 300i ABS",
"Moto Guzzi Audace Carbon",
"Moto Guzzi California 1400 Touring",
"Moto Guzzi Eldorado",
"Moto Guzzi MGX-21",
"Piaggio Beverly 300 i.e. Police",
"Piaggio Beverly 350 SportTouring",
"Piaggio Beverly S 300 i.e.",
"Piaggio Liberty 125 IGET 4T 3V E4",
"Piaggio Liberty 125 IGET 4T 3V Sport",
"Piaggio Medley 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS",
"Piaggio Medley S 125 iGet ABS Special Edition",
"Piaggio MP3 350",
"Piaggio MP3 500 ABS-ASR SE",
"Piaggio MP3 500 hpe Business",
"Piaggio MP3 500 hpe Sport",
"Piaggio MP3 Business ABS/ASR 300 i.e.",
"Piaggio MP3 Business ABS/ASR 500 i.e.",
"Piaggio MP3 Sport ABS/ASR 300 i.e.",
"Piaggio MP3 Sport ABS/ASR 500 i.e.",
"Royal Enfield Bullet 500 EFI",
"Royal Enfield Classic 500 EFI",
"Royal Enfield CONTINENTAL GT 535 EFI",
"Royal Enfield Continental GT 650 EFI Twin",
"Royal Enfield Himalayan",
"Royal Enfield Interceptor 650 EFI Twin",
"Sommer Diesel 516",
"Suzuki Address 110 (UK110NML9)",
"Suzuki Burgman 400 (AN400AL9)",
"Suzuki GSX-R 1000 (GSX-R1000AL8)",
"Suzuki GSX-R 1000 R (GSX-R1000RAL8)",
"Suzuki GSX-R 125 (GSX-R125AL8)",
"Suzuki GSX-S 1000 (GSX-S1000AL9)",
"Suzuki GSX-S 1000 F (GSX-S1000FAL9)",
"Suzuki GSX-S 1000 S Katana (GSX-S1000SAM0)",
"Suzuki GSX-S 125 (GSX-S125AL8)",
"Suzuki GSX-S 750",
"Suzuki GSX-S 750 (35 kW)",
"Suzuki SV 650 (35 kW)",
"Suzuki SV 650 (SV650AL9)",
"Suzuki SV 650 X (SV650XAL8)",
"Suzuki V-Strom 1050",
"Suzuki V-Strom 1050 XT",
"Suzuki V-Strom 650 (35 kW)",
"Suzuki V-Strom 650 (DL650)",
"Suzuki V-Strom 650 XT (35 kW)",
"Suzuki V-Strom 650 XT (DL650)",
"SWM RS 125 R",
"SWM RS 300 R",
"SWM RS 500 R",
"SWM SM 125 R",
"SWM SM 500 R",
"SWM Superdual T",
"SWM Superdual X",
"SYM Jet4 125i",
"SYM Joyride 125i Evo",
"SYM Maxsym 400 i ABS",
"SYM Maxsym 600 i ABS",
"SYM Orbit II 125i",
"SYM Symphony SR 125i",
"SYM Symphony ST 125i",
"SYM X´Pro 125i",
"Triumph Bobber TFC",
"Triumph Bonneville Bobber",
"Triumph Bonneville Bobber Black",
"Triumph Bonneville Speedmaster",
"Triumph Bonneville T100",
"Triumph Bonneville T100 (35 kW)",
"Triumph Bonneville T100 Black",
"Triumph Bonneville T100 Black (35 kW)",
"Triumph Bonneville T100 Bud Ekins",
"Triumph Bonneville T100 Bud Ekins (35 kW)",
"Triumph Bonneville T120",
"Triumph Bonneville T120 Black",
"Triumph Bonneville T120 Bud Ekins",
"Triumph Daytona Moto2 TM 765",
"Triumph Rocket 3 GT",
"Triumph Rocket 3 R",
"Triumph Rocket 3 TFC",
"Triumph Scrambler 1200 XC",
"Triumph Scrambler 1200 XE",
"Triumph Speed Triple RS",
"Triumph Speed Triple S",
"Triumph Speed Twin",
"Triumph Street Scrambler 900",
"Triumph Street Scrambler 900 (35 kW)",
"Triumph Street Triple R",
"Triumph Street Triple R LRH",
"Triumph Street Triple RS",
"Triumph Street Triple S",
"Triumph Street Triple S (35 kW)",
"Triumph Street Triple S (70 kW)",
"Triumph Street Twin",
"Triumph Street Twin (35 kW)",
"Triumph Thruxton 1200",
"Triumph Thruxton 1200 R",
"Triumph Thruxton RS",
"Triumph Thruxton TFC",
"Triumph Tiger 1200 Alpine Edition",
"Triumph Tiger 1200 Desert Edition",
"Triumph Tiger 1200 XCA",
"Triumph Tiger 1200 XCx",
"Triumph Tiger 1200 XR",
"Triumph Tiger 1200 XRT",
"Triumph Tiger 1200 XRx",
"Triumph Tiger 1200 XRx LRH",
"Triumph Tiger 800 XCA",
"Triumph Tiger 800 XCx",
"Triumph Tiger 800 XR",
"Triumph Tiger 800 XRt",
"Triumph Tiger 800 XRx",
"Triumph Tiger 800 XRx LRH",
"Triumph Tiger 900",
"Triumph Tiger 900 GT",
"Triumph Tiger 900 GT (35 kW)",
"Triumph Tiger 900 GT LRH",
"Triumph Tiger 900 GT LRH (35 kW)",
"Triumph Tiger 900 GT Pro",
"Triumph Tiger 900 GT Pro (35 kW)",
"Triumph Tiger 900 Rally",
"Triumph Tiger 900 Rally (35 kW)",
"Triumph Tiger 900 Rally Pro",
"Triumph Tiger 900 Rally Pro (35 kW)",
"Triumph Tiger Sport",
"Vespa 946 RED",
"Vespa GTS 125 iGet ABS",
"Vespa GTS 300 ABS/ASR",
"Vespa GTS Super 125 iGet ABS",
"Vespa GTS Super 300 ABS/ASR",
"Vespa GTS Super Sport 125 iGet ABS",
"Vespa GTS Super Sport 300 ABS/ASR",
"Vespa GTS Touring 125 iGet ABS",
"Vespa GTS Touring 300 ABS/ASR",
"Vespa Primavera 125 iGet ABS",
"Vespa Primavera Touring 125 iGet ABS",
"Vespa Sei Giorni 300",
"Vespa Sprint 125 iGet ABS",
"Vespa Sprint Sport 125 iGet ABS",
"Yamaha D'elight (LTS125-C)",
"Yamaha FJR 1300 A",
"Yamaha FJR 1300 AE",
"Yamaha FJR 1300 AE Ultimate Edit.",
"Yamaha FJR 1300 AS",
"Yamaha FJR 1300 AS Ultimate Edit.",
"Yamaha MT-03 (MTN320-A)",
"Yamaha MT-07",
"Yamaha MT-07 (35 kW)",
"Yamaha MT-09",
"Yamaha MT-09 SP",
"Yamaha MT-10 (MTN1000)",
"Yamaha MT-10 SP (MTN1000)",
"Yamaha MT-10 Tourer Edition (MTN1000)",
"Yamaha MT-125",
"Yamaha Niken (MXT850)",
"Yamaha Niken GT (MXT850D)",
"Yamaha NMAX (GPD125-A)",
"Yamaha SCR 950 (XVS950XR-A)",
"Yamaha Ténéré 700 (XTZ690)",
"Yamaha Ténéré 700 (XTZ690-U)",
"Yamaha TMAX 560 (XP560D)",
"Yamaha TMAX Tech Max (XP560D)",
"Yamaha Tracer 700 (35 kW)",
"Yamaha Tracer 700 (54 kW)",
"Yamaha Tracer 900 (MTT850)",
"Yamaha Tracer 900 GT (MTT850D)",
"Yamaha Tricity 125",
"Yamaha Tricity 300 (MW300)",
"Yamaha Xenter 125 (HW125)",
"Yamaha XMax 125",
"Yamaha XMax 300",
"Yamaha XMax 300 Tech Max",
"Yamaha XMAX 400",
"Yamaha XMAX 400 Tech Max",
"Yamaha XSR 700 (MTM690, 55 kW)",
"Yamaha XSR 700 (MTM690-U, 35 kW)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 700 Xtribute (MTM690D)",
"Yamaha XSR 900 (MTM850)",
"Yamaha XT 1200 Z Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré",
"Yamaha XT 1200 ZE Super Ténéré Raid Edition",
"Yamaha XV 950 R (XVS950CUD-A)",
"Yamaha YS 125",
"Yamaha YZF-R 125 ABS",
"Yamaha YZF-R 125 Monster Energy",
"Yamaha YZF-R1 (YZF1000)",
"Yamaha YZF-R1M (YZF1000D)",
"Yamaha YZF-R3 (YZF320-A)",
"Yamaha YZF-R6",
"ZERO DS ZF 14.4",
"ZERO DS ZF 14.4 (11 kW)",
"ZERO DS ZF 14.4 (11 kW) m. Power Tank",
"ZERO DS ZF 14.4 m. Power Tank",
"ZERO DS ZF 7.2",
"ZERO DSR ZF 14.4",
"ZERO DSR ZF 14.4 m. Power Tank",
"ZERO FX ZF 7.2",
"ZERO FXS ZF 7.2",
"ZERO S ZF 14.4",
"ZERO S ZF 14.4 (11 kW)",
"ZERO S ZF 14.4 (11 kW) m. Power Tank",
"ZERO S ZF 14.4 m. Power Tank",
"ZERO S ZF 7.2",
"ZERO SR ZF 14.4",
   ];
   $( "#tags" ).autocomplete({
     source: availableTags
   });
 } );
 </script>
