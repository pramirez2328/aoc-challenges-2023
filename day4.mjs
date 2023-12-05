import { getInput } from './getInput.mjs';
function calculatePoints(cards) {
  let totalPoints,
    first,
    winnersArr = [],
    numsArr = [],
    result = [];

  for (const card of cards) {
    let [winners, nums] = card.split(':').pop().split('|');
    winnersArr = winners.trim().split(' ');
    numsArr = nums.trim().split(' ');
    totalPoints = 0;
    first = true;

    numsArr.forEach((number) => {
      if (number !== '') {
        if (winnersArr.includes(number.trim())) {
          if (!first) {
            totalPoints *= 2;
          } else {
            totalPoints = 1;
            first = false;
          }
        }
      }
    });
    result.push(totalPoints);
  }

  return result.reduce((a, c) => a + c, 0);
}

const scratchcards = await getInput();

const totalPoints = calculatePoints(scratchcards);
console.log('Total Points:', totalPoints);
