const { ipcRenderer } = require('electron');
  
function updateTheme(theme) {
    document.getElementById("css-tag").href = `./themes/${theme}/${theme}.css`;
}

ipcRenderer.on('update_theme', (event, arg) => {
    // Arg should be the themed clicked in menu.
    localStorage.setItem("todolydo_theme_name", arg);
    updateTheme(arg);
});

let currentTheme = "";
const themesOnLoad = () => {
    currentTheme = localStorage.getItem("todolydo_theme_name") || "";
    currentTheme = currentTheme === "" ? "standardTheme" : currentTheme;
    updateTheme(currentTheme);
}