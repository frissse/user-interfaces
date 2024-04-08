window.addEventListener("load", fillProductFiche);

let productInfo;

function getProduct() {
    const product = localStorage.getItem("product")
    for (let i = 0; i < categories.length; i++) {

        for (let j = 0; j < categories[i].producten.length; j++) {
            console.log(categories[i].producten[j].product_naam)
            if (categories[i].producten[j].product_naam === product) {
                if (i === 0) {
                    category = "Streling voor het oog"
                } else if (i === 1) {
                    category = "Handig"
                } else {
                    category = "Unbreakable"
                }
                productInfo = categories[i].producten[j]
                console.log(productInfo)
            }
        }
    }
}

function formatDescription(description) {
    description = description.replace("_", " ")
    return description.replace("_", "").charAt(0).toUpperCase() + description.slice(1)

}

function fillProductFiche() {
    getProduct();
    const elementBefore = document.getElementById("personalisering")
    const parentElement = document.getElementById("bevestiging")
    const productSection = document.createElement("section")
    productSection.className = "product";

    parentElement.insertBefore(productSection, elementBefore)

    const header = document.createElement("h3")
    header.innerHTML = "Product";
    productSection.appendChild(header)

    const image = document.createElement("img")
    image.src = productInfo.afbeelding
    productSection.appendChild(image);

    const table = document.createElement("table");
    table.id = "product"
    productSection.appendChild(table);

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    const rowProduct = document.createElement("tr");
    tableBody.appendChild(rowProduct);

    const prodNaamDescription = document.createElement("td");
    prodNaamDescription.innerHTML = "Productnaam: ";
    rowProduct.appendChild(prodNaamDescription);

    const prodNaamValue = document.createElement("td")
    prodNaamValue.innerHTML = productInfo.product_naam;
    rowProduct.appendChild(prodNaamValue);

    const rowCategory = document.createElement("tr");
    tableBody.appendChild(rowCategory);

    const categoryDescription = document.createElement("td");
    categoryDescription.innerHTML = "Categorie: ";
    rowCategory.appendChild(categoryDescription);

    const categoryValue = document.createElement("td")
    categoryValue.innerHTML = category;
    rowCategory.appendChild(categoryValue);

    const rowPrijs = document.createElement("tr");
    tableBody.appendChild(rowPrijs);

    const prijsDescription = document.createElement("td");
    prijsDescription.innerHTML = "Prijs: ";
    rowPrijs.appendChild(prijsDescription);

    const prijsValue = document.createElement("td")
    prijsValue.innerHTML = productInfo.prijs;
    rowPrijs.appendChild(prijsValue);

    if (productInfo.link) {
        const rowLink = document.createElement("tr");
        tableBody.appendChild(rowLink);

        const LinkDescription = document.createElement("td");
        LinkDescription.innerHTML = "Link: ";
        rowLink.appendChild(LinkDescription);

        const LinkValue = document.createElement("td")
        const link = document.createElement("a")
        link.href = productInfo.link;
        link.innerHTML = "link to detail pagina";
        LinkValue.appendChild(link);
        rowLink.appendChild(LinkValue);
    }

    const specificaties = document.createElement("table")
    specificaties.id = "specificaties"
    productSection.appendChild(specificaties)

    const specificatiesDescription = document.createElement("h4")
    specificatiesDescription.innerHTML = "Specificaties: "
    specificaties.appendChild(specificatiesDescription)

    for (const key in productInfo.specificaties) {
        let descriptionRow = document.createElement("tr");
        let description = document.createElement("td");
        let value = document.createElement("td");
        description.innerHTML = formatDescription(key);
        value.innerHTML = productInfo.specificaties[key];
        specificaties.appendChild(descriptionRow)
        descriptionRow.appendChild(description)
        descriptionRow.appendChild(value)
    }

}