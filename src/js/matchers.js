export default function matchers(list_heroes) {
  list_heroes.sort((x, y) => y.health - x.health);
  return list_heroes;
}
