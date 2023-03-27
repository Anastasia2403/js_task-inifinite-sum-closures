'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(number) {
    if (typeof number === 'number') {
      sum += number;

      return adder;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
