// Erstelle dir in deiner Functions Datei:
// eine function, die mit Hilfe von filter ein Array mit Objekten anhand von population filtert. Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. 
// eine weitere function, die die Städte zurückgibt, die weniger als 100000 Einwohner haben
// exportiere beide function

//      id": 2,
//     "city": "Póvoa",
//     "population": 746140

export const getPopulation = (arr) => {
    allPopulations = arr.filter(check);
}

const check = (population) => {
    return population > 10;
}

function filterCities(cities, population) {
    // Die filter()-Methode wird auf dem Array von Städten aufgerufen und nimmt eine Callback-Funktion entgegen, die für jedes Element im Array aufgerufen wird.
    // Das aktuelle Element wird in der Callback-Funktion als city übergeben.
    return cities.filter(city => {
        // Die Callback-Funktion gibt true zurück, wenn die Bevölkerung der Stadt größer als die angegebene Bevölkerung ist.
        // Ansonsten gibt sie false zurück.
        return city.population > population;
    });
}
