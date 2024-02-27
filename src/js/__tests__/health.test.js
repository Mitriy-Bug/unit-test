import health from '../health';
test.each([
  [{name: 'Маг', health: 90}, "healthy"],
  [{name: 'Маг', health: 50}, "wounded"],
  [{name: 'Маг', health: 10}, "critical"],
])(
  ('health'),(health_test, status)=>{
  expect(health(health_test)).toBe(status);
});
