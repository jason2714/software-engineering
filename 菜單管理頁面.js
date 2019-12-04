var item_type, item_name, item_price, item_picture, item_info;
var item_upload;
var table_width = [10, 20, 30, 15, 15, 10];
var item_ex = [
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "牛肉三明治", "35", "pic/1.jpg", "好ㄘ"],
    ["三明治", "鮪魚三明治", "35", "pic/2.jpg", "豪好ㄘ"],
    ["飲料", "奶茶", "20", "pic/3.jpg", "好喝"],
    ["飲料", "紅茶", "20", "pic/4.jpg", "不錯喝"],
    ["點心", "薯條", "30", "pic/5.jpg", "有點好ㄘ"],
    ["點心", "抓餅", "35", "pic/6.jpg", "這是點心嗎0.0"]
];
var item_type_name = [
    ["三明治", "飲料", "點心"],
    ["sandwich", "drink", "dessert"]
];
var item_length = 6;
var tbody;

function item_add() {
    let ito = item_type.getElementsByTagName("option");
    let it;
    for (let i in item_type_name[0])
        if (item_type_name[1][i] == item_type.value)
            it = item_type_name[0][i];
    let arr = [it, item_name.value, item_price.value, item_picture.value, item_info.value];
    item_ex.push(arr);
    ito[0].selected = true;
    item_name.value = "";
    item_price.value = "";
    item_picture.value = "";
    item_info.value = "";
    buildtbody(item_ex);
}

function uploadFile() {
    let pic_src = item_upload.value;
    pic_src = pic_src.split("\\");
    item_picture.value = pic_src[pic_src.length - 1];
}

function start() {
    item_type = document.getElementById("item_type");
    buildthead(item_type);
    item_name = document.getElementById("item_name");
    item_picture = document.getElementById("item_picture");
    item_price = document.getElementById("item_price");
    item_info = document.getElementById("item_info");
    item_upload = document.getElementById("upload");
    item_upload.addEventListener("change", uploadFile, false);
    document.getElementById("item_add").addEventListener("click", item_add, false);
    buildthead(document.getElementById("thead"));
    tbody = document.getElementById("tbody");
    buildtbody(item_ex);
}

function buildtbody(tdata) {
    tbody.innerHTML = "";
    tbody.setAttribute("style", "text-align:center;");
    for (let i in tdata) {
        let row = document.createElement("tr");
        for (let j in item_type_name[0])
            if (tdata[i][0] == item_type_name[0][j])
                row.setAttribute("class", item_type_name[1][j]);
        for (let j = 0; j < item_length; j++) {
            let col = document.createElement("td");
            switch (j) {
                case 0: //新增到combo
                    let add = document.createElement("span");
                    add.setAttribute("class", "clickable");
                    add.addEventListener("click", addToCombo, false);
                    add.innerHTML = "[+]";
                    col.appendChild(add);
                    break;
                case item_length - 2: //編輯
                    let edit = document.createElement("span");
                    edit.setAttribute("class", "clickable");
                    edit.addEventListener("click", itemEdit, false);
                    edit.innerHTML = "[編輯]";
                    col.appendChild(edit);
                    break;
                case item_length - 1: //刪除
                    let remove = document.createElement("span");
                    remove.setAttribute("class", "clickable");
                    remove.addEventListener("click", itemRemove, false);
                    remove.innerHTML = "[X]";
                    col.appendChild(remove);
                    break;
                default:
                    col.textContent = tdata[i][j - 1];
                    break;
            }
            col.setAttribute("width", table_width[j] + "%");
            row.appendChild(col);
        }
        row.setAttribute("width", "100%");
        row.setAttribute("height", "25");
        row.setAttribute("id", tdata[i][1]);
        tbody.appendChild(row);
    }
}

function addToCombo(ev) {

}

function itemEdit(ev) {
    let parent = ev.target.parentNode.parentNode;
    console.log(parent);
}

function itemRemove(ev) {

}

function buildthead(select) {
    for (let i in item_type_name[0]) {
        let option = document.createElement("option");
        option.value = item_type_name[1][i];
        option.innerHTML = "&nbsp;" + item_type_name[0][i];
        select.appendChild(option);
    }
}
window.addEventListener("load", start, false);