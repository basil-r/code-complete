console.log(Math.log2(8));

const Log2 = (x) => {
  let i = 0;
  while ((x = x >> 1) != 0) {
    i++;
  }
  return i;
};

console.log(Log2(8));

