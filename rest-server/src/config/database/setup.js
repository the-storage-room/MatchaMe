import db from './index.js';

DROP TABLE Follow;
 


DROP TABLE SuccessfulMatch;
 


DROP TABLE Comments;
 


DROP TABLE User_Tags;
 


DROP TABLE Match;
 


DROP TABLE Rating;
 


DROP TABLE Photo;
 


DROP TABLE Tags;
 


DROP TABLE User;
 
const dropUserTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE MatchMe`
    );
  } catch (err) {
    console.log('Error creating database', err)
  }
}

const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS MatchMe`
    );
  } catch (err) {
    error('error dropping database ', err);
  }
};

const createTagsTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Tags
      (
        id  INT NOT NULL ,
        tag VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_Tags PRIMARY KEY (id ASC)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Tags Table', err)
  }
}

const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS User
      (
        id           INT NOT NULL ,
        username     VARCHAR(50) NOT NULL ,
        age          INT NOT NULL ,
        gender       VARCHAR(50) NOT NULL ,
        preference   VARCHAR(50) NOT NULL ,
        bio          VARCHAR(255) NOT NULL ,
        powerRanking INT NOT NULL ,
        CONSTRAINT PK_User PRIMARY KEY (id ASC)
      )
      `
    )
  } catch(err) {
    console.log('Error creating User Table', err)
  }
}

const createUserTagsTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS User_Tags
      (
        id     INT NOT NULL ,
        tagId  INT NOT NULL ,
        userId INT NOT NULL ,
        type   VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_User_Tags PRIMARY KEY (id ASC),
        CONSTRAINT FK_UserTags_Tag FOREIGN KEY (tagId)
        REFERENCES Tags(id),
        CONSTRAINT FK_UserTags_User FOREIGN KEY (userId)
        REFERENCES User(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating User_Tags Table', err)
  }
}

const createMatchTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Match
      (
        id            INT NOT NULL ,
        user1_id      INT NOT NULL ,
        user2_id      INT NOT NULL ,
        approvedCount INT NOT NULL ,
        rejectedCount INT NOT NULL ,
        usersApproved INT[] NOT NULL ,
        usersRejected INT[] NOT NULL ,
        activeVoting  SMALLINT NOT NULL CONSTRAINT [DF_Match_activeVoting] DEFAULT 0 ,
        CONSTRAINT PK_Match PRIMARY KEY (id ASC),
        CONSTRAINT FK_User2_Match FOREIGN KEY (user1_id)
          REFERENCES User(id),
        CONSTRAINT FK_User1_Match FOREIGN KEY (user2_id)
          REFERENCES User(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Match Table', err)
  }
}

const createRatingTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Rating
      (
        id           INT NOT NULL ,
        score        INT NOT NULL ,
        totalRatings INT NOT NULL ,
        users        INT[] NOT NULL ,
        userId       INT NOT NULL ,
        CONSTRAINT PK_Rating PRIMARY KEY (id ASC),
        CONSTRAINT FK_User_Rating FOREIGN KEY (userId)
          REFERENCES User(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Rating Table', err)
  }
}

const createPhotoTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Photo
      (
        id     INT NOT NULL ,
        url    VARCHAR(50) NOT NULL ,
        rating INT NOT NULL ,
        userId INT NOT NULL ,
        CONSTRAINT PK_Photo PRIMARY KEY (id ASC),
        CONSTRAINT FK_User_Photo FOREIGN KEY (userId)
          REFERENCES User(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Photo Table', err)
  }
}

const createFollowTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Follow
      (
        id      INT NOT NULL ,
        userId  INT NOT NULL ,
        matchId INT NOT NULL ,
        CONSTRAINT PK_Follow PRIMARY KEY (id ASC),
        CONSTRAINT FK_User_Follow FOREIGN KEY (userId)
          REFERENCES User(id),
        CONSTRAINT FK_Match_Follow FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Follow Table', err)
  }
}

const createSuccessfulMatchTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS SuccessfulMatch
      (
        id           INT NOT NULL ,
        matchId      INT NOT NULL ,
        dateCreated  DATE NOT NULL ,
        isSuccessful SMALLINT NOT NULL CONSTRAINT [DF_SuccessfulMatch_isSuccessful] DEFAULT 0 ,
        CONSTRAINT PK_SuccessfulMatch PRIMARY KEY (id ASC),
        CONSTRAINT FK_Match_SuccessfulMatch FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating SuccessfulMatch Table', err)
  }
}

const createCommentTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS Comments
      (
        id      INT NOT NULL ,
        userId  INT NOT NULL ,
        matchId INT NOT NULL ,
        votes   INT NOT NULL CONSTRAINT [DF_Comments_votes] DEFAULT 0 ,
        type    VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_comments PRIMARY KEY (id ASC),
        CONSTRAINT FK_User_Comments FOREIGN KEY (userId)
          REFERENCES User(id),
        CONSTRAINT FK_Match_Comments FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    )
  } catch(err) {
    console.log('Error creating Comment Table', err)
  }
}





const setup = async () => {
  await dropDatabase();
  await dropUsersChallengesTable();
  await dropHistoryTable();
  await dropTestCaseTable();
  await dropFriendTable();
  await dropMessageTable();
  await dropUserTable();
  await dropChallengeTable();

  await createDatabase();
  await createTagsTable();
  await createUserTable();
  await createUserTagsTable();
  await createMatchTable();
  await createRatingTable();
  await createPhotoTable();
  await createFollowTable();
  await createSuccessfulMatchTable();
  await createCommentTable();

  process.exit();
};

setup();