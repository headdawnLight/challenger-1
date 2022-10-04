import AppHeader from "./AppHeader";
import AppNavbar from "./AppNavbar";
import AppMenu from "./AppMenu/AppMenu";
import AppContents from "./AppContents/AppContents";
import AppContextProvider from "../contexts/AppContext";
import "../styles/css/App.css";

const App = () => {
  return (
    <div className="App">
      <main className="App-main">
        <AppContextProvider>
          <AppHeader />
          <AppNavbar />
          <AppMenu />
          <AppContents />
        </AppContextProvider>
      </main>
    </div>
  );
};

export default App;
