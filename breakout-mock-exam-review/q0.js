/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  return arr.length;

  // const length = arr.length;
  // return length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // create a variable to hold our running total
  // let total = 0;

  // // loop through the arr
  // for (const num of arr) {
  //   // add each element to the running total 
  //   total += num;
  //   // total = total + num;
  // }

  // // return the running total
  // return total;

  // sum([6,2,3,4,9,6,1,0,5])
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // arr.reduce((result, number) => (result + number), 0);


};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  // if (arr.length === 0) {
  if (!arr.length) {
    return null;
  }

  // avg = total / numElements
  const total = sum(arr);
  const numElements = count(arr);

  const avg = total / numElements;

  return round(avg);

  // return round(sum(arr) / count(arr))

};

// Don't change below:
module.exports = { count, sum, mean };
