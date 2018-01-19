
export function getLocationData() {
  return new Promise((resolve, reject) => {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
