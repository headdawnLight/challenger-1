import "./app.styles.css";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../../routes/page-layout";
import ErrorPage from "../../routes/error-page";
import AppPosts from "../app-posts/app-posts";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<PageLayout />}>
        <Route index={true} element={<AppPosts />} />
      </Route>
    </Routes>
  );
};

export default App;
