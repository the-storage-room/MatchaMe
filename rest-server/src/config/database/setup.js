import db from './index';

const dropStageTwoTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS StageTwo`);
    console.log('successfully dropped StageTwo Table');
  } catch (err) {
    console.log('error dropping StageTwo Table ');
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

const dropOutcomesTable = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS Outcomes`);
    console.log('successfully dropped Outcomes Table');
  } catch (err) {
    console.log('error dropping Outcomes Table');
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
        id  SERIAL ,
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
        id           SERIAL ,
        username     VARCHAR(50) ,
        password     VARCHAR(255) ,
        email        VARCHAR(50) ,
        lastname     VARCHAR(50) ,
        firstname    VARCHAR(50) ,
        age          INT ,
        location     INT ,
        gender       INT ,
        preference   INT ,
        bio          VARCHAR(255) ,
        powerranking INT ,
        totalAttractiveness INT ,
        totalNumOfRatings INT , 
        averageAttractiveness INT DEFAULT 5 ,
        signupComplete BOOLEAN ,
        CONSTRAINT PK_Users PRIMARY KEY (id) ,
        CONSTRAINT Unique_Username UNIQUE (username)
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
        id     SERIAL ,
        tagId  INT NOT NULL ,
        userId INT NOT NULL ,
        type   INT NOT NULL ,
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
        id            SERIAL ,
        user1_id      INT NOT NULL ,
        user2_id      INT NOT NULL ,
        approvedCount INT DEFAULT 0 ,
        rejectedCount INT DEFAULT 0 ,
        activeVoting  SMALLINT DEFAULT 1 ,
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

const createOutcomesTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Outcomes
      (
      id                SERIAL,
      userId            INT NOT null,
      matchId           INT NOT null,
      starred           SMALLINT NOT NULL DEFAULT 0,
      decision          VARCHAR(25) NOT NULL, 
      CONSTRAINT PK_Outcomes PRIMARY KEY (id),
      CONSTRAINT FK_Outcomes_Users FOREIGN KEY (userId)
        REFERENCES Users(id),
      CONSTRAINT FK_Outcomes_Match FOREIGN KEY (matchId)
        REFERENCES Match(id)
      )
      `
    );
    console.log('Successfully Created Outcomes Table');
  } catch (err) {
    console.log('Error creating Outcomes Table', err);
  }
};

const createRatingTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Rating
      (
        id           SERIAL ,
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
        id     SERIAL ,
        url    VARCHAR(128) NOT NULL ,
        userId INT NOT NULL ,
        primaryPhoto SMALLINT NOT NULL DEFAULT 0 ,
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

const createStageTwoTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS StageTwo
      (
        id           SERIAL ,
        matchId      INT NOT NULL ,
        isSuccessful SMALLINT NOT NULL DEFAULT 0 ,
        active       SMALLINT NOT NULL DEFAULT 1 ,
        firstDecision INT DEFAULT NULL,
        CONSTRAINT PK_StageTwo PRIMARY KEY (id),
        CONSTRAINT FK_Match_StageTwo FOREIGN KEY (matchId)
          REFERENCES Match(id),
        CONSTRAINT Unique_matchId UNIQUE (matchId)
      )
      `
    );
    console.log('Successfully Created StageTwo Table');
  } catch (err) {
    console.log('Error creating StageTwo Table', err);
  }
};

const createCommentTable = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS Comments
      (
        id      SERIAL ,
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
  await dropStageTwoTable();
  await dropRatingTable();
  await dropMatchTable();
  await dropOutcomesTable();
  await dropUsersTagsTable();
  await dropCommentsTable();

  await createDatabase();
  await createTagsTable();
  await createUsersTable();
  await createUsersTagsTable();
  await createMatchTable();
  await createOutcomesTable();
  await createRatingTable();
  await createPhotoTable();
  await createStageTwoTable();
  await createCommentTable();

  process.exit();
};

setup();
