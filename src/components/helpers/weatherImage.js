const storm = require('../../images/storm-large.png');
const drizzle = require('../../images/drizzle-large.png');
const rain = require('../../images/rain-large.png');
const snow = require('../../images/snow-large.png');
const atmosphere = require('../../images/atmosphere-large.png');
const sun = require('../../images/sun-large.png');
const cloud = require('../../images/cloud-large.png');
const extreme = require('../../images/extreme-large.png');

export function weatherImage(code) {
  const codeCharacter = code.charAt(0)
  switch(codeCharacter) {
    case "2":
      return storm;
    case "3":
    return drizzle;
    case "5":
    return rain;
    case "6":
    return snow;
    case "7":
    return atmosphere;
    case "8":
      if(code === 800) {
        return sun;
      } else {
        return cloud;
      }
    case "9":
    return extreme;
    default:
      return cloud;
    }
}
