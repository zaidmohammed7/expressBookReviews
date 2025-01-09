const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({message: "Both username and password are required!"})
  }
  if (users[username]) {
    return res.status(400).send({message: "Username is already used!"});
  }
  users.push({ username, password });
  res.send({message: "Customer successfully registered. Now you can login"})
});

const getBooks = () => {
    return new Promise((resolve, reject) => {
      if (books) {
        resolve(books);
      } else {
        reject("No books available");
      }
    });
};

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  //Write your code here
  try {
    const booksList = await getBooks();
    res.send(JSON.stringify(booksList,null,4));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const getBookByISBN = (isbn) => {
  return new Promise((resolve, reject) => {
      const book = books[isbn];
    if (book) {
      resolve(book);
    } else {
      reject("Book not found");
    }
  });
};

// Get book details based on ISBN
public_users.get('/isbn/:isbn',async function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  try {
    const book = await getBookByISBN(isbn);
    res.send(JSON.stringify(book, null, 4));
  } catch (error) {
    res.status(500).send({message: error});
  }
});

const getBooksByAuthor = (author) => {
return new Promise((resolve, reject) => {
  let booksByAuthor = [];
    for (let isbn in books) {
      if (books[isbn].author === author) {
        booksByAuthor.push(books[isbn]);
      }
    }
    if (booksByAuthor.length > 0) {
      resolve(booksByAuthor);
    } else {
      reject("No books found for the author");
    }
  });
};

// Get book details based on author
public_users.get('/author/:author',async function (req, res) {
  //Write your code here
  const author = req.params.author;
  try {
    const booksByAuthor = await getBooksByAuthor(author);
    res.send(JSON.stringify(booksByAuthor, null, 4));
  } catch (error) {
    res.status(500).send({message: error});
  }
});

const getBooksByTitle = (title) => {
  return new Promise((resolve, reject) => {
    let booksByTitle = [];
    for (let isbn in books) {
      if (books[isbn].title.toLowerCase() === title.toLowerCase()) {
        booksByTitle.push(books[isbn]);
      }
    }
    if (booksByTitle.length > 0) {
      resolve(booksByTitle);
    } else {
      reject("No books found with the title");
    }
  });
};

// Get all books based on title
public_users.get('/title/:title',async function (req, res) {
  //Write your code here
  const title = req.params.title;
  try {
    const booksByTitle = await getBooksByTitle(title);
    res.send(JSON.stringify(booksByTitle, null, 4));
  } catch (error) {
    res.status(500).send({message: error});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  const book = books[isbn];
  res.send(book.reviews);
});

module.exports.general = public_users;
