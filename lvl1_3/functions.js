// Erstelle eine Datei, in der deine function gespeichert werden sollen.
// Diese sollen am Ende exportiert werden.
// Importiere diese function in deiner index.js

// Erstelle eine function, der 3 Parameter übergeben werden sollen. Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird, soll die function addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese function in deiner index.js und teste sie.

// Bonus: Überprüfe, ob die Eingabe richtig war, falls nicht gib einen Fehler zurück

export const calc = (x, y, z) => {
    if (x === "+") {
        return y + z;
    } else if (x === "-") {
        return y - z;
    } else if (x === "*") {
        return y * z;
    } else if (x === "/") {
        return y / z;
    } else { return "Error" }


}