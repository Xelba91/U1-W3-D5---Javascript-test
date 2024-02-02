/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log("Esercizio A: La somma di 10 e 20 è : " + sum);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);
console.log("Esercizio B - Il numero random tra 1 e 20 è: " + random);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Alessandro",
  surname: "Carrese",
  age: 32,
};
console.log("Esercizio C - crea variabile e assegna un oggetto:", me);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log("Esercizio D - rimuovi la proprieta age", me);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["Javascript"];
console.log("Esercizio E - aggiunto array skills:", me);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Css");
console.log("Esercizio F - aggiunto elemento all'array", me);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("Esercizio G - rimosso l'ultimo elemento dell'array", me);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
let dice = function () {
  let randomNumber = Math.ceil(Math.random() * 6);
  return randomNumber;
};

console.log("Esercizio 1 - un numero random tra 1 e 6:", dice());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

let whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
let n1 = 454;
let n2 = 30;
console.log(`Esercizio 2 - il maggiore tra ${n1} e ${n2} è:`, whoIsBigger(n1, n2));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let splitMe = function (str) {
  return str.split(" ");
};
console.log("Esercizio 3 - Funzione splitMe", splitMe("I Love Coding"));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let deleteOne = function (str, boolean) {
  if (boolean) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};
console.log("Esercizio 4 - caso true", deleteOne("ciao", true));
console.log("Esercizio 4 - caso false", deleteOne("ciao", false));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  return str.replace(/[0-9]/, "");
}

console.log("Esercizio 5 -:", onlyLetters("I have 4 dogs"));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  let input = document.createElement("input");
  input.type = "email";
  input.value = email;
  return input.checkValidity();
}

console.log("Esercizio 6 - email corretta xelba91@gmail.com", isThisAnEmail("xelba91@gmail.com"));
console.log("Esercizio 6 - email sbagliata xelba91@.com", isThisAnEmail("xelba91@.com"));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  // creo la variabile currentDay e assegno new Date().getDay() uscira il numero del giorno attuale
  let currentDay = new Date().getDay();
  //   console.log(currentDay);
  //creo un array di tutti i giorni della settimana partendo dalla domenica [0]
  const days = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  //ritorno l'array selezionando
  return days[currentDay];
}
console.log("Esercizio 7 - Oggi è: " + whatDayIsIt());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numRolls) {
  let sum = 0;
  let values = [];
  //ciclo che si ripete tot volte il numero contenuto nella variabile numRolls
  for (let i = 0; i < numRolls; i++) {
    let roll = dice();
    //inserisco nell'array values il numero random uscito
    values.push(roll);
    //sommo tutti i numeri random che escono nel ciclo
    sum += roll;
  }
  //ritorno un oggetto con proprieta somma e values (l'array creato)
  return {
    sum: sum,
    values: values,
  };
}

console.log("Esercizio 8 - :", rollTheDices(3));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(inputDate) {
  // Converto la data di input in oggetto Date
  const inputDateTime = new Date(inputDate);

  // Ottengo la data corrente
  const currentDate = new Date();

  // Calcolo la differenza in millisecondi tra le due date
  const timeDifference = currentDate - inputDateTime;

  // Calcolo il numero di giorni arrotondando verso il basso il risultato della divisione millisecondi*secondi*minuti*ore
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}
// posso sostituire con qualsisi data nel formato 'YYYY-MM-DD'
const inputDate = "2022-02-15";
const daysPassed = howManyDays(inputDate);
console.log(`Esercizio 9 - Dalla data ${inputDate} sono trascorsi ${daysPassed} giorni.`);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const today = new Date();
  const MeseCompleanno = 2;
  const GiornoCompleanno = 9;

  return today.getMonth() + 1 === MeseCompleanno && today.getDate() === GiornoCompleanno;
}

console.log("Esercizio 10 - E' il mio compleanno: " + isTodayMyBirthday());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}

const io = {
  nome: "Alessandro",
  cognome: "Carrese",
  città: "Napoli",
};

console.log("Esercizio 11 - ", deleteProp(io, "città"));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Ho spostato qui l'array dei film che stavano in fondo.
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  //newest lo assegno al primo film della lista
  let newest = movies[0];
  for (let i = 1; i < movies.length; i++) {
    newest = parseInt(movies[i].Year) > parseInt(newest.Year) ? movies[i] : newest;
  }
  return newest;
}

console.log("Esercizio 12 - ", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies() {
  return movies.length;
}
console.log("Esercizio 13 - il numero di film contenuti nell'array movies è :", countMovies());
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  let years = [];
  for (let i = 0; i < movies.length; i++) {
    years[i] = movies[i].Year;
  }
  return years;
}
console.log("Esercizio 14 - Array con solo gli anni di uscita", onlyTheYears(movies));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let lastMillennium = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year > 999 && movies[i].Year < 2000) {
      lastMillennium.push(movies[i]);
    }
  }
  return lastMillennium;
}
console.log("Esercizio 15 - Array con solo film prodotti nel millennio scorso", onlyInLastMillennium());
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let sommaTotaleAnniFilm = 0;
  for (let i = 0; i < movies.length; i++) {
    sommaTotaleAnniFilm += parseInt(movies[i].Year);
  }
  return sommaTotaleAnniFilm;
}
console.log("Esercizio 16 - Somma totale di tutti gli anni dei film dell'array movies:", sumAllTheYears());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(query, movies) {
  return movies.filter(function (movie) {
    return movie.Title.includes(query);
  });
}
let queryStr = "Avengers";
const searchResult = searchByTitle(queryStr, movies);

console.log(`Esercizio 17 - Film che contengono nel titolo la parola: ${queryStr}`, searchResult);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(str, movies) {
  let match = []; //deve includere tutti i film dell'array "movies che contengono la stringa fornita del titolo"
  let unmatch = []; // deve includere tutti i rimanenti
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  return (risultato = {
    match,
    unmatch,
  });
}
console.log("Esercizio 18 -", searchAndDivide("Avengers", movies));

// prova personale con un'altro array!
let film = [
  {
    Title: "The Avengers",
  },
  {
    Title: "Matrix",
  },
];
// console.log("Esercizio 18 -", searchAndDivide("Avengers", film));

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(num, movies) {
  movies.splice(num, 1);

  return movies;
}

console.log("Esercizio 19", removeIndex(12, movies));
// console.log("Esercizio 19", removeIndex(1, film));  //prova mia

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
//ho creato l'elemento per poterlo selezionare poi con la funzione
const div = document.createElement("div");
div.id = "container";
div.innerText = "Esercizio 20";
document.body.appendChild(div);

function selezionaIdContainer() {
  const container = document.getElementById("container");
  return container;
}
console.log("Esercizio 20 - Funzione per selezionare l'elemento dotato di id container:", selezionaIdContainer());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const td2 = document.createElement("td");
const td = document.createElement("td");
td.innerText = "td";
td2.innerText = "td2";
document.body.appendChild(td);
document.body.appendChild(td2);

function selezionaTagName() {
  const tdTags = document.getElementsByTagName("td");
  return tdTags;
}
console.log("Esercizio 21 - selezionare ogni tag <td> all'interno della pagina", selezionaTagName());

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const SelTags = selezionaTagName();

function stampaContenutoTd() {
  for (let i = 0; i < SelTags.length; i++) {
    console.log("Esercizio 22 -", SelTags[i].innerText);
  }
}

stampaContenutoTd();

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addBackRed() {
  const link = document.getElementsByTagName("a");
  for (let i = 0; i < link.length; i++) {
    link[i].style.backgroundColor = "red";
  }
}
console.log("Esercizio 23 - Background rosso ai link");
addBackRed();

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const ul = document.getElementsByTagName("ul")[0];

function addLi() {
  const li = document.createElement("li");
  li.innerText = "elemento della lista";
  ul.appendChild(li);
}
console.log("Esercizio 24 - Funzione per agg. elementi alla lista");

addLi();
addLi();

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
//aggiungo la classe myList a ul
ul.id = "myList";

function clearList() {
  ulIdmyList = document.getElementById("myList");

  ulIdmyList.innerHTML = "";
}
console.log("Esercizio 25 - Funzione clearList() per svuotare la lista non ordinata con id myList");

//commenta la funzione per vedere la lista
clearList();
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const allTr = document.getElementsByTagName("tr");

function addClassTestTotr() {
  for (let i = 0; i < allTr.length; i++) {
    allTr[i].classList.add("test");
  }
}
addClassTestTotr();
console.log("Esercizio 26 - Funzione per aggiungere ad ogni tag <tr> la classe CSS test", allTr);

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(altezza) {
  // Costruisco il mezzo albero di asterischi
  for (let i = 1; i <= altezza; i++) {
    let riga = "";

    // Aggiungo asterischi alla riga
    for (let j = 1; j <= i; j++) {
      riga += "*";
    }

    // Stampa la riga
    console.log(riga);
  }
}

console.log("Esercizio 27 - Funzione che costruisce un mezzo albero di *");
halfTree(8);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isPrime(x) {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Esercizio 29 - :");
console.log("Il 7 è un numero primo quindi --> " + isPrime(7));
console.log("L' 8 non è un numero primo quindi --> " + isPrime(8));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
