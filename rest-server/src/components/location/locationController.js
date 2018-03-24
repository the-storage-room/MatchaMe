import {
  fetchSingleUserQuery
} from '../users/userQueries';

//To front end: please send coordinates back as follows...
/**
 * req.body:
 * { userOne: {longitude, latitude},
 *   userTwo: {longitude, latitude}}
 */

const convertToRadian = (deg) => {
  return deg * Math.PI/180;
}

const distanceBetweenCoordinates = (userOneLon, userOneLat, userTwoLon, userTwoLat) => {
  const earthRadius = 3959;
  const degLat = convertToRadian(userTwoLat - userOneLat);
  const degLon = convertToRadian(userTwoLon - userOneLon);

  const latOne = convertToRadian(userOneLat);
  const latTwo = convertToRadian(userTwoLat);

  const x = Math.sin(degLat/2) * Math.sin(degLat/2) + 
    Math.sin(degLon/2) * Math.sin(degLon/2) * Math.cos(userOneLat) * Math.cos(userTwoLat)
  const y = 2 * Math.atan(Math.sqrt(x), Math.sqrt(1-x));

  return earthRadius * y;

}

export const fetchDistanceController = async (req, res) => {
  try {
    const { userOneLon, userOneLat} = req.body.userOne;
    const { userTwoLon, userTwoLat } = req.body.userTwo;
    const data = distanceBetweenCoordinates(userOneLon, userOneLat, userTwoLon, userTwoLat)
    const roundedData = Math.floor(data)
    return res.status(200).send(roundedData)
  } catch (err) {
    console.log('error on fetchZipCodeController', err)
  }
}