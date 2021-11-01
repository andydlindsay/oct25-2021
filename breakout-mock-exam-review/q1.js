/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // create a variable to hold our current lowest value
  let lowest = arr[0];
  // let lowest = Infinity;

  // loop through the arr
  for (const num of arr) {
    // is the current value lower than our lowest value
    if (num < lowest) {
      // if it is, replace lowest value with current value
      lowest = num;
    }
  }

  // return current lowest value
  return lowest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // create a variable to hold current highest
  let highest = arr[0];

  // loop through array
  for (const num of arr) {
    // if current value is higher than highest
    if (num > highest) {
      // replace highest with current value
      highest = num;
    }
  }

  // return the highest
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);

  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
