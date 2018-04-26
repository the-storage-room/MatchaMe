# MatchaMe
Crowd sourced dating app. Rate other users, rate matches, and get matched!

[![MatchaMe Demo Video](readMePhotos/demo_photo.png)]
(https://www.youtube.com/watch?v=4XwjCPxUgeI&feature=youtu.be "MatchaMe Demo Video")

# Getting Started
Please be sure to take care of the prerequisites before running commands.

### Prerequisites

**MongoDB** Have an instance running on port `27017`. 

**Redis** Have an instance of the Redis server running.

1. `npm run install-all` (installs all dependencies)
2. `npm run start` (starts all servers)
3. `npm run start:build` (run webpack)

### Database Setup
`cd` into rest-server directory

1. `npm run db:setup` 
2. `npm run db:setupdata` (for seed data)