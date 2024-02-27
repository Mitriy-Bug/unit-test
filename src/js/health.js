// eslint-disable-next-line no-unused-vars
export default function health(unit_health) {
  const result_unit_health = unit_health.health;
  if(result_unit_health > 50) {
    return "healthy"
  } else if (result_unit_health <= 50 && result_unit_health >= 15) {
    return "wounded"
  } else {
    return "critical"
  }
}
