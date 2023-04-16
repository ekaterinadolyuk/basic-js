const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }
  
  try {
    if(!(date instanceof Date) || isNaN(date)){
      throw new Error('Invalid date!');
    }
  } catch {
    // isNaN бросает ошибку, если "tricky" тест
    throw new Error('Invalid date!');
  }

  if(date.getUTCMonth() === 11 || date.getUTCMonth() === 0 || date.getUTCMonth() === 1) {
    return 'winter';
  } else if (date.getUTCMonth() === 2 || date.getUTCMonth() === 3 || date.getUTCMonth() === 4) {
    return 'spring';
  } else if (date.getUTCMonth() === 5 || date.getUTCMonth() === 6 || date.getUTCMonth() === 7) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
