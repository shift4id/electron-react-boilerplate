import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Counter from "./components/Counter";
import configureStore from "./store";

import "./assets/App.scss";

const { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1>Hello World!</h1>
          <p>
            This boilerplate was made with Webpack 5, Babel 7, ESLint, <br />
            Stylelint, Prettier, PostCSS, SCSS, React, Redux, and Electron.
          </p>
          <Counter />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
