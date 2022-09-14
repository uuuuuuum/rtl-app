import { fireEvent, render, screen } from "@testing-library/react";
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

// 플러스 버튼 클릭시 counter 0 > 1로 변경
test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("plus-button");

  // click plus button
  fireEvent.click(buttonElement);

  // 카운터가 0에서 1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

// 마이너스 버튼 클릭시 counter 0 > -1로 변경
test("when the - button is pressed, the counter changes to -1", () => {
  render(<App />);

  const buttonElement = screen.getByTestId("minus-button");

  // click plus button
  fireEvent.click(buttonElement);

  // 카운터가 0에서 -1이 됩니다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});
