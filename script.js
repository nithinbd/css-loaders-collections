const loaders = [
    "dots/dot1/dot1",
    "spinners/spinner1/spinner1",
];

function loadAllLoaders() {
    const container = document.getElementById("loaders-container");

    loaders.forEach(loader => {
        fetch(`loaders/${loader}.html`)
            .then(response => response.text())
            .then(html => {
                const loaderBox = document.createElement("div");
                loaderBox.classList.add("loader-box");
                loaderBox.innerHTML = html;
                loaderBox.onclick = () => showCode(html);
                container.appendChild(loaderBox);
            })
            .catch(error => console.error("Error loading loader:", error));
    });
}
function showCode(code) {
    document.getElementById("code-block").textContent = code;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function copyCode() {
    const code = document.getElementById("code-block").textContent;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!");
    });
}
window.onload = loadAllLoaders;
