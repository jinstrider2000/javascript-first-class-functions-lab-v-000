function countdown(callback) {
  window.setTimeout(callback,2000);
}

function createMultiplier(number) {
  let num = number;
  return (num) => num * number;
}

function createMultiplierBonus() {
  doubler = createMultiplier;
  tripler = createMultiplier;
}

function multiplier(value1, value2) {
  return value1 * value2;
}

doublerWithBind = multiplier.bind(null,2);
triplerWithBind = multiplier.bind(null,3);
