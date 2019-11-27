var data = [];
var thead_name = ["狀態", "編號", "金額", "訂單時間", "預定時間", "姓名", "帳戶", "品項明細"];
var table_width = [8, 11, 5, 7, 7, 10, 11, 40];
var state_name = [
    ["未確認", "準備中", "已完成", "已結帳", "婉拒"],
    ["unconfirm", "prepared", "done", "finished", "rejected"]
];
var thead, tbody;
var mainmenu;
var even = 0;
var tdata;

function start() {
    importdata();
    thead = document.getElementById("thead");
    buildthead();
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
    //let data = <?php echo json_encode($data,JSON_UNESCAPED_UNICODE); ?>;
    let importData = [
        ["未確認", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"],
        ["婉拒", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"],
        ["已結帳", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"],
        ["準備中", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"],
        ["已完成", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"],
        ["未確認", "19-10-05-029", "150", "11:32", "12:10", "傑森史塔森", "0975975176", "培根蛋餅"]
    ]

    return importData;
}

function changeState(ev) {
    //console.log(ev.target);
    if (ev.target.tagName.toLowerCase() == "span") {
        if (ev.target.nextSibling) {
            ev.target.parentNode.removeChild(ev.target.nextSibling);
            return;
        }
        let parent = ev.target.parentNode.parentNode;
        let ul = document.createElement("ul");
        for (let i = 0; i < state_name[0].length; i++) {
            let li = document.createElement("li");
            if (parent.className != state_name[1][i]) {
                li.setAttribute("class", "state");
                li.addEventListener("click", changeState, false);
                li.setAttribute("value", state_name[1][i])
                li.textContent = state_name[0][i];
                ul.appendChild(li);
            }

        }
        ev.target.parentNode.appendChild(ul);
    } else {
        let parent = ev.target.parentNode.parentNode;
        parent.parentNode.setAttribute("class", ev.target.getAttribute("value"));
        parent.firstChild.textContent = "[" + ev.target.textContent + "]";
        parent.removeChild(ev.target.parentNode);
        return;
    }

    //parent.setAttribute("class", "rejected");
    // console.log(parent.className);
}

function buildtbody() {
    tdata = importdata();
    tbody.setAttribute("style", "text-align:center;");
    for (let i in tdata) {
        let row = document.createElement("tr");
        for (let j in state_name[0])
            if (tdata[i][0] == state_name[0][j])
                row.setAttribute("class", state_name[1][j]);
        for (let j in tdata[i]) {
            let col = document.createElement("td");
            if (j == 0) {
                let state = document.createElement("span");
                state.setAttribute("class", "state");
                state.addEventListener("click", changeState, false);
                state.innerHTML = "[" + tdata[i][j] + "]";
                col.appendChild(state);
            } else if (j == tdata[i].length - 1) {
                col.setAttribute("align", "left");
                col.innerHTML = "&nbsp;" + tdata[i][j];
            } else
                col.textContent = tdata[i][j];
            row.appendChild(col);
        }
        row.setAttribute("height", "25");
        row.setAttribute("id", tdata[i][1]);
        tbody.appendChild(row);
    }
}

window.addEventListener("load", start, false);