var item_type, item_name, item_price, item_picture, item_info;

function item_add() {
    let ito = item_type.getElementsByTagName("option");
    ito[0].selected = true;
    item_name.value = "";
    item_price.value = "";
    item_picture.value = "";
    item_info.value = "";
}

function start() {
    item_type = document.getElementById("item_type");
    item_name = document.getElementById("item_name");
    item_picture = document.getElementById("item_picture");
    item_price = document.getElementById("item_price");
    item_info = document.getElementById("item_info");
    document.getElementById("item_add").addEventListener("click", item_add, false);

}

window.addEventListener("load", start, false);