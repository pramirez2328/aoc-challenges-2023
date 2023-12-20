function maxDistance(movements) {
  // Code here
  const movementsArray = movements.split('');
  let maxDistance = 0;
  const obj = {};

  for (let i of movementsArray) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  let left = obj['<'] || 0;
  let right = obj['>'] || 0;
  let star = obj['*'] || 0;

  if (left > right) {
    maxDistance = left - right + star;
  } else if (right > left) {
    maxDistance = right - left + star;
  } else if (right === left && star > 0) {
    maxDistance = star;
  } else if (right === left && star === 0) {
    maxDistance = 0;
  }

  return maxDistance;
}

// const movements = '>>*<';
// const result = maxDistance(movements);
// console.log(result); // -> 2

// const movements2 = '<<<>';
// const result2 = maxDistance(movements2);
// console.log(result2); // -> 2

// const movements3 = '>***>';
// const result3 = maxDistance(movements3);
// console.log(result3); // -> 5

const result4 = maxDistance('**********');
console.log(result4); // -> 10
