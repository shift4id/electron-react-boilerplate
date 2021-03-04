import { configureStore } from "@reduxjs/toolkit";
import ElectronStore from "electron-store";
import { createLogger } from "redux-logger";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createElectronStorage from "redux-persist-electron-storage";

import rootReducer from "../reducers";

const isDevelopment = process.env.NODE_ENV === "development";

export default () => {
  const electronStore = new ElectronStore();

  const logger = createLogger({
    level: "info",
    collapsed: true,
  });

  const persistConfig = {
    debug: isDevelopment,
    key: "root",
    storage: createElectronStorage({ electronStore }),
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(isDevelopment ? logger : []),
    devTools: isDevelopment,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
