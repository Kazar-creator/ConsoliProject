# ULTIME MODIFICHE
* Creato componente HomeCell che utilizza come prop Height, Width, alignItems, justifyContent e flexDirection in modo tale che ogni cella della Home sia personalizzabile. (Tra due celle affiancate, però, vince l'altezza di quella più grande).
* Creato un Modal trasparente che copre l'intera pagina quando si apre il menu a tendina sull'immagine del profilo. Questo componente funge come una sorta di "bottone gigante" che permette di chiudere il menu a tendina cliccando un qualsiasi punto della pagina.
* Creato componente AppSidebar che permette di snellire il codice scrivendo una singola riga ogni volta che sarà necessario inserire la Sidebar in una pagina

# COMANDI GITHUB
## ADD, COMMIT E PUSH
### PREPARARE TUTTI I FILE MODIFICATI PER IL COMMIT
* git add .

### ESEGUIRE IL COMMIT CON DESCRIZIONE (SIGNIFICA SALVARE LE MODIFICHE)
* git commit -m "Descrizione delle modifiche"

### CARICA LE MODIFICHE SUL BRANCH (-u si usa la prima volta per collegare branch locale e remoto)
* **Prima Volta:** git push -u origin main
* **Successive:** git push

## BRANCH
### VISUALIZZA LISTA BRANCH (il branch in cui ti trovi è segnato da *)
* **Lista Branch Locali:** git branch 
* **Lista branch Remoti:** git branch -r
* **Tutti i Branch:** git branch -a

### CREA NUOVO BRANCH SPOSTANDOSI SOPRA
* git checkout -b nomeBranch

### SPOSTATI SU UN BRANCH ESISTENTE
* git checkout nomeBranch

### SCARICA BRANCH
* git pull

### SCARICA MODIFICHE DA REMOTO SENZA APPORTARLE AL LOCALE (È molto utile quando vuoi controllare prima cosa è cambiato senza rischiare di modificare subito il tuo progetto e puoi vedere i commit presenti sul remoto ma che non hai ancora localmente)
* git fetch
* git log HEAD..origin/main

### UNIRE LE MODIFICHE DEL MAIN AL PROPRIO BRANCH SENZA PERDERE NULLA
* git fetch origin
* git merge origin/main



# INFO GENERALI
* **App.js:** utilizza dei componenti chiamati Stack.Navigator e Stack.Screen che al momento permettono il passaggio tra una pagina e l'altra. Bisogna aggiungere uno Stack.Screen per ogni nuova pagina creata.
*  **AppHeader.js:** componente riutilizzabile che forma l'header di tutte le pagine.
*   **HomeCell.js:** componente riutilizzabile e personalizzabile che crea una nuova cella nella griglia della Home.
*   **AppSideBar.js:** componente riutilizzabile che forma la sidebar di tutte le pagine.

