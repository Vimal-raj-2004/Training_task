let api = document.querySelector(".api");

// Creates a separate section inside .api for each task, so the outputs don't mix
function makeSection(title) {
    let section = document.createElement("div");
    section.innerHTML = "<hr><b>" + title + "</b>";
    api.appendChild(section);
    return section;
}

// 19. Display "Loading..." inside .api before fetching
api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {

        // 18. Success message inside .api (also clears "Loading...")
        api.innerHTML = "<p>API data loaded successfully</p>";

        // 1. Only the product title inside <h1>
        let s1 = makeSection("Task 1");
        products.forEach(function (product) {
            s1.innerHTML += "<h1>" + product.title + "</h1>";
        });

        // 2. Product ID and title inside <h2>
        let s2 = makeSection("Task 2");
        products.forEach(function (product) {
            s2.innerHTML += "<h2>" + product.id + " - " + product.title + "</h2>";
        });

        // 3. First 30 characters of each title
        let s3 = makeSection("Task 3");
        products.forEach(function (product) {
            s3.innerHTML += "<p>" + product.title.slice(0, 30) + "</p>";
        });

        // 4. First 100 characters of each description
        let s4 = makeSection("Task 4");
        products.forEach(function (product) {
            s4.innerHTML += "<p>" + product.description.slice(0, 100) + "</p>";
        });

        // 5. Product image inside a <div>
        let s5 = makeSection("Task 5");
        products.forEach(function (product) {
            let div = document.createElement("div");
            div.innerHTML = "<img src='" + product.image + "' width='100'>";
            s5.appendChild(div);
        });

        // 6. Title, description and image inside a single <div>
        let s6 = makeSection("Task 6");
        products.forEach(function (product) {
            let div = document.createElement("div");
            div.innerHTML =
                "<h3>" + product.title + "</h3>" +
                "<p>" + product.description + "</p>" +
                "<img src='" + product.image + "' width='100'>";
            s6.appendChild(div);
        });

        // 7. Price inside <p>
        let s7 = makeSection("Task 7");
        products.forEach(function (product) {
            s7.innerHTML += "<p>" + product.price + "</p>";
        });

        // 8. Category inside <h3>
        let s8 = makeSection("Task 8");
        products.forEach(function (product) {
            s8.innerHTML += "<h3>" + product.category + "</h3>";
        });

        // 9. Title in uppercase
        let s9 = makeSection("Task 9");
        products.forEach(function (product) {
            s9.innerHTML += "<p>" + product.title.toUpperCase() + "</p>";
        });

        // 10. Title and its total character count
        let s10 = makeSection("Task 10");
        products.forEach(function (product) {
            s10.innerHTML += "<p>" + product.title + " (" + product.title.length + " characters)</p>";
        });

        // 11. First 5 products only
        let s11 = makeSection("Task 11");
        products.slice(0, 5).forEach(function (product) {
            s11.innerHTML += "<p>" + product.title + "</p>";
        });

        // 12. ID, title and price
        let s12 = makeSection("Task 12");
        products.forEach(function (product) {
            s12.innerHTML += "<p>" + product.id + " | " + product.title + " | " + product.price + "</p>";
        });

        // 13. Image with width 200px
        let s13 = makeSection("Task 13");
        products.forEach(function (product) {
            s13.innerHTML += "<img src='" + product.image + "' style='width:200px'>";
        });

        // 14. Separate <div> with class "card" for each product
        let s14 = makeSection("Task 14");
        products.forEach(function (product) {
            let card = document.createElement("div");
            card.className = "card";
            card.innerHTML = "<p>" + product.title + "</p>";
            s14.appendChild(card);
        });

        // 15. Title and description (description limited to 50 characters)
        let s15 = makeSection("Task 15");
        products.forEach(function (product) {
            s15.innerHTML +=
                "<h3>" + product.title + "</h3>" +
                "<p>" + product.description.slice(0, 50) + "</p>";
        });

        // 16. Titles in the console and on the webpage
        let s16 = makeSection("Task 16");
        products.forEach(function (product) {
            console.log(product.title);
            s16.innerHTML += "<p>" + product.title + "</p>";
        });

        // 17. Title and category inside the same <div>
        let s17 = makeSection("Task 17");
        products.forEach(function (product) {
            let div = document.createElement("div");
            div.innerHTML = "<h3>" + product.title + "</h3><p>" + product.category + "</p>";
            s17.appendChild(div);
        });
    })
    .catch(function (error) {
        api.innerHTML = "<p style='color:red'>Error: " + error.message + "</p>";
    })
    .finally(function () {
        // 20. Message after the request finishes
        let done = document.createElement("p");
        done.innerHTML = "API request completed";
        api.appendChild(done);
    });
