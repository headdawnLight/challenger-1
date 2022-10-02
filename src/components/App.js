import AppHeader from "./AppHeader";
import AppNavbar from "./AppNavbar";
import AppMenu from "./AppMenu/AppMenu";
import AppContents from "./AppContents";
import "../styles/css/App.css";

const App = () => {
  return (
    <div className="App">
      <main className="App-main">
        <AppHeader />
        <AppNavbar />
        <AppMenu />
        <AppContents />
      </main>
    </div>
  );
};

export default App;
