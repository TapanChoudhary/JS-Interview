const promisify = (value, delay) =>
  new Promise(resolve => setTimeout(() => resolve(value), delay));

const a = () => promisify("a", 2000);
const b = () => promisify("b", 100);
const c = () => promisify("c", 300);

const parallel = async () => {
  const promises = [a(), b(), c()];
  const [resultOne, resultTwo, resultThree] = await Promise.all(promises);
  return `Parallel is done: ${resultOne} ${resultTwo} ${resultThree}`;
};

const race = async () => {
  const promises = [a(), b(), c()];
  const result = await Promise.race(promises);
  return `Race is done: ${result}`;
};

const sequence = async () => {
  const resultOne = await a();
  const resultTwo = await a();
  const resultThree = await a();
  return `Sequence is done: ${resultOne} ${resultTwo} ${resultThree}`;
};
