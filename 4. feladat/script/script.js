function addProduct() {
    var name = document.getElementById('productName').value;
    var price = document.getElementById('productPrice').value;
    var table = document.getElementById('productList');

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = price;

    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}
var products = [];

function addProduct() {
    var name = document.getElementById('productName').value;
    var price = parseFloat(document.getElementById('productPrice').value);
    if(name && !isNaN(price)) {
        products.push({ name, price });
        updateProductList();
    }
}
function addProduct() {
    var name = document.getElementById('productName').value;
    var price = parseFloat(document.getElementById('productPrice').value);
    if(name && !isNaN(price)) {
        products.push({ name, price });
        updateProductList();
        
        // Töröljük a beviteli mezők tartalmát
        document.getElementById('productName').value = '';
        document.getElementById('productPrice').value = '';
    }
}

function updateProductList() {
    var table = document.getElementById('productList');
    table.innerHTML = "<tr><th>Termék Neve</th><th>Ár</th></tr>";

    products.forEach(product => {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = product.name;
        cell2.textContent = product.price;
    });
}


function findCheapestProduct() {
    var resultDiv = document.getElementById('results');
    if (products.length === 0) {
        resultDiv.innerHTML = "Nincsenek termékek.";
        return;
    }

    var cheapestPrice = Math.min(...products.map(p => p.price));
    var cheapestProducts = products.filter(p => p.price === cheapestPrice);

    resultDiv.innerHTML = "Legolcsóbb termék(ek): " + cheapestProducts.map(p => p.name).join(", ");
}


function calculateAveragePrice() {
    var resultDiv = document.getElementById('results');
    if (products.length === 0) {
        resultDiv.innerHTML = "Nincsenek termékek.";
        return;
    }

    var total = products.reduce((sum, p) => sum + p.price, 0);
    var average = total / products.length;
    resultDiv.innerHTML = "Átlagár: " + average.toFixed(2);
}

function calculatePriceStandardDeviation() {
    var resultDiv = document.getElementById('results');
    if (products.length === 0) {
        resultDiv.innerHTML = "Nincsenek termékek.";
        return;
    }

    var average = products.reduce((sum, p) => sum + p.price, 0) / products.length;
    var variance = products.reduce((sum, p) => sum + Math.pow(p.price - average, 2), 0) / products.length;
    var stdDeviation = Math.sqrt(variance);
    resultDiv.innerHTML = "Árak szórása: " + stdDeviation.toFixed(2);
}

function deleteProduct(index) {
    products.splice(index, 1);
    updateProductList();
}

function updateProductList() {
    var table = document.getElementById('productList');
    table.innerHTML = "<tr><th>Termék Neve</th><th>Ár</th><th>Művelet</th></tr>";

    products.forEach((product, index) => {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.textContent = product.name;
        cell2.textContent = product.price;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Törlés";
        deleteButton.onclick = function() { deleteProduct(index); };
        cell3.appendChild(deleteButton);
    });
}
