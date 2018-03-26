import axios from 'axios';

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

export const getDistanceBetweenTwoZipcodes = async (user1zipcode, user2zipcode) => {
  try {
    const { API_KEY } = process.env;
    let userOne;
    let userTwo;
    const userOneObj = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user1zipcode}&key=${API_KEY}`)
      .then(res => {
        userOne = res.data.results[0].geometry.location
        return userOne
      })
    const userTwoObj = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${user2zipcode}&key=${API_KEY}`)
      .then(res => {
        userTwo = res.data.results[0].geometry.location
        return userTwo;
      })
      const userOneLon = userOneObj.lng;
      const userOneLat = userOneObj.lat;
      const userTwoLon = userTwoObj.lng;
      const userTwoLat = userTwoObj.lat;
      const data = distanceBetweenCoordinates(userOneLon, userOneLat, userTwoLon, userTwoLat)
      let roundedData = Math.floor(data)
      return roundedData;
  } catch (err) {
    console.log('error on fetchZipCodeController', err)
  }
}