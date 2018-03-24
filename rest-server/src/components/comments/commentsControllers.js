import {
  fetchCommentsQuery,
  addCommentQuery,
  voteOnCommentQuery,
  fetchTopCommentQuery
} from './commentsQueries';

export const fetchCommentsController = async (req, res) => {
  try {
    const data = await fetchCommentsQuery(req.params);
    console.log('Success with fetchCommentsController: ');
    res.send(data);
  } catch (err) {
    console.log('Error with fetchCommentsController: ', err);
  }
};

export const addCommentController = async (req, res) => {
  try {
    const data = await addCommentQuery(req.params, req.body);
    console.log('Success with addCommentController: ');
    res.send(data);
  } catch (err) {
    console.log('Error with addCommentController: ', err);
  }
};

export const voteOnCommentController = async (req, res) => {
  try {
    const data = await voteOnCommentQuery(req.params);
    console.log('Success with voteOnCommentController: ');
    res.send(data);
  } catch (err) {
    console.log('Error with voteOnCommentController: ', err);
  }
};

export const fetchTopCommentController = async (req, res) => {
  try {
    const data = await fetchTopCommentQuery(req.params);
    console.log('Success with fetchTopCommentController: ');
    res.send(data);
  } catch (err) {
    console.log('Error with fetchTopCommentController: ', err);
  }
};
