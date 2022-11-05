# CTMP
CTMP is the Task Management Platform that I built for my final year project. 

***

## Main Features

  * Manage tasks
  * Invite others via email
  * Form and manage teams
  * Collaborate with others
  * Create Projects and Lists
  * Create tasks within lists
  * Assign Tasks to others
  * Set the status of a task
  * Set the priority of a task
  * Mark task completion

## Technologies
  ### Backend
  * Nodejs v18.0.0
  * ExpressJS
  * MongoDB
  * Mongoose
  * bcrypt
  * nodemailer
  * jsonwebtoken
  * body-parser
  * cookie-parser
  ### Frontend
  * VueJS, Vuex, Vue-router
  * Axios
  * lodash
***
# Installation
```
cd frontend
npm install
cd ../backend
npm install 

```
### Setup

To run the frontend server
```
  npm run serve
```
To run the backend server
```
  npm start
```
***
### Prerequisites
#### .env in the frontend folder
```
BASE_URL = "http://localhost:8080/"
SERVER_URL = "http://localhost:5000/"
```
***

#### .env in the backend folder
Replace the values with your own valid ones, these are just an example
```
URI = "mongodb+srv://name:<password>@cluster0.fsfqgq.mongodb.net/?retryWrites=true&w=majority"
PORT = 5000
SALT = "SOME RANDOM SENTENCE"
GMAIL_EMAIL = "someone@gmail.com"
GMAIL_PASS = "yourgmailpassword"
```
NOTE
---
You'll need to create your own mongodb account, create a cluster and connect to it by assigning the link to 'URI' in the .env file as shown above
https://account.mongodb.com/account/login
