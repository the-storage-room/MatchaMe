import axios from 'axios';

import {
  fetchSingleUsersQuery
} from '../users/userQueries';


export const fetchUserZipcodeController = async (req, res) => {
  try {
    const data = fetchSingleUsersQuery(req.params);
    console.log('data', data)
    console.log('Success on fetchUserZipcodeController')
    res.status(200).send(data)
  } catch (err) {
    console.log('Error on fetchUserZipcdoeController', err)
  }
}

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
    Math.sin(degLon/2) * Math.sin(degLon/2) * Math.cos(latOne) * Math.cos(latTwo)
  const y = 2 * Math.atan(Math.sqrt(x), Math.sqrt(1-x));

  return earthRadius * y;

}

// export const fetchDistanceController = async (req, res) => {
//   try {
//     const { userId } = req.params
//     axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zipcode1}`)
//       .then(res => {
//         console.log('res', res)
//       })
//     //do a get request with each zip code
//     //save to a variable geoObj
//     //geoObj.location.lat & geoObj.location.lng
//     //get 4 paramaters and plug into array
//     // const data = distanceBetweenCoordinates(userOneLon, userOneLat, userTwoLon, userTwoLat)
//     // const roundedData = Math.floor(data)
//     return res.status(200).send()
//   } catch (err) {
//     console.log('error on fetchZipCodeController', err)
//   }
// }