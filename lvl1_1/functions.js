

export const sortieren = (arr) => {
    arr.sort();
    console.log(arr);
}

export const sortierenZahlen = (arr) => {
    arr.sort((a, b) => a - b);
    console.log(arr)
}

