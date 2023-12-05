import { getInput } from './getInput.mjs';

const possibleGamesSum = (recordsArr) => {
  let records = recordsArr;
  let possibleGames = [];

  for (const record of records) {
    // Initialize cube counts for each game
    let filterRecord = record.split(':').pop().split(';');
    let red = 0,
      green = 0,
      blue = 0;
    // Iterate through each revealed subset in the game
    for (const subset of filterRecord) {
      const items = subset.trim().split(',');
      // // Subtract the counts based on the revealed subset
      for (const item of items) {
        const f = item.trim();
        const [num, color] = f.split(' ');
        if (color === 'red') {
          if (red < parseInt(num)) red = +num;
        } else if (color === 'green') {
          if (green < parseInt(num)) green = +num;
        } else if (color === 'blue') {
          if (blue < parseInt(num)) blue = +num;
        }
      }
    }
    let nums = red * blue * green;
    possibleGames.push(nums);
  }

  // Calculate and return the sum of IDs of possible games
  return possibleGames.reduce((sum, id) => sum + id, 0);
};

// Example usage with the provided records and cube counts
const records = await getInput();
const redCount = 12;
const greenCount = 13;
const blueCount = 14;

const result = possibleGamesSum(records, redCount, greenCount, blueCount);
console.log(result); // Output: 8
