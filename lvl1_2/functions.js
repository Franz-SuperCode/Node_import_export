
// Nur das erste Element vom Array haben
export const firstElement = (arr) => {
    console.log(arr[0]);
}

// Nur das letzte Element vom Array haben
export const onlyLast = (arr) => {
    return arr[arr.length - 1];
}

// Nur das letzte Element vom Array entfernen
export const notLast = (arr) => {
    let copy = [...arr];
    copy.pop();
    return arr;
}

//Entferne das erste Element aus dem Array
export const notFirst = (arr) => {
    let copy = [...arr];
    copy.shift();
    return copy;
}

// Entferne folgendes Elemente aus dem Array
export const removeANumber = (arr, remove) => {
    return arr.filter(element => element !== remove);
}

//Entferne alle Doppelten Elemente aus dem Array
export const removeDouble = (arr) => {
    return [...new Set(arr)];
}

//Alle Zahlen im Array addieren
export const sumArray = (arr) => {
    return arr.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
}
