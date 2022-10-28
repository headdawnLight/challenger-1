import { render, screen, fireEvent } from "@testing-library/react";
import AccordionMenu from "../components/AppMenu/AccordionMenu";

describe("calls onClick function when clicked", () => {
  test("calls first menu box's onClick function when clicked", () => {
    //mock toggle function
    const toggleSpy = jest.fn();

    const { getByTestId } = render(<AccordionMenu toggle={toggleSpy} />);

    fireEvent.click(getByTestId("1"));

    //assertions
    expect(toggleSpy).toHaveBeenCalled;
    expect(screen.getByTestId("1").textContent).toBe("SUMMARY");
  });

  test("calls second menu box's onClick function when clicked", () => {
    //mock toggle function
    const toggleSpy = jest.fn();

    const { getByTestId } = render(<AccordionMenu toggle={toggleSpy} />);

    fireEvent.click(getByTestId("2"));

    //assertions
    expect(toggleSpy).toHaveBeenCalled;
    expect(screen.getByTestId("2").textContent).toBe("PUBLISH");
  });

  test("calls third menu box's onClick function when clicked", () => {
    //mock toggle function
    const toggleSpy = jest.fn();

    const { getByTestId } = render(<AccordionMenu toggle={toggleSpy} />);

    fireEvent.click(getByTestId("3"));

    //assertions
    expect(toggleSpy).toHaveBeenCalled;
    expect(screen.getByTestId("3").textContent).toBe("ENGAGE");
  });

  test("calls fourth menu box's onClick function when clicked", () => {
    //mock toggle function
    const toggleSpy = jest.fn();

    const { getByTestId } = render(<AccordionMenu toggle={toggleSpy} />);

    fireEvent.click(getByTestId("4"));

    //assertions
    expect(toggleSpy).toHaveBeenCalled;
    expect(screen.getByTestId("4").textContent).toBe("LISTEN");
  });

  test("calls fifth menu box's onClick function when clicked", () => {
    //mock toggle function
    const toggleSpy = jest.fn();

    const { getByTestId } = render(<AccordionMenu toggle={toggleSpy} />);

    fireEvent.click(getByTestId("5"));

    //assertions
    expect(toggleSpy).toHaveBeenCalled;
    expect(screen.getByTestId("5").textContent).toBe("REPORT");
  });
});
