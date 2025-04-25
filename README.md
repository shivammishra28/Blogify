# Blogify - Blogging Application with MongoDB

Blogify is a simple blogging application where users can read blogs and create their own. Built with Node.js, Express, MongoDB, and EJS, this app allows seamless blog creation and viewing.

## Project Setup

Follow these steps to get your project up and running.

### 1. Clone the repository

```bash
git clone git https://github.com/shivammishra28/Blogify.git
cd blogging-application-with-mongodb

 Install Dependencies
Before starting, you need to install the necessary dependencies. Run the following command:

npm install

This will install the following dependencies:

cookie-parser: Middleware to handle cookies in the application.

dotenv: To load environment variables from a .env file.

ejs: Template engine to render HTML views.

express: Web framework to build the application.

jsonwebtoken: To handle user authentication using JWT (JSON Web Tokens).

mongoose: MongoDB object modeling tool.

multer: Middleware for handling file uploads (e.g., blog images).

reate a .env file
Create a .env file in the root directory and add your environment variables. Example:


MONGO_URI=mongodb://localhost:27017/blogify
JWT_SECRET=your_jwt_secret_key

Run the Application
Once the dependencies are installed and your .env file is configured, start the application:
npm start

This will start the application at http://localhost:3000. You can access the blogging platform from your browser.
