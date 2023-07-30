const { BrowserWindow, app } = require("electron");
const path = require("path");

const CreateWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  window.loadFile("index.html");
};

app.whenReady().then(() => {
  CreateWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  console.log("Handle 'window-all-closed'");
  if (process.platform !== "darwin") app.quit();
});
