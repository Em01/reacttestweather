const storm = {
  image: require('../../images/storm.png'),
  name: "Storm",
  id: 0
};
const drizzle = {
  image: require('../../images/drizzle.png'),
  name: "Drizzle",
  id: 1
};
const rain = {
  image: require('../../images/rain.png'),
  name: "Rain",
  id: 2
};
const snow = {
  image: require('../../images/snow.png'),
  name: "Snow",
  id: 3
};
const atmosphere = {
  image: require('../../images/atmosphere.png'),
  name: "Atmosphere",
  id: 4
};
const sun = {
  image: require('../../images/sun.png'),
  name: "Sun",
  id: 5
};
const cloud = {
  image: require('../../images/cloud.png'),
  name: "Cloud",
  id: 6
};
const extreme = {
  image: require('../../images/extreme.png'),
  name: "extreme",
  id: 7
};

export function weatherImage(code) {
  const codeCharacter = code.charAt(0);
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
