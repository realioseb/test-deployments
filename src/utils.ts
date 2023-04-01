export const randBetween = (min: number, max: number) => {
  const numb = Math.random() * (max - min) + min;
  return Math.floor(numb);
};

export const sum = (a: number, b: number) => {
  return a + b;
};

export const generateRandomNumber = () => {
  const rand1 = randBetween(1, 10);
  const rand2 = randBetween(1, 10);
  return sum(rand1, rand2);
};
