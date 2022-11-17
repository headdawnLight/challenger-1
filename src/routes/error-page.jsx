import "./error-page.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, page not found.</p>
      <Link to="/">back to home page</Link>
    </div>
  );
}
