import { dateFormatter } from "../dateFormatter";

describe('dateFormatter', () => {
  test('should format date', () => {
    expect(dateFormatter('1992-01-19')).toBe('19/01/1992')
  });
});
