import health from '../health';
test('health', () => {
  const result = health({name: 'Маг', health: 90});
  expect(result).toBe("healthy");
});
