/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,7
// 2,3,4,6,7,9
// 0 1 2 3 4 5

// 5 / 2 === 2.5 === 2
// 6 / 2 === 3 - 1 === 2

const median = function(arr) {
  // sort the array
  arr.sort();

  // calculate the middle / right index
  const middleIndex = Math.floor(arr.length / 2);

  // is the array even-length?
  if (arr.length % 2 === 0) {
    // if it is, return the average of the middle two elements
    const leftIndex = middleIndex - 1;

    const valOne = arr[middleIndex];
    const valTwo = arr[leftIndex];

    // BEDMAS, PEDMAS
    const avg = (valOne + valTwo) / 2;
    return round(avg);
  }
    
  // if not (odd-length), return the middle element  
  return arr[middleIndex]; 
};

// Don't change below:
module.exports = { median };
