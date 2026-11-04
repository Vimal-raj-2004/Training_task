let api = document.querySelector(".api");

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {

        products.forEach(function (product) {
            // Every product goes inside its own card
            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML =
                "<p>ID: " + product.id + "</p>" +
                "<h3>" + product.title.slice(0, 50) + "</h3>" +
                "<p>Price: $" + product.price + "</p>" +
                "<p>" + product.description.slice(0, 100) + "</p>" +
                "<img src='" + product.image + "'>";

            api.appendChild(card);
        });
    })
    .catch(function (error) {
        // Error shown in red inside .api
        api.innerHTML = "<p style='color:red'>Error: " + error.message + "</p>";
    })
    .finally(function () {
        let done = document.createElement("p");
        done.innerHTML = "API request completed";
        api.appendChild(done);
    });
