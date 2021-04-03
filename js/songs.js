let last = null;

function toggle(id,name) {
    document.getElementById("img_" + id + "_" + name).classList.add("hidden");
    document.getElementById("iframe_" + id + "_" + name).classList.remove("hidden");
    document.getElementById("iframe_" + id + "_" + name).src = "https://www.youtube.com/embed/" + id + "?autoplay=1";

    if (last !== null) {
        document.getElementById("img_" + last).classList.remove("hidden");
        document.getElementById("iframe_" + last).classList.add("hidden");
        document.getElementById("iframe_" + last).src = "";
    }
    last = id + "_" + name;
}

function getVideoHtml(e, name) {
    return `
        <div>
            <img id="img_` + e + `_` + name + `" src="http://img.youtube.com/vi/` + e + `/mqdefault.jpg" onclick="toggle('` + e + `', '` + name + `')"/>
            <iframe id="iframe_` + e + `_` + name + `" class="hidden"></iframe>
        </div>
    `;
}

function search(name) {
    document.getElementById("gridSearch").classList.add("hidden");
    let d = data[name];
    let str = "";
    d.original.forEach(e => {
        str += getVideoHtml(e);
    });
    d.covers.forEach(e => {
        str += getVideoHtml(e);
    });
    document.getElementById("songs").innerHTML = str;
}

window.onload = function() {
    let str = "";
    for (var key in data) {
        str += "<h2>" + key + "</h2><div class='break'></div>";
        let d = data[key];
        d.original.forEach(e => {
            str += getVideoHtml(e, key);
        });
        d.covers.forEach(e => {
            str += getVideoHtml(e, key);
        });
        str += "<div class='break'></div>";
    }
    document.getElementById("songs").innerHTML = str;
}