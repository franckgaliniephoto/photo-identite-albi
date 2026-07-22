# Mise en ligne & checklist — Photo d'identité Albi / Saint-Juéry

## 1. Mise en ligne sur GitHub Pages (pas à pas)

1. Créer un compte sur https://github.com (gratuit) si ce n'est pas déjà fait.
2. Cliquer sur **New repository** → nom conseillé : `photo-identite-albi` → visibilité **Public** → **Create repository**.
3. Sur la page du dépôt : **uploading an existing file** → glisser-déposer **tout le contenu** de ce dossier (y compris `.nojekyll` — activer l'affichage des fichiers cachés si besoin) → **Commit changes**.
4. Aller dans **Settings → Pages** :
   - Source : **Deploy from a branch**
   - Branch : **main** — dossier **/ (root)** → **Save**.
5. Attendre 1 à 2 minutes : l'URL du site apparaît en haut de la page Pages, sous la forme `https://VOTRE-COMPTE.github.io/photo-identite-albi/`.
6. Toujours dans Settings → Pages, cocher **Enforce HTTPS**.
7. **Remplacer partout** `https://VOTRE-COMPTE.github.io/photo-identite-albi/` par l'URL réelle dans :
   - `index.html` (balise `canonical`, `og:url`, `og:image`, `twitter:image`, et les 2 occurrences dans les blocs JSON-LD),
   - `robots.txt` (ligne `Sitemap:`),
   - `sitemap.xml` (balise `<loc>`).
8. (Plus tard, si un nom de domaine est acheté) : renommer `CNAME.exemple` en `CNAME`, y laisser uniquement le domaine, puis chez le registrar créer un enregistrement CNAME `www` → `VOTRE-COMPTE.github.io` et les 4 enregistrements A de GitHub Pages pour l'apex (documentation : Settings → Pages → Custom domain).

Pour mettre à jour le site ensuite : modifier le fichier directement sur GitHub (icône crayon) ou re-téléverser, le site se republie tout seul.

## 2. Informations manquantes à fournir (⚠️ avant publication)

Chaque élément est repérable dans les fichiers en cherchant « ⚠️ » :

1. **E-mail** de contact (footer, mentions légales, et champ `email` du JSON-LD `index.html`).
2. **Horaires exacts jour par jour** — section « Venir au studio » **et** bloc `openingHoursSpecification` du JSON-LD (actuellement 09:00–18:00 en valeur provisoire : à corriger impérativement, Google l'affiche).
3. **Tarifs** (5 lignes du tableau) : planche papier (+ nombre de photos), e-photo ANTS, formule permis, formats étrangers/visa, déplacement à domicile.
4. **3 avis Google authentiques** (texte exact + prénom) à coller dans la section Avis — ne rien inventer.
5. **URL de la fiche Google Business Profile** (lien « Lire tous les avis », et à ajouter dans `sameAs` du JSON-LD).
6. **Note et nombre d'avis à jour** (actuellement 4,9/5 — 22 avis) : vérifier sur la fiche Google le jour de la mise en ligne, mettre à jour la section Avis **et** le bloc `aggregateRating`.
7. **Coordonnées GPS exactes** du 23 avenue Germain Téqui (clic droit sur le point exact dans Google Maps → les coordonnées s'affichent en premier) : à reporter dans `geo.position`, `ICBM` et le bloc `geo` du JSON-LD. Les valeurs actuelles (43.9508 ; 2.2126) sont approximatives.
8. **SIRET et forme juridique** pour les mentions légales (footer).
9. **Images** listées dans `images/README.md` (au minimum `og-image.jpg` 1200×630 pour un beau partage WhatsApp/Facebook).
10. **URL définitive du site** à reporter aux 3 endroits listés au point 7 de la section précédente.

## 3. Checklist post-lancement (SEO local)

- [ ] **Google Search Console** (https://search.google.com/search-console) : ajouter la propriété « Préfixe d'URL » avec l'URL du site, valider par balise HTML ou fichier.
- [ ] Dans Search Console : **Sitemaps** → soumettre `sitemap.xml`.
- [ ] Dans Search Console : **Inspection d'URL** → demander l'indexation de la page d'accueil.
- [ ] Tester les données structurées : https://search.google.com/test/rich-results (les 3 blocs doivent passer sans erreur).
- [ ] Vérifier les performances : https://pagespeed.web.dev (objectif ≥ 95 mobile sur les 4 catégories).
- [ ] **Fiche Google Business Profile** : ajouter l'URL du site dans le champ « Site Web » de la fiche, vérifier que nom / adresse / téléphone sont **strictement identiques** au footer du site (NAP).
- [ ] Ajouter un **lien vers ce site** depuis franckgphotographie.fr (idéalement depuis la page /photos-d-identite, avec une ancre du type « photo d'identité Albi — infos pratiques et tarifs »).
- [ ] Publier un post sur la **page Facebook** avec le lien du site.
- [ ] Vérifier l'inscription sur l'**annuaire des photographes agréés** (service-public / démarche permis de conduire, rubrique « photographes et cabines agréés ») et la cohérence de l'adresse.
- [ ] Bonus : inscrire l'adresse sur Bing Places, Pages Jaunes et Apple Business Connect avec le même NAP.
- [ ] À J+30 : consulter Search Console → Performances, pour voir les requêtes réelles (« photo identité albi », etc.) et ajuster les textes si besoin.
