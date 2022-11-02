import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppContents from "../components/AppContents/AppContents";
import AppContextProvider from "../contexts/AppContext";
import PostCard from "../components/AppContents/PostCard";

// import and mock props
describe("Should render <PostCard/> and test the click event of the buttons", () => {
  afterEach(cleanup);

  test("tests the click event of the act-btn-1", async () => {
    //mock button click
    const buttonClicked = jest.fn();

    //render PostCard
    render(
      <AppContextProvider>
        <AppContents>
          <PostCard buttonClicked={buttonClicked} />
        </AppContents>
      </AppContextProvider>
    );

    const button = screen.getAllByTestId("act-btn-1")[0];

    await userEvent.click(button);

    //assertions
    expect(buttonClicked).toHaveBeenCalledTimes(0);
    expect(button.getAttribute("class")).toContain("Actions-buttons");
  });

  test("tests the click event of the act-btn-2", async () => {
    //mock button click
    const buttonClicked = jest.fn();

    //render PostCard
    render(
      <AppContextProvider>
        <AppContents>
          <PostCard buttonClicked={buttonClicked} />
        </AppContents>
      </AppContextProvider>
    );

    const button = screen.getAllByTestId("act-btn-2")[0];
    await userEvent.click(button);

    //assertions
    expect(buttonClicked).toHaveBeenCalledTimes(0);
    expect(button.getAttribute("class")).toContain("Actions-buttons");
  });

  test("img must have an alt attribute = 'post_img'", () => {
    //render PostCard
    render(
      <AppContextProvider>
        <AppContents>
          <PostCard />
        </AppContents>
      </AppContextProvider>
    );

    //assertions
    const img = screen.getAllByRole("img")[0];
    expect(img.getAttribute("alt")).toContain("post_img");
  });
});
