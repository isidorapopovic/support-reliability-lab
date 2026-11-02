# Opis projekta i uputstvo za Isidoru i Elenu

Ovaj vodič objašnjava dosadašnji rad i dogovor sa Codex-om. Stanje na 02.11.2026: priprema, početne provere, istraga i specifikacija koraka 1–5 su urađeni uz Codex; dodatni test, korekcija i završno poređenje još nisu izvršeni. Detaljan dnevnik i stvarni doprinosi vode se u [EVIDENCE_W09.md](../EVIDENCE_W09.md), a plan nastavka u [SPEC.md](../SPEC.md).

## 1. Šta pravimo i šta se traži ove nedelje

`Support Reliability Lab` je mala simulacija korisničke podrške. Pokreće se iz terminala i vraća JSON sa statusom, tekstom, citatima i tragom događaja. Policy putanja bira dokument za temu, a account putanja čita status naloga. Koriste se sintetički lokalni podaci i kontrolisana modelska funkcija; nema živog LLM-a, plaćenog modela ili API ključa.

[Nedeljni zadatak](<weekly-assignment (1).md>) traži da istražimo jedan propust u izboru prihvatljivog policy izvora (H1), sačuvamo početne dokaze, napišemo smislen test, napravimo ograničenu korekciju i uporedimo iste provere pre/posle. Zatim obrazlažemo preporuku: izdati u definisanoj simulaciji, ograničiti upotrebu ili ne izdati.

Potrebno je predati izmenjeni izvor, dodatni test, četiri direktorijuma dokaza (početna/završna evaluacija i regresija), `test-before.txt`, `test-after.txt` i popunjenu kratku belešku. Na kraju obe članice treba da objasne šta je promenjeno, koji dokazi podržavaju zaključak i šta ostaje neprovereno.

## 2. Koji problem smo pronašli

Za temu `refund` početna aplikacija vraća rok **30 dana** i citira `refund-old`, iako je taj dokument arhiviran. U podacima već postoji aktivni `refund-current` sa rokom **14 dana**. Za temu `legacy` postoji samo arhiviran dokument, a aplikacija ipak vraća odgovor.

Ugovor zahteva aktivan dokument odgovarajuće teme, njegov tekst i citat. Kada prihvatljivog izvora nema, očekuje se `refused` bez pozivanja modela.

Početni trag potvrđuje da je za refund izabran `refund-old`, revizija 1. Status `archived` utvrđujemo povezivanjem tog ID-ja i revizije sa `data/lab.json`, jer trag ne beleži status dokumenta. Pregled `src/app.ts:57` pokazuje uslov koji proverava samo temu: `.find(...)` uzima prvi odgovarajući dokument. Stari refund dokument je prvi, pa ga aplikacija prosleđuje modelu i navodi kao citat.

**Hipoteza za proveru:** pri izboru izvora zahtevati istu temu i aktivan status pre pozivanja modela. Ako takvog izvora nema, odbiti zahtev. Rešenje još nije implementirano niti dokazano testom pre/posle.

## 3. Šta je traženo od Codex-a i šta je urađeno

Zahtevi u tabeli su sažeti iz dogovora u razgovoru, a ne doslovni citati. Isidora je usmeravala rad i tražila objašnjenje svakog koraka; navedene komande, analizu i nacrte izvršio je Codex. To se ne predstavlja kao samostalna lična provera članica.

| Isidorin zahtev / korak | Šta je Codex uradio | Svrha i zapis |
| --- | --- | --- |
| Sačuvaj početno stanje na Git-u | Napravljen privatni GitHub repo i commit `1f50f92` — `init zero`, poslat na `main`. | Početna referenca za poređenje i povratak. |
| Pročitaj evidence template i beleži rad/commitove | Napravljen `EVIDENCE_W09.md` i pravila u `AGENTS.md`. | Razlikovanje izvršenog rada, plana i neproverenih tvrdnji. |
| Podeli posao i vodi Isidoru korak po korak | Pročitani README i zadatak; dogovoreni Isidorin prvi deo, Elenin nastavak i Isidorina odbrana. | Plan oko 110 minuta po osobi; to nije izmereno trajanje. |
| Pripremi projekat i izvrši korak 2 | Provereni Node/npm, instalacija, typecheck i osnovni testovi; pokrenute teme shipping, refund, legacy i unknown. | Sirovi izlazi u `evidence/step-02/`; potvrđeno početno ponašanje. |
| Izvrši korak 3 i objasni rezultate | Pokrenuti nova evaluacija i regresija; provereni izveštaji, sažeci i svih 11 tragova. | Sačuvana početna merenja, bez popravke aplikacije. |
| Izvrši korak 4 i objasni uzrok | Povezani zahtev, izvor, odgovor, kriterijumi i kod; analizirane slaba provera i ilustrativna ocena. | Dokaz opažanja i hipoteza uzroka u evidence fajlu. |
| Izvrši korak 5 i pripremi predaju | Napisani opseg, kriterijumi i predlog warranty testova; napravljen `SPEC.md` za Elenin pregled i dopune. | Dogovor o očekivanom ponašanju pre implementacije. |
| Commituj pripremljene delove i dodaj opise | Napravljeni dokumentacioni checkpoint-i, uključujući `93defc8` sa SPEC-om. | Puni SHA, poruke i svrha svakog commita nalaze se u evidence dnevniku. |

## 4. Stvarni rezultati i njihovo značenje

- Node `v24.21.0` zadovoljava zahtev projekta. Instalacija je uspela posle prvog pokušaja blokiranog pristupom npm kešu; oba izlaza su sačuvana.
- Typecheck i build su prošli; postojeći testovi imaju **3/3 prolaza**.
- CLI primeri: `shipping` i `unknown` odgovaraju ugovoru; `refund` i `legacy` ga krše, iako sve četiri komande završavaju kodom 0.
- Početna evaluacija ima **2/4**, a regresija **5/7 prolaza**, obe sa kodom 1 zbog neuspešnih kriterijuma. Regresija sadrži tri dodatna slučaja, pa odnos 2/4 prema 5/7 nije poboljšanje pre/posle.

Početni dokazi su:

- [Evaluacioni sažetak](../runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/summary.md).
- [Regresioni sažetak](../runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/summary.md).

Izlazni kod 0 potvrđuje uspešno izvršavanje komande, ali prihvatljivost odgovora određuju kriterijumi. `weakCheck` proverava samo da odgovor nije prazan. Ocena `recordedJudge` 0.95 za pogrešan refund odgovor unapred je pripremljena ilustracija u podacima, a ne stvarno LLM ocenjivanje u našem radu. Važenje izvora, sadržaj i citat moraju se proveriti zasebno.

## 5. Koji fajl čemu služi

| Fajl / direktorijum | Uloga i način korišćenja |
| --- | --- |
| `README.md` | Osnovne komande i način pokretanja projekta. |
| `instructions/weekly-assignment (1).md` | Izvorni zadatak, granice i redosled obaveznih koraka. |
| `instructions/evidence-template.md` | Izvorni obrazac beleške; popunjeni rad je u evidence fajlu u korenu. |
| `EVIDENCE_W09.md` | Glavni dnevnik: opažanja, rezultati, doprinosi, commitovi, putanje dokaza i kasnija preporuka. |
| `SPEC.md` | Kratak plan za Elenin pregled, dopune, test i minimalnu korekciju. |
| `AGENTS.md` | Uputstva Codex-u o radu u repozitorijumu i poštenom beleženju dokaza. |
| `src/app.ts` | Aplikaciona logika; buduća korekcija ograničena je na policy izbor izvora. |
| `data/lab.json` | Javni sintetički podaci, slučajevi i očekivanja; čuvati ih za isto merenje pre/posle. |
| `tests/app.test.mjs` | Postojeća tri testa. Novi `tests/source-eligibility.test.mjs` tek treba dodati. |
| `scripts/` | Pokretanje, automatsko čuvanje dokaza i poređenje izveštaja; očuvati način merenja. |
| `evidence/step-02/`, `evidence/step-03/` | Sačuvani konzolni izlazi pripreme, CLI provera i početnih merenja/provere dokaza. |
| `runs/` | Automatski izveštaji, sažeci i tragovi. Dva odabrana početna izvršavanja uključena su u Git; buduća posebno sačuvati. |
| `dist/`, `node_modules/` | Generisani kod i instalirane zavisnosti; ne uređivati ih kao izvor niti uključivati u predaju. |

## 6. Kako nastavljamo — dogovor članica

**Isidora:** vodila je pripremu uz Codex i tražila objašnjenja koraka 1–5. Pre odbrane pregleda i Elenine završne izmene, dokaze i preporuku. Lično razumevanje i rezultate koje je sama proverila treba posebno zabeležiti kada ih potvrdi.

**Elena:** prvo pregleda `SPEC.md`, dopunjuje ga primedbama i potvrđuje preuzeti checkpoint. Zatim piše novi test sa sopstvenom temom `warranty`, čuva njegov stvarni assertion neuspeh na početnoj aplikaciji, pa tek onda menja izbor izvora. Posle korekcije proverava isti test, postojeće testove i oba javna skupa. Čuva `test-before.txt`, `test-after.txt`, dva završna direktorijuma i poređenja sa početnim izveštajima. U evidence upisuje doprinos, rezultate, commitove, ograničenja i preporuku.

**Obe:** treba da umeju da objasne ceo tok, prihvaćeni kod/test i granice dokaza. Planirani završni rezultati 4/4 i 7/7 još nisu dobijeni. Problem nepoznatog naloga ostaje rizik za preporuku cele aplikacije; nije obavezna druga popravka u H1 zadatku. Mali sintetički skup ne dokazuje pouzdanost živog modela ili spremnost za produkciju.

## 7. Beleška za odbranu i buduće dopune

Predlog objašnjenja trenutnog stanja: „Sačuvali smo početnu verziju i izvršili početna merenja. Iako tri osnovna testa prolaze, evaluacija pokazuje propust u izboru izvora. Trag i podaci potvrđuju arhivirani dokument, a kod proverava samo temu. Napisali smo specifikaciju i plan testa za opšte pravilo izbora aktivnog izvora. Popravka i dokaz poboljšanja tek slede.”

Ovaj tekst je nacrt objašnjenja, ne potvrda da su članice već održale odbranu. Posle Eleninog rada ažurirati status, opis stvarne korekcije i ograničenja; detaljne rezultate i istoriju nastaviti u evidence fajlu. Posle tutorove provere i incidenta u sredu dopuniti istu belešku zaključcima i eventualnom izmenom preporuke.

Pri pisanju ovog vodiča poslednji commit je lokalni `93defc8`; noviji rad od `init zero` još nije poslat na GitHub. Dostupnost najnovijeg commita i svih dokaza Eleni treba proveriti pre predaje. Ovaj vodič nije poslat drugoj osobi.
