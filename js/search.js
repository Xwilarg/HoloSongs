function displayGrid() {
    let grid = document.getElementById("gridSearch");
    if (grid.classList.contains("hidden")) {
        grid.classList.remove("hidden");
    } else {
        grid.classList.add("hidden");
    }
}