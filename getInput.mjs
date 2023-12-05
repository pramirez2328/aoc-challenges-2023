import { promises as fsPromises } from 'fs';
const filePath = './input.txt';

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
      // const charactersString = line.replace(/[^a-zA-Z0-9]/g, '');

      // Push the string of characters into the result array
      resultArray.push(line);
    });

    return resultArray;
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    throw error;
  }
}

export const getInput = async () => {
  try {
    const result = await processFile(filePath);
    console.log('* Reading input data was succesful! *\n');
    return result;
    return;
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
