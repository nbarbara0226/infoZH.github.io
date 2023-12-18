function areaWithHeightAndBase(base, height) {
    return base * height;
}
function areaWithAngleAndSides(side1, side2, angleInDegrees) {
    var angleInRadians = angleInDegrees * Math.PI / 180;
    return side1 * side2 * Math.sin(angleInRadians);
}
// Példa használatra
var base = 5;
var height = 3;
console.log("Terület magassággal és alappal: " + areaWithHeightAndBase(base, height));
var side1 = 5;
var side2 = 6;
var angle = 60;
console.log("Terület szöggel és két oldallal: " + areaWithAngleAndSides(side1, side2, angle));
