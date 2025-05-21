export const mystery3 = (string1, string2) => {
  let counter = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      counter++;
    }
  } return counter;
};
