import App from "./App.jsx";
import "./assets/styles/index.scss";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./store/index.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
