import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./app.component";
import AppContextProvider from "../../contexts/AppContext";

test("renders the app component", () => {
  render(
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  );
});
