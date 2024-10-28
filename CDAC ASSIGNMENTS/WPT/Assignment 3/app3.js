let link = document.querySelector("#highlightLink");
let bold = document.querySelectorAll(".font");

link.addEventListener("mouseenter", () => {
    bold.forEach(element => {
        element.style.color = "red";
    });
});
link.addEventListener("mouseout", () => {
    bold.forEach(element => {
        element.style.color = "red";
    });
});