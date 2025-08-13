# User API

A simple Express.js and MongoDB API for managing users, with proper status codes and separated controllers.

---

## Requirements
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally or a MongoDB Atlas connection

---

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/vrajput28/express-mongodb-crud.git
   cd express-mongodb-crud
   ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Configure environment variables
    Rename file .env.local to .env in the project root and update parameter
    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/userdb
    ```

4. Run MongoDB
    Make sure MongoDB is running locally:
    ```bash
    mongod
    ```
    Or connect to your MongoDB Atlas cluster using the MONGODB_URI in .env.

## Running the API
```bash
npm install --save-dev nodemon
npx nodemon app.js
```

## API Endpoints

### **Get all users**
```bash
GET /users
```
**Response:**
- `200` → List of users
- `404` → No users found

### **Get a user by ID** (only if age > 21)
```bash
GET /users/:id
```
**Response:**
- `200` → User object  
- `404` → User not found or age ≤ 21

### **Create a new user**
```bash
POST /users
```
**Body (JSON):**
```bash
{
"name": "John Doe",
"age": 25,
"email": "john@example.com"
}
```
**Response:**
- `201` → Created user  
- `400` → Validation error

## 🧪 Testing the API

You can test using **Postman** or `curl`.

Example:
```bash
curl http://localhost:3000/users
```
