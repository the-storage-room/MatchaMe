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

Initial Get Request. 

/api/initialize/:user/

initialObj = {



  userData: 
    {
      id:
      username:
      email:
      firstname:
      lastname:
      age:
      location:
      gender:
      preference:
      bio:
      powerranking:
      signupComplete:
      userPhotos: 
        [{
          photoid:
          url: 
          primaryPhoto: 
        }]
      tags: {user: [], pref: []}
      match: {
        current match if it exists
      }
    }
  ratings: {
    10 people to rate
  }
  matches: {
    10 matches to rate
  }
  follows: ,
  leaderboard: ,
}