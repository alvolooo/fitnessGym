let link = document.getElementById("themeLink");

document.getElementById('themeButton').onclick = function () {
    let greenTheme = "themeGreen.css";
    let redTheme = "theme.css";

    let currentTheme = link.getAttribute("href");
    let theme = "";


    if (currentTheme == greenTheme) {
        currentTheme = redTheme;
        theme = "red";
        localStorage.setItem('curTheme', 'redTheme');
    } else 
    {
        currentTheme = greenTheme;
        theme = "green";
        localStorage.setItem('curTheme', 'greenTheme');
    }
    link.setAttribute("href", currentTheme);
    
    
}

let linkDirection = document.getElementById('changeBlock');
let chbox = document.getElementById('chb').innerHTML;

function myfunction() {
    
    let direction = "";
    let cur = linkDirection.getAttribute("href");
    let value = localStorage.getItem('cur');

        if (value === "block.css") {
            cur = "block.css";
        } else if (value === "row.css") {
            cur = "row.css";
        }
    
        if (cur == "row.css") {
            cur = "block.css";
            direction = "column";
            value = cur;
        } 
        else 
        {
            cur = "row.css";
            direction = "row";
            value = cur;
        }

    linkDirection.setAttribute("href", cur);
}


