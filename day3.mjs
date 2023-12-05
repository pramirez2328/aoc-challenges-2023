function findFirstRepeated(gifts) {
  const giftSet = new Set();

  for (const gift of gifts) {
    if (giftSet.has(gift)) {
      return gift;
    } else {
      giftSet.add(gift);
    }
  }

  return -1;
}

const result1 = findFirstRepeated([3, 5, 4, 6, 4, 7, 2]);
console.log('result challenge1:', result1);

function manufacture(gifts, materials) {
  return gifts.filter((gift) => gift.split('').every((chr) => materials.includes(chr)));
}

const result2 = manufacture(['tren', 'oso', 'pelota'], 'tronesa');
console.log('result challenge2:', result2);

function findNaughtyStep(original, modified) {
  if (modified.length > original.length) {
    [original, modified] = [modified, original];
  }

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== modified[i]) {
      return original[i];
    }
  }
  return '';
}

const result3 = findNaughtyStep('abcd', 'abcde');
console.log('result challenge3:', result3);

//create the decode function to reverse the string inside the curly brackets
function decode(message) {
  //create an iteration to reverse the message from inner curly brakets
  let cond = true,
    first,
    last,
    str;
  while (cond) {
    first = message.lastIndexOf('(');
    last = message.indexOf(')', first);

    if (first !== -1) {
      str = message.substring(first + 1, last);
      message = message.replace(`(${str})`, [...str].reverse().join(''));
    } else {
      cond = false;
    }
  }
  return message;
}

const c = decode('sa(u(cla)atn)s');
console.log('result challenge4:', c); // santaclaus
