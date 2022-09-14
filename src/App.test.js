import { render, screen } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);

  /** @explain screen object를 이용해서 원하는 element에 data-testid로 접근 */
  const counterElement = screen.getByTestId("counter");

  /** @explain data-testid가 counter인 element의 텍스트가 0인지 테스트 */
  expect(counterElement).toHaveTextContent(0);
});
