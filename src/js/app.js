// TODO: write your code here
import sum from './basic';
import health from './health';
import matchers from './matchers';

console.log(sum([1, 2]));
console.log(health({name: 'Маг', health: 90}));
console.log(matchers([
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]));
