# Spremni Promptovi za Cursor

Ova datoteka sadrži standardizirane promptove koje koristimo u razvoju "Web Stranice Autorice".

## 1. Planiranje Nove Značajke (ili Migracija Koraka)

Ovaj prompt koristimo kada započinjemo rad na novom zadatku iz plan_migracije.md

**Kako koristiti:** Kopirajte cijeli tekst ispod, zalijepite ga u novi chat, i zamijenite [Ovdje detaljno opišite značajku] s opisom zadatka.

```
@plan_migracije.md
@.cursor-rules

Napravi detaljan, isključivo **tehnički plan** za implementaciju sljedeće značajke. Plan treba biti lista konkretnih koraka (koje datoteke kreirati, koje izmijeniti, koje funkcije dodati), bez primjera koda.

**Značajka za planiranje:**
[Ovdje detaljno opišite značajku]
```

## 2. Pregled Koda (Code Review)

Ovaj prompt koristimo NAKON što je implementacija značajke gotova, u potpuno novom chatu.

**Kako koristiti:** Kopirajte tekst ispod, zalijepite ga u novi chat i priložite datoteku s tehničkim planom koji je implementiran.

```
@.cursor-rules
@[datoteka-s-tehnickim-planom.md]

Obavi detaljan i nepristran pregled koda za nedavno implementiranu značajku, opisanu u priloženom planu.

Fokusiraj se na:
1. **Usklađenost s planom:** Jesu li svi tehnički koraci iz plana implementirani?
2. **Potencijalne greške (bugs):** Postoje li očite logičke greške?
3. **Kvaliteta koda:** Pridržava li se kod smjernica iz `.cursor-rules` datoteke? (Npr. Korištenje `next/link` i `next/image`).
4. **Sigurnost:** Postoje li očiti sigurnosni propusti?

Generiraj sažeti izvještaj o pregledu.
```
