# Pravila rada u ovom repozitorijumu

- Glavni zapis rada je `EVIDENCE_W09.md`, zasnovan na `instructions/evidence-template.md`. Pre nastavka pročitaj zapis i relevantna uputstva zadatka.
- Na zahtev Isidore beleži sve naredne commitove i njihove opise u odeljku „Dnevnik commitova i povratak na prethodno stanje”, radi mogućeg fallback-a. Na početku rada uporedi dnevnik sa stvarnim `git log` i dopuni nedostajuće commitove, uključujući one napravljene van Codex-a.
- Za svaki commit upiši stvarni puni SHA, tačnu poruku, datum/vreme u zoni Europe/Budapest, konkretan opis promene, stvarne rezultate/neizvršene provere i namenu tačke za povratak. Po potrebi poveži generisane dokaze njihovim stvarnim putanjama.
- Pre commita dopuni opis rada; posle uspešnog commita dodaj njegov stvarni SHA u izveštaj. Taj novi red ostaje dokumentaciona izmena za sledeći smisleni commit. Ne pravi beskonačan niz commitova samo da bi commit beležio sopstveni hash i ne koristi amend radi toga. Jasno prijavi ako izveštaj ostaje necommitovan.
- Ne izmišljaj rezultate, doprinose drugog člana ili nezavisnu potvrdu. Razlikuj plan, izvršavanje, opažanje i zaključak. Ne prepisuj niti menjaj metapodatke i rezultate automatskih izveštaja.
- Sačuvaj početni commit `1f50f92351838fc34da1a58a12f33253ffac9a25` (`init zero`) kao početnu referencu. Fallback ne znači da je ta verzija funkcionalno ispravna. Ne vraćaj kod, ne briši lokalne izmene i ne prepisuj udaljenu istoriju bez korisnikovog zahteva.
- Poštuj granice nedeljnog zadatka: izmena u `src/` i dodatni test u `tests/`; ne menjaj javne podatke, postojeće testove, konfiguraciju ili evaluacione skripte radi boljih rezultata. Dokumentacioni zapis ne zahteva pokretanje evaluacije; rezultate beleži tek kada su stvarno dobijeni.
