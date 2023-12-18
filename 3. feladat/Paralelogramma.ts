function areaWithHeightAndBase(base: number, height: number): number {
    return base * height;
}

function areaWithAngleAndSides(side1: number, side2: number, angleInDegrees: number): number {
    const angleInRadians = angleInDegrees * Math.PI / 180;
    return side1 * side2 * Math.sin(angleInRadians);
}

// Példa használatra
let base = 5;
let height = 3;
console.log("Terület magassággal és alappal: " + areaWithHeightAndBase(base, height));

let side1 = 5;
let side2 = 6;
let angle = 60;
console.log("Terület szöggel és két oldallal: " + areaWithAngleAndSides(side1, side2, angle));
