const closeJS = document.getElementById("js-close");
const minimizeJS = document.getElementById("js-minimize");
const maximizeJS = document.getElementById("js-maximize");
const unmaximizeJS = document.getElementById("js-unmaximize");

const closeGO = document.getElementById("go-close");
const minimizeGO = document.getElementById("go-minimize");
const maximizeGO = document.getElementById("go-maximize");
const unmaximizeGO = document.getElementById("go-unmaximize");

closeJS.addEventListener("click", (e) => {
  window.runtime.Quit();
});

minimizeJS.addEventListener("click", (e) => {
  window.runtime.WindowMinimise();
});

unmaximizeJS.addEventListener("click", (e) => {
  window.runtime.WindowUnmaximise();
});

maximizeJS.addEventListener("click", (e) => {
  window.runtime.WindowMaximise();
});

closeGO.addEventListener("click", (e) => {
  window.go.main.App.Close();
});

minimizeGO.addEventListener("click", (e) => {
  window.go.main.App.Minimize();
});

unmaximizeGO.addEventListener("click", (e) => {
  window.go.main.App.Unmaximize();
});

maximizeGO.addEventListener("click", (e) => {
  window.go.main.App.Maximize();
});