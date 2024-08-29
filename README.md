                   Delivery Management System
A RESTful API for managing deliveries, including order management, driver management, route management, and payment calculation. Built with Node.js, Express, MongoDB, and using JWT for authentication.
..............................
Features :=>
..............................
User Authentication and Authorization: JWT-based authentication with roles (Admin, Driver, User).
Order Management: Create, read, update, and delete orders.
Driver Management: Manage driver details with CRUD operations.
Route Management: Manage routes with CRUD operations.
Payment Calculation: Calculate driver payments based on orders, time, and distance.
.............................................................................................
 
  Tech Stack : =>
 
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JWT (JSON Web Tokens)
Testing: Mocha, Chai (for unit tests)
Documentation: Postman
.............................................................................................
Setup Instructions  :=>

1. Clone the Repository
    git clone <repository-url>
    cd deliverymanagement

2. Install Node.js
   Ensure Node.js is installed on your machine. Download from Node.js.

3. Install MongoDB
   Ensure MongoDB is installed and running. Download from MongoDB or use MongoDB Atlas.

4. Install Project Dependencies
    npm install
5. Set Up Environment Variables
    Create a .env file in the root directory with the following content:
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/deliverymanagement
     JWT_SECRET=your_jwt_secret
6. Run the Server
    npm run dev
7. Testing the API with Postman
   Open Postman: Download Postman
    Import the Collection: Use the provided Postman collection file or manually set up requests.
    Create an Admin User:
    Method: POST
    URL: http://localhost:5000/api/users/register
    Body:
      {
        "name": "Bablu",
        "email": "babludangi2000@gmail.com",
        "password": "bablu@9788",
        "role": "Admin"
      }
8 . Authenticate and Obtain JWT Token:
   Method: POST
   URL: http://localhost:5000/api/users/login
   Body:
   	{
      "email": " babludangi2000@gmail.com ",
     "password": " bablu@9788"
    	}
........................................................................

   API Documentation :=>

   ............
   Users ;=>
   ............
Register User :=>

Method: POST
URL: /api/users/register
Body: { "name": "string", "email": "string", "password": "string", "role": "string" }

Login User :=>

Method: POST
URL: /api/users/login
Body: { "email": "string", "password": "string" }

..........
Orders :=>
.........

Create Order

Method: POST
URL: /api/orders
Body: { "customerName": "string", "deliveryAddress": "string", "orderStatus": "string", "totalAmount": "number" }

Get All Orders

Method: GET
URL: /api/orders

Get Order by ID

Method: GET
URL: /api/orders/:id

Update Order

Method: PUT
URL: /api/orders/:id
Body: { "customerName": "string", "deliveryAddress": "string", "orderStatus": "string", "totalAmount": "number" }

Delete Order

Method: DELETE
URL: /api/orders/:id

...............
Drivers
...............
Create Driver

Method: POST
URL: /api/drivers
Body: { "name": "string", "email": "string", "phone": "string", "vehicleType": "string", "status": "string" }

Get All Drivers

Method: GET
URL: /api/drivers

Get Driver by ID

Method: GET
URL: /api/drivers/:id

Update Driver

Method: PUT
URL: /api/drivers/:id
Body: { "name": "string", "email": "string", "phone": "string", "vehicleType": "string", "status": "string" }

Delete Driver

Method: DELETE
URL: /api/drivers/:id

............
Routes
...........
Create Route

Method: POST
URL: /api/routes
Body: { "orderId": "string", "steps": "array of objects", "status": "string" }

Get All Routes

Method: GET
URL: /api/routes

Get Route by ID

Method: GET
URL: /api/routes/:id

Update Route

Method: PUT
URL: /api/routes/:id
Body: { "orderId": "string", "steps": "array of objects", "status": "string" }

Delete Route

Method: DELETE
URL: /api/routes/:id




   
   




