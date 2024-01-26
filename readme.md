# js-snack-es6
#### Snack 1:
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo **("Tavolo Vip")** e la lista degli invitati in ordine di posto:
```
const vips = [
  'Dwayne Johnson',
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];
```
La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
- nome del tavolo,
- nome dell'ospite,
- posto occupato.

Generiamo e stampiamo in console l'array di oggetti per i segnaposto.

#### Snack 2:
Abbiamo un elenco degli studenti di una facoltà, identificati da <u>**id**</u>, <u>**Nome**</u> e <u>**somma totale dei loro voti di esame**</u>.
Per preparare l'aula di un nuovo corso abbiamo bisogno dei seguenti dati:
- Un array di stringhe contenente il loro nome tutto in maiuscolo. ES (Marco della Rovere => MARCO DELLA ROVERE);
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70
- Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120

Questo è l'elenco degli studenti:
| Id  | Name                  | Grades |
| --- | --------------------- | ------ |
| 213 | Marco della Rovere    | 78     |
| 110 | Paola Cortellessa     | 96     |
| 250 | Andrea Mantegna       | 48     |
| 145 | Gaia Borromini        | 74     |
| 196 | Luigi Grimaldello     | 68     |
| 102 | Piero della Francesca | 50     |
| 120 | Francesca da Polenta  | 84     |

#### Snack 3:
Creare un array di oggetti:
- Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
  - nome e peso.

Stampare in console la bici con peso minore utilizzando destructuring e template literal.

#### Snack 4:
Usa l'array allegato alla traccia per completare i seguenti punti:
- Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
- Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.
```javascript
const teams = [
  {
    name: 'Team Turtle',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Frog',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Penguin',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Hippopotamus',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Seal',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Crocodile',
    score: 0,
    foul: 0,
  },
  {
    name: 'Team Dolphin',
    score: 0,
    foul: 0,
  },
];
```

#### Snack 5: 
dato un array di oggetti che rappresentano delle auto, chiedete all'utente con quante persone deve viaggiare e trovate la prima auto che soddisfa la richiesta:

```
let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5
  },
  {
    ...
  },
  ...
]
```

#### Snack 6: 
avete a disposizione un elenco di frutti per 
fare una macedonia. Scegliete 2, 3 o 4 in modo casuale e 
calcolate il prezzo della macedonia:
```
const products = [
  { title: 'Mela', price: 2.30},
  { title: 'Banana', price: 1.50 },
  { title: 'Mango', price: 2},
  { title: 'Pesca', price: 1.80},
  { title: 'Pera', price: 1.50},
  { title: 'Arancia', price: 2.20}
];
```