const db = require('./index.js');

const dropFollowTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Follow`);
    console.log('successfully dropped Follow Table');
  } catch (err) {
    console.log('error dropping Follow Table ');
  }
};

const dropSuccessfulMatchTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS SuccessfulMatch`);
    console.log('successfully dropped SuccessfulMatch Table');
  } catch (err) {
    console.log('error dropping SuccessfulMatch Table ');
  }
};

const dropCommentsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Comments`);
    console.log('successfully dropped Comments Table');
  } catch (err) {
    console.log('error dropping Comments Table ');
  }
};

const dropUsersTagsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Users_Tags`);
    console.log('successfully dropped Users_Tags Table');
  } catch (err) {
    console.log('error dropping Users_Tags Table ');
  }
};

const dropMatchTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Rating`);
    console.log('successfully dropped Match Table');
  } catch (err) {
    console.log('error dropping Match Table ');
  }
};

const dropRatingTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Rating`);
    console.log('successfully dropped Rating Table');
  } catch (err) {
    console.log('error dropping Rating Table ');
  }
};

const dropPhotoTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Photo`);
    console.log('successfully dropped Photo Table');
  } catch (err) {
    console.log('error dropping Photo Table ');
  }
};

const dropTagsTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Tags`);
    console.log('successfully dropped Tags Table');
  } catch (err) {
    console.log('error dropping Tags Table ');
  }
};

const dropUsersTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Users`);
    console.log('successfully dropped Users Table');
  } catch (err) {
    console.log('error dropping Users Table ');
  }
};

const createDatabase = async () => {
  try {
    await db.query(`CREATE DATABASE MatchMe`);
    console.log('successfully Created Database');
  } catch (err) {
    console.log('Error creating database');
  }
};

const dropDatabase = async () => {
  try {
    await db.query(`DROP DATABASE IF EXISTS MatchMe`);
    console.log('successfully Dropping Database');
  } catch (err) {
    console.log('error dropping database ');
  }
};

const createTagsTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Tags
      (
        id  INT NOT NULL ,
        tag VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_Tags PRIMARY KEY (id)
      )
      `
    );
    console.log('Successfully Created Tags Table');
  } catch (err) {
    console.log('Error creating Tags Table', err);
  }
};

const createUsersTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Users
      (
        id           INT NOT NULL ,
        username     VARCHAR(50) NOT NULL ,
        age          INT NOT NULL ,
        gender       VARCHAR(50) NOT NULL ,
        preference   VARCHAR(50) NOT NULL ,
        bio          VARCHAR(255) NOT NULL ,
        powerRanking INT NOT NULL ,
        CONSTRAINT PK_Users PRIMARY KEY (id)
      )
      `
    );
    console.log('Successfully Created Users Table');
  } catch (err) {
    console.log('Error creating Users Table', err);
  }
};

const createUsersTagsTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Users_Tags
      (
        id     INT NOT NULL ,
        tagId  INT NOT NULL ,
        userId INT NOT NULL ,
        type   VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_Users_Tags PRIMARY KEY (id),
        CONSTRAINT FK_UsersTags_Tag FOREIGN KEY (tagId)
        REFERENCES Tags(id),
        CONSTRAINT FK_UsersTags_Users FOREIGN KEY (userId)
        REFERENCES Users(id)
      )
      `
    );
    console.log('Successfully Created UsersTags Table');
  } catch (err) {
    console.log('Error creating Users_Tags Table', err);
  }
};

const createMatchTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Match
      (
        id            INT NOT NULL ,
        user1_id      INT NOT NULL ,
        user2_id      INT NOT NULL ,
        approvedCount INT NOT NULL ,
        rejectedCount INT NOT NULL ,
        usersApproved INT ARRAY NOT NULL ,
        usersRejected INT ARRAY NOT NULL ,
        activeVoting  SMALLINT NOT NULL DEFAULT 0 ,
        CONSTRAINT PK_Match PRIMARY KEY (id),
        CONSTRAINT FK_User2_Match FOREIGN KEY (user1_id)
          REFERENCES Users(id),
        CONSTRAINT FK_User1_Match FOREIGN KEY (user2_id)
          REFERENCES Users(id)
      )
      `
    );
    console.log('Successfully Created Match Table');
  } catch (err) {
    console.log('Error creating Match Table', err);
  }
};

const createRatingTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Rating
      (
        id           INT NOT NULL ,
        score        INT NOT NULL ,
        totalRatings INT NOT NULL ,
        users        INT ARRAY NOT NULL ,
        userId       INT NOT NULL ,
        CONSTRAINT PK_Rating PRIMARY KEY (id),
        CONSTRAINT FK_Users_Rating FOREIGN KEY (userId)
          REFERENCES Users(id)
      )
      `
    );
    console.log('Successfully Created Rating Table');
  } catch (err) {
    console.log('Error creating Rating Table', err);
  }
};

const createPhotoTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Photo
      (
        id     INT NOT NULL ,
        url    VARCHAR(50) NOT NULL ,
        rating INT NOT NULL ,
        userId INT NOT NULL ,
        CONSTRAINT PK_Photo PRIMARY KEY (id),
        CONSTRAINT FK_Users_Photo FOREIGN KEY (userId)
          REFERENCES Users(id)
      )
      `
    );
    console.log('Successfully Created Photo Table');
  } catch (err) {
    console.log('Error creating Photo Table', err);
  }
};

const createFollowTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Follow
      (
        id      INT NOT NULL ,
        userId  INT NOT NULL ,
        matchId INT NOT NULL ,
        CONSTRAINT PK_Follow PRIMARY KEY (id),
        CONSTRAINT FK_Users_Follow FOREIGN KEY (userId)
          REFERENCES Users(id),
        CONSTRAINT FK_Match_Follow FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    );
    console.log('Successfully Created Follow Table');
  } catch (err) {
    console.log('Error creating Follow Table', err);
  }
};

const createSuccessfulMatchTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS SuccessfulMatch
      (
        id           INT NOT NULL ,
        matchId      INT NOT NULL ,
        dateCreated  DATE NOT NULL ,
        isSuccessful SMALLINT NOT NULL DEFAULT 0 ,
        active       SMALLINT NOT NULL DEFAULT 1 ,
        CONSTRAINT PK_SuccessfulMatch PRIMARY KEY (id),
        CONSTRAINT FK_Match_SuccessfulMatch FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    );
    console.log('Successfully Created SuccessfulMatch Table');
  } catch (err) {
    console.log('Error creating SuccessfulMatch Table', err);
  }
};

const createCommentTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Comments
      (
        id      INT NOT NULL ,
        userId  INT NOT NULL ,
        matchId INT NOT NULL ,
        votes   INT NOT NULL DEFAULT 0 ,
        type    VARCHAR(50) NOT NULL ,
        CONSTRAINT PK_comments PRIMARY KEY (id),
        CONSTRAINT FK_User_Comments FOREIGN KEY (userId)
          REFERENCES Users(id),
        CONSTRAINT FK_Match_Comments FOREIGN KEY (matchId)
          REFERENCES Match(id)
      )
      `
    );
    console.log('Successfully Created Comment Table');
  } catch (err) {
    console.log('Error creating Comment Table', err);
  }
};

const setup = async () => {
  await dropDatabase();
  await dropTagsTable();
  await dropUsersTable();
  await dropPhotoTable();
  await dropRatingTable();
  await dropMatchTable();
  await dropUsersTagsTable();
  await dropCommentsTable();
  await dropSuccessfulMatchTable();
  await dropFollowTable();

  await createDatabase();
  await createTagsTable();
  await createUsersTable();
  await createUsersTagsTable();
  await createMatchTable();
  await createRatingTable();
  await createPhotoTable();
  await createFollowTable();
  await createSuccessfulMatchTable();
  await createCommentTable();

  process.exit();
};

setup();
