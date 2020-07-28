import * as React from "react";
import App from "./App";
import { render, fireEvent, act } from "@testing-library/react";

it("should trigger error for empty input", async () => {
  const mock = jest.fn();

  const { getByTestId, queryByTestId } = render(<App mock={mock} />);

  await act(async () => {
    fireEvent.click(getByTestId("submitButton"));
  });

  // the text is showing, which means, the button has been clicked
  expect(queryByTestId("nameErrorText")).toBeTruthy();

  // but the handler is not been invoked
  expect(mock).toHaveBeenCalledTimes(1);
});
