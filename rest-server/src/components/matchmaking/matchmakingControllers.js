import {
  fetchPendingMatchmakingQuery,
  updateMatchmakingQuery,
  inactivateMatchMakingQuery
} from './matchmakingQueries';

import { addOutcomeQuery } from '../outcomes/outcomesQueries';

import { addStageTwoQuery } from '../stageTwo/stageTwoQueries';

export const fetchPendingMatchmakingController = async (req, res) => {
  try {
    const data = await fetchPendingMatchmakingQuery(req.params);
    res.send(data);
  } catch (err) {
    console.log('Error with fetchPendingMatchmakingController: ', err);
  }
};

// req.body { userId, matchId, starred, decision, powerranking }
export const updateMatchmakingController = async (req, res) => {
  try {
    const check = await addOutcomeQuery(req.body);
    if (check) {
      let increaseAmount;
      const { powerranking } = req.body;

      powerranking >= 10000
        ? (increaseAmount = '2')
        : powerranking >= 5000
          ? (increaseAmount = '1.75')
          : powerranking >= 3000
            ? (increaseAmount = '1.5')
            : powerranking >= 1000
              ? (increaseAmount = '1.25')
              : powerranking >= 0
                ? (increaseAmount = '1')
                : (increaseAmount = '0.5');

      const { approvedcount, rejectedcount } = await updateMatchmakingQuery(
        req.body,
        increaseAmount
      );
      if (approvedcount + rejectedcount > 15) {
        if (approvedcount - rejectedcount > 5) {
          await addStageTwoQuery(req.body);
          await inactivateMatchMakingQuery(req.body);
        }
        if (rejectedcount - approvedcount > 5) {
          await inactivateMatchMakingQuery(req.body);
        }
      }
    }
    res.send();
  } catch (err) {
    console.log('Error with updateMatchmakingController: ', err);
  }
};
