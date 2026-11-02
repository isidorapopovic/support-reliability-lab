# W09 / H1 — izbor aktivnog izvora: predaja Eleni

**Od:** Isidora Popović · **Nastavlja:** Elena · **Odbrana:** Isidora
**Status:** nacrt za Elenin pregled i dopune; test i korekcija još nisu započeti.

## Polazno stanje

Na grani `main`, referentni checkpoint `b19d105eefd9d3ca5903738c75f9386ca086430b` čuva pripremu koraka 1–5 i početne dokaze. Aplikacioni kod odgovara `init zero` (`1f50f92`). Ovaj `SPEC.md` je naknadni sažetak za predaju: Elena treba da preuzme i commit koji sadrži ovaj fajl. Pri pripremi predaje noviji commitovi još nisu poslati na GitHub; dostupnost proveriti pre preuzimanja.

Pročitati `AGENTS.md`, korake 4–5 u [EVIDENCE_W09.md](EVIDENCE_W09.md) i korake 6–8 u [zadatku](instructions/weekly-assignment%20(1).md). Proveriti da su oba početna direktorijuma dokaza dostupna:

- Evaluacija: `runs/evaluate-66885fd0-bca6-4018-89ec-058f7c24e6a5/` — stvarno **2/4**, kod 1.
- Regresija: `runs/regression-97de2b74-ed8d-46e2-ab4c-8702d0cb8da5/` — stvarno **5/7**, kod 1.

Oba direktorijuma su uključena u prethodne commitove. Sadrže originalne `report.json`, `summary.md` i tragove; ne prepravljati ih. Typecheck i postojeća tri testa ranije su prošli.

## Problem, predlog i granica

`src/app.ts:57` bira prvi dokument iste teme bez provere aktivnosti. Zato `refund` koristi arhivirani izvor i rok 30 dana umesto aktivnog izvora sa 14 dana, a `legacy` odgovara iako ima samo arhiviran izvor.

**Hipoteza:** u policy izboru zahtevati istu temu i `state: active` pre modelskog poziva. Ako prihvatljiv izvor ne postoji, koristiti odbijanje. Hipotezu tek treba potvrditi testom pre/posle.

Menjati samo policy izbor u `src/app.ts` i dodati `tests/source-eligibility.test.mjs`. Očuvati account putanju, javne podatke i njihov redosled, postojeće testove, konfiguraciju i evaluator. `dist/` nastaje build-om. Rešenje mora važiti za bilo koju temu.

## Kriterijumi prihvatanja

| Uslov | Očekivanje |
| --- | --- |
| Arhivirani izvor je pre aktivnog iste teme | `ok`, tekst i jedini citat aktivnog izvora; isti izvor prosleđen modelu. |
| Nema aktivnog izvora tražene teme | `refused`, prazni citati, nula modelskih i lookup poziva; aktivni izvor druge teme ne pomaže. |
| Postojeći ispravni slučajevi | Očuvani `shipping`, odbijanje nepoznate teme, poznati nalozi i neispravan zahtev. |
| Dokaz korekcije | Isti novi test pada pre i prolazi posle; isti javni skupovi porede se pre/posle. |

## Predlog novog testa

Koristiti stvarni `answer` iz `../dist/app.js`, Node test runner i `node:assert/strict`. Sintetički podaci ostaju u novom testu.

1. Tema `warranty`: `warranty-old` (archived, `Warranty lasts 1 month.`), aktivni dokument druge teme, zatim `warranty-current` (active, `Warranty lasts 12 months.`). Očekivati tačan tekst `Policy: Warranty lasts 12 months.`, citat `warranty-current`, aktivni izvor prosleđen modelu, jedan modelski i nula lookup poziva.
2. Ista tema bez aktivnog warranty izvora, uz aktivni dokument druge teme: očekivati odbijanje i nula poziva oba dependency-ja.

Očekivanja zadati eksplicitno; ne izračunavati ih kopiranjem selekcije iz aplikacije. Pozive brojati, jer aplikacija hvata modelske izuzetke.

## Redosled rada — Elena

1. Pregledaj i dopuni ovu specifikaciju; zabeleži datum, primedbe i prihvaćenu verziju ispod i u evidence fajlu.
2. Dodaj test pre popravke. Pokreni `npm run build`, pa `node --test tests/source-eligibility.test.mjs > test-before.txt 2>&1`. Sačuvaj stvarni assertion neuspeh zbog pogrešnog izvora/teksta/citata ili statusa. Greška build-a, sintakse ili uvoza nije dokaz propusta.
3. Tek posle tog dokaza primeni minimalnu korekciju. Pokreni `npm run typecheck`, `npm test` i isti ciljani test uz izlaz u `test-after.txt`. Pregledaj diff i stvarne rezultate.
4. Pokreni `npm run evaluate` i `npm run regression`; zapiši obe nove putanje. Očekivanja su 4/4 i 7/7, ali upiši samo dobijene rezultate. Sa `npm run compare -- PRE/report.json POSLE/report.json` poredi evaluaciju sa evaluacijom i regresiju sa regresijom, koristeći stvarne putanje. Pregledaj refund citat i legacy odbijanje bez modelskog poziva.
5. Dopuni evidence stvarnim doprinosom, AI pomoći, rezultatima, ograničenjima i preporukom. Uključi preostali rizik nepoznatog naloga i signal/uslov/reakciju. Sačuvaj sve dokaze i upiši commitove/opise za fallback; nove `runs/` direktorijume posebno uključi u predaju. Isidori ostavi završni SHA, diff, četiri direktorijuma dokaza i oba test loga za odbranu.

U PowerShell-u možeš koristiti `npm.cmd` umesto `npm`. Posle neuspešnog build-a prvo otkloni prepreku; ne predstavljaj test nad starim `dist/` kao nov dokaz.

## Elenin pregled i dopune

- Datum / preuzeti commit: **čeka se**.
- Prihvaćeno / potrebno izmeniti, sa razlogom: **čeka se**.
- Dogovorene dopune specifikacije: **čeka se**; uskladiti sa evidence fajlom pre implementacije.
- Stvarno izvršeni koraci, putanje dokaza i commitovi: beležiti u `EVIDENCE_W09.md`.
