import { promises as fsPromises } from 'fs';

async function processFile(filePath) {
  try {
    // Read the file asynchronously
    const data = await fsPromises.readFile(filePath, 'utf-8');

    // Split the data into lines
    const lines = data.split('\n');

    // Initialize an array to store the results
    const resultArray = [];

    // Process each line
    lines.forEach((line) => {
      // Convert each line into a string of characters (remove non-alphanumeric characters)
      const charactersString = line.replace(/[^a-zA-Z0-9]/g, '');

      // Push the string of characters into the result array
      resultArray.push(charactersString);
    });

    return resultArray;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    throw error;
  }
}

// input file:
const filePath = './input.txt';

const getInput = async () => {
  try {
    const result = await processFile(filePath);
    console.log('* Reading input data was succesful! *\n');
    return result;
    return;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

const day1 = async () => {
  const inputData = await getInput();
  const obj = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  };

  const part1Regex = /\d/gm;
  const part2Regex = /(?=(zero|one|two|three|four|five|six|seven|eight|nine|0|1|2|3|4|5|6|7|8|9))/g;

  let first,
    last,
    match,
    temp = [],
    filterMatches = [];

  for (let currentItem of inputData) {
    while ((match = part2Regex.exec(currentItem)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === part2Regex.lastIndex) {
        part2Regex.lastIndex++;
      }
      temp.push(match.pop());
    }
    first = obj[temp[0]];
    last = obj[temp[temp.length - 1]];
    filterMatches.push(first + last);
    temp = [];
  }

  const result = filterMatches.reduce((a, c) => +a + +c);
  console.log(result);
};

day1();
