function generateErrorMessage(message: string, errorCode: number): never {
  throw { Message: message, Error: errorCode };
}

generateErrorMessage("Fehler:", 123);
//tsc .\app.ts --watch (Automatischer Ausführungsmodus nach speichern - Watchmode)
// tsc --init - Alles im Ordner wird als Projektordner angesehen., dann einfach tsc -w starten
