# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# EqualSlices

[Live Demo](https://equalslices.herokuapp.com/)

EqualSlices, inspired by Splitwise, is an application used to split and keep track of the bill (rent, meal, vacation, etc.) with your friends. It was built using Ruby on Rails for the backend, PostgreSQL for the database, and React.js/Redux for the frontend.

## Features

#### User authentication
  Users have the ability to create an account with a username and a unique email. For those who do not want to create an account right away, users have the ability to demo the application as a guest. The one-click demo login feature allows convenience for first-time users to explore the application without the obligation to create an account.

  ![](app/assets/EqualSlicesEx.jpg)

  To speed up the load time for logging in, I created a modal for the log-in feature to keep the user in the current page. This allows the user to click on the "log-in" button and click anywhere on the screen to get out of the log-in process if it was accidentally clicked. The initial challenge in creating a demo login was hard-coding the demo login credentials. This was solved by seeding a "guest" user in the backend database, and creating a method for the demo login button to trigger the login process with the seeded credentials.

  ```Ruby
  guest = User.create(username: "Demo", email: "demo@equalslices.com" , password: "password")```

  Subsequently, if a user would like to create an account, clicking the "Sign up" button brings the user to the signup page where an account can be created with three simple pieces of data: username, email address, and password. The user's password is then secured in the database using BCrypt.



#### User search and add as friend
  Logged in users can utilize a search box to look up and add another user by email address. This feature offers users the convenience of finding and adding another user with one action, as long as the email address exists in the database. Once the search is initiated, the friend relationship between the two users is established immediately, and both users would see the username of the other user in their Friend list. One challenge in creating the friending feature was identifying all the friends of a user through the friend index in the frontend. Since a friend relationship can be established both ways between users, I needed a way to identify all friends of a relationship whether the current user was the friend-er or the friend-ee. This was addressed by a conditional statement, which maps and returns an array of all friends of a user, whether the relationship was established by the current user or another user.

  ``` javascript
  const mapStateToProps = state => {
    const currId = state.session.id;
    const friends = Object.values(state.entities.friendings).map(friending => {
      if (currId !== friending.friendee_id) {
        const id = friending.friendee_id;
        return state.entities.users[id];
      } else {
        return state.entities.users[friending.friender_id];
      }
    });
    return {
      friends
    };
  };```

## Future direction for EqualSlices
- ##### Bills
  Users will have the ability to create a bill for multiple users. The bill will include a description of the expense, the balance, and the date. In addition, users will be able to choose how many people to split the bill with, as well as how to split the total.

- ##### Transactions
  Once a user posts a bill, affected users would be able to settle the bill by performing transactions that would either pay for everything that they owe, or a portion of the balance. The transaction history will keep track of all payments and receipts for future references.

- ##### Comments
  In order to enhance bill references, users would be able to make and delete comments on bills created. Making and viewing comments on a bill would only be available for the impacted parties, in order to maintain privacy of the users' activities.
