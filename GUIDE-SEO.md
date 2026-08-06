# Guide SEO & GEO — photo-identite-albi

Ce fichier accompagne le site. Il liste **ce qui a été fait dans le code** et
surtout **ce qui ne peut être fait que par vous**, en dehors du code.

> Règle générale : le code apporte les fondations techniques. La position dans
> Google dépend ensuite de trois choses que seul le propriétaire peut fournir :
> la fiche Google Business Profile, des avis réels, et des vraies photos.

---

## 1. À faire tout de suite (30 minutes, gain maximal)

### 1.1 Google Search Console — indispensable

1. Aller sur <https://search.google.com/search-console>, propriété **Préfixe d'URL** :
   `https://franckgaliniephoto.github.io/photo-identite-albi/`
2. La balise de validation est **déjà en place** dans `index.html`
   (`google-site-verification`), la validation devrait passer directement.
3. **Soumettre le sitemap** :
   `https://franckgaliniephoto.github.io/photo-identite-albi/sitemap.xml`
4. Demander l'indexation des 5 URL une par une via l'outil « Inspection de l'URL ».

### 1.2 Bing Webmaster Tools

<https://www.bing.com/webmasters> — import direct depuis Search Console en un clic.
**Ce n'est pas optionnel pour le GEO** : ChatGPT et Copilot s'appuient sur l'index
Bing pour leurs recherches web. Être absent de Bing, c'est être absent de ChatGPT.

### 1.3 Google Business Profile — le levier n°1 en local

Pour « photo d'identité Albi », **la fiche Google pèse plus lourd que le site**.
À vérifier sur <https://business.google.com> :

- [ ] Catégorie principale : **Photographe** — catégorie secondaire : *Service de photos d'identité*
- [ ] NAP strictement identique au site, à la lettre près :
      `Franck G Photographie` · `23 avenue Germain Téqui, 81160 Saint-Juéry` · `07 57 81 36 40`
- [ ] Horaires : lundi 8h30–12h / 13h30–17h30 ; mercredi 13h30–18h ; mardi, jeudi et vendredi 8h30–12h / 13h30–18h
- [ ] Attributs : *accès en fauteuil roulant*, *sans rendez-vous*
- [ ] Site web pointant vers cette page
- [ ] Photos réelles : devanture, intérieur du studio, exemple de planche
- [ ] Produits/Services : « Planche 6 photos — 12 € », « E-photo ANTS — 14 € », « Déplacement — dès 25 € »
- [ ] Publier un post toutes les 2 à 3 semaines (rappel de service, horaires de vacances…)

### 1.4 Les avis

Le bloc `aggregateRating` a été **volontairement retiré** des données structurées :
une note auto-déclarée par l'entreprise sur son propre site est ignorée par Google,
et peut valoir une pénalité manuelle. Les avis doivent vivre sur la fiche Google.

Ce qui marche : demander l'avis **au moment où le client repart satisfait**, avec un
lien court affiché au comptoir (QR code). Objectif réaliste : 2 à 3 avis par mois.

---

## 2. Ce que vous seul pouvez compléter dans le code

Chaque élément ci-dessous est marqué `⚠️ À COMPLÉTER` dans les fichiers.

| Où | Quoi | Pourquoi |
|---|---|---|
| `index.html` §« Qui réalise vos photos » | Année d'installation, **numéro d'agrément ANTS**, SIRET | Signaux E-E-A-T : c'est ce qui distingue un site crédible d'une page vitrine |
| `index.html` + pages guides, mentions légales | SIRET, statut juridique, TVA, directeur de publication | Obligation légale, et Google contrôle la présence de mentions légales |
| `index.html` head | **Coordonnées GPS exactes** du 23 avenue Germain Téqui | Actuellement approximatives (43.9508 / 2.2126). Clic droit sur le point dans Google Maps |
| `index.html` hero | **3 à 5 vraies photos** (bloc commenté, prêt à décommenter) | Voir §3 — c'est la plus grosse marge de progression restante |
| `index.html` §domicile | Supprimer le bouton WhatsApp si vous ne l'utilisez pas | Un lien mort coûte plus qu'il ne rapporte |
| `index.html` §zones | Ajuster la liste des communes à votre rayon **réel** | Une promesse non tenue coûte en avis négatifs |

---

## 3. Les vraies photos — la marge de progression restante

C'est aujourd'hui le principal point faible : le site ne contient **aucune
photographie réelle**. Pour un site de photographe, c'est un handicap à la fois
de conversion et de référencement (Google Images, et pertinence perçue).

À produire, par ordre de priorité :

1. `images/photo-identite-albi-studio.webp` — la devanture ou l'intérieur du studio
2. `images/planche-photo-identite.webp` — une planche de 6 photos réelle
3. `images/photographe-franck-galinie.webp` — votre portrait (renforce le bloc E-E-A-T)
4. `images/photo-identite-domicile-ehpad.webp` — une intervention à domicile

Règles à respecter :

- **Nommer les fichiers avec les mots-clés** (`photo-identite-albi-studio.webp`,
  jamais `IMG_4712.jpg`) — le nom de fichier est un signal pour Google Images.
- **Format WebP**, largeur 1200 à 1600 px, poids visé < 150 Ko.
- **Toujours renseigner `width`, `height`, `alt`, `loading="lazy"`**
  (`fetchpriority="high"` uniquement pour l'image du hero).
- L'`alt` décrit l'image en une phrase utile, pas une liste de mots-clés.

Un bloc `<img>` d'exemple, prêt à décommenter, se trouve déjà dans le hero
de `index.html`.

---

## 4. Ce qui a été mis en place dans le code

### Corrections bloquantes

- `robots.txt` et `sitemap.xml` contenaient encore l'URL fictive `VOTRE-COMPTE.github.io` :
  le sitemap était donc **inexploitable**. Corrigé.
- Le dossier `images/` **n'existait pas** : `og:image`, favicon, `apple-touch-icon`
  et les icônes du manifest renvoyaient toutes une 404. Un partage sur Facebook ou
  WhatsApp n'affichait aucune vignette. Tous les visuels ont été générés.
- `404.html` renvoyait vers `/`, c'est-à-dire hors du site (GitHub Pages « projet »).
  Corrigé vers `/photo-identite-albi/`, avec un plan du site pour rattraper le visiteur.

### Structure

- Passage d'**une page unique à un silo de 5 pages** : accueil + 4 guides
  (normes, e-photo ANTS, domicile, bébé), reliés entre eux dans les deux sens.
  C'est le levier le plus puissant : une page ne peut pas se positionner
  sérieusement sur « normes photo d'identité » *et* « photo identité bébé Albi ».
- Fil d'Ariane visible + `BreadcrumbList` sur chaque page.
- Bloc « L'essentiel » et « En résumé » sur chaque page : réponses courtes,
  factuelles et autonomes — le format que Google reprend en extrait et que les
  assistants IA citent.

### Données structurées (JSON-LD)

Graphe unique et relié par `@id` — 12 entités sur l'accueil :
`ProfessionalService` / `LocalBusiness` / `PhotographyBusiness`, `Person` (Franck Galinié,
avec `hasCredential` renvoyant à l'ANTS), `GovernmentOrganization` (ANTS), 4 `Service`,
`HowTo`, `WebSite`, `ItemList`, `WebPage`+`FAQPage` (18 questions), `BreadcrumbList`.
Chaque page guide ajoute son propre `Article` / `TechArticle` et sa `FAQPage`.

> **Note honnête sur les FAQ** : depuis août 2023, Google n'affiche plus les
> résultats enrichis FAQ pour les sites d'entreprise (réservés aux sites
> gouvernementaux et de santé). Le balisage reste utile — il structure la page
> pour les moteurs génératifs et les AI Overviews — mais n'attendez pas
> d'accordéon FAQ directement dans les résultats Google.

### GEO — être cité par ChatGPT, Claude, Perplexity, Gemini

- `robots.txt` **autorise explicitement** les robots des moteurs génératifs
  (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot…)
  et bloque les aspirateurs SEO commerciaux qui ne rapportent rien.
- `llms.txt` à la racine : fiche d'identité condensée du studio (adresse, horaires,
  tarifs, réponses courtes, communes couvertes) au format que les LLM lisent le mieux.
- Réponses rédigées en **phrases autonomes** : une réponse citable hors contexte
  a beaucoup plus de chances d'être reprise qu'un paragraphe qui commence par
  « comme indiqué plus haut ».
- Entités nommées explicitement (ANTS, Saint-Juéry, Tarn, format 35 × 45 mm)
  plutôt que sous-entendues.

### Performance & RGPD

- **Google Fonts supprimé.** La police Bricolage Grotesque est désormais servie
  depuis `assets/fonts/` : l'adresse IP du visiteur ne part plus chez Google
  (point de conformité RGPD réel, plusieurs fois sanctionné en Europe), et deux
  connexions réseau sont économisées au chargement.
- Police préchargée (`rel="preload"`), `font-display: swap`.
- Carte Google Maps toujours chargée uniquement au clic.
- Aucun script tiers, aucun cookie.

---

## 5. Le vrai plafond de verre : l'adresse en `.github.io`

Deux limites structurelles, à connaître :

1. **Autorité de domaine.** `franckgaliniephoto.github.io` est un sous-domaine
   partagé. Il ne capitalise pas d'autorité comme un domaine propre.
2. **`robots.txt` inopérant.** Sur une adresse `compte.github.io/projet/`, le seul
   `robots.txt` lu par les moteurs est celui de la **racine du domaine**
   (`https://franckgaliniephoto.github.io/robots.txt`) — que vous ne contrôlez pas
   depuis ce dépôt. Le `robots.txt` du projet est donc écrit et prêt, mais
   **inactif tant que le site vit sous `/photo-identite-albi/`**.
   En attendant, le sitemap se déclare à la main dans Search Console (§1.1).

**La solution : un sous-domaine de votre domaine principal**, par exemple
`photo-identite.franckgphotographie.fr`.

Marche à suivre :

1. Chez votre registrar, créer un enregistrement `CNAME` :
   `photo-identite` → `franckgaliniephoto.github.io`
2. Renommer `CNAME.exemple` en `CNAME` et y mettre `photo-identite.franckgphotographie.fr`
3. Dans les réglages GitHub Pages du dépôt : renseigner le domaine + cocher *Enforce HTTPS*
4. **Rechercher/remplacer dans tout le dépôt** :
   `https://franckgaliniephoto.github.io/photo-identite-albi/`
   → `https://photo-identite.franckgphotographie.fr/`
   (présent dans : `index.html`, les 4 pages guides, `sitemap.xml`, `robots.txt`,
   `llms.txt`, `404.html`, `manifest.json`)
5. Dans `404.html` et `manifest.json`, remplacer aussi le préfixe `/photo-identite-albi/`
   par `/`
6. Ajouter la nouvelle propriété dans Search Console et resoumettre le sitemap
7. Depuis le site principal `franckgphotographie.fr`, **poser un lien** vers ce
   sous-domaine (menu ou page services) : c'est le premier lien entrant de qualité

---

## 6. Entretien — 20 minutes par mois

- [ ] Vérifier les **tarifs** affichés (3 endroits : accueil, page domicile, `llms.txt`)
- [ ] Mettre à jour `<lastmod>` dans `sitemap.xml` et `dateModified` dans le JSON-LD
      **uniquement si le contenu a réellement changé** — une fausse fraîcheur se repère
- [ ] Search Console → *Performances* : noter les requêtes qui remontent en
      impressions mais pas en clics. Ce sont les sujets à développer.
- [ ] Publier un post Google Business Profile
- [ ] Solliciter 2 à 3 avis

### Tester votre travail

| Quoi | Où |
|---|---|
| Données structurées | <https://search.google.com/test/rich-results> |
| Validateur schema.org | <https://validator.schema.org/> |
| Vitesse & Core Web Vitals | <https://pagespeed.web.dev/> |
| Aperçu de partage social | <https://developers.facebook.com/tools/debug/> |
| Position réelle en local | Recherche Google en navigation privée, géolocalisée sur Albi |

---

## 7. Les prochaines pages à écrire, par ordre de rentabilité

Quand vous voudrez aller plus loin, dans cet ordre :

1. **`/photo-identite-albi-ou-la-faire/`** — comparatif honnête des options à Albi
   (mairie, cabines, photographes). Attire une requête à forte intention.
2. **`/photo-passeport-albi/`** — le passeport a son propre volume de recherche,
   distinct de la carte d'identité.
3. **`/photo-visa-format-etranger/`** — peu de concurrence locale, panier moyen élevé.
4. **`/portrait-professionnel-albi/`** — pont vers l'activité principale du studio.

Règle : **une page = une intention de recherche**, et au moins 800 mots de contenu
réellement différent. Quatre pages solides valent mieux que vingt pages creuses —
et surtout, ne créez jamais une page par commune (« photo identité Carmaux »,
« photo identité Gaillac »…) avec le même texte : Google traite ces pages
satellites comme du spam et peut pénaliser le site entier.

---

*Dernière mise à jour : 4 août 2026.*
