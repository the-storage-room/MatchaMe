const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const axios = require('axios');

require('dotenv').config();

const convertToRadian = deg => {
	return deg * Math.PI / 180;
};

const distanceBetweenCoordinates = (userOneLon, userOneLat, userTwoLon, userTwoLat) => {
	const earthRadius = 3959;
	const degLat = convertToRadian(userTwoLat - userOneLat);
	const degLon = convertToRadian(userTwoLon - userOneLon);

	const latOne = convertToRadian(userOneLat);
	const latTwo = convertToRadian(userTwoLat);

	const x =
		Math.sin(degLat / 2) * Math.sin(degLat / 2) +
		Math.sin(degLon / 2) * Math.sin(degLon / 2) * Math.cos(latOne) * Math.cos(latTwo);
	const y = 2 * Math.atan(Math.sqrt(x), Math.sqrt(1 - x));

	return earthRadius * y;
};

//takes in two zipcodes, if zipcode doesn't exist in local file, it will ping the API
const findCoordinatesAndCalculateDistance = async (zipcode1, zipcode2) => {
	try {
		let user1Lat;
		let user1Lng;
		let user2Lat;
		let user2Lng;
		const { API_KEY } = process.env;
		const data = await fs.readFileAsync(__dirname + '/zipcodesAndGeocodes.json', 'utf-8');
		let parsedData = JSON.parse(data);

		if (!parsedData[zipcode1]) {
			const userOneObj = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode1}&key=${API_KEY}`
			);
			const { lat, lng } = userOneObj.data.results[0].geometry.location;
			user1Lat = lat;
			user1Lng = lng;
			parsedData[`${zipcode1}`] = {lat: lat, lng:lng}
			let newData = JSON.stringify(parsedData)
			await fs.writeFileAsync(__dirname + '/zipcodesAndGeocodes.json', newData, 'utf-8')
		} else if (!parsedData[zipcode2]) {
			const userTwoObj = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode2}&key=${API_KEY}`
			);
			const { lat, lng } = userOneObj.data.results[0].geometry.location;
			user2Lat = lat;
			user2Lng = lng;
			parsedData[`${zipcode1}`] = {lat: lat, lng:lng}
			let newData = JSON.stringify(parsedData)
			await fs.writeFileAsync(__dirname + '/zipcodesAndGeocodes.json', newData, 'utf-8')
		}
		if (parsedData[zipcode1]) {
			let geocodeObj1 = parsedData[zipcode1];
			user1Lat = geocodeObj1.lat;
			user1Lng = geocodeObj1.lng;
		} 
		if (parsedData[zipcode2]) {
			let geocodeObj2 = parsedData[zipcode2];
			user2Lat = geocodeObj2.lat;
			user2Lng = geocodeObj2.lng;
		}
		let distanceExact = distanceBetweenCoordinates(user1Lng, user1Lat, user2Lng, user2Lat);
		let finalDistance = Math.floor(distanceExact);
		console.log('success on calculateDistance', finalDistance);
		return finalDistance;
	} catch (err) {
		console.log('error on calculateDistance', err);
	}
};

