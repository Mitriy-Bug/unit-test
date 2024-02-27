import matchers from '../matchers';

const arr_no_sort = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

const arr_sort = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];
  test('matchers', () => {
    expect(matchers(arr_no_sort)).toEqual(arr_sort);
  });
