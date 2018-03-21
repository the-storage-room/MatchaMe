import {
  fetchPendingMatchmakingQuery,
  updateMatchmakingQuery
} from './matchmakingQueries';

import { addOutcomeQuery } from '../outcomes/outcomesQueries';

import { addSuccessfulMatchQuery } from '../stageTwo/stageTwoQueries';

// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingController = async (req, res) => {
  try {
    const { userId } = req.params;
    const { rows } = await fetchPendingMatchmakingQuery(userId);
    res.send(rows);
  } catch (err) {}
};

// approve or disapprove a match  **WORK IN PROGRESS TALK TO JUSTIN**
export const updateMatchmakingController = async (req, res) => {
  try {
    const { decision } = req.body;
    const { approvedcount, rejectedcount } = await updateMatchmakingQuery(
      req.body
    );
    const data = await addOutcomeQuery(req.body);
    if (approvedcount + rejectedcount > 5 && approvedcount > rejectedcount) {
      const test = await addSuccessfulMatchQuery(req.body);
    }
    res.send();
  } catch (err) {
    console.log(err);
  }
};
