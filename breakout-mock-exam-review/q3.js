/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create an object to hold our "piles"
  const piles = {};

  // loop through the array
  for (const num of arr) {
    // have we seen this element before?
    if (piles[num]) {
      // if yes, add/increment the pile
      piles[num] += 1;
    } else {
      // if no, create a new pile (key/value pair)
      piles[num] = 1;
    }
  }

  // console.log(piles);

  // create variables to hold the current highest value and the key assoc with that value
  let highestValue = 0;
  let highestKey = null;

  // loop through our obj (piles)
  for (const key in piles) {
    // is the value at this key greater than our highest value
    const value = piles[key];

    if (value > highestValue) {
      // if yes, replace highest value with the value, replace highest key with the key
      highestValue = value;
      highestKey = key;
    }
  }

  // return highest key
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
