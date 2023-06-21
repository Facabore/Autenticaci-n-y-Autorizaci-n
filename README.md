Introduction

This documentation describes the authentication and authorization system implemented in the Node.js project Autenticación-y-Autorización. The system uses JWTs for authentication and a MongoDB database for storing user data.

Features

The system supports the following features:

Creating, updating, and deleting users
Creating, updating, and deleting roles
Assigning permissions to roles
Using JWTs for authentication
Storing user data in a MySQL database
Getting Started

To get started with the system, you will need to:

Install the dependencies:

npm install

Create a MongoDB database and a user with the necessary permissions.
Configure the database connection in config/.env
Run the application:
Code snippet
npm start
Use code with caution. Learn more
Using the System

To use the system, you can use the following endpoints:

/api/auth: Create or login user
/api/auth/signup: This can have a role, without this, is automatic "user"
/api/auth/signin: Login user to get a token JWT


Examples

Here are some examples of how to use the system:

To create a user, you can use the following request:


POST /api/signup
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password"
  "roles" ["admin"]
}

To get a JWT token for authentication, you can use the following request:

POST /api/signin
{
  "email": "johndoe@example.com",
  "password": "password"
}
Use code with caution. Learn more
The response will be a JWT token that you can use to authenticate requests to the system.

With this token, if user doesnt have roles automatic have the basic role "user", he just can get all products or by id.

/api/products/ - /api/products/:productId

Moderator role, can create products.

/api/products/ - Post create porducts

Admin role, can create products, put and delete

/api/products/ - Post
/api/products/ - Put
/api/products/ - Delete
