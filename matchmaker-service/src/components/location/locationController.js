import axios from 'axios';

import {distanceBetweenCoordinates} from './locationHelper';

// ** RoundedData is a sent as a string NOT integer 
export const fetchDistanceController = async (req, res) => {
  try {
    const { user1zipcode, user2zipcode } = req.params;
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
      let roundedData = Math.floor(data).toString()
    return res.status(200).send(roundedData)
  } catch (err) {
    console.log('error on fetchZipCodeController', err)
  }
}