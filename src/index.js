/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus, 
    knowsProgramming,
    config
    ) {
      let answer;
      let hoursInWeek = config[focus];
      let hoursWhenKnow = 800;
      let hoursWhenDontKnow = 1300;
      if(knowsProgramming) {
        answer = hoursWhenKnow / hoursInWeek;
      } else {
        answer = hoursWhenDontKnow / hoursInWeek;
      }
      answer = Math.ceil(answer);
      return answer;
  };
  