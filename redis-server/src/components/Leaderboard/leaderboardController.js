import client from '../../config/redis/';

export const fetchLeaderboardAndRank = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = {};
    data.rank = await client.getAsync(`${userId}`);
    const result = await client.lrangeAsync('leaderboard', 0, 24);
    data.leaderboard = result.map(user => JSON.parse(user));
    res.send(data);
  } catch (err) {
    console.log('Error with fetchTop25leadersController :', err);
  }
};
