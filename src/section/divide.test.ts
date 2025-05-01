import { divide, ZeroDivisorError } from "./divide";

it("0で割るとエラー", () => {
  expect(() => divide(10, 0)).toThrow();
  expect(() => divide(10, 0)).toThrow("0で割ることはできません");
  expect(() => divide(10, 0)).toThrow(ZeroDivisorError);
});
