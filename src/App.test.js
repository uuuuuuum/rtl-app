import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);

  /** @explain screen object를 이용해서 원하는 element에 data-testid로 접근 */
  const counterElement = screen.getByTestId("counter");

  /** @explain data-testid가 counter인 element의 텍스트가 0인지 테스트 */
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct test", () => {
  render(<App />);

  /** @explain screen object를 이용해서 원하는 element에 data-testid로 접근 */
  const minusButtonElement = screen.getByTestId("minus-button");

  /** @explain data-testid가 minus-button인 element의 텍스트가 -인지 테스트 */
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct test", () => {
  render(<App />);

  /** @explain screen object를 이용해서 원하는 element에 data-testid로 접근 */
  const plusButtonElement = screen.getByTestId("plus-button");

  /** @explain data-testid가 minus-button인 element의 텍스트가 +인지 테스트 */
  expect(plusButtonElement).toHaveTextContent("+");
});
