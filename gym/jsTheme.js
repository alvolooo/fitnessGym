document.getElementById('themeButton').onclick = function () {
    let link = document.getElementById("themeLink");
    let greenTheme = "style.css";
    let redTheme = "theme.css";

    let currentTheme = link.getAttribute("href");


    if (currentTheme == greenTheme) {
        currentTheme = redTheme;
    } else 
    {
        currentTheme = greenTheme;
    }
    link.setAttribute("href", currentTheme);
}
