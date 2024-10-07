import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import { StateProvider } from "@context/StateProvider";
import { initialState } from "@context/initialState";
import reducer from "@context/reducer";
import "react-toastify/dist/ReactToastify.css";


// styles
import "@styles/global.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StateProvider initialState={initialState} reducer={reducer}>

      <AppRouter />

  </StateProvider>
);
