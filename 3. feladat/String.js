function getRandomStrings(strings, count) {
    var randomStrings = [];
    for (var i = 0; i < count; i++) {
        var randomIndex = Math.floor(Math.random() * strings.length);
        randomStrings.push(strings[randomIndex]);
    }
    return randomStrings;
}
// Példa használatra
var stringList = ["alma", "körte", "szilva", "barack", "narancs", "citrom"];
console.log("Véletlenszerűen kiválasztott stringek: ", getRandomStrings(stringList, 3));
