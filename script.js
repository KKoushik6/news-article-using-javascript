document.addEventListener("DOMContentLoaded", function() {
    // Load article preview on homepage
    const loadButton = document.getElementById("load-article");
    if (loadButton) {
        loadButton.addEventListener("click", function() {
            const articlePreview = document.getElementById("article-preview");
            articlePreview.innerHTML = `
                <h3>Summary:</h3>
                <p>Authorities are responding, and experts are analyzing the situation closely. Click below for the full article.</p>
                <a href="article1.html"><button>Read Full Article</button></a>
            `;
        });
    }

    // Go back to homepage
    const homeButton = document.getElementById("go-home");
    if (homeButton) {
        homeButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
