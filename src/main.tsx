import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // TODO turn on StrictMode
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
