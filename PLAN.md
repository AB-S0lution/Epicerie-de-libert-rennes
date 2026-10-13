# Épicerie de Liberté (Google listing: "Epicerie de liberté"; legal name EPI DE LIBERTE) — Research & Plan

> **Epicerie de liberté** is a small, independent **late-night neighbourhood grocery** (épicerie de quartier / de nuit / de dépannage) at **46 boulevard de la Liberté, 35000 Rennes**. It sits on the boundary between the Centre-ville and Colombier, a few steps from the Le Liberté concert hall and the République and Colombier metro stations. The company is EPI DE LIBERTE SARL, created in November 2025, and the shop was trading by February 2026 at the latest. Three things set it apart. It is **open 7 days a week until 01:00**, when U Express next door closes at 21:00. It is a **Relais Pickup / La Poste parcel point** (Chronopost, Colissimo, DPD, up to 20 kg). And its 26 Google reviews are all 5 stars, mostly praising people rather than products: *"accueil chaleureux"*, *"personnel au top"*, *"super safe pour les filles"*, *"courses de dernière minute"*. It is **not** an épicerie fine, bio, vrac or "du monde" shop. It has no website, no social media, no logo or slogan online and no press coverage. The site has to build its identity from these facts: time (open late), place (boulevard de la Liberté), welcome and safety at night, and parcels.

---

## 0. Status & confidence

| Item | Value |
|---|---|
| **Identity verdict** | **Confirmed (high confidence), with naming caveats.** The target is the general late-night grocery at 46 bd de la Liberté. It appears as "Epicerie de liberté" on Google-derived directories, and its legal entity is **EPI DE LIBERTE SARL, SIREN 994 343 598**. The shop–company link is **inferred but strong**: same address; EPI DE LIBERTE is the only grocery-coded company at no. 46; the La Poste relay at the address carries the legal name; reviews mention parcels until 1 a.m. |
| **Wrong names (do not use)** | "Épicerie de **la** Liberté" does not exist in Rennes. Other groceries on the same boulevard are different businesses (see §7). |
| **Type** | General neighbourhood convenience grocery open late, plus a parcel relay. **Not** fine food, bio, vrac or "du monde". |
| **Research date** | 2026-10-13 |
| **Tools used** | Official registry API `recherche-entreprises.api.gouv.fr` (address- and NAF-filtered searches); societe.com; pagesjaunes /siret; La Poste locator; relais.pickup.fr; epicerie.tel (Google data mirror, listing updated 09/10/2026); bottin.fr; iambeezy/BeezPages; OSM Nominatim and Overpass; Parkopedia; Wikipedia / Wikisource; BODACC open-data API; Tavily, WebSearch and WebFetch for press, social and competitor searches; Awwwards and SiteInspire metadata for references. |
| **Unavailable / failed** | Direct Google Maps data: the local gosom scraper (localhost:8080) was not running or returned 404, so all Google data comes through mirrors. Pappers and Kompass returned HTTP 403. annuaire-entreprises renders client-side, so the API was used instead. Foxtrot, Pop Up Grocer (HTTP 402 "store unavailable"), Maison Plisson and Erewhon did not render. Google profile photos were **not viewed** (no-screenshot rule). |
| **Critic pass (2026-10-13)** | Re-fetched raw HTML of La Poste and Pickup pages, re-queried the registry API, BODACC open-data API, Rennes Métropole open data (Breton street names), OSM Nominatim, lestrans.com, tourisme-rennes.com, star.fr, jds.fr. Corrected two errors (accessibility, Trans Musicales venue) and resolved two unknowns (Impekkable, registered letters). See §15. |
| **Overall confidence** | **High** on identity, address, legal data, the type of shop, the parcel relay and the 01:00 closing. **Medium** on the rating (single aggregator) and the phone (single directory). **Conflicting** on opening times and the enseigne / nom commercial. **No data** on products, prices, logo, colours, shopfront or founder story. |

---

## 1. Verified facts

Status key: **verified** = 2+ sources agree. **single-source** = one source only. **conflicting** = sources disagree. **not found**.

| Field | Value | Status | Sources |
|---|---|---|---|
| Public trading name | **"Epicerie de liberté"** (Google listing); bottin writes "Epicerie De Liberté". The physical sign has not been confirmed. Typographic rendering for the site: "Épicerie de Liberté" (owner to confirm). | verified (both are Google-fed aggregators, so not fully independent) | https://epicerie.tel/f/epicerie-de-liberte-14363773/ · https://epicerie.tel/epicerie/rennes/ · https://www.bottin.fr/fiche-locale/dfgiacbaihcigcibadb--epicerie-de-liberte--rennes.htm |
| Legal name | **EPI DE LIBERTE** | verified | https://recherche-entreprises.api.gouv.fr/search?q=994343598 · https://www.societe.com/societe/epi-de-liberte-994343598.html · https://www.pagesjaunes.fr/siret/99434359800011 |
| Nom commercial / enseigne | INSEE nom_commercial "EPI DE LIBERTE"; **no enseigne registered** (`liste_enseignes: null`); societe.com: "no trade name or brand registration identified". Researchers cited Pappers for nom commercial "EPI de Liberté" and enseigne "Epi de liberté", but Pappers returned 403 and this could not be checked. The "épi" (ear of wheat) pun is the researchers' interpretation, not the business's. | **conflicting** | https://recherche-entreprises.api.gouv.fr/search?q=994343598 · https://www.societe.com/societe/epi-de-liberte-994343598.html · https://www.pappers.fr/entreprise/epi-de-liberte-994343598 |
| Legal form / capital | SARL (nature juridique 5499); share capital **€3,000** (capital from societe.com only) | verified (form) / single-source (capital) | societe.com · pagesjaunes /siret · recherche-entreprises API |
| SIREN / SIRET / VAT | **994 343 598** / **994 343 598 00011** (head office, only establishment) / **FR88994343598** | verified | recherche-entreprises API · https://www.pagesjaunes.fr/siret/99434359800011 · societe.com |
| NAF / type | **47.11B Commerce d'alimentation générale**. A late-night neighbourhood convenience grocery with a parcel relay. | verified | recherche-entreprises API · pagesjaunes · societe.com · epicerie.tel |
| Declared activity | *"Vente de tous produits alimentaires, fruits et légumes, sandwicherie ou autres, vente de produits ménagers, d'hygiène, de première necessité ou autres, vente de boissons et d'alcool à emporter"* | single-source | https://www.societe.com/societe/epi-de-liberte-994343598.html |
| Address | **46 Boulevard de la Liberté, 35000 Rennes** | verified | recherche-entreprises API · https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287 · https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE · epicerie.tel · bottin.fr · pagesjaunes |
| GPS | **48.1082153, -1.6826254** (INSEE geocode). The Google coordinate 48.1082123, -1.6824975 is about 10 m away. | single-source | recherche-entreprises API |
| Quartier | **Centre** (OSM: Les Lices / Centre-Ville). The boulevard is the boundary between Centre-ville (north) and Colombier (south), and epicerie.tel labels it "Colombier". | verified | https://nominatim.openstreetmap.org/reverse?lat=48.1082152790399&lon=-1.68262542000035&format=json · https://fr.wikipedia.org/wiki/Boulevard_de_la_Libert%C3%A9_(Rennes) · epicerie.tel |
| Phone | **07 45 05 80 25** (mobile). **Confirm with the owner before publishing.** | single-source | https://www.bottin.fr/fiche-locale/dfgiacbaihcigcibadb--epicerie-de-liberte--rennes.htm · https://www.bottin.fr/annuaire/epicerie-a-rennes-35238.htm (boulangeries-patisseries.fr used the same DB ID and is now 404, so it is not independent) |
| Email | — | not found | — |
| Website | None | verified (none) | pagesjaunes · epicerie.tel · bottin.fr |
| Social media | None found (Facebook, Instagram, TikTok, Snapchat, LinkedIn). The Instagram reel lead @chezlesbalkans.lyon is **refuted**: it is a Balkan grocery in Lyon. | not found | https://www.instagram.com/reel/DS23n06jGMm (refuted lead) |
| Delivery apps | None (Uber Eats, Deliveroo, Too Good To Go). Only U Express and NOUS have such listings. | not found | web searches |
| **Shop hours** | **Open 7 days, closing at 01:00 every night.** Opening times **conflict**, see the table below. | 01:00 close **verified**; opening **conflicting** | epicerie.tel · bottin.fr · review "7 jours sur 7 jusqu'à 1 heure du matin" |
| Parcel relay hours | Mon 15:00–22:00 · Tue–Sat 11:00–22:00 · Sun 15:00–22:00 | verified | La Poste locator · relais.pickup.fr |
| Services | General grocery (food, fruit and vegetables, sandwiches, household, hygiene, essentials, drinks and alcohol to take away). **Relais Pickup**: parcel collection and sending, Shop2Shop, label-free Chronopost/Colissimo shipping, carriers Chronopost / Colissimo / DPD, up to **20 kg** (longest side < 1 m: pickup.fr FAQ, standard relay). pickup.fr also lists **« Nettoyage de linge de maison avec Impekkable »**: a household-linen cleaning service (sheets, duvet covers, duvets, pillows) that customers order online and drop at the relay in an Impekkable kit, then collect a few days later. La Poste lists "Retrait colis". | relay verified; Shop2Shop / carriers / Impekkable single-source (pickup.fr) | https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE · https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287 |
| Registered letters / stamps | **Not offered as listed services (resolved by critic).** In the raw La Poste HTML the only service listed under "Services Courrier colis" is **"Retrait colis"**. The sentence mentioning « lettre recommandée » and « l'achat de timbres » is La Poste boilerplate that sends people to laposte.fr (« Pour réaliser vos envois de courrier, colis, lettre recommandée ou encore l'achat de timbres en quelques clics, rendez-vous sur laposte.fr »). It is not a service of this relay. **Do not claim it.** | resolved: not a service | https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287 |
| Payment | Credit and debit cards (« Carte de crédit, Carte de débit ») | single-source | bottin.fr |
| Accessibility | **CORRECTION (critic):** the "Accessibilité : partiellement conforme" text on the La Poste page sits in the **site footer**, next to "Plan du site / Conditions contractuelles / Mentions légales". It is the **RGAA compliance statement of the La Poste website**, not a statement about the shop. **Remove it as a shop fact.** The only shop-level signal is that pickup.fr shows its **PMR (wheelchair) icon and parking icon** on this relay's page. That comes from one source, a network template flag that the owner self-declares. No acceslibre record. | single-source (pickup.fr icons only) | relais.pickup.fr (raw HTML: `img-pmr`, `img-parking`) · La Poste locator footer |
| Staff / employer signals | Registry `complements`: **convention collective renseignée, IDCC 2216** (Commerce de détail et de gros à prédominance alimentaire). An IDCC is normally reported through payroll filings (DSN), so this suggests **salaried staff** (inference). That fits reviews praising « le personnel » / « l'équipe ». Effectif tranche "NN" (not stated). `est_bio:false`, `est_alim_confiance:false` (no published Alim'Confiance hygiene inspection). | single-source (official) + inference | https://recherche-entreprises.api.gouv.fr/search?q=994343598 (re-queried 2026-10-13; record updated 2026-10-12) |
| BODACC | **No BODACC notice at all** for SIREN 994343598 (creation, sale or accounts) in the open-data API on 2026-10-13. This is consistent with a new creation (no purchased fonds de commerce). | verified (absence, one official source) | https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=search(%22994343598%22) |
| OpenStreetMap | **The shop is not mapped in OSM.** Address node 560009356 has no shop tags. (Épicerie Le Roi at no. 40 is mapped.) The site's map should therefore pin the coordinates, not an OSM POI. | verified | https://nominatim.openstreetmap.org/search?q=46+boulevard+de+la+Libert%C3%A9+Rennes&format=json&extratags=1 |
| Street name in Breton | **« Boulouard ar Frankiz »** is the official Breton name of Boulevard de la Liberté in Rennes Métropole's open data. It is an authentic bilingual cue for the design. Whether a bilingual plate is physically posted on this boulevard is unknown. | single-source (official open data) | https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/nom_voies_breton/records?where=search(%22Libert%C3%A9%22) · https://www.data.gouv.fr/datasets/noms-de-voies-en-breton-sur-rennes-metropole |
| Access / transport | Metro **Colombier** (line b) ~260 m S; **République** (lines a + b) ~300 m E; Charles de Gaulle (line a) nearby. Bus stops La Criée (~180 m), Colombier (~255 m), Place de Bretagne, Pont de Bretagne, République. Meter parking at no. 46 (5 spaces), paid Mon–Sat 9:00–19:00, 4 h max; free evenings, Sundays and 12:00–14:00. | OSM-derived (medium); parking single-source (aggregator) | OSM Overpass (distances computed) · https://www.parkopedia.fr/parking/horodateur/46_boulevard_de_la_libert%c3%a9-2/35000/rennes/ |
| Price range | — | not found | — |
| Founded | Company created **24 Nov 2025** (INSEE date_creation); gérant appointed 10 Dec 2025; RNE registration 15 Dec 2025; SIRENE date_debut_activite 2026-04-01 (probably a later status or NAF update); earliest Google review **28 Feb 2026**. Use **"depuis 2025"** or **"depuis l'hiver 2025–26"** on the site, never a precise opening day. | verified | recherche-entreprises API · pagesjaunes · societe.com · epicerie.tel |
| Owner / gérant | Moussa Sadadou, gérant since 10 Dec 2025. **Public registry only.** The business does not present him publicly, so **do not put his name on the site** without his consent. | verified (registry) | recherche-entreprises API · societe.com |
| Status | Active / open (reviews Feb–Jul 2026; listing updated 09/10/2026) | verified | recherche-entreprises API · epicerie.tel · La Poste |
| Google rating | **5.0 / 5 from 26 reviews** (all 5★), per the epicerie.tel update of 09/10/2026. An earlier BeezPages snapshot showed 5.0 from 14 reviews (page body empty on recheck). | single-source | https://epicerie.tel/f/epicerie-de-liberte-14363773/ · https://www.iambeezy.app/beezpages/epicerie-de-liberte-rennes-agv2 |
| Awards / press | None found | not found | (Unidivers covers other shops on the boulevard: https://unidivers.fr/rennes-epicerie-le-roi-syrien/) |
| Prospecting opt-out | Pappers reportedly shows that the company **opposes the use of its data for commercial prospecting** | single-source, unverified (403) | https://www.pappers.fr/entreprise/epi-de-liberte-994343598 |

### Opening hours, per day (CONFLICTING: keep in one config object, owner to confirm)

| Day | Shop: Google / epicerie.tel (**preferred**, matches relay pattern) | Shop: bottin.fr | Parcel counter: La Poste / Pickup |
|---|---|---|---|
| Lundi | 15:00 – 01:00 | 15:00 – 01:00 | 15:00 – 22:00 |
| Mardi | 11:00 – 01:00 | 15:00 – 01:00 | 11:00 – 22:00 |
| Mercredi | 11:00 – 01:00 | 15:00 – 01:00 | 11:00 – 22:00 |
| Jeudi | 11:00 – 01:00 | 15:00 – 01:00 | 11:00 – 22:00 |
| Vendredi | 11:00 – 01:00 | 15:00 – 01:00 | 11:00 – 22:00 |
| Samedi | 11:00 – 01:00 | 15:00 – 01:00 | 11:00 – 22:00 |
| Dimanche | 15:00 – 01:00 | 12:00 – 01:00 | 15:00 – 22:00 |

Notes:
- epicerie.tel shows "00:00–01:00" on each day. That slot is the previous night carrying over, so the shop closes at 01:00 every night. The "Mon/Sun 15:00–23:59" reading by one researcher was a misreading.
- One review says parcels are handled "jusqu'à 1 heure du matin", which contradicts the 22:00 relay hours. Show the parcel-counter hours (22:00) separately from the shop hours (01:00) until the owner confirms.
- No seasonal or holiday closures were found.

---

## 2. Story & history

**What is known about the business**
- **Nov 2025:** EPI DE LIBERTE SARL is created (24 Nov), with €3,000 capital.
- **Dec 2025:** the gérant is appointed (10 Dec) and the company is entered in the RNE (15 Dec).
- **28 Feb 2026:** the first visible Google reviews appear, three on the same day. This suggests an opening push.
- **Spring–summer 2026:** reviews continue (12 Mar, 30 May, 20 Jun, 1 Jul 2026). The SIRENE activity date of 1 Apr 2026 probably reflects a status update.
- **Oct 2026:** 26 reviews, all 5★, listing refreshed 09/10/2026. The business has had a single establishment and no name change.
- **Before:** no BODACC sale-of-business (fonds de commerce) notice was found, and no earlier grocery is registered at no. 46. Earlier businesses at that number: the sandwich shop "Piccadely's" (2013, BODACC) and L.TACOS (NAF 56.10C, 2013–2014). The building is a copropriété (ASS COPRO 46 BD DE LA LIBERTE, registered since 1988) whose other registered companies are SCIs and a real-estate agency.
- **No founder story, interview, press article, award or event** has been published. **Do not invent one.** The "about" page should tell the story of the place (the boulevard) and the service (the hours, the parcel relay, the welcome), not a made-up family saga.

**The boulevard's story (usable, sourced)**
- The street follows the city's limits from at least the 15th century, along an **old canal at the foot of the ramparts**.
- It was laid out in **1855**, according to one source using spoil from digging the railway station.
- Under the Second Empire it was **boulevard de l'Impératrice / du Prince impérial**.
- It was renamed **boulevard de la Liberté on 17 October 1870**, after the Empire fell (Wikisource, *Notices sur les rues de Rennes*, 1883, supports this).
- It is **0.8 km** long and runs from avenue Jean-Janvier (east) to Place de Bretagne / bd de la Tour-d'Auvergne (west), separating **Centre-ville (north)** from **Colombier (south)**.
- Architecture: Haussmann-style dressed-stone buildings. École Liberté is at no. 8 and the Protestant temple at no. 22.
- Sources: https://fr.wikipedia.org/wiki/Boulevard_de_la_Libert%C3%A9_(Rennes) · https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/47 · https://www.rennesimmo9.com/actualites/urbanisme-architecture/quartier-colombier-rennes
- **Storytelling hook:** "Liberté" is the street's name since 1870. The shop's name comes from its street, not from a manifesto. A line like « Boulevard de la Liberté, depuis 1870 » is authentic. "Épicerie depuis 1870" would be **false**.

---

## 3. Offer

**No catalogue, menu, product list, prices or signature products are published anywhere.** No review names a specific product. Everything below is either verified *categories* or verified *services*.

**Verified categories** (from the declared activity on societe.com and from reviews):
- Produits alimentaires (all food products: "tous produits alimentaires")
- Fruits et légumes
- Sandwicherie "ou autres" (sandwiches, snacks)
- Produits ménagers (household)
- Produits d'hygiène
- Produits de première nécessité (essentials, dépannage)
- Boissons et alcool à emporter. A review mentions a **free sweet ("bonbon gratuit") with an alcohol purchase**.
- "Ont trouvé de tout" (review): a broad general range.

**Verified services**
- **Late-night shopping 7 days a week until 01:00**, for "courses de dernière minute".
- **Relais Pickup / La Poste**: parcel collection and sending; Shop2Shop; label-free shipping for Chronopost / Colissimo; carriers Chronopost, Colissimo, DPD; parcels **up to 20 kg**. Parcel-counter hours end at 22:00.
- **Impekkable household-linen pressing drop point (resolved by critic).** pickup.fr, verbatim: « Gagnez du temps en confiant votre linge de maison à Impekkable, le service de pressing pratique et économique. Connectez-vous à votre espace client Impekkable pour préparer votre commande puis déposez-la directement dans ce relais, emballée dans un kit de démarrage. Récupérez ensuite votre linge propre et frais quelques jours plus tard. » Impekkable's own site gives a turnaround of « maximum 6 jours » and prices from €6.90 (single bed set) / €9.90 (double) / €14.90 (double duvet). **Those prices are Impekkable's, not the shop's**: link out rather than print them. The Pickup network has been Franprix's partner for Impekkable since March 2025. Sources: https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE · https://www.impekkable.com/ · https://groupe-casino.fr/wp-content/uploads/2025/03/Info-presse-groupe-Casino-Franprix-lance-une-offre-de-pressing-avec-Impekkable.pdf (PDF 403 on fetch; content from search snippet, medium). **Site copy:** « Dépôt pressing linge de maison (Impekkable) », as a small service tile on the relay page.
- **Label-free sending (verbatim pickup.fr):** « si votre destinataire vous fourni un QR code / e-label, présentez-le en relais et nous imprimons l'étiquette sur place ». This is real and concrete copy for the relay page.
- Card payment.
- **Not offered:** registered letters and stamps. That was boilerplate on the La Poste page, see §1.

**Pickup network rules.** These are published on this relay's own pickup.fr page (FAQ block). They are real, network-wide facts and can fill the relay FAQ without inventing anything (source: https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE):
- **Arrival notice:** an email and/or SMS with the relay's address, hours and the collection deadline.
- **Holding time:** at most **9 days (DPD)**, **8 days (Chronopost)**, **14 days (Colissimo)**.
- **What to show:** the **Pickup Pass** (QR code in the carrier email) or the collection code. Without either, an original ID (carte d'identité, passeport, permis de conduire).
- **Someone else collecting:** they must show **their own original ID and yours**. Written proxies are not accepted.
- **Damaged parcel:** you can record reservations on the shopkeeper's scanner, then accept or refuse the parcel.
- **Size limits (standard relay):** < 20 kg and longest side < 1 m.
- **Relay-to-relay sending:** Shop2Shop by Chronopost, label created online.

**Signature "items"** (what the shop is known for, per reviews; these are not products):
1. **Ouvert jusqu'à 1h, 7j/7**
2. **Le relais colis**
3. **L'accueil** (warmth, safety at night)
4. **Le petit bonbon offert** (small extra; mention it lightly and never tie it to alcohol in visuals, because of the Loi Évin)

**Prices:** none found. All prices on the site are mock (see §11).

---

## 4. Customer voice

**Ratings** (seen 2026-10-13)

| Platform | Rating | Count | Date / note |
|---|---|---|---|
| Google (via epicerie.tel mirror) | **5.0 / 5** | **26** (all 5★) | Listing updated 09/10/2026. Reviews dated Feb–Jul 2026. Only 9 review texts are mirrored publicly. |
| Google (older BeezPages snapshot) | 5.0 / 5 | 14 | Earlier in 2026; shows the count rising |
| PagesJaunes | — | 0 | Registry listing only, "en cours de référencement" |
| TripAdvisor, Yelp, Restaurant Guru, Petit Futé, Too Good To Go, Facebook, Reddit r/rennes | — | — | Not listed |

**Praise themes** (in order of strength)
1. **Accueil and staff.** This appears in 8 of 9 mirrored reviews: "accueillant", "accueil chaleureux", "personnel au top", "vraiment sympas", "ultra sympa et aimable", "amabilité".
2. **Late hours / last minute.** "Heures très tard", "7 jours sur 7 jusqu'à 1 heure du matin", "courses de dernière minute".
3. **Parcels.** "Très bon service pour les colis".
4. **Safety at night, notably for young women.** "super safe pour les filles".
5. **Range.** "Ont trouvé de tout".
6. **Clean and serious.** "Sérieux et bien présenté".
7. **Personality and small gestures.** The free sweet; a cashier described as "divin".
8. **The owner replies** to most reviews, briefly and warmly.

**Complaints:** none found. Caveat: the shop is young, the sample is small and reviews come in clusters (three on 28/02/2026, two on 30/05/2026). **Do not overclaim.** Never write "la meilleure épicerie de Rennes" or "la mieux notée". State the real figure with its date: « 5,0/5 sur 26 avis Google (octobre 2026) ».

**Who the customers are** (inference, low–medium confidence)
- Local residents, and night-time customers in the city centre: concert-goers from Le Liberté, people from the bars, shift workers.
- Students and young adults, including young women out at night.
- People collecting or sending parcels.
- No evidence of tourists or families as a distinct group.

**Emotional vocabulary:** au top · super accueil · chaleureux · accueillant · serviable · sympa · aimable · divin · génial · magnifique · des amours · super safe · je recommande (vivement) · merci pour tous les Rennais. Emojis ❤️ 👌 🙏🏼 appear. The register is affectionate and personal, the way people talk about a corner shop where they know the staff.

**Verbatim quotes.** All come from Google reviews mirrored at https://epicerie.tel/f/epicerie-de-liberte-14363773/, with spelling kept exactly as written. **Real quote, may be used with attribution to platform only** ("Avis Google"). Do **not** print reviewer names.

1. « Serviable et accueillant…Au top 👌 » (Avis Google, ~01/07/2026)
2. « Super market ultra bien bonbon gratuit à l'achat alcool caissier divin (ultra sympa et aimable) » (Avis Google, ~20/06/2026). Do not use it in hero or visual contexts, because it mentions alcohol.
3. « super acceuil le personnel est au top je recommande !! et super safe pour les filles » (Avis Google, ~30/05/2026)
4. « super accueil merci beaucoup des amours » (Avis Google, ~30/05/2026)
5. « Accueil chaleureux, le personnel est très sympathique. Sérieux et bien présenté. » (Avis Google, ~12/03/2026)
6. « Je recommande vivement cette épicerie. » (Avis Google, ~12/03/2026)
7. « Très bon commerçant très bon service pour les colis et amabilité » (Avis Google, ~01/03/2026)
8. « Très bonne épicerie, le personel est vraiment sympas je recommande » (Avis Google, ~28/02/2026)
9. « Épicerie. Très chaleureux. Ont trouvé de tout. A des. Heures très tard. » (Avis Google, ~28/02/2026)
10. « 7 jours sur 7.jusqua 1 heure du matin déposer.recuperer.les colis génial. Magnifique.merci pour tout les rennais » (Avis Google, ~28/02/2026)
11. « L'équipe est au top pour les courses de dernière minute ! Je recommande vivement. » (Avis Google, ~28/02/2026)
12. Owner reply: « Merci, c'est très gentil ! Au plaisir de vous revoir. » Another reply: « Merci 🙏🏼 ».

The owner's reply is the only first-party copy that exists. Its register (short, warm, "au plaisir de vous revoir") is the **tone of voice** the site should follow.

---

## 5. Brand identity cues

- **Logo:** none found online.
- **Colours:** none known. There is no website, so no CSS to inspect, and the shopfront has not been seen.
- **Fonts:** none known.
- **Photos:** Google profile interior and street photos exist (mentioned on epicerie.tel) but were **not viewed** and **may not be used**. The shopfront, the sign wording and the sign colours are unknown.
- **Name:** "Epicerie de liberté" / EPI DE LIBERTE. "EPI" reads as a short form of "ÉPIcerie". The "épi" (ear of wheat) pun is an unconfirmed interpretation: do not build the logo on a wheat ear unless the owner confirms it.
- **Tone of voice** (from reviews and the owner's replies): warm, simple, familiar but polite (vouvoiement in replies), short sentences, grateful, practical. No marketing jargon. Customers talk about **people, hours and parcels**, not products.
- **Recurring words to reuse:** accueil, chaleureux, au top, sympa, serviable, dernière minute, 7 jours sur 7, jusqu'à 1h, colis, safe / en sécurité, sérieux, bien présenté.
- **Values / labels:** none claimed (no bio, local, artisan or anti-gaspi claims). **Do not invent any.** The site may state its practical values, since these come from reviews: welcome, opening hours, reliability, safety.
- **Copy angles grounded in research:**
  - « Ouvert quand les autres ferment »
  - « Votre épicerie de quartier, ouverte 7j/7 jusqu'à 1h »
  - « Accueil chaleureux »
  - « Point relais colis »
  - « Courses de dernière minute »
  - « Après le concert »

---

## 6. Place & context

**Location**
- **Quartier:** Centre (Les Lices / Centre-Ville in OSM), on the southern edge of the city centre. The boulevard is the line between the Centre-ville and the **Colombier**, a post-war slab ("dalle") development by **Louis Arretche** (1936–1969): about 2,500 homes and about 30,000 m² of shops, including the Colombia shopping centre. The area mixes residents, offices and students.
- **Next door:** U Express at no. 44 (closes 21:00).
- **Building:** a mixed-use copropriété with the shop on the ground floor.

**Landmarks**
- **Le Liberté**, 1 Esplanade Charles de Gaulle: Rennes' largest concert hall, with about 250,000 visitors a year and a smaller room upstairs, L'Étage. It took its name from the boulevard in 1996. **Capacity: sources differ.** The earlier research said ~5,500; jds.fr (2026 event page) says **« 5 200 places »** and L'Étage ~950. On the site, say « la grande salle du Liberté » and give no number. The 2026 programme includes, for example, Djadja & Dinaz on Fri 9 Oct 2026 (https://www.jds.fr/rennes/concerts/rap/djadja-et-dinaz-tournee-1082632_A), so there are regular evening crowds walking past.
- **Trans Musicales: CORRECTION (critic).** The 48th edition runs **2–6 December 2026**, but most concerts are at the **Parc Expo** (4 halls, « 3 soirées au Parc Expo »), not at Le Liberté (https://www.lestrans.com/le-festival/). What concerns the shop: the **« village des Trans » is at Le Liberté**, with free concerts (https://www.tourisme-rennes.com/decouvrir-rennes/sortir/transmusicales-guide/). The **night shuttles (navettes STAR) to the Parc Expo leave from the Esplanade Charles de Gaulle**, a couple of minutes from no. 46. On Thursday they run every 10 min from 19:00 to 01:00, then every 6 min until 03:30. On Friday and Saturday they run every 10 min from 19:20 to 21:00, then **every 5 min from 21:00 to 07:30** (https://www.lestrans.com/le-festival/infos-pratiques/venir-au-festival/, 2025 page, 2026 timetable not yet published). So festival-goers wait for shuttles right by the shop. This is the strongest real "night crowd" fact.
- **Esplanade Charles-de-Gaulle**, the "cultural plaza" on the former Champ de Mars.
- **La Criée centre d'art contemporain**, at the Halles centrales.
- **Marché des Lices** (~0.5 km N): a Saturday-morning market of about 250 producers, said to be France's second largest, held around the Halles Martenot (1867–71) on a square used since 1622.
- **Rue Saint-Michel, "rue de la Soif"**, the old-town bar street.
- **Les Champs Libres.**

**Transport**
- Metro Colombier (b) ~260 m; République (a + b) ~300 m; Charles de Gaulle (a).
- Buses La Criée, Colombier, Place de Bretagne, Pont de Bretagne, République.
- Meter parking at no. 46, free in the evenings and on Sundays.
- **Late public transport (medium, search snippet of star.fr line page):** the Chronostar lines (e.g. C1) run until **0h35 Sunday–Wednesday** and **1h35 Thursday–Saturday**. On weekend nights there is also a night line, N1. Metro end-of-service times for 2026 were not confirmed (the only page found dates from 2020). Copy idea, only once verified: « On ferme à 1h, le dernier bus part à 1h35 (jeu.–sam.) ». Sources: https://www.star.fr/reseau-star/bus-metro/ligne/c1 · https://unidivers.fr/horaires-bus-metro-star-rennes/ (2020, outdated)

**Rhythm of the street:** a busy, central, mixed boulevard that is not touristy. Foot traffic peaks in the evening and at night on concert and festival nights. The shop is "the last lit window after the concert".

**Breton / Rennes cues (use with restraint)**
- **Breton street name: « Boulouard ar Frankiz »** (official, Rennes Métropole open data). This is the most specific authentic cue available: a bilingual French / Breton plate « Boulevard de la Liberté · Boulouard ar Frankiz » can be the site's wordmark companion and footer plate. It is more grounded than any triskel. (*Frankiz* = liberté.)
- **Rennes coat of arms:** paly argent and sable (vertical white and black stripes) with an **ermine chief**. Use the stripes as an **awning / shutter motif** and a single **ermine spot** as a micro-icon (bullets, favicon). Source: https://heraldry-wiki.com/wiki/Rennes
- **Half-timbered façades** (rue Saint-Michel, Saint-Georges, Place Sainte-Anne): ochre, oxblood and slate-blue beams. These can supply secondary illustration colours.
- **Materials:** Haussmann dressed stone (the boulevard), Arretche concrete (Colombier: modernist grid), Halles Martenot ironwork.
- **Regional products as a possible « coin Breizh »:** galette-saucisse, pâté rennais, Coucou de Rennes, Breizh Cola, Bordier butter, La Trinitaine biscuits. **This is a hypothesis.** It is not known whether the shop stocks any of them. Label it as sample data or confirm with the owner.
- **Avoid:** triskelion overload, lighthouses, marinière / sailor stripes (coastal clichés, not Rennes), the full Gwenn-ha-Du flag, and Stade Rennais red and black.

**Regulatory**
- **Loi Évin** limits alcohol advertising online: informational tone only, nothing youth-oriented. Source: https://www.clubic.com/actualite-91200-alcool-publicite-ligne.html
- A 2000s Rennes decree banned take-away alcohol sales in the centre from 20:00 to 06:00. Whether it is still in force in 2026 is **unknown**. Source: https://www.lagazettedescommunes.com/19078/rennes-durcit-sa-reglementation-anti-alcoolisme/
- **Temporary prefectoral bans happen in 2026 (critic).** On **26 June 2026, from 18:00 to 08:00 the next day**, the Ille-et-Vilaine prefecture banned drinking on the public road **and suspended all take-away alcohol sales across the whole département**, citing the heatwave and incidents after the Champions League final (https://www.rennes-infos-autrement.fr/coup-de-chaud-sur-les-interdits-alcool-proscrit-dans-la-rue-et-evenements-annules-a-rennes/). A search snippet of an ici.rennes.fr / metropole press page (now 404) reports another take-away alcohol ban **from 16:00 on the World Cup semi-final day (14 July 2026)** (low confidence). **Design consequence:** `hours.ts` needs an `exceptions[]` / `notices[]` field and the site needs a small dismissible « Avis » banner for exceptional rules or closures, written neutrally (« Vente d'alcool à emporter suspendue ce soir par arrêté préfectoral »).
- **Consequence:** alcohol is never a hero product, never appears in "night" imagery and is never tied to late hours in copy. If listed at all, it gets a plain catalogue entry with the mandatory health message.

---

## 7. Competitors & positioning

Ratings are Google figures mirrored on epicerie.tel (Oct 2026). Distances are straight lines.

| # | Competitor | Address / distance | Rating | Hours | Positioning | How Epicerie de liberté differs | Source |
|---|---|---|---|---|---|---|---|
| 1 | U Express (EMADIS) | 44 bd de la Liberté (next door) | 4.1 / 251 | until 21:00 | Franchise supermarket, parcels; complaints about prices and queues | Open ~4 h later every night; personal service; 5.0 | https://ac-franchise.com/store/u-express-53/ · https://www.ubereats.com/fr/store/u-express-rennes-libertes/ebMjT9wIVyeM2634P2Cwog |
| 2 | One market | 5 rue Toullier, ~510 m | 5.0 / 9 | daily 13:00–01:00 | Similar late-night shop; friendly owner; reviews mention CBD | Opens earlier Tue–Sat; parcel relay; more reviews | https://epicerie.tel/f/one-market-12949045/ |
| 3 | bsal générale Épicerie Habesha shop | 1 pl. du Maréchal Juin, ~306 m | 4.0 / 1 | ~10:30–23:00, Fri–Sat ~01:30 | Ethiopian / Eritrean general épicerie | Generalist dépannage; stronger review base | https://epicerie.tel/epicerie/rennes/ |
| 4 | NOUS anti-gaspi Rennes Liberté (NEAG 24) | 21 bd de la Liberté, ~260 m | 3.9 / 75 | Mon–Sat 9:30–19:30, Sun to 13:00 | Anti-waste chain, 93 m², opened 6 Apr 2022 | Night and convenience versus day and values-led; no overlap after 19:30 | https://epicerie.tel/f/nous-epicerie-anti-gaspi-rennes-liberte-5562558/ · https://www.nousantigaspi.com/magasins/rennes-liberte · https://www.rennes-infos-autrement.fr/nous-anti-gaspi-choisit-la-liberte/ · https://unidivers.fr/nouvelle-epicerie-nous-anti-gaspi-a-rennes/ |
| 5 | Asie Market Trois Soleils | 20 rue d'Isly, ~446 m | 4.7 / 31 | Mon–Sat 9:30–20:00 | Asian supermarket | Generalist; open late | https://epicerie.tel/f/asie-market-trois-soleils-7739197/ |
| 6 | Marché Sainte-Anne | 12 pl. Sainte-Anne, ~665 m | 4.1 / 24 | daily 11:00–22:00 | Old-town mini-market (one review alleges overcharging) | Open 3 h later; better reviews | https://epicerie.tel/f/marche-sainte-anne-9383542/ · https://marche-sainte-anne.eatbu.com/?lang=fr |
| 7 | Intermarché Relais Rennes | 1 pl. Pasteur, ~641 m | 4.1 / 66 | ~9:00–20:00 | Supermarket plus parcel relay; reviews complain about short parcel hours | Parcel relay into the evening (22:00) | https://epicerie.tel/f/intermarche-relais-rennes-7722007/ |
| 8 | Epicerie Saint-Hélier | 12 rue Saint-Hélier, ~728 m | 3.1 / 14 | from 16:00, late | Late-night shop; a 2025 review alleges out-of-date fresh products | Trust: « sérieux et bien présenté » | https://epicerie.tel/f/epicerie-saint-helier-9273786/ |
| 9 | JOSEPH – l'épicerie | 32 av. Jean-Janvier, ~830 m | 4.1 / 251 | daily 7:30–20:00 | Upmarket épicerie / traiteur | Night versus day; dépannage | https://epicerie.tel/f/joseph-l-epicerie-6451514/ · https://www.boutiquesdejoseph.com/ |
| 10 | Epicerie Rue de Saint-Malo | 60 rue Saint-Malo, ~990 m | 4.1 / 16 | daily ~15:00–23:00 | Old-town dépannage; reviews say "pas souriant" | Two more hours; warmth | https://epicerie.tel/f/epicerie-rue-de-saint-malo-7557643/ |
| 11 | Carrefour Express | 140 rue de Nantes, ~885 m | 3.8 / 143 | 7:30–22:00 | Chain convenience store | Independent, personal, open later | https://epicerie.tel/f/carrefour-express-7573434/ |
| 12 | Épicerie de Paris chez Zizou | 41 rue de Paris, ~1.27 km | 4.8 / 150 | ~10:00–01:00 | Loved late-night shop run by a couple: **the benchmark** | Same model across town. Emulate its "commerce de quartier" warmth. | https://epicerie.tel/f/epicerie-de-paris-chez-zizou-7557637/ |

**Same-boulevard businesses that are NOT the target** (never mix their facts in)

| Business | Address | Notes | Sources |
|---|---|---|---|
| Épicerie Le Roi | no. 40 | Syrian / Middle-Eastern, SIREN 948464466, opened June 2024, @epicerie_le_roi. The OSM tags give hours `Mo-Fr 11:30-21:00; Sa 15:00-21:00; Su 16:00-21:00`, so it also closes at 21:00. That backs « seule épicerie ouverte après 21h sur le boulevard » as a positioning fact, but **never write it as a claim on the site**. | https://unidivers.fr/rennes-epicerie-le-roi-syrien/ · https://nominatim.openstreetmap.org/search?q=%C3%A9picerie+boulevard+de+la+Libert%C3%A9+Rennes&format=json&extratags=1 |
| L'Épicurien | no. 24 | Caviste / épicerie fine | https://www.au-magasin.fr/35000-rennes/lepicurien-264699.html · https://fr.mappy.com/poi/512a2e1e84ae01e909112886 |
| Les Tournesols / Terre des Arômes | no. 47 | Organic; the Terre des Arômes company is closed | — |
| Picard | no. 35 bis | Frozen food | — |
| TRINH THU DUNG | no. 37 | 47.11B, active since 1986, SIREN 340052166 | https://recherche-entreprises.api.gouv.fr/search?q=liberte&code_postal=35000&activite_principale=47.11B,47.11C,47.11D,47.29Z&per_page=25 |
| NOUS anti-gaspi | no. 21 | See table above | https://www.justacote.com/rennes-35000/epicerie-fine/nous-epicerie-anti-gaspi-rennes-liberte-2930733.htm · https://www.facebook.com/NOUSRennesLiberte/ |
| L'Épicerie au Grand Air | Pl. de la Rotonde | 4.7, bio / solidarity, daytime | — |

**Positioning: how it wins**
1. **The combination nobody else within 1 km has:** open until 01:00 every day, a parcel relay into the evening, and a 5.0 rating built on welcome and safety.
2. **From 21:00 to 01:00 it is effectively the only option on the boulevard.** The core message is « Ouvert quand les autres ferment ». **Do not name competitors on the site.**
3. **Its true peers** (One market, Zizou, Saint-Hélier, Rue de Saint-Malo) have no real websites. A good site would make it the best-presented night épicerie in Rennes.
4. **Day-time parcels plus night-time dépannage** cover two customer jobs in one place.

---

## 8. Inspiration

The market researcher had text and metadata only, not rendered visuals. Visit each site before borrowing from it.

| Reference | URL | What to take |
|---|---|---|
| re_grocery (Awwwards SOTD, 23 Feb 2022, MOUTHWASH studio) | https://regrocery.co/ · https://www.awwwards.com/sites/regrocery | Product cards with attribute badges. A repeated **mantra as typographic rhythm** ("rethink / reuse / refill"); our version could be « ouvert · dépanné · livré » or « Bonsoir · Colis · Dernière minute ». Coral #DF6C4F / #D14836: do **not** copy the palette. |
| Marché Notre-Dame, Montréal (Awwwards HM 2016) | marchenotredame.com · https://www.awwwards.com/sites/marche-notre-dame | "À mi-chemin entre épicerie de quartier et épicerie fine": a close register. Restrained palette with **small SVG animations of everyday products**. |
| The Primo Deli (Awwwards Nominee, June 2023, Apparent) | https://theprimodeli.com.au/ · https://www.awwwards.com/sites/the-primo-deli | **Illustrated, walkable shopfront as navigation**: shelves become categories. Our night version is a lit window on a dark boulevard. Animated loader; custom 404. |
| 1Bite2Go Café & Deli (Awwwards HM 2014, Tenten) | http://www.1bite2go.com · https://www.awwwards.com/sites/1bite2go-cafe-deli-official-site | **Bold vintage shop-sign type for opening hours.** |
| Demijohn – The Liquid Deli (Awwwards Nominee) | https://www.awwwards.com/sites/demijohn-the-liquid-deli | Product-as-object display (low confidence; snippet only) |
| Natoora | https://www.natoora.com/ | Modular grid, story cards, textured close-ups. Take the grid discipline, not the photography (we have no photos). |
| Breizh Café | https://www.breizhcafe.com/ | **Breton identity done premium and non-folkloric**: the best reference for regional cues. |
| Foxtrot | https://foxtrotco.com/ · https://www.newhope.com/people-and-company-profiles/checkout-foxtrot-melds-digital-and-experiential-maximum-convenience · https://cushingterrell.com/portfolio/on-the-boards-foxtrot-market-austin/ | The "reinvented convenience store": clean branding that adapts to each neighbourhood. Speed and pickup as features. |
| Pop Up Grocer | (Shopify store returned HTTP 402 on 13 Oct 2026; listed on SiteInspire) | Maximalist colourful grocery. Check only if it comes back online. |

---

## 9. Design direction

**Design read** (design-taste-frontend §0.B): a local-business showcase site for Rennes night-time locals, students and parcel collectors, with a **warm nocturnal street-signage** language, leaning toward Vite + TS + Tailwind v4 + GSAP ScrollTrigger + Lenis + CSS scroll-driven animations, with original SVG illustration.

**Dials:**
- VARIANCE 7: asymmetric, signage-like, but must stay legible.
- MOTION 8: heavy motion is the project brief, and time is the story.
- DENSITY 4: there is a lot of mock catalogue content, but the home page breathes.

**ui-ux-pro-max** returned a generic "fresh green + food amber, Flat, Rubik/Nunito" retail system. Its **amber (#D97706) / night slate (#0F172A) "alarm & clock"** palette and its **condensed signage pairing** (Barlow Condensed) were kept as starting points. The green grocery palette was rejected: it reads as a daytime organic shop, which this business explicitly is not.

### Concept: « La Dernière Vitrine » (the last lit window)
**One-line idea:** the site *is* the shop seen from the boulevard at night. A dark street, one warm lit window, a metal shutter that rises or falls with the **real time of day**, and the hours as the main character.

Everything is grounded in research:
- open until 01:00 (time);
- the boulevard de la Liberté and its 1870 name (place);
- "accueil chaleureux / super safe" (warmth and safety: the lit window as a safe harbour);
- the parcel relay (the counter);
- Rennes' black-and-white arms (the awning).

**Personality keywords:** chaleureux · nocturne · fiable · de quartier · pratique · rassurant · direct · un peu néon, jamais clinquant.

### Palette (one accent: sodium amber; theme = dark "Nuit" default + a light "Jour" mode)

| Token | Dark "Nuit" (default) | Light "Jour" | Role / grounding |
|---|---|---|---|
| `--bitume` (bg) | `#0E1117` | `#EEF1F0` | Night asphalt of the boulevard. The light mode is a cool daylight grey. **Avoid the banned cream family.** |
| `--facade` (surface) | `#161B23` | `#FFFFFF` (as `#FBFCFC`) | Stone façades in shadow; cards and panels |
| `--trottoir` (border) | `#262D38` | `#D5DBDA` | Kerbs, hairlines |
| `--craie` (text) | `#ECECE7` | `#12161D` | Main text (contrast >13:1 in both modes) |
| `--ardoise` (muted text) | `#9AA4B1` | `#4E5866` | Secondary text. Slate is a Rennes roof material. Check ≥4.5:1. |
| `--sodium` (**the single accent**) | `#F4A93A` | `#8F5207` | The sodium-vapour streetlamp and the lit window. Used for the "OUVERT" sign, CTAs, focus ring and live clock hand. The light-mode value is darkened for AA on light; verify with a contrast checker. |
| `--hermine-blanc` / `--hermine-noir` | `#F2F2EE` / `#15171B` | same | **Rennes arms** (paly argent and sable). Used only for the striped awning / shutter motif and the ermine-spot icon. |
| `--ouvert` (semantic state only) | `#5CC98E` | `#1E7A4C` | Real live status "Ouvert maintenant": the only status dot on the site |
| `--ferme` (semantic state only) | `#E0685A` | `#B23A2E` | "Fermé · ouvre à 11h". State only, never decorative. |
| Illustration-only accents | ochre `#C98B2B`, oxblood beam `#7A2E2A`, slate blue `#4A5D78` | | **Half-timbered façades** in the SVG street scene only, never in UI chrome |

Rules:
- No neon outer glow on UI. The "lit sign" effect is limited to the hero "OUVERT" mark: a subtle inner luminance and flicker, which is motivated because it signals open status.
- No purple, no gradient text, no pure #000 or #FFF.
- **Page Theme Lock:** dark by default; the light mode follows `prefers-color-scheme` or a toggle (« Jour / Nuit »). The only in-page colour change is the hero/story **day-to-night sky shift**, used once as the deliberate "theme switch on scroll" device.

### Type pairing
- **Display:** **Big Shoulders Display** (Google Fonts, variable 100–900). A condensed sans born from city signage. Use it for « OUVERT », hours, big numbers (« 01h », « 7j/7 », « 20 kg ») and headlines. Uppercase for signage, sentence case for headlines.
- **Body / UI:** **Barlow** (400/500/600), with `font-variant-numeric: tabular-nums` on every time and price so the live clock never jitters. Barlow Condensed 600 is for the small "panneau" labels (street-sign plates).
- Both are self-hosted via `@fontsource`, with `font-display: swap`.
- No serif, no Inter. Emphasis uses the same family (weight or italic), not a mixed family.
- French typography: a non-breaking narrow space before `: ; ! ?`, « guillemets », "h" time format (« 11h », « 1h du matin », « 23h40 »).
- **No em-dashes in site copy.**

### Imagery approach (we may not use their photos)
- **No photos of the shop**: Google profile photos are not ours. No stock photos.
- **Original SVG and CSS illustration** of the boulevard at night:
  - a Haussmann stone façade with one lit ground-floor shop window;
  - the black-and-white striped awning (Rennes arms);
  - a rolling metal shutter (rideau métallique);
  - a sodium streetlamp;
  - silhouettes of shelves (bottles of water, jars, fruit crates, toilet rolls);
  - a parcel stack with generic carrier-agnostic labels.
- **Do not draw carrier logos.** Name Chronopost / Colissimo / DPD in text only.
- **Product "photos"** in the catalogue are flat SVG pictograms on coloured tiles (one shape per rayon), drawn in an **isometric "shelf" style** so the catalogue looks like real shelving.
- **Gallery:** 16+ illustrated "scènes du boulevard" (midday parcel drop; 21h U Express lights go off, shown generically as "les autres ferment"; 23h after-concert queue; 00h45 last customer; Trans week shuttle stop on the Esplanade; rainy Rennes night; Saturday Lices market morning; the bilingual « Boulouard ar Frankiz » plate; an Impekkable linen bag at the counter, drawn generically). These are clearly illustrations, not a fake photo archive.
- A subtle film grain on a fixed `pointer-events:none` overlay only.
- Slot `TODO: real shopfront photo (owner-supplied)` placeholders on the About page, ready for owner photos.

### Layout ideas
- **Home hero:** an asymmetric split. Left: the live sign « OUVERT · jusqu'à 1h » (or « FERMÉ · ouvre à 15h »), headline « Votre épicerie de quartier, ouverte 7j/7 jusqu'à 1h », one CTA « Itinéraire ». Right: the illustrated lit window with the shutter. Hero ≤ 4 text elements; `min-h-[100dvh]`.
- **The « Panneau horaires »:** the hours rendered as an enamel street-name plate built in CSS, with **two lines, Épicerie and Relais colis**, always kept separate. (Critic: the earlier "Rennes blue-on-white plate style" is **unverified**, because the real plates were not seen. Use a generic enamel-plate treatment in the site's own tokens, not a claimed Rennes municipal style.) The plate's header reads the **bilingual street name « Boulevard de la Liberté / Boulouard ar Frankiz »**, which is official Rennes Métropole data.
- **« Soir de Trans » module** (journal and night story): the shuttle stop on the Esplanade Charles de Gaulle, a few steps from the shop, with shuttles every 5 min through the night on Friday and Saturday of Trans week. This replaces any implication that the festival is held at Le Liberté.
- **"Rayons" bento:** exact cell count, one cell per rayon (8–10 cells), each a different tinted illustration tile, asymmetric sizes. Dépannage and Colis get the biggest cells. Alcohol is never a bento cell.
- **Relais colis section:** a step layout using the verbs as labels (« Recevez · Présentez · Repartez » / « Déposez · Envoyez »). No "Step 1/2/3".
- **Avis wall:** the real quotes as handwritten-feel receipts (« tickets de caisse ») pinned in a masonry grid, each ending « Avis Google ». A rating badge 5,0/5 · 26 avis · oct. 2026.
- **Boulevard history:** a vertical "canal → rampart → boulevard" strata section (1400s / 1855 / 17 octobre 1870 / aujourd'hui).
- **Footer:** the awning stripe edge, address, the two hour tables, metro lines, legal links.
- Layout families never repeat on a page. Max one marquee per page (the mantra strip). Max 1 eyebrow per 3 sections.

### Signature interaction: « Le Rideau » + « L'Horloge du Boulevard »
1. **Le Rideau (hero, time-aware).** On load, the site reads the visitor's time in Europe/Paris against the hours config.
   - **If the shop is open,** the corrugated metal shutter rolls **up** (clip-path and translateY on SVG slats, with a slight bounce at the top), revealing the lit window. The « OUVERT » sign flickers on twice, then holds.
   - **If it is closed,** the shutter stays down with a painted message « On rouvre à 11h » / « à 15h » and a live countdown.
   - **On scroll** the shutter is scrubbed: scrolling down lowers it into the next section ("entering the shop").
2. **L'Horloge du Boulevard (home + Horaires page).** A circular 24h dial with **two concentric arcs**:
   - sodium = shop 11h/15h → 1h;
   - pale = parcel counter → 22h.
   - The user **drags the clock hand** (or uses the arrow keys; it is a `role="slider"` input with aria-valuetext) to any hour of any day. A sentence updates live, e.g. « Dimanche 23h40 : l'épicerie est ouverte, le relais colis est fermé (il ferme à 22h). »
   - This turns the real conflicting / double hours into the site's centrepiece and answers the #1 customer question.
   - Hours come from one typed config (`src/data/hours.ts`) with a `source` and `confirmed:false` flag.

### Motion language
- **Libraries:**
  - GSAP + ScrollTrigger (pins, scrubs) and SplitText (signage letters);
  - Lenis smooth scroll (disabled under reduced motion);
  - CSS scroll-driven animations (`animation-timeline: view()`) for simple reveals, with an IntersectionObserver fallback;
  - the View Transitions API for page changes;
  - `@property` for animatable colour stops of the sky.
  - Check current docs and caniuse before building (per CLAUDE.md).
- **Hero:**
  - the shutter rise (≈1.1 s, `expo.out`);
  - the OUVERT flicker: 2 opacity blinks over 300 ms, then steady; the motivation is status;
  - headline letters drop in like sign letters (SplitText chars, 40 ms stagger, slight rotateX);
  - the streetlamp halo breathes very slowly (opacity 0.85↔1, 6 s), and only while the shop is open.
- **Scroll storytelling, « Une nuit sur le boulevard » (home, pinned horizontal pan, `start: "top top"`).** One scene per hour, while the sky colour interpolates from day grey to deep night via `@property`:
  - **11h:** parcel drop-off;
  - **15h:** everyone open;
  - **19h30:** daytime shops close;
  - **21h:** « les autres ferment »;
  - **22h:** parcel counter closes;
  - **23h:** concert crowd from Le Liberté (and, in December, the Trans shuttle queue on the Esplanade);
  - **00h30:** the last lit window, « super safe »;
  - **01h:** the shutter comes down, « À demain ».
  - Windows on the façade switch off one by one as the user scrolls, and only the shop window stays lit.
- **History section:** an SVG path draws the old canal line along the ramparts, which then morphs into the boulevard. The year counter scrubs 1400s → 1855 → 1870.
- **Transitions:** a page change = a short shutter wipe (View Transition with a clip-path inset from the top, 450 ms, `cubic-bezier(0.65,0,0.35,1)`). The shared element (the OUVERT sign in the header) persists across pages via `view-transition-name`.
- **Micro-interactions:**
  - CTA buttons press like a shop bell (scale 0.97, 120 ms) with an ermine-spot ripple;
  - catalogue tiles tilt like a shelf item being picked (max 4°, pointer-tracked, transform only);
  - the « ajouter à ma liste » (mock shopping list) icon pops into a paper bag counter in the header;
  - the parcel-tracking mock input shakes on an invalid code;
  - the review receipts unfurl on hover / focus.
  - No custom cursor.
- **Performance:**
  - transform and opacity only, with clip-path used sparingly;
  - lazy-load the horizontal story;
  - on phones (< 768px) the horizontal pan becomes a vertical sequence with simple reveals;
  - pause loops when off-screen.
- **Reduced-motion fallback** (`prefers-reduced-motion: reduce`):
  - the shutter renders in its final state (up or down) with no animation;
  - no flicker, no Lenis, no parallax;
  - the horizontal story becomes a static vertical list of 8 illustrated hour cards;
  - the sky shows a static day-to-night gradient band;
  - the clock dial still works as an input, with instant updates;
  - page transitions become an instant swap or a 150 ms fade.
  - All content stays in the DOM. Nothing exists only in a canvas.

---

## 10. Site map

Vite multi-page build (or a small client router). `base: '/Epicerie-de-libert-rennes/'`. All pages in French. Also include `404.html` and `public/.nojekyll`.

| Route | Page | Sections |
|---|---|---|
| `/` | **Accueil** | 1. Hero « Le Rideau » with live open / closed status and the Itinéraire CTA. 2. Mantra marquee (the only one): « Bonsoir · Dépannage · Colis · 7j/7 · Jusqu'à 1h ». 3. L'Horloge du Boulevard (interactive hours dial). 4. « Une nuit sur le boulevard » (pinned horizontal hour-by-hour story). 5. Rayons bento (links to the catalogue). 6. Relais colis teaser (« jusqu'à 20 kg », carriers in text). 7. Avis wall (real quotes, 5,0/26 badge with date). 8. « Boulevard de la Liberté, depuis 1870 » history teaser. 9. Accès (metro, bus, parking, map link). 10. Journal teaser (3 posts). 11. Footer. |
| `/rayons/` | **Nos rayons** (catalogue, sample data) | Intro (« Ce que vous trouverez », with a "sample data" note in the source); sticky category filter (rayons) + search + tag chips (« dépannage », « frais », « Breizh – à confirmer », « soirée », « bébé », « sans gluten »…); isometric product shelf grid with mock prices; « Ma liste » drawer (local only, no ordering); empty / no-results state; a « Vous ne trouvez pas ? Demandez au comptoir » block. |
| `/rayons/:categorie` (or hash filters) | Category views | Pre-filtered shelves; each category has an illustrated header. |
| `/relais-colis/` | **Point relais colis** | Hero « Vos colis, jusqu'à 22h » (relay hours); what you can do (retirer, envoyer, Shop2Shop, sans étiquette Chronopost/Colissimo); carriers (text); weight limit 20 kg; step guide (verbs); what to bring (**real Pickup rules, see §3**: Pickup Pass QR or code, else original ID; a third party needs both IDs; no written proxy); holding times (DPD 9 j · Chronopost 8 j · Colissimo 14 j); size limits (< 20 kg, < 1 m); « Envoi sans étiquette » explainer using the verbatim QR / e-label sentence; **Impekkable linen-pressing drop tile** (link to impekkable.fr, no prices); mock "check your parcel" widget (purely demonstrative, clearly labelled « démo »); FAQ colis; separate hours table; link to the official Pickup page. |
| `/horaires-acces/` | **Horaires & accès** | The full dial; two per-day tables (épicerie / relais) with an « horaires à confirmer » note until the owner validates; "ouvert maintenant" logic; jours fériés (TODO, no data); map (static SVG plan of the quartier plus a Google Maps / OSM link; no embed tracking); metro / bus / parking / vélo blocks; late-bus note (Chronostar until 0h35 / 1h35 Thu–Sat, to verify on star.fr before publishing); accessibility note: **not « partiellement conforme »** (that was La Poste's website statement). Use « Accès PMR indiqué par le réseau Pickup, à confirmer en magasin ». |
| `/notre-histoire/` | **Le magasin & le boulevard** | Who we are (facts only: épicerie de quartier, since 2025, 46 bd de la Liberté); « Ce que vous nous dites » (review themes); boulevard timeline (15th-c. limits → canal → 1855 → 17 Oct 1870 → today); quartier (Centre / Colombier, Le Liberté, Lices); photo slots marked TODO (owner photos); values from reviews (accueil, horaires, sérieux, sécurité). **No invented founder story.** |
| `/avis/` | **Vos avis** | Rating summary (5,0 · 26 avis Google · date); all 11 real quotes plus the owner reply; themes cloud (from vocabulary); CTA « Laisser un avis sur Google » (link to the listing, TODO for the exact URL). |
| `/journal/` | **Le Journal du boulevard** (sample posts) | Post list with tag filter; featured post. |
| `/journal/:slug` | Article | Reading layout, related posts. |
| `/galerie/` | **Scènes du boulevard** | 16+ original illustrations; lightbox; filters (jour / nuit / colis / quartier). |
| `/faq/` | **Questions fréquentes** | Accordion grouped by Horaires, Colis, Paiement, Produits, Accès (12+ entries). |
| `/contact/` | **Nous trouver** | Address; Itinéraire button; phone **hidden behind a `PHONE_CONFIRMED` flag** (default false); « Passez nous voir, on répond au comptoir »; mock contact form that is **disabled / demo only** (no backend), or replaced by `mailto:` only once a real email exists. |
| `/mentions-legales/` | Mentions légales | EPI DE LIBERTE SARL, capital 3 000 €, SIREN 994 343 598, RCS (TODO: confirm RCS Rennes wording), TVA FR88994343598, siège 46 bd de la Liberté, directeur de la publication (TODO, needs owner consent), hébergeur GitHub Pages; "sample content" disclaimer. |
| `/confidentialite/` | Confidentialité | No cookies / no tracking statement; localStorage for « Ma liste » and the theme only. |
| `/plan-du-site/` | Plan du site | All links. |
| `404.html` | **404** | The shutter is down: « Ce rayon est fermé ». Links back. |

Global elements:
- **« Avis » banner** (dismissible, driven by `hours.ts` → `notices[]`): for exceptional closures or prefectoral restrictions (e.g. take-away alcohol suspended, as happened on 26 June 2026). Empty by default.
- **Header:** wordmark, live status pill (real semantic dot), nav (Rayons · Relais colis · Horaires · Histoire · Avis · Contact), Jour/Nuit toggle, « Ma liste » counter.
- **Footer:** the awning stripe, address, both hour tables, metro, legal.
- **Required:** skip link, JSON-LD `GroceryStore` / `LocalBusiness` with **verified data only** (name, address, geo, hours with the preferred set marked, no phone until confirmed), Open Graph image (an SVG-rendered PNG of the lit window).

---

## 11. Mock-data plan

All data lives in `src/data/*.ts` with exported interfaces, and each file starts with the header comment `// SAMPLE DATA – not supplied by the business; replace with real data`. Verified data lives in **`src/data/business.ts`** and **`src/data/hours.ts`** and carries `status` / `source` fields.

| Dataset | File | Count | Content guidance |
|---|---|---|---|
| Business facts (REAL) | `business.ts` | 1 object | Name variants, legal data, address, GPS, transport, services, payment, accessibility, rating `{value:5.0,count:26,asOf:'2026-10-09',source}`, `phone:{value:'07 45 05 80 25',confirmed:false}` |
| Hours (REAL, conflicting) | `hours.ts` | 7 days × 2 services, plus an alt set | `shop` (Google set, preferred), `shopAlt` (bottin set), `parcel` (La Poste set), `confirmed:false`, timezone Europe/Paris, cross-midnight logic, plus `exceptions: {date, label, closed?, from?, to?}[]` (empty) and `notices: {from, to, text, source}[]` (empty; one commented example citing the 26/06/2026 prefectoral order) |
| Relay rules (REAL) | `parcel.ts` → `rules` | 7 | Holding times per carrier (DPD 9 / Chronopost 8 / Colissimo 14 days), Pickup Pass / code / ID, third-party collection (both IDs, no proxy), damaged-parcel reservations, size limit (< 20 kg, < 1 m), label-free QR / e-label sending, Shop2Shop. `source: pickup.fr relay page`. |
| Rayons (categories) | `categories.ts` | 10 | Épicerie salée · Épicerie sucrée · Boissons fraîches (softs, eaux, jus) · Fruits & légumes · Snacks & sandwichs · Petit-déj & laitiers · Produits ménagers · Hygiène & soin · Première nécessité / dépannage (piles, chargeurs, préservatifs; **no medicines such as paracetamol**, which are pharmacy-only in France) · Coin Breizh (**à confirmer**). Optional: Alcool, as a plain informational list only, with « L'abus d'alcool est dangereux pour la santé, à consommer avec modération », sale to adults only, never featured. |
| Products | `products.ts` | **70** | ~7 per rayon. Generic, realistic convenience items with **no invented brand claims**: « Pâtes coquillettes 500 g », « Sauce tomate basilic », « Riz long 1 kg », « Thon au naturel », « Chips sel », « Biscuits petit-beurre », « Tablette chocolat noir », « Eau minérale 1,5 L », « Soda cola 33 cl », « Jus d'orange 1 L », « Bananes (la pièce) », « Pommes (le kg) », « Tomates », « Oignons », « Sandwich jambon-beurre », « Croque-monsieur », « Lait demi-écrémé 1 L », « Œufs x6 », « Beurre demi-sel » (Breton default), « Liquide vaisselle », « Éponges x3 », « Papier toilette x6 », « Lessive », « Dentifrice », « Gel douche », « Mouchoirs », « Piles AA x4 », « Câble de charge USB-C », « Briquet », « Préservatifs x3 », « Couches (dépannage) ». Coin Breizh (labelled « à confirmer »): « Galettes de sarrasin », « Palets bretons », « Caramel au beurre salé », « Cidre brut », « Breizh Cola » (real Breton brands may be named as product types, but never claim the shop stocks them). Fields: `id, name, rayon, price, unit, tags[], isSample:true, illustration`. |
| Mock prices | (in products) | — | Convenience-store plausibility, all marked sample: staples €0.80–€4.50; fresh fruit and veg €1.50–€4.90 per kg or €0.40–€1.00 each; sandwiches and snacks €2.50–€5.50; drinks €0.90–€3.50; household and hygiene €1.90–€8.90; dépannage gadgets €2.90–€14.90. No promotions with fake "-50 %" claims. |
| Tags | `tags.ts` | 12 | dépannage · dernière minute · frais · végétarien · sans gluten · bébé · soirée (snacks/softs only) · petit-déj · maison · hygiène · Breizh (à confirmer) · pratique |
| Parcel services | `parcel.ts` | 6 entries + 8 steps | Retrait colis · Envoi colis · Shop2Shop · Envoi sans étiquette Chronopost/Colissimo · Transporteurs (Chronopost, Colissimo, DPD) · Poids max 20 kg · Dépôt pressing linge de maison Impekkable (**confirmed** on pickup.fr; link out, no prices). Steps use verbs only. |
| Night story scenes | `night.ts` | 8 | 11h · 15h · 19h30 · 21h · 22h · 23h · 00h30 · 01h, each with title, short text and illustration id. **No competitor names.** |
| Reviews (REAL) | `reviews.ts` | 11 + 2 owner replies | Exact text, date (~), `platform:'Google'`, no names; `usableInHero:false` for the alcohol-mention quote |
| Generic testimonials | — | **0** | Not needed: real quotes exist. Never invent named reviews. |
| Journal posts | `posts.ts` | **9** | Sample editorial, tagged « exemple » in the data: « Récupérer un colis au relais : mode d'emploi » · « Envoyer un colis sans étiquette » · « Soir de concert au Liberté : on est ouverts après » · « Trans Musicales 2026 (2–6 déc.) : la navette part de l'Esplanade, on est juste à côté » (the festival is at the Parc Expo; the village and the shuttles are at Le Liberté / the Esplanade; any hours claim is pending confirmation) · « Le boulevard de la Liberté, du canal de 1855 au nom de 1870 » · « Colombier, Centre, Lices : notre coin de Rennes » · « La liste anti-panne du dimanche soir » · « Galette-saucisse, pâté rennais : petit lexique rennais » · « Rentrer tard en sécurité : nos repères dans le quartier ». Each has slug, date (2026), reading time, excerpt, 4–6 paragraphs and an illustration. |
| FAQ | `faq.ts` | **18** | Horaires (open on Sunday? until when? public holidays: "à confirmer"), Colis (which carriers, max weight and size, **what ID / Pickup Pass, someone else collecting, how long the parcel is kept, damaged parcel, sending without a label**: all answerable from the real Pickup rules in §3; until when: 22h relay vs shop 1h), Pressing (what is Impekkable, how to drop off), Paiement (carte bancaire: real; cash: TODO), Produits (fruits et légumes? sandwiches? Breton products: "à confirmer"), Accès (metro, parking free in the evening), Alcool (sale to adults only, no promotion). Answers must use only verified facts or say « à confirmer en magasin ». |
| Gallery | `gallery.ts` | **18** | Original SVG scenes: façade jour / nuit, rideau, auvent rayé, rayons (×6), comptoir colis, pile de colis, réverbère sous la pluie, sortie de concert, marché des Lices samedi matin, canal 1855 (historical illustration), plaque « Boulevard de la Liberté », hermine. Alt text for each. |
| Stats (REAL only) | `stats.ts` | 5 | 7j/7 · jusqu'à 1h · 5,0/5 (26 avis Google, oct. 2026) · colis jusqu'à 20 kg · depuis 2025. **No invented counts** (no "10 000 clients"). |
| Team roles | `team.ts` | 3 roles, no names | « Au comptoir », « Au relais colis », « À la mise en rayon ». Illustrated silhouettes; no real names (the gérant's name is not used). |
| Transport | `access.ts` | ~8 | Metro Colombier (b) ~260 m, République (a+b) ~300 m, Charles de Gaulle (a); bus La Criée, Colombier, Place de Bretagne, Pont de Bretagne, République; parking meter rules |
| Landmarks | `quartier.ts` | 8 | Le Liberté, Esplanade Charles-de-Gaulle, La Criée, Marché des Lices / Halles Martenot, Rue Saint-Michel, Les Champs Libres, Colombier (Arretche), Protestant temple (no. 22) |
| History timeline | `history.ts` | 6 | 15th c. limits · canal along the ramparts · 1855 · Second Empire names · 17 Oct 1870 · 2025 shop opens (company created) |
| Newsletter | — | — | **Skip.** There is no backend and no channel exists; a fake signup would mislead. Use « Suivez-nous » only once real socials exist (TODO). |

---

## 12. Content rules

**Real, must stay exact**
- Name forms: "Epicerie de liberté" (listing) / EPI DE LIBERTE (legal). The site display "Épicerie de Liberté" is pending confirmation. **Never "Épicerie de la Liberté".**
- Address 46 Boulevard de la Liberté, 35000 Rennes, plus GPS.
- SIREN 994 343 598, SIRET 994 343 598 00011, TVA FR88994343598, SARL, €3,000, NAF 47.11B (legal page only).
- Closing time 01:00, 7 days. Parcel-counter hours (22:00). The opening times shown come from the preferred set, with a visible « horaires à confirmer » until validated.
- Parcel relay details: Pickup / La Poste; Chronopost, Colissimo, DPD; 20 kg; Shop2Shop; label-free shipping.
- Card payment.
- Rating 5,0/5 · 26 avis Google, **always with its date** (oct. 2026).
- The 11 review quotes and the owner replies: verbatim, spelling kept, attributed to « Avis Google » only.
- Boulevard history (1855; 17 Oct 1870; formerly boulevard de l'Impératrice / du Prince impérial; 0.8 km).
- ~~Accessibility « partiellement conforme »~~. **Removed by critic:** that was the La Poste website's own RGAA statement. Only « accès PMR signalé par Pickup (à confirmer) » may be used.
- Impekkable linen-pressing drop point; the Pickup rules (holding times, ID, third party, size).
- Breton street name « Boulouard ar Frankiz » (exact spelling, Rennes Métropole open data).

**May be mock** (clearly flagged in the data layer)
- Products, prices, categories, tags, the « Ma liste » feature, journal posts, gallery illustrations, FAQ wording (facts inside answers must be real or « à confirmer »), team *roles*, night-story scene text, the parcel-check demo widget (labelled « démo »).

**Must never be invented**
- The owner's or staff names. Do not publish **Moussa Sadadou**'s name without consent.
- A founder or family story, a date like "depuis 1870" for the shop, an exact opening day.
- Awards, press mentions, labels (bio, local, artisan, anti-gaspi), a slogan presented as the shop's own, logos or brand colours "of the shop".
- Customer reviews with names; extra ratings; "meilleure épicerie de Rennes".
- Email address, social accounts, delivery-app availability, home delivery, click & collect, online ordering.
- Registered-letter or stamp services (**checked: not a service of this relay**), « accessibilité partiellement conforme », Trans Musicales concerts "at Le Liberté", holiday hours, a cash / ticket-restaurant policy.
- Any claim that the shop stocks a specific branded product (Breizh Cola etc.). These are labelled « à confirmer ».
- Any link to the refuted @chezlesbalkans.lyon reel or to Balkan products.

**Other content rules**
- **Alcohol:** Loi Évin. No promotion, no imagery, no link to late hours or to the free sweet in visuals; include the mandatory health warning wherever alcohol is listed; adults only.
- **Never name or disparage competitors** on the site. Say « quand les autres ferment ».
- **Phone:** shown only when `phone.confirmed === true`. The primary contact CTA is « Itinéraire » (Google Maps / OSM link).
- **Do not cold-contact the business using registry data** (reported opposition to prospecting).
- Site copy is in French with French typography: non-breaking spaces before `: ; ! ?`, « guillemets », « 11h », and no em-dashes in UI copy.

---

## 13. Unknowns / TODO

| # | Unknown / conflict | How to resolve |
|---|---|---|
| 1 | **Exact opening times** (Google: Mon/Sun 15h, Tue–Sat 11h; bottin: Mon–Sat 15h, Sun 12h) and whether **parcels are handled until 1h or 22h** | Ask the owner; check the Google listing directly; keep `hours.confirmed=false` and the visible note until then |
| 2 | **Name on the sign and spelling** ("Epicerie de liberté" / "Épicerie de Liberté" / "Épi de Liberté"); enseigne / nom commercial conflict (Pappers 403) | Owner photo of the shopfront; retry Pappers; INSEE says no enseigne |
| 3 | **Phone 07 45 05 80 25** (single directory, mobile) | Owner confirmation; keep it hidden behind the flag |
| 4 | Logo, colours, shopfront appearance, interior | Owner-supplied photos and logo (Google photos not viewed, not usable) |
| 5 | Product range, specialities, price level, Breton products, fresh produce, sandwiches made on site? | Owner product list or a visit; replace `products.ts` |
| 6 | ~~"Impekkable" laundry service: what is it?~~ **RESOLVED**: household-linen pressing, ordered online and dropped at / collected from the relay (pickup.fr) | Only the owner can say how often it is used; optional |
| 7 | ~~Registered letters and stamps~~ **RESOLVED**: not a listed service (La Poste boilerplate) | Ask the owner only if they want to add it |
| 8 | Payment: cash, tickets restaurant, contactless minimum? | Owner |
| 9 | Email, website domain, social accounts (none exist) | Owner; offer to create them |
| 10 | Public-holiday and seasonal hours; Trans Musicales week hours | Owner |
| 11 | Exact opening date of the shop (between Dec 2025 and 28 Feb 2026) | Owner; use "depuis 2025" meanwhile |
| 12 | Full text of the 17 unmirrored Google reviews; live current rating | Direct Google Maps access (start the gosom scraper on a free port, or use an Apify Google Maps actor) |
| 13 | Directeur de la publication for the mentions légales; RCS wording | Owner consent; check the Infogreffe / RNE extract |
| 14 | Whether the Rennes 20:00–06:00 take-away alcohol ban (Hervé era, pre-2008) is still in force. Still **unknown** after the critic pass: no current municipal text was found, and lagazettedescommunes returns 403. Temporary **prefectoral** bans were confirmed in 2026 (26 June; 14 July snippet). | Ville de Rennes arrêtés municipaux / owner; keep alcohol absent from copy; use the `notices[]` banner for temporary bans |
| 15 | Prospecting opt-out (Pappers, unverified) | Do not cold-contact via registry data; approach through the shop counter |
| 16 | Exact Google Maps listing URL (for the "Laisser un avis" / Itinéraire links) | Critic: the Waze page for `ChIJC4Y5KDPeDkgRF9q9pPSLMaw` resolves to **"46 Bd de la Liberté"** (the address), so it may be the **address** place, not the business. Do not build `writereview?placeid=` on it. Use a coordinates link (`https://www.google.com/maps/search/?api=1&query=48.1082153,-1.6826254`) until the owner gives the listing link. |
| 17 | Accessibility: **no reliable data**. The "partiellement conforme" text was La Poste's website RGAA statement; pickup.fr shows a PMR icon only (step at entrance? width?) | Owner / acceslibre submission |
| 18 | Late transport end times for 2026 (Chronostar 0h35 / 1h35, N1, metro) | Verify on star.fr before printing any "last bus" copy |
| 19 | Is there a physical bilingual plate « Boulouard ar Frankiz » on the boulevard? | Owner / street visit; the name itself is official either way |

---

## 14. Sources

**Business identity / registry**
- https://recherche-entreprises.api.gouv.fr/search?q=994343598
- https://recherche-entreprises.api.gouv.fr/search?q=46%20boulevard%20de%20la%20liberte%20rennes&activite_principale=47.11B,47.11C,47.11D,47.29Z,47.25Z
- https://recherche-entreprises.api.gouv.fr/search?q=liberte&code_postal=35000&activite_principale=47.11B,47.11C,47.11D,47.29Z&per_page=25
- https://annuaire-entreprises.data.gouv.fr/entreprise/994343598
- https://www.societe.com/societe/epi-de-liberte-994343598.html
- https://www.pagesjaunes.fr/siret/99434359800011
- https://www.pappers.fr/entreprise/epi-de-liberte-994343598 (403)
- https://fr.kompass.com/c/epi-de-liberte/fra0dsccm/ (403)
- https://entreprises.lefigaro.fr/epi-de-liberte-35/entreprise-994343598

**Listings / directories / relay**
- https://epicerie.tel/f/epicerie-de-liberte-14363773/
- https://epicerie.tel/epicerie/rennes/
- https://www.bottin.fr/fiche-locale/dfgiacbaihcigcibadb--epicerie-de-liberte--rennes.htm
- https://www.bottin.fr/annuaire/epicerie-a-rennes-35238.htm
- https://www.boulangeries-patisseries.fr/epicerie/35238-rennes/dfgiacbaihcigcibadb.htm (404)
- https://www.iambeezy.app/beezpages/epicerie-de-liberte-rennes-agv2
- https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287
- https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE
- https://www.waze.com/live-map/directions/fr/bretagne/rennes/46-bd-de-la-liberte?to=place.ChIJC4Y5KDPeDkgRF9q9pPSLMaw
- https://www.parkopedia.fr/parking/horodateur/46_boulevard_de_la_libert%c3%a9-2/35000/rennes/
- https://nominatim.openstreetmap.org/reverse?lat=48.1082152790399&lon=-1.68262542000035&format=json
- https://www.instagram.com/reel/DS23n06jGMm (refuted lead: @chezlesbalkans.lyon)

**Place / history / quartier**
- https://fr.wikipedia.org/wiki/Boulevard_de_la_Libert%C3%A9_(Rennes)
- https://fr.wikisource.org/wiki/Page:Notices_sur_les_rues_de_Rennes_1883.djvu/47
- https://www.rennesimmo9.com/actualites/urbanisme-architecture/quartier-colombier-rennes
- https://edito.seloger.com/node/21583
- https://www.annuaire-mairie.fr/metro-rennes.html
- https://www.fnacspectacles.com/city/rennes-2039/venue/le-liberte-rennes-70544/
- https://mo5.com/en/venue/le-liberte/
- https://www.cityzeum.com/ev/festival-les-transmusicales-2009-a-rennes
- https://www.pss-archi.eu/immeubles/FR-35238-32597.html
- https://www.museum.de/en/museen/la-criee-centre-dart-contemporain
- https://www.routard.com/fr/guide/france/bretagne/rennes/marche-des-lices
- https://lebonbon.fr/rennes/news/deuxieme-plus-grand-marche-france-se-trouve-a-rennes-depuis-400-ans/
- https://lebonbon.fr/rennes/actu/rue-soif-fin-d-epoque-a-rennes/
- https://heraldry-wiki.com/wiki/Rennes
- https://www.techno-science.net/glossaire-definition/Patrimoine-architectural-de-Rennes.html
- https://www.routard.com/fr/guide/france/bretagne/rennes/rue-saint-michel
- https://www.ouigo.com/blog/specialites-culinaires-rennes
- https://epicerie.tel/f/biscuiterie-la-trinitaine-rennes-7133908/

**Regulation**
- https://www.lagazettedescommunes.com/19078/rennes-durcit-sa-reglementation-anti-alcoolisme/
- https://www.clubic.com/actualite-91200-alcool-publicite-ligne.html

**Competitors / neighbours**
- https://unidivers.fr/rennes-epicerie-le-roi-syrien/
- https://unidivers.fr/nouvelle-epicerie-nous-anti-gaspi-a-rennes/
- https://www.rennes-infos-autrement.fr/nous-anti-gaspi-choisit-la-liberte/
- https://www.nousantigaspi.com/magasins/rennes-liberte
- https://www.facebook.com/NOUSRennesLiberte/
- https://www.justacote.com/rennes-35000/epicerie-fine/nous-epicerie-anti-gaspi-rennes-liberte-2930733.htm
- https://epicerie.tel/f/nous-epicerie-anti-gaspi-rennes-liberte-5562558/
- https://www.au-magasin.fr/35000-rennes/lepicurien-264699.html
- https://fr.mappy.com/poi/512a2e1e84ae01e909112886
- https://www.ubereats.com/fr/store/u-express-rennes-libertes/ebMjT9wIVyeM2634P2Cwog
- https://ac-franchise.com/store/u-express-53/
- https://epicerie.tel/f/one-market-12949045/
- https://epicerie.tel/f/asie-market-trois-soleils-7739197/
- https://epicerie.tel/f/marche-sainte-anne-9383542/
- https://marche-sainte-anne.eatbu.com/?lang=fr
- https://epicerie.tel/f/intermarche-relais-rennes-7722007/
- https://epicerie.tel/f/epicerie-saint-helier-9273786/
- https://epicerie.tel/f/joseph-l-epicerie-6451514/
- https://www.boutiquesdejoseph.com/
- https://epicerie.tel/f/epicerie-rue-de-saint-malo-7557643/
- https://epicerie.tel/f/carrefour-express-7573434/
- https://epicerie.tel/f/epicerie-de-paris-chez-zizou-7557637/

**Design inspiration**
- https://regrocery.co/
- https://www.awwwards.com/sites/regrocery
- marchenotredame.com
- https://www.awwwards.com/sites/marche-notre-dame
- https://theprimodeli.com.au/
- https://www.awwwards.com/sites/the-primo-deli
- http://www.1bite2go.com
- https://www.awwwards.com/sites/1bite2go-cafe-deli-official-site
- https://www.awwwards.com/sites/demijohn-the-liquid-deli
- https://www.natoora.com/
- https://www.breizhcafe.com/
- https://foxtrotco.com/
- https://www.newhope.com/people-and-company-profiles/checkout-foxtrot-melds-digital-and-experiential-maximum-convenience
- https://cushingterrell.com/portfolio/on-the-boards-foxtrot-market-austin/

**Added by critic pass (2026-10-13)**
- https://relais.pickup.fr/35000/RENNES/EPI_DE_LIBERTE (raw HTML: Impekkable service text, PMR and parking icons, FAQ rules)
- https://localiser.laposte.fr/ille-et-vilaine/rennes/epi-de-liberte-433287 (raw HTML: the only service is "Retrait colis"; "partiellement conforme" is in the footer)
- https://www.impekkable.com/ · https://www.impekkable.fr (linked from pickup.fr)
- https://groupe-casino.fr/wp-content/uploads/2025/03/Info-presse-groupe-Casino-Franprix-lance-une-offre-de-pressing-avec-Impekkable.pdf (403; search snippet only)
- https://bodacc-datadila.opendatasoft.com/api/explore/v2.1/catalog/datasets/annonces-commerciales/records?where=search(%22994343598%22) (0 results)
- https://data.rennesmetropole.fr/api/explore/v2.1/catalog/datasets/nom_voies_breton/records?where=search(%22Libert%C3%A9%22)
- https://www.data.gouv.fr/datasets/noms-de-voies-en-breton-sur-rennes-metropole
- https://nominatim.openstreetmap.org/search?q=46+boulevard+de+la+Libert%C3%A9+Rennes&format=json&extratags=1
- https://www.lestrans.com/le-festival/
- https://www.lestrans.com/le-festival/infos-pratiques/venir-au-festival/
- https://www.tourisme-rennes.com/decouvrir-rennes/sortir/transmusicales-guide/
- https://www.jds.fr/rennes/concerts/rap/djadja-et-dinaz-tournee-1082632_A
- https://www.star.fr/reseau-star/bus-metro/ligne/c1
- https://www.rennes-infos-autrement.fr/coup-de-chaud-sur-les-interdits-alcool-proscrit-dans-la-rue-et-evenements-annules-a-rennes/
- https://ici.rennes.fr/actualites/2026-07-13-demi-finale-de-la-coupe-du-monde-ce-qui-est-prevu-a-rennes/ (404; search snippet only)

---

## 15. Critic pass

**Gaps found in the plan**
1. **Factual error:** the shop's accessibility was given as « partiellement conforme ». That string is the La Poste **website's** RGAA statement, printed in its footer. Corrected in §1, §10, §12 and §13.
2. **Factual error:** the plan said the Trans Musicales festival is held at Le Liberté. The festival is mainly at the **Parc Expo**. Le Liberté hosts the « village des Trans », and the night shuttles leave from the Esplanade Charles de Gaulle. Corrected in §6, §9 and §11.
3. Open unknowns that could be checked: what the « Impekkable » service is, and whether the relay offers registered letters or stamps. **Both are now resolved** (Impekkable = household-linen pressing drop point; registered letters and stamps are not a service of this relay).
4. The relay FAQ planned "generic guidance" for ID and collection rules. It now has **real Pickup network rules** published on this relay's own page: holding times per carrier, Pickup Pass, ID, third-party collection, damaged parcel, size limits.
5. The design's « Rennes blue-on-white plate » cue was unverified. It is now replaced by a **sourced** cue, the official Breton name **« Boulouard ar Frankiz »**.
6. There was no way to handle the **real exceptional restrictions** of 2026 (a prefectoral take-away alcohol ban on 26 June). The plan now has a `notices[]` / `exceptions[]` field in the hours data and a dismissible « Avis » banner.
7. The Le Liberté capacity was given as a single figure, but sources differ (5,200 versus 5,500). The site should now give no number.
8. The Google place ID planned for the « Laisser un avis » link may belong to the **address**, not the business (Waze shows "46 Bd de la Liberté"). The plan now uses a coordinates link until the owner provides the listing link.
9. New small facts: no BODACC notice at all; the shop is not in OSM; an IDCC 2216 collective agreement is declared (suggests salaried staff); no Alim'Confiance record; Épicerie Le Roi (no. 40) also closes at 21:00 per OSM; late Chronostar buses until 1h35 Thu–Sat (medium).

**Searched again with nothing new:** Facebook, Instagram, TikTok and Snapchat (no account; results only show NOUS, Le Liberté, the Crêperie L'Épi de Blé and other unrelated pages); a reverse search on the phone number (no other listing, so it stays single-source); other Google-data mirrors (only epicerie.tel and bottin.fr carry the shop); press (none).

**Still unknown, owner needed**
- Products, brands, prices and specialities. There are still **no real product names**, so `products.ts` stays 100 % sample.
- Which opening times are right (11h versus 15h); parcels until 22h or 1h.
- Phone confirmation (one directory only); email; sign wording; logo; colours; shopfront and interior.
- The 17 Google review texts that are not mirrored (the gosom scraper was not running; port 8080 answers 404 and is not the scraper). There are still only 11 real quotes.
- Exact opening day; founder story (none public, so none should be written).
- The permanent municipal take-away alcohol rule in 2026; holiday hours; physical accessibility details.
- Pappers (403) for the enseigne and the prospecting opt-out.
