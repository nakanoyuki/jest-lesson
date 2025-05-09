it("モック関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return Value");
  expect(mockFunc()).toBe("Mock return Value");
});

it("モック関数に一度だけ返される戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValueOnce("Mock return Value");
  expect(mockFunc()).toBe("Mock return Value");
  expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Resolved Value");
  const result = await mockFunc();
  expect(result).toBe("Resolved Value");
});
