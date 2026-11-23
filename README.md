# TP 1 · Angular Forms

Lancer `npm.cmd start` dans PowerShell puis ouvrir http://localhost:4200. Vérifier la compilation avec `npm.cmd run build`. Pour réinstaller les dépendances, utiliser `npm.cmd ci`.

## Question de réflexion

Dans l’approche Template-Driven, Angular construit les contrôles à partir des directives du template, comme `ngModel`. Je la choisirais pour un petit formulaire avec des règles simples, par exemple un formulaire de contact.

Dans l’approche Reactive Forms, on définit explicitement les contrôles et les règles en TypeScript avec `FormGroup`, `FormControl` et `Validators`. Je la choisirais pour un formulaire dynamique, des validations entre plusieurs champs ou des tests unitaires ciblés sur le modèle.
