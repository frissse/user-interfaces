"use strict"
window.addEventListener("load", fill_result);

let category;

const dropdown = document.getElementById('product')

function fill_result() {
        let category_1 = document.createElement("optgroup")
        category_1.label = `Categorie: ${categories[0].categorie_name}`
        dropdown.appendChild(category_1)
        for (let i = 0; i < streling.length; i++) {
            let opt = streling[i]
            let element = document.createElement("option")
            element.id = "product_gekozen"
            element.textContent = opt.product_naam;
            element.value = opt.product_naam;
            dropdown.appendChild(element)
        }

        let category_2 = document.createElement("optgroup")
        category_2.label = `Categorie: ${categories[1].categorie_name}`
        dropdown.appendChild(category_2)
        for (let i = 0; i < handig.length; i++) {
            let opt = handig[i]
            let element = document.createElement("option")
            element.id = "product_gekozen"
            element.textContent = opt.product_naam;
            element.value = opt.product_naam;
            dropdown.appendChild(element)
        }

        let category_3 = document.createElement("optgroup")
        category_3.label = `Categorie: ${categories[2].categorie_name}`
        dropdown.appendChild(category_3)
        for (let i = 0; i < unbreakable.length; i++) {
            let opt = unbreakable[i]
            let element = document.createElement("option")
            element.id = "product_gekozen"
            element.textContent = opt.product_naam;
            element.value = opt.product_naam;
            dropdown.appendChild(element)
        }

}

