//objekt erzeugung
const person = {
  geburtsort: "Freiburg",
  name: "Marko",
  alter: 22,
  hobbies: ["Sport", "Zocken"],
  rolle: [2, "author"],
};

//Tuple beispiel (Strenges Array), mit fixer Länge
const mitarbeiter: {
  vorname: string;
  nachname: string;
  alter: number;
  bereich: string;
  kombiniertesTupel: [vorname: string, nachname: string, alter: number]; //vorname/nach... kann auch weggelassen werden
} = {
  vorname: "Marko",
  nachname: "Guastella",
  alter: 22,
  bereich: "Softwareentwicklung",
  kombiniertesTupel: ["Jeffrey", "Epstein", 22],
};

let favoriteActivitys: string[];
favoriteActivitys = ["Skifahren"];

let gemischtesArray: any[];
gemischtesArray = ["test", 1];
console.log(favoriteActivitys[0]);

//Iterate over array:
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(mitarbeiter.kombiniertesTupel[1]);

enum Schwerpunkt {
  Medieninformatik,
  Medientechnik,
  Medienwirtschaft,
  Medienmarketing,
}

const student = {
  matrikelNr: 186325,
  schwerpunkt: Schwerpunkt.Medieninformatik,
};

if(student.schwerpunkt == Schwerpunkt.Medieninformatik){
   
}
