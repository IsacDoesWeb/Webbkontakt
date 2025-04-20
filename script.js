document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("#meny a");
    const currentPage = window.location.pathname.split("/").pop();  // Hämta filnamnet från URL
    console.log("Current Page:", currentPage);  // Lägg till en loggning här

    menuLinks.forEach(link => {
        const href = link.getAttribute("href");
        console.log("Link href:", href);  // Lägg till logg för att se href-attributet

        if (href === currentPage || (href === "index.html" && currentPage === "")) {
            link.classList.add("active");
        }
    });
});

function toggleMeny() {
    const meny = document.getElementById("meny");
    meny.classList.toggle("visad");
}