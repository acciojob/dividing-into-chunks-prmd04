const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 let result = [];
  let current = [];
  let currentSum = 0;

  for (let num of arr) {
    if (currentSum + num <= n) {
      current.push(num);
      currentSum += num;
    } else {
      if (current.length > 0) {
        result.push(current);
      }
      current = [num];
      currentSum = num;
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
