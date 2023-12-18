"use strict";
var products = [];
function addProduct(name, price) {
    products.push({ name: name, price: price });
}
function findCheapestProduct() {
    if (products.length === 0)
        return undefined;
    var cheapest = products[0];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }
    return cheapest.name;
}
function calculateAveragePrice() {
    var sum = products.reduce(function (acc, product) { return acc + product.price; }, 0);
    return products.length > 0 ? sum / products.length : 0;
}
function calculatePriceStandardDeviation() {
    var avg = calculateAveragePrice();
    var variance = products.reduce(function (acc, product) { return acc + Math.pow(product.price - avg, 2); }, 0) / products.length;
    return Math.sqrt(variance);
}
