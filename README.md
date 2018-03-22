# AJJJ-thesis

## Git Workflow

* create feature branch
* git checkout -b FEATURE_NAME
* work on feature branch
* when finished
* git push origin FEATURE_NAME
* make pull request from feature branch to master

### Getting Latest Changes

* git checkout master
* git pull origin master
* git checkout FEATURE_NAME
* git rebase master
* MASTER ONLY PULL AND REBASE

Initial Get Request:

/api/initialize/:userId/

initializeObject = {
  accountData: 
    {
      id:
      username:
      email:
      firstname:
      lastname:
    }
  bioData: 
    {
      age:
      location:
      gender:
      preference:
      bio:
    }
  tagData: 
    {
      user: [], 
      pref: []
    }
  photoData: 
    [{
      photoid:
      url: 
      primaryPhoto: 
    }]
  powerRankingData:
    {
      totalPoints:
      userRanking:
    }

  signupStatusData: boolean

  outcomesData: 
    {
      
    }
  currentMatchData: 
    {

    }
  ratingsData: 
    [{
    20 people to rate
    }]
  matchesData: 
    [{
      20 matches to rate
    }]
  leaderboardData: 
    {
      Top 10? on leaderboard
    }
}