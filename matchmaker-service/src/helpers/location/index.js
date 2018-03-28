const fs = require('fs');
const axios = require('axios');

const convertToRadian = (deg) => {
  return deg * Math.PI/180;
}

const distanceBetweenCoordinates = (userOneLon, userOneLat, userTwoLon, userTwoLat) => {
  console.log('params', userOneLon, userOneLat, userTwoLon, userTwoLat)
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

// export const getDistanceBetweenTwoZipcodes = async (user1zipcode, user2zipcode) => {
//   try {
//     const { API_KEY } = process.env;
//     let userOne;
//     let userTwo;
//     const userOneObj = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user1zipcode}&key=${API_KEY}`)
//       .then(res => {
//         userOne = res.data.results[0].geometry.location
//         return userOne
//       })
//     const userTwoObj = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user2zipcode}&key=${API_KEY}`)
//       .then(res => {
//         userTwo = res.data.results[0].geometry.location
//         return userTwo;
//       })
//       const userOneLon = userOneObj.lng;
//       const userOneLat = userOneObj.lat;
//       const userTwoLon = userTwoObj.lng;
//       const userTwoLat = userTwoObj.lat;
//       const data = distanceBetweenCoordinates(userOneLon, userOneLat, userTwoLon, userTwoLat)
//       let roundedData = Math.floor(data)
//       return roundedData;
//   } catch (err) {
//     console.log('error on getDistanceBetween ZipCodes', err)
//   }
// }

const calculateDistance = (zipcode1, zipcode2) => {
  let user1Lat;
  let user1Lng;
  let user2Lat;
  let user2Lng;
  const API_KEY = process.env;
  fs.readFile(__dirname + '/zipcodesAndGeocodes.js', 'utf-8', (err, data) => {
    let parsedData = JSON.parse(data)
    if(err) console.log('error', err)
    if(parsedData[zipcode1]) {
      let geocodeObj = parsedData[zipcode1];
      let { lng } = geocodeObj;
      let { lat } = geocodeObj;
      user1Lat = lat;
      user1Lng = lng;
      console.log('user1&2', user1Lat, user1Lng)
    } else if (!parsedData[zipcode1]) {
      console.log('i should not be here')
      const userOneObj = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode1}&key=${API_KEY}`)
        .then(res => {
          let userObj = res.data.results[0].geometry.location
          return userOne;
        })
      user1Lat = userOneObj.lat;
      user1Lng = userOneObj.lng;
    } 
    if(parsedData[zipcode2]) {
      let geocodeObj = parsedData[zipcode2];
      let { lng } = geocodeObj;
      let { lat } = geocodeObj;
      user2Lat = lat;
      user2Lng = lng;
      // console.log('user2', user2Lat, user2Lng)
    } else if(!parsedData[zipcode2]) {
      // console.log('i should not be here2')
      const userTwoObj = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode2}&key=${API_KEY}`)
      .then(res => {
        userTwo = res.data.results[0].geometry.location
        return userTwo;
      })
      user2Lat = userTwoObj.lat;
      user2Lng = userTwoObj.lng;
    }
    let distance = distanceBetweenCoordinates(user1Lng, user1Lat, user2Lng, user2Lat)
    let finalDistance = Math.floor(distance)
    return distance;
  });
}

calculateDistance(92841, 90045)