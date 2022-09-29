import AppHeader from "./AppHeader";
import AppBrands from "./AppBrands";
import AppMenu from "./AppMenu";
import AppContents from "./AppContents";
import "../styles/css/App.css";

const App = () => {
  return (
    <div className="App">
      <main>
        <AppHeader />
        <AppBrands />
        <AppMenu />
        <AppContents />
      </main>
    </div>
  );
};

export default App;
