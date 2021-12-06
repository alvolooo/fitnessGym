document.getElementById('themeButton').onclick = function () {
    var link = document.getElementById("themeLink");
    var greenTheme = "style.css";
    var redTheme = "theme.css";

    var currentTheme = link.getAttribute("href");
    var theme = "";


    if (currentTheme == greenTheme) {
        currentTheme = redTheme;
        theme = "red";
    } else 
    {
        currentTheme = greenTheme;
        theme = "green";
    }
    link.setAttribute("href", currentTheme);
}