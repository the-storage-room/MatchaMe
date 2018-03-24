import {
  fetchCommentsQuery,
  addCommentQuery,
  voteOnCommentQuery,
  fetchTopCommentQuery,
} from './commentsQueries';

export const fetchCommentsController = async (req, res) => {
  try {
    const { rows } = await fetchCommentsQuery(req.params);
    console.log('Success with fetchCommentsController: ');
    res.send(rows);
  } catch (err) {
    console.log('Error with fetchCommentsController: ', err);
  }
};

export const addCommentController = async (req, res) => {
  try {
    const { rows } = await addCommentQuery(req.params, req.body);
    console.log('Success with addCommentController: ');
    res.send(rows);
  } catch (err) {
    console.log('Error with addCommentController: ', err);
  }
};

export const voteOnCommentController = async (req, res) => {
  try {
    const { rows } = await voteOnCommentQuery(req.params);
    console.log('Success with voteOnCommentController: ');
    res.send(rows);
  } catch (err) {
    console.log('Error with voteOnCommentController: ', err);
  }
};

export const fetchTopCommentController = async (req, res) => {
  try {
    const { rows } = await fetchTopCommentQuery(req.params);
    console.log('Success with fetchTopCommentController: ');
    res.send(rows);
  } catch (err) {
    console.log('Error with fetchTopCommentController: ', err);
  }
};