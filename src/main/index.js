// Import parts of electron to use
import { app, BrowserWindow } from "electron";
import ElectronStore from "electron-store";
import path from "path";

ElectronStore.initRenderer();

const port = process.env.PORT || 8000;
const isDevelopment = process.env.ELECTRON_ENV === "dev";

let mainWindow;

if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true");
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}

function renderWindow() {
  const store = new ElectronStore({
    path: app.getPath("userData"),
  });

  console.info(store.store);

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 320,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDevelopment,
    },
  });

  const indexPath = isDevelopment
    ? `http://localhost:${port}/index.html`
    : `file:${path.join(__dirname, "index.html")}`;

  setTimeout(() => {
    mainWindow.loadURL(indexPath);
  }, 2000);

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    if (isDevelopment) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
        // eslint-disable-next-line global-require
      } = require("electron-devtools-installer");

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.error("Error loading React DevTools: ", err)
      );

      setTimeout(() => {
        mainWindow.webContents.openDevTools();
      }, 4000);
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", renderWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    renderWindow();
  }
});
