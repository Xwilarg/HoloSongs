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

function getVideoHtml(e, name, className) {
    return `
        <div>
            <img id="img_` + e + `_` + name + `" src="http://img.youtube.com/vi/` + e + `/mqdefault.jpg" onclick="toggle('` + e + `', '` + name + `')"/>
            <iframe id="iframe_` + e + `_` + name + `" class="hidden"></iframe>
        </div>
    `;
}

function getName(name) {
    if (names[name] === undefined) {
        return name;
    }
    return names[name];
}

function search(name) {
    document.getElementById("gridSearch").classList.add("hidden");
    let d = data[name];
    let str = "<div id='songs'>";
    if (d.hololiveOriginal !== undefined) {
        d.hololiveOriginal.forEach(e => {
            str += getVideoHtml(e);
        });
    }
    str += "<div class='break'></div>";
    if (d.original !== undefined) {
        d.original.forEach(e => {
            str += getVideoHtml(e);
        });
    }
    str += "<div class='break'></div>";
    if (d.covers !== undefined) {
        d.covers.forEach(e => {
            str += getVideoHtml(e);
        });
    }
    str += "</div>"
    document.getElementById("songsCat").innerHTML = str;
}

window.onload = function() {
    let str = "";
    for (var key in data) {
        str += "<h2>" + getName(key) + "</h2><div id='songs'>";
        let d = data[key];
        if (d.hololiveOriginal !== undefined) {
            d.hololiveOriginal.forEach(e => {
                str += getVideoHtml(e, key);
            });
        }
        str += "<div class='break'></div>";
        if (d.original !== undefined) {
            d.original.forEach(e => {
                str += getVideoHtml(e, key);
            });
        }
        str += "<div class='break'></div>";
        if (d.covers !== undefined) {
            d.covers.forEach(e => {
                str += getVideoHtml(e, key);
            });
        }
        str += "</div>";
    }
    document.getElementById("songsCat").innerHTML = str;
}