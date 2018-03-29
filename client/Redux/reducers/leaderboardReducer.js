const firstState =
[
  JSON.parse("{\"id\":1,\"username\":\"vpauncefoot0\",\"powerranking\":0,\"primaryPhoto\":{\"id\":1,\"url\":\"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg\"}}"),
  JSON.parse("{\"id\":2,\"username\":\"cdevaen1\",\"powerranking\":0,\"primaryPhoto\":{\"id\":2,\"url\":\"http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg\"}}"),
  JSON.parse("{\"id\":3,\"username\":\"mshaves2\",\"powerranking\":0,\"primaryPhoto\":{\"id\":3,\"url\":\"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg\"}}"),
  JSON.parse("{\"id\":4,\"username\":\"ksanthouse3\",\"powerranking\":0,\"primaryPhoto\":{\"id\":4,\"url\":\"http://quikandslow.com/wp-content/uploads/tom-from-myspace-lg.jpg\"}}"),
  JSON.parse("{\"id\":5,\"username\":\"vantoney4\",\"powerranking\":0,\"primaryPhoto\":{\"id\":5,\"url\":\"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg\"}}")
]

export default (state = firstState, action) => {
  switch (action.type) {
    case 'LEADERBOARD_RECIEVED':
      return (state = action.payload);
    default:
      return state;
  }
}
