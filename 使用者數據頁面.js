var data = [];
var thead_name = ["使用者名稱", "姓名", "性別", "年齡", "電子信箱", "總消費"];
var table_width = [15, 15, 10, 10, 40, 10];
var tdata = [
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"],
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"],
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"],
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"],
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"],
    ["0975975176", "林揚昇", "男", "20", "jason27146913@gmail.com", "123"]
]
var thead, tbody;
var mainmenu;
var even = 0;

function start() {
    thead = document.getElementById("thead");
    search = document.getElementById("search");
    search.addEventListener("click", getString, false);
    buildthead();
    importdata();
    tbody = document.getElementById("tbody");
    buildtbody();
}

function getString() {
    let str = document.getElementById("string").value;
    let type = document.getElementById("type").value;
    console.log(str);
    console.log(type);
}


function buildthead() {
    thead.setAttribute("style", "text-align:center;");
    let row = document.createElement("tr");
    //row.setAttribute("style", "line-height:30px;");
    row.setAttribute("height", "30");
    for (let i in thead_name) {
        let col = document.createElement("td");
        col.setAttribute("width", table_width[i] + "%");
        col.textContent = thead_name[i];
        row.appendChild(col);
    }
    thead.appendChild(row);
}

function importdata() {

}

function buildtbody() {
    tbody.setAttribute("style", "text-align:center;");
    let customer_data = importdata();
    for (let i in tdata) {
        let row = document.createElement("tr");
        row.setAttribute("height", "25");
        if (!even) {
            row.setAttribute("class", "odd");
            even = 1;
        } else {
            row.setAttribute("class", "even");
            even = 0;
        }

        for (let j in tdata[i]) {
            let col = document.createElement("td");
            col.textContent = tdata[i][j];
            row.appendChild(col);
            if (j == 4) {
                col.setAttribute("align", "left");
                col.innerHTML = "&ensp;" + tdata[i][j];
            } else
                col.textContent = tdata[i][j];
        }
        tbody.appendChild(row);
    }
}

window.addEventListener("load", start, false);