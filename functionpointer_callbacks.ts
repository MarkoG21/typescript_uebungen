function add(n1: number, n2: number) {
  console.log("Ich bin eine Funktion");
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

//Pointer einer Funktion als Variable speichern und aufrufen ist möglich :D
//Function Types
let aufKonsoleAusgeben: (a: number) => void;
aufKonsoleAusgeben = printResult;

aufKonsoleAusgeben(123);

//Callbacks
function multiplyAndHandle(
  n1: number,
  number2: number,
  callback: (num: number) => void
) {
  const result = n1 * number2;
  callback(result);
}

multiplyAndHandle(10, 20, (test) => {
  console.log(test);
});

//Funktioniert folgendermaßen, die Anonyme Funktion "(test) => {console.log(test);} wird
//als parameter übergeben siehe multiplyandhandle. Diese ruft diese wiederrum auf und
//übergibt hier das ergebnis in die Anonyme funktion welche sie printet.
