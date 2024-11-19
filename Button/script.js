function changeText() {
    const heading = document.getElementById("heading");
    if (heading.textContent === "Welcome to the Interactive Page!") {
        heading.textContent = "You've changed the heading!";
    } else {
        heading.textContent = "Welcome to the Interactive Page!";
    }
}
