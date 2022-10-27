import { render, screen } from "@testing-library/react";
import AppHeader from "../components/AppHeader";

test("renders the heading part", () => {
  render(<AppHeader />);

  // ASSERT
  expect(screen.getByText("sociality"));
});
