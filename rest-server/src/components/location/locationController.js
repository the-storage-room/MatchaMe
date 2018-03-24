import {
  fetchSingleUserQuery
} from '../users/userQueries';

export const fetchZipCodeController = async (req, res) => {
  try {
    const { userId } = req.params;
    let data = fetchSingleUserQuery(req.params)
    console.log('success on fetchZipCodeController')
  } catch (err) {
    console.log('error on fetchZipCodeController', err)
  }
}