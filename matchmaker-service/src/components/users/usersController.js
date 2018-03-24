
const { REST_SERVER } = process.env

export const fetchAllUsersController = async (req, res) => {
  try {
    let data = await axios.get(`${REST_SERVER}/`)
    console.log('success on fetchAllUsersController')
    res.status(200).send(data);
  } catch (err) {
    console.log('error on fetchAllUsers')
  }
}