# Zadanie rekrutacyjne

Zadanie rekrutacyjne dla Rtbhouse. 
Wykorzystane biblioteki/technologie:
  - Vue.js 2
  - SCSS
  - Axios ( API )
  - Vue Select ( zamiast Select2 )
  - AmChart ( wykresy )

Co jest warte uwagi, nie wykorzystałem biblioteki Select2, ze względów:
  - Select2 wymagał jQuery, której użycie byłoby bezsensowne ( przerost treści nad formą )
  - Vue Select posiada te same funkcje + konfiguracja jak i użycie jest dużo prostsze
  - Vue Select nie wymagał zewnętrznych stylów do pobrania
  - Owa biblioteka jest bardziej wspierana dla Vue
  
  
### Własne style CSS/SCSS
Postanowiłem nie używać żadnych bibliotek, gdyż aplikacja tego nie wymagała, proste style wystarczyły by przedstawić zakres zadania.

### Instalacja

Wymagany jest Node.js do uruchomienia aplikacji, wystarczy ściągnąć pliki i wykonać te polecenia w terminalu.

```sh
$ npm install
$ npm run serve
```