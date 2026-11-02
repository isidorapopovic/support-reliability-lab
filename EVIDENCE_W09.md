**Kratka beleška para: Nedelja 9 — početni zapis**

# Tumačenje dokaza i preporuka izdanja

Zapis je napravljen prema `instructions/evidence-template.md`. Dopunjava se tokom rada stvarnim opažanjima i referencama na dokaze. Automatski `report.json`, `summary.md` i tragovi prilažu se zasebno; njihovi metapodaci i rezultati ne prepisuju se niti ručno menjaju.

## Promena i hipoteza

- Članovi para i ko ove nedelje vodi prikaz: Isidora Popović i Elena. Isidora radi prva, zatim predaje rad Eleni. Isidora vodi završni prikaz i brani projekat.
- Polazni commit: [`1f50f92351838fc34da1a58a12f33253ffac9a25` — `init zero`](https://github.com/isidorapopovic/support-reliability-lab/commit/1f50f92351838fc34da1a58a12f33253ffac9a25), grana `main`.
- Završni commit: još nije određen; rad je započet.
- Početna evaluacija: [`runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/report.json`](runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/report.json).
- Početna regresija: [`runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/report.json`](runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/report.json).
- Završni izveštaji: još nisu napravljeni; korekcija aplikacije nije urađena.
- Koji problem smo opazili, koji trag ga podržava i zašto smo očekivali da ova izmena pomogne: pri početnom CLI pokretanju `refund` vraća 30 dana i citira arhivirani `refund-old`, iako aktivni `refund-current` navodi 14 dana. `legacy` daje odgovor iz jedinog, arhiviranog izvora, umesto odbijanja. Reference: `evidence/step-02/cli-refund.txt`, `evidence/step-02/cli-legacy.txt` i statusi dokumenata u `data/lab.json`. Ovo potvrđuje opaženo kršenje ugovora H1; uzrok u kodu i hipoteza korekcije tek treba da se istraže uz početne evaluacione tragove.
- Granica izmene i dodatna regresiona provera: još nisu definisane na osnovu istrage. Predviđeni opseg zadatka je ograničena izmena u `src/` i novi ciljani test u `tests/`, uz očuvanje javnih podataka, postojećih testova, konfiguracije i evaluacionih skripti.
- Ime dodatnog testa, zašto je pao pre izmene i prošao posle; reference na `test-before.txt` / `test-after.txt`: test još nije dodat ni izvršen; dokazi pre/posle nisu napravljeni.

## Tumačenje, ne prepisivanje

- Koji konkretni slučaj se promenio i koji dokaz to pokazuje: nema izmena aplikacije ni dokaza o promeni ponašanja.
- Šta kaže ceo regresioni skup; ima li pogoršanja ili neizvršene provere: početni typecheck i build prolaze (kod 0); `npm test` ima 3/3 prolaza. Stvarna početna evaluacija ima 2/4, a početna regresija 5/7 prolaza; obe završavaju kodom 1. U oba skupa padaju `refund` (tekst i citat) i `legacy` (status i broj modelskih poziva). Dodatne zaštite za poznate naloge i neispravan zahtev prolaze. Završna merenja još nisu izvršena, pa poboljšanje ili pogoršanje pre/posle još nije utvrđeno. Detalji su u automatskim izveštajima navedenim iznad.
- Sa kojom slabom/modelskom ocenom se slažemo ili ne slažemo i zašto: još nije analizirano.
- Šta Codex-ov kod/test/objašnjenje nije mogao nezavisno da potvrdi i kako smo proverili pretpostavku: Git potvrđuje početni checkpoint; typecheck, osnovni testovi i CLI izlazi daju zasebne stvarne dokaze. Odgovori i citati upoređeni su sa aktivnim/arhiviranim dokumentima u `data/lab.json` i ugovorom zadatka. Prolaz osnovnih testova nije potvrdio ispravnost izbora izvora. Tutorova nezavisna provera i Isidorina lična potvrda razumevanja još nisu zabeležene.

## Preporuka i ograničenja

- Definisana simulirana upotreba; izdati / ograničiti / ne izdati, sa razlogom: konačna preporuka još nije doneta; početna merenja potvrđuju dva propusta. Slede istraga, ciljana korekcija i završno poređenje pre obrazložene preporuke.
- Najvažniji preostali rizik i šta ne možemo zaključiti iz kontrolisane modelske zamene/malog skupa: rizik još nije procenjen; iz samog početnog commita ne može se zaključiti da je servis spreman za upotrebu.
- Jedan signal za praćenje, uslov za reakciju i sledeća provera: signal i uslov tek treba definisati. Sledeći korak je korak 4 zadatka: detaljno povezivanje početnog refund traga, dokumenta, kriterijuma, ilustrativne ocene i policy grane koda, uz razlikovanje opažanja od hipoteze.

## AI pomoć i pojedinačni doprinos

- Za šta smo koristili Codex, šta prihvatili/izmenili/odbacili i kako proverili: uz Codex su napravljeni privatni GitHub repozitorijum, početni commit i ovaj zapis. Git je potvrdio da je početni commit poslat na `origin/main`. Codex je pročitao uputstva i predložio podelu rada prema Isidorinom zahtevu. Na Isidorin zahtev izvršio je pripremu, typecheck, osnovne testove i četiri CLI primera; sačuvao sirove izlaze i uporedio opažene odgovore/citate sa dokumentima i ugovorom. Aplikacioni kod, podaci, postojeći testovi i evaluacione skripte nisu menjani.
- Član 1 — Isidora Popović: prema Isidorinoj belešci, preuzela je projekat, otvorila fajlove i započela rad. Uz Codex je sačuvala početno stanje projekta commitom `init zero` na GitHub-u. Lična provera funkcionalnih rezultata još nije zabeležena.
- Nastavak Isidorinog dela: zatražila je vođeno izvođenje koraka 2 i objašnjenje rezultata. Komande je izvršio Codex; Isidorina samostalna provera izlaza i razumevanja još nije potvrđena.
- Korak 3 uz AI pomoć: na Isidorin zahtev Codex je izvršio početnu evaluaciju i regresiju, sačuvao konzolne izlaze i proverio da izveštaji i svi referencirani tragovi postoje, da se uspešno čitaju i da tragovi odgovaraju zapisima u izveštajima. Provereno je poklapanje uslova dva merenja i neizmenjenost aplikacionih fajlova prema početnom commitu. Lična provera članica i tutorova nezavisna potvrda još nisu zabeležene.
- Član 2 — Elena: preuzima rad nakon Isidorine početne analize i predaje. Izvršeni doprinos još nije zabeležen; njene planirane obaveze navedene su ispod.

## Dogovorena podela rada i predaja

**Plan, dogovoren 02.11.2026:** Isidora radi prva, Elena nastavlja posle predaje, a Isidora brani projekat. Podela obuhvata približno **110 minuta po osobi (50% / 50%), ukupno 220 minuta**, u okviru 3–4 sata iz zadatka. Ovo je procena, ne izmereno trajanje. U Isidorin deo uračunati su priprema predaje i završni pregled za odbranu, a u Elenin deo provera primljenog rada i priprema završnih dokaza. Stvarno vreme i prepreke upisivati tokom rada; po potrebi uskladiti opseg da opterećenje ostane ravnomerno.

### Prva faza — Isidora: početno stanje, istraga i hipoteza

| Obaveza | Veza sa weekly assignment-om | Planirano vreme | Rezultat koji treba sačuvati |
| --- | --- | --- | --- |
| Priprema okruženja i upoznavanje servisa | Korak 1 | 15 min | Node verzija, stvarni izlazi instalacije, typecheck-a i osnovnih testova; objašnjenje policy/account putanja. Početni Git commit već postoji. |
| Pokretanje primera `shipping`, `refund`, `legacy`, `unknown` | Korak 2 | 20 min | Opaženi odgovor, citat i poređenje sa ugovorom; razlikovati očekivanje iz zadatka od dobijenog izlaza. |
| Početna evaluacija i regresioni skup, bez izmene aplikacije | Korak 3 | 25 min | Dva stvarna direktorijuma u `runs/`, sa `report.json`, `summary.md` i tragovima; njihove tačne putanje u ovom zapisu. |
| Istraga H1 i kritika slabe/ilustrativne ocene | Korak 4 | 30 min | Veza zahtev → izabrani izvor i njegov status → tekst/citat → prekršeni kriterijum; hipoteza povezana sa kodom i tragom. Objasniti zašto `weakCheck` i `recordedJudge` nisu dovoljni dokazi. |
| Kratka specifikacija pre implementacije | Korak 5 | 10 min | Problem, pretpostavljeni uzrok, minimalna granica izmene i kriterijumi: aktivan izvor iste teme; bez prihvatljivog izvora `refused` i bez modelskog poziva. |
| Priprema predaje Eleni | Predaja posle koraka 5 | 5 min | Ažuriran evidence, stvarni commit predaje i njegov opis, dostupni početni dokazi, otvorena pitanja. Aplikacioni kod ostaje nepopravljen. |
| Završni pregled Eleninih rezultata i priprema odbrane | Nakon Elenine faze, bez nove implementacije | 5 min | Isidora prolazi završni diff, isti test pre/posle, javna poređenja i preporuku; priprema kratko izlaganje. Ako pregled zahteva više vremena, zabeležiti i uskladiti plan. |
| **Ukupno — Isidora** | | **110 min** | |

### Druga faza — Elena: test, ograničena korekcija i završni dokazi

| Obaveza | Veza sa weekly assignment-om | Planirano vreme | Rezultat koji treba sačuvati |
| --- | --- | --- | --- |
| Provera predaje i razumevanje hipoteze | Kontrolne tačke koraka 1–5 | 10 min | Proveriti commit, dostupnost početnih dokaza i kriterijume. Elena svojim rečima potvrđuje problem i granicu promene; beleži nedostatke pre izmene koda. |
| Novi test i dokaz neuspeha pre popravke | Koraci 6.1–6.2 | 25 min | `tests/source-eligibility.test.mjs` sa sopstvenom temom koja nije refund, arhiviranim izvorom pre aktivnog i proverom teksta/citata; stvarni `test-before.txt`. Pad mora biti assertion zbog poslovnog propusta, a ne greška uvoza ili sintakse. |
| Jedna ograničena izmena i provera posle nje | Korak 6.3 | 30 min | Minimalni diff u `src/app.ts`, stvarni typecheck i `npm test`, isti dodatni test i `test-after.txt`; sačuvan commit i opis izmene. |
| Završna evaluacija, regresioni skup i dva poređenja | Korak 7 | 25 min | Dva nova direktorijuma dokaza i poređenje svakog skupa sa njegovim početnim rezultatom; pregled refund citata/revizije i `legacy` odbijanja bez modelskog poziva. |
| Preporuka, ograničenja i kompletiranje predaje | Korak 8 | 20 min | Dopunjen evidence, AI pomoć i stvarni doprinosi, signal/uslov/reakcija, preostali rizik nepoznatog naloga, završni commit i paket svih dokaza; kratak završni pregled za Isidorinu odbranu. |
| **Ukupno — Elena** | | **110 min** | |

Brojevi iz zadatka (početno 2/4 i 5/7, nakon uspešne korekcije 4/4 i 7/7) služe kao **očekivanja**, ne kao unapred upisani rezultati. Ako provere pokažu drugačije, sačuvati stvarni nalaz i ograničiti zaključak.

### Kontrolna tačka: Isidora predaje Eleni

Predaja je spremna kada postoje početna merenja, istražen trag i mala specifikacija, a aplikacioni kod još nije popravljen. Elena prvo proverava te materijale, zatim dodaje i pokreće test na nepopravljenoj verziji. Dokaze o očekivanom padu testa treba sačuvati pre izmene `src/app.ts`.

| Stavka predaje | Trenutni status / polje za dopunu |
| --- | --- |
| Početni commit | `1f50f92351838fc34da1a58a12f33253ffac9a25` — `init zero` |
| Commit predaje Isidora → Elena, grana i opis | Još nije napravljen; upisati stvarni SHA, granu i poruku kada prva faza bude završena. |
| Početna evaluacija i regresija | Izvršene: 2/4 i 5/7, kod 1 za obe. Tačne putanje su u odeljku „Promena i hipoteza” i odeljku o koraku 3; oba izveštaja, oba sažetka i svih 11 tragova su provereni. |
| Prenos automatskih dokaza | Za novi checkpoint odabrana su oba originalna direktorijuma iz koraka 3 za izričito uključivanje u Git, iako je `runs/` podrazumevano ignorisan. Pre predaje proveriti da je commit dostupan Eleni i da su svi dokazi preuzeti. Elenina potvrda još nije zabeležena. |
| Opažanje, hipoteza i kriterijumi prihvatanja | Čekaju istragu; dopuniti odeljak „Promena i hipoteza”. |
| Stanje aplikacionog koda, testa i otvoreni problemi | Trenutno početni kod; dodatni test još ne postoji. Na predaji navesti stvarno stanje i sve neizvršene provere/blokere. |
| Datum predaje i Elenina potvrda preuzimanja | Još nisu zabeleženi. |

### Završni pregled i odbrana — Isidora

Elena po završetku ostavlja završni SHA, opis izmene, sva četiri direktorijuma dokaza (dva početna i dva završna), `test-before.txt`, `test-after.txt`, rezultate dva poređenja i kratko obrazloženje preporuke. Isidora vodi odbranu i objašnjava:

1. Koji ugovor je bio prekršen i kojim početnim tragom je to dokazano.
2. Zašto je hipoteza opravdana, šta je tačno promenjeno i koje granice su očuvane.
3. Kako isti dodatni test pada pre izmene i prolazi posle, uz stvarni tekst i citat; zašto to nije dokaz samo za poznati refund primer.
4. Šta pokazuju oba javna poređenja i šta ona ne dokazuju, uključujući ograničenja kontrolisane modelske zamene i rizik nepoznatog naloga.
5. Preporuku izdanja, signal za praćenje, uslov za reakciju i sledeću proveru; početni i završni commit i način povratka na zabeleženo stanje.

Obe članice treba da razumeju ceo tok i umeju da objasne prihvaćeni kod, test i lično provereni rezultat. Isidora vodi izlaganje; Elena priprema završne dokaze i podržava odgovore o implementaciji i proverama. Razumevanje i lične provere beleže se tek kada se stvarno obave.

U sredu Elena priprema belešku o tutorovom nezavisnom rezultatu i incidentu, a Isidora obrazlaže operativnu odluku i eventualno revidiranu preporuku tokom odbrane. Obe pregledaju dopunu istog evidence fajla; dodatno vreme beleži se zasebno. Ova faza još nije izvršena.

## Dopuna u sredu

- Referenca na tutorov nezavisni rezultat i eventualno obrazloženo neslaganje: čeka se.
- Šta incident pokazuje o dostupnosti i kontrolama; koja operativna reakcija je opravdana: čeka se incident i analiza.
- Da li menjamo preporuku i zašto; bez obaveze novog kodiranja: još nije primenljivo.

## Izvršeno: priprema i korak 2 — početni CLI primeri

Datum: 02.11.2026. Aplikacioni izvor, podaci, testovi, skripte i konfiguracija odgovaraju početnom commitu `1f50f92351838fc34da1a58a12f33253ffac9a25`, potvrđeno komandom `git diff --exit-code` nad tim putanjama (kod 0). U trenutku koraka 2 evidence dokumentacija i konzolni dokazi bili su novi i necommitovani. `dist/` i `node_modules/` nastali su pripremom i ne prate se u Git-u.

Prvo je obavljena neophodna priprema iz koraka 1. Komande su pokrenute u PowerShell-u preko `npm.cmd`, koji izvršava iste projektne npm skripte:

| Provera | Stvarno opažanje | Konzolni dokaz |
| --- | --- | --- |
| `node --version`, `npm --version` | Node `v24.21.0`, npm `11.19.0`; Node zadovoljava zahtev 24 ili noviji. | `evidence/step-02/environment.txt` |
| `npm ci --ignore-scripts --no-audit --no-fund`, prvi pokušaj | Neuspeh `EPERM` pri pristupu postojećem npm kešu; izlazni kod `-4048`. Ovo je prepreka pripreme, ne poslovni propust aplikacije. | `evidence/step-02/install.txt` |
| Ista instalacija, ponovljena uz odobren pristup kešu | Uspeh, instaliran 1 paket; kod 0. | `evidence/step-02/install-retry.txt` |
| `npm run typecheck` | Uspeh, kod 0. | `evidence/step-02/typecheck.txt` |
| `npm test` (uključuje build) | Build uspešan; 3 izvršena testa, 3 prolaza, 0 padova; kod 0. | `evidence/step-02/tests.txt` |

Zatim su redom izvršeni `npm start -- shipping`, `npm start -- refund`, `npm start -- legacy` i `npm start -- unknown`. Svaka komanda je ponovo izgradila aplikaciju i završila kodom 0. Sačuvani su celokupni izlazi, uključujući JSON i tragove. Ovo su pojedinačne CLI provere; nisu automatski evaluacioni izveštaji iz koraka 3.

| Tema | Opažanje iz izvršavanja | Tumačenje prema dokumentima i ugovoru | Konzolni dokaz |
| --- | --- | --- | --- |
| `shipping` | `ok`, tekst o dostavi za 3 dana, citat `shipping-current`, revizija 1. | Odgovor i citat odgovaraju aktivnom izvoru. | `evidence/step-02/cli-shipping.txt` |
| `refund` | `ok`, rok 30 dana, citat `refund-old`, revizija 1; trag sadrži modelski korak. | Izabran je arhiviran dokument. Ugovor zahteva aktivni `refund-current`, revizija 2, i rok 14 dana. Opaženo kršenje ugovora. | `evidence/step-02/cli-refund.txt` |
| `legacy` | `ok`, tvrdi da je legacy usluga dostupna, citat `legacy-old`; trag sadrži modelski korak. | Jedini izvor je arhiviran; trebalo je vratiti `refused` bez modelskog poziva. Opaženo kršenje ugovora. | `evidence/step-02/cli-legacy.txt` |
| `unknown` | `refused`, nema citata, trag sadrži samo odbijanje odgovora. | Za temu nema izvora; opaženo ponašanje odgovara ugovoru. | `evidence/step-02/cli-unknown.txt` |

Zaključak ovog koraka: uspešno izvršavanje komande i tri zelena osnovna testa ne garantuju prihvatljiv poslovni odgovor. Opaženi problem odnosi se na prihvatljivost izvora; uzrok u kodu još nije utvrđen. Korekcija nije urađena. Početna javna evaluacija, početna regresija i dokazi pre/posle za dodatni test ostaju sledeći koraci.

## Izvršeno: korak 3 — početna evaluacija i regresija

Datum: 02.11.2026. Cilj ovog koraka bio je da se, pre popravke, izvrše i sačuvaju oba javna skupa sa stvarnim izveštajima, verzijama i tragovima. Za kasnije poređenje izabrana su sledeća dva nova izvršavanja; raniji direktorijumi u `runs/` su sačuvani i nisu korišćeni umesto novih merenja.

- `npm run evaluate` (u PowerShell-u `npm.cmd run evaluate`): stvarno 2/4 prolaza, izlazni kod 1. Dokazi: [izveštaj](runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/report.json), [sažetak](runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/summary.md) i [tragovi](runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/traces/). Celokupan konzolni izlaz: `evidence/step-03/evaluate-console.txt`.
- `npm run regression` (u PowerShell-u `npm.cmd run regression`): stvarno 5/7 prolaza, izlazni kod 1. Dokazi: [izveštaj](runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/report.json), [sažetak](runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/summary.md) i [tragovi](runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/traces/). Celokupan konzolni izlaz: `evidence/step-03/regression-console.txt`.

Kod 1 je u ova dva izvršavanja posledica neuspešnih kriterijuma, uz uspešan build i stvarno napravljene izveštaje. `refund` pada na tekstu i citatu, a `legacy` na statusu i broju modelskih poziva. Regresioni skup sadrži ista četiri policy slučaja i tri dodatne zaštite; zato se 2/4 i 5/7 ne tumače kao promena kvaliteta između dva izvršavanja. Kasnije treba uporediti početnu evaluaciju sa završnom evaluacijom, a početnu regresiju sa završnom regresijom.

Provera sačuvanih dokaza, zabeležena u `evidence/step-03/verification.txt`, završila je kodom 0:

- Oba `report.json` i oba `summary.md` postoje i uspešno su pročitani; zbir prolaza u svakom izveštaju odgovara njegovim stvarnim rezultatima.
- Svih 11 referenciranih trace JSON fajlova (4 + 7) postoji, uspešno se čita i sadržajno se poklapa sa tragom odgovarajućeg slučaja u izveštaju.
- Izvor, izgrađeni fajlovi, javni podaci, skripte, testovi, toolchain i konfiguracija poklapaju se između dva izvršavanja. Njihovi automatski hash-evi ostaju u originalnim izveštajima.
- Oba izveštaja beleže početni Git commit. Beleže i `dirty: true`: evidence dokumentacija i konzolni dokazi još nisu commitovani. Odvojena provera `git diff --exit-code` potvrdila je da `src/`, `tests/`, `data/`, `scripts/`, `package.json`, `package-lock.json` i `tsconfig.json` nisu izmenjeni prema početnom commitu.
- Konzole sadrže upozorenje o nedostupnoj globalnoj Git ignore datoteci u ograničenom okruženju. Git revizija i dirty stanje ipak su zabeleženi; automatski izveštaji nisu prepravljani.

U trenutku koraka 3 dokazi su bili sačuvani lokalno u originalnim direktorijumima, a `runs/` je bio isključen iz Git praćenja. Na Isidorin naknadni zahtev za novim commitom oba odabrana direktorijuma uključuju se izričito u checkpoint zajedno sa dokumentacijom i konzolnim izlazima. Originalni automatski izveštaji ostaju neizmenjeni, uključujući Git reviziju i dirty stanje zabeležene u trenutku merenja. Pre predaje Eleni treba proveriti dostupnost commita i dokaza; sama lokalna putanja nije potvrda prenosa. Na kraju koraka 3 izvor aplikacije bio je nepopravljen, a korak 4 i specifikacija za predaju još nisu bili završeni.

## Dnevnik rada

| Datum (Europe/Budapest) | Urađeno | Osnov za zapis / ograničenje |
| --- | --- | --- |
| 02.11.2026. | Isidora je preuzela projekat, otvorila fajlove i započela rad. | Isidorina beleška; ne predstavlja potvrdu izvršenih testova. |
| 02.11.2026. u 09:10:01 CET | Napravljen početni commit `init zero` i poslat na `main` u privatni repozitorijum. Sačuvano 16 projektnih fajlova uz postojeći `.gitignore`. | Stvarna Git istorija; lokalni HEAD i `origin/main` potvrđeni na istom commitu. |
| 02.11.2026. | Pročitan evidence template i napravljen početni izveštaj; dodato pravilo za dalje beleženje commitova u `AGENTS.md`. | Dokumentacione izmene; još nisu commitovane. |
| 02.11.2026. | Pročitan ceo weekly assignment i zapisana podela rada Isidora → Elena: oko 110 minuta po osobi, sa predajom posle istrage/specifikacije. Isidora vodi odbranu. | Plan prema Isidorinom zahtevu; zadaci, predaja i odbrana još nisu izvršeni. Dokumentacione izmene još nisu commitovane. |
| 02.11.2026. | Započet Isidorin deo uz vođenje korak po korak. Codex je pročitao `README.md` i relevantne odeljke weekly assignment-a radi objašnjenja namene aplikacije, komandi, čuvanja dokaza i cilja H1. | Ovaj korak obuhvata čitanje i objašnjenje. Instalacija, pokretanje aplikacije i provere još nisu izvršeni; Isidorino razumevanje još nije zasebno provereno. |
| 02.11.2026. | Na Isidorin zahtev Codex je pripremio okruženje, sačuvao neuspešan i uspešan pokušaj instalacije, izvršio typecheck i osnovne testove (3/3), zatim korak 2 sa četiri CLI primera. | Sirovi izlazi su u `evidence/step-02/`. `refund` i `legacy` krše ugovor; `shipping` i `unknown` odgovaraju očekivanju. Kod i javni podaci nisu menjani; evaluacija i regresija još nisu pokrenute. |
| 02.11.2026. | Na Isidorin zahtev Codex je izvršio korak 3: novu početnu evaluaciju (2/4) i regresiju (5/7), sačuvao stvarne putanje i proverio oba izveštaja, sažetke i svih 11 tragova. | Obe komande: kod 1 zbog očekivanih početnih padova; provera artefakata: kod 0. Izlazi i provera su u `evidence/step-03/`, automatski dokazi u navedenim `runs/` direktorijumima. Nije bilo promene aplikacionog koda ni novog commita. |
| 02.11.2026. | Na Isidorin zahtev pripremljen checkpoint za korake 1–3: evidence, podela rada, pravila beleženja commitova, konzolni izlazi i dva originalna direktorijuma početnih merenja. | Poruka planiranog commita: `docs: preserve initial evidence and baseline runs (steps 1-3)`. Stvarni SHA upisuje se u dnevnik tek nakon uspešnog commita. Aplikacioni kod nije menjan. |

## Dnevnik commitova i povratak na prethodno stanje

Repozitorijum: [isidorapopovic/support-reliability-lab](https://github.com/isidorapopovic/support-reliability-lab).

Za svaki naredni commit dodati stvarni puni SHA, tačnu commit poruku, kratak opis izmene, status provera i značenje te tačke za povratak. Ne menjati stare redove radi prikrivanja neuspeha. Commit hash-evi u ovoj tabeli su Git reference, ne ručno prepisani metapodaci automatske evaluacije.

| Datum i vreme (Europe/Budapest) | Commit i tačna poruka | Opis | Provere / dokazi | Tačka za povratak |
| --- | --- | --- | --- | --- |
| 02.11.2026. 09:10:01 CET | [`1f50f92351838fc34da1a58a12f33253ffac9a25`](https://github.com/isidorapopovic/support-reliability-lab/commit/1f50f92351838fc34da1a58a12f33253ffac9a25) — `init zero` | Početno stanje: izvor, podaci, postojeći testovi, skripte, konfiguracija i uputstva; 16 fajlova. | Git push uspešan; lokalna i udaljena grana usklađene. Funkcionalne provere nisu izvršene. | Početni kod pre istrage i izmena; nije potvrđena ispravna verzija. |

Pregled zabeleženog početnog stanja i poređenje sa trenutnim kodom:

```sh
git show --stat 1f50f92351838fc34da1a58a12f33253ffac9a25
git diff 1f50f92351838fc34da1a58a12f33253ffac9a25 HEAD -- src tests
git log --reverse --format="%H %aI %s"
```

Za rad na početnoj verziji prvo sačuvati tekuće izmene i proveriti `git status`. Zatim se može napraviti zasebna lokalna grana, bez prepisivanja istorije grane `main`:

```sh
git switch -c fallback-init-zero 1f50f92351838fc34da1a58a12f33253ffac9a25
```

Ova komanda je samo uputstvo i nije izvršena. Ako grana tog imena već postoji, izabrati novo ime. Početni commit ne sadrži ovaj kasnije napravljen izveštaj. `runs/` je podrazumevano ignorisan; dva odabrana početna izvršavanja iz koraka 3 izričito se dodaju u novi checkpoint. Buduća izvršavanja treba posebno sačuvati i uključiti u predaju.
