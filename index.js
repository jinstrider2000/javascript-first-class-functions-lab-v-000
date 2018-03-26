function countdown(callback) {
  window.setTimeout(callback,2000);
}

function createMultiplier(number) {
  let num = number
  return (num) => num * number;
}
