const storm = {
  image: require('../../images/storm-large.png'),
  name: "Storm"
};
const drizzle = {
  image: require('../../images/drizzle-large.png'),
  name: "Drizzle"
};
const rain = {
  image: require('../../images/rain-large.png'),
  name: "Rain"
};
const snow = {
  image: require('../../images/snow-large.png'),
  name: "Snow"
};
const atmosphere = {
  image: require('../../images/atmosphere-large.png'),
  name: "Atmosphere"
}
const sun = {
  image: require('../../images/sun-large.png'),
  name: "Sun"
};
const cloud = {
  image: require('../../images/cloud-large.png'),
  name: "Cloud"
}
const extreme = {
  image: require('../../images/extreme-large.png'),
  name: "extreme"
}

export function weatherImage(code) {
console.log(code)
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
      if(code === "800") {
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

export function weatherColor(code) {
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
