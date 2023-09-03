function start() {
    var loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "block"; // Show the loading screen

    var word = document.getElementById("word").value;
    sessionStorage.setItem("a", word);
}

function load() {
    var loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.style.display = "block"; // Show the loading screen

    var storedParagraph = sessionStorage.getItem("a");
    var loadingScreen = document.getElementById("last");

    const text = storedParagraph;

    fetch("http://127.0.0.1:5000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: text
        })
        .then(response => response.json())
        .then(data => {
            loadingScreen.textContent = data;
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        })
        .finally(() => {
            loadingScreen.style.display = "none"; // Hide the loading screen when the response is ready
        });
}