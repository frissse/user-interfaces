window.addEventListener("load", init);

function init() {
    const query = window.location.search;

    const searchParams = new URLSearchParams(query);

    const paramDict = {
        "name": "",
        "email": "",
        "phone": "",
        "straat": "",
        "number": "",
        "plaats": "",
        "postcode": "",
        "land": "",
        "product": "",
        "quantity": "",
        "type": "",
        "color": "",
        "foto_upload": "",
        "engraving_input": "",
        "engraving_locatie": "",
    }

    for (let key in paramDict) {
        if(searchParams.get(key) === "") {
            paramDict[key] = "niet gegeven";
        } else {
            paramDict[key] = searchParams.get(key);
        }
    }

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let straat = document.getElementById("straat");
    let number = document.getElementById("number");
    let postcode = document.getElementById("postcode");
    let plaats = document.getElementById("plaats");
    let land = document.getElementById("land");
    let product = document.getElementById("product_gekozen");
    let quantity = document.getElementById("quantity");
    let type = document.getElementById("type");
    let color = document.getElementById("color");
    let foto_upload = document.getElementById("foto_upload");
    let engraving_input = document.getElementById("engraving_input");
    let engraving_locatie = document.getElementById("engraving_locatie");

    name.innerHTML = paramDict['name'];
    email.innerHTML = paramDict['email'];
    phone.innerHTML = paramDict['phone'];
    straat.innerHTML = paramDict['straat'];
    number.innerHTML = paramDict['number'];
    postcode.innerHTML = paramDict['postcode'];
    plaats.innerHTML = paramDict['plaats'];
    land.innerHTML = paramDict['land'];
    type.innerHTML = paramDict['type'];
    color.innerHTML = paramDict['color'];
    foto_upload.innerHTML = paramDict['foto_upload'];
    engraving_input.innerHTML = paramDict['engraving_input'];
    engraving_locatie.innerHTML = paramDict['engraving_locatie'];
}



