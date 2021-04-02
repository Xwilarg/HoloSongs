function toggle(id) {
    document.getElementById("img_" + id).classList.add("hidden");
    document.getElementById("iframe_" + id).classList.remove("hidden");
    document.getElementById("iframe_" + id).src = "https://www.youtube.com/embed/" + id + "?autoplay=1"
}

function getVideoHtml(e) {
    return `
        <div>
            <img id="img_` + e + `" src="http://img.youtube.com/vi/` + e + `/0.jpg" onclick="toggle('` + e + `')"/>
            <iframe id="iframe_` + e + `" class="hidden"></iframe>
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