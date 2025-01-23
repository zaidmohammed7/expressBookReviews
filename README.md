# Book Review Application

## Project Overview

In this project, I developed a **Book Review Application**. The application is a server-side platform that allows users to browse books, view details, and post or manage book reviews. It features secure REST API endpoints with session-based **JWT authentication** and demonstrates **CRUD operations** using Node.js and Express.

This project showcases back-end development techniques such as API creation, middleware integration, and handling asynchronous operations with **Promises** and **Async/Await**.

---

### Key Features:
- **Public User Functionality:**
  - Browse a list of available books.
  - Fetch book details by ISBN, author, or title.
  - View book reviews by ISBN.
- **Authenticated User Functionality:**
  - Secure login using JWT session authentication.
  - Post, update, or delete book reviews tied to the authenticated user.
- **Secure REST API:**
  - Created RESTful endpoints for public and authenticated users.
  - Validated requests using middleware for session-level authentication.
- **Asynchronous Operations:**
  - Utilized **Promises** and **Async/Await** for efficient API handling.

---

## Skills Demonstrated

- **Node.js Development:**
  - Developed server-side functionality using Node.js and Express.
  - Implemented secure REST APIs for CRUD operations.
- **JWT Authentication:**
  - Integrated session-based authentication using **JSON Web Tokens (JWT)**.
  - Created middleware for validating user sessions.
- **Asynchronous Programming:**
  - Improved API performance with **Async/Await** and **Promises**.
- **Database Integration:**
  - Processed book and review data from a mock database (booksdb.js).
- **API Testing with Postman:**
  - Verified all endpoints with proper input and output validation.
- **GitHub & Version Control:**
  - Managed the project through Git and GitHub for version control and peer review submission.

---

## Project Setup and Installation

### Clone the Repository
To set up this project locally, follow these steps:

1. **Clone this repository:**

    ```bash
    git clone https://github.com/zaidmohammed7/expressBookReviews.git
    cd expressBookReviews
    ```

2. **Navigate to the Final Project Directory:**

    Change into the `final_project` directory where the application code resides:

    ```bash
    cd final_project
    ```

3. **Install Required Dependencies:**

    This project requires Node.js and the following packages:

    ```bash
    npm install
    ```

4. **Run the Application:**

    To start the server, run:

    ```bash
    npm start
    ```

    The application will be accessible on `http://localhost:5000`.

---

## API Testing and Visualization

For testing and visualizing the API endpoints, you can use **Postman**. Postman is a powerful tool for sending HTTP requests and visualizing responses. Here's how you can use it:

1. **Open Postman:**
   - Navigate to https://www.postman.com/ and signup if necessary.

2. **Test Endpoints:**
   - Use Postman to send `GET`, `POST`, `DELETE`, or `PUT` requests to the API.
   - Provide necessary parameters (e.g., ISBN, author, or title) in the URL or request body as required.

3. **Authentication:**
   - Use the `/customer/login` endpoint to log in and obtain the session token.
   - Attach the token in the request header for accessing authenticated routes.

---

## REST API Endpoints

### Public User Endpoints:
1. **Get all books:**
   - **Endpoint:** `GET /`
   - **Description:** Fetch a list of all available books.
2. **Get book by ISBN:**
   - **Endpoint:** `GET /isbn/:isbn`
   - **Description:** Fetch details of a book using its ISBN.
3. **Get books by author:**
   - **Endpoint:** `GET /author/:author`
   - **Description:** Fetch books written by a specific author.
4. **Get books by title:**
   - **Endpoint:** `GET /title/:title`
   - **Description:** Fetch books matching a specific title.
5. **Get book reviews:**
   - **Endpoint:** `GET /review/:isbn`
   - **Description:** Fetch reviews for a specific book by its ISBN.

### Authenticated User Endpoints:
1. **Register User:**
   - **Endpoint:** `POST /customer/register`
   - **Description:** Register a new user with username and password.
2. **Login User:**
   - **Endpoint:** `POST /customer/login`
   - **Description:** Authenticate a user and create a JWT session.
3. **Post or Update a Review:**
   - **Endpoint:** `POST /customer/auth/review/:isbn`
   - **Description:** Add or update a review for a book.
4. **Delete a Review:**
   - **Endpoint:** `DELETE /customer/auth/review/:isbn`
   - **Description:** Delete a review for a book posted by the logged-in user.

---

## Authentication Mechanism

- Implemented **JWT session authentication** using `jsonwebtoken` and `express-session`.
- Middleware validates session tokens for secure access to authenticated user routes.

---

## Asynchronous Operations

Tasks 1-4, initially implemented synchronously, were optimized using **Promises** and **Async/Await**:
- **Get all books:** Fetch book list asynchronously.
- **Get book details by ISBN:** Query and fetch book details using `Async/Await`.
- **Get books by author or title:** Utilize **Promises** for efficient handling of these endpoints.

---

## Acknowledgements

- The course *"Developing Back-End Apps with Node.js and Express"*, offered by **IBM** through **Coursera**.
  You can find more details about the course [here](https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express/home/welcome).
- Special thanks to the **IBM Developer Skills Network** for providing the foundational project structure and guidance.
