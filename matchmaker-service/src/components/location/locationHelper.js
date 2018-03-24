//Below 2 functions are used by fetchDistanceController 
const convertToRadian = (deg) => {
  return deg * Math.PI/180;
}

export const distanceBetweenCoordinates = (userOneLon, userOneLat, userTwoLon, userTwoLat) => {
  const earthRadius = 3959;
  const degLat = convertToRadian(userTwoLat - userOneLat);
  const degLon = convertToRadian(userTwoLon - userOneLon);

  const latOne = convertToRadian(userOneLat);
  const latTwo = convertToRadian(userTwoLat);

  const x = Math.sin(degLat/2) * Math.sin(degLat/2) + 
    Math.sin(degLon/2) * Math.sin(degLon/2) * Math.cos(latOne) * Math.cos(latTwo)
  const y = 2 * Math.atan(Math.sqrt(x), Math.sqrt(1-x));

  return earthRadius * y;

}