import { httpGet } from '../http';

test('should sum', () => {
  const result = sum([1, 2, 3]);
  httpGet.mockReturnValue(JSON.stringify({}));

  expect(result).toBe(6);
});
