// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")



describe('parseQueryString', () => {
  it('should return an empty object for an empty query string', () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  });
});

  it('parse a simple key-value pair', () => {
    expect(parseQueryString("key=value")).toEqual({ key: "value" });
  });

  it('should handle multiple key-value pairs', () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
      key1: "value1",
      key2: "value2"
    });
  });

  it('should handle keys with no values', () => {
    expect(parseQueryString("key1=&key2=value2")).toEqual({
      key1: "",
      key2: "value2"
    });
  });

  it('handle keys with equal signs in values', () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1"
    });
  });
});