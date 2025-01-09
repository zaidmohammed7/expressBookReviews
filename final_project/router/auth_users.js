const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
    return users.some(user => user.username === username);
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
    return users.some(user => user.username === username && user.password === password);
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({message: "Both username and password are required!"});
  }
  if (authenticatedUser(username, password)) {
    const token = jwt.sign({ username }, 'access', { expiresIn: 60 * 60 });
    req.session.authorization = { accessToken: token };
    res.send({ message: "Customer successfully logged in" });
  } else {
    res.status(401).send({ message: "Invalid credentials!" });
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
    const { review } = req.query;
    const isbn = req.params.isbn;
    const user = req.user;
    books[isbn].reviews[user.username] = review;
    res.json({ message: `The review for the book with ISBN ${isbn} has been added/updated successfully.` });
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
    const isbn = req.params.isbn;
    const user = req.user;
    delete books[isbn].reviews[user.username];
    res.json({ message: `Reviews for the ISBN ${isbn} posted by the user ${user.username} deleted.` });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
