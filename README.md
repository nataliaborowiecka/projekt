zadania domowe
1.sortowanie i filtrowanie
2.toolbar user log out           +
3.usuwanie czerwone, edycja niebieskie +
4.potwierdzenie dialog usuwanie
5.menu mniejsza czcionka i ikony +

ZMIENIONE ID DO OBIEKTU (PRODUCTS)

1. Moduły
2. Componenty // mała funkcjonalnosc
3. Serwis

/// Fryzjer

1. Logowanie / admin / dziewczyny
2. Dzienny utarg
3. Miesieczny raport
4. Stan magazynowy

// TODO

1. Podzielic aplikacje na sensowne moduly / tak aby mialy sens i byly potrzebne
2. Graficzne z material Angular
3. Połaczyć kazdy modl i z serwisem
4. Zastanowic sie jak zrobic usuwanie ;-) == trudne

Na 6 / pomyslec jak podizelic apke aby bylo logowanie i strona sie pokazala
odpowiednia po zalogowaniu ;-) a nie zalogowany nie widzial

Na 6 / zrobic walidacje np. nie mozna dodac pracownika gdzie imie jest puste

CO ZROBIC:
==> Zainstaluj node.js

1. git clone / link do githuba
2. npm install
3. npm run start / aplikacja
4. npm run server / server

bash terminal:
ctrl + shift + p
select default shell
git bash useless

https://allegro.pl/oferta/laptop-asus-n56vz-ssd-samsung-512gb-16gb-ram-7937437178

                    TABELKA SUMUJACA

<table>
          <thead>
          <tr>
            <td>Woda</td>
            <td>Farbat</td>

          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let u of usage.usages; let i = index">
            <td>{{u.bleach}}</td>
            <td>{{u.dye}}</td>
             <td> <button mat-raised-button color="primary" (click)="deleteU(i)">Usuń</button></td>

          </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                Suma: {{ sumBleach() }}
              </td>
              <td>
                Suma farby: {{ sumDye() }}
              </td>
            </tr>
          </tfoot>
        </table>
