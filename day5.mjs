function cyberReindeer(road, time) {
  let strWhenBlocked = [],
    first = true;
  for (const chr of road) {
    if (chr == '|') {
      strWhenBlocked.push(first ? 'S' : '*');
      first = false;
    } else {
      strWhenBlocked.push('.');
    }
  }

  const result = [road];
  let counter = 1,
    i = 1,
    star = false;
  let item = [...road];

  while (counter < time) {
    if (item[i] === '.' && !star) {
      [item[i], item[i - 1]] = [item[i - 1], item[i]];
      i++;
    } else if (item[i] === '|' && counter === 5) {
      item = strWhenBlocked;
      star = true;
      i++;
    } else if (item[i] === '*') {
      item[i] = 'S';
      item[i - 1] = '.';
      star = true;
      i++;
    } else if (star) {
      item[i] = 'S';
      item[i - 1] = '*';
      star = false;
      i++;
    }
    counter++;
    result.push(item.join(''));
  }

  return result;
}

const road = 'S..|...|..';
const time = 10; // units of time
const result = cyberReindeer(road, time);
console.log(result);
