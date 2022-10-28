import { render, screen } from "@testing-library/react";
import AppHeader from "../components/AppHeader";

test("renders the heading part", () => {
  render(<AppHeader />);

  //assertion
  expect(screen.getByRole("heading").textContent).toBe("sociality.io");
});
