function getRandomStrings(strings: string[], count: number): string[] {
    let randomStrings: string[] = [];
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * strings.length);
        randomStrings.push(strings[randomIndex]);
    }
    return randomStrings;
}

// Példa használatra
let stringList = ["alma", "körte", "szilva", "barack", "narancs", "citrom"];
console.log("Véletlenszerűen kiválasztott stringek: ", getRandomStrings(stringList, 3));
