# Simple Full-Stack Application

This is a simple full-stack application with a back-end API built using Node.js/Express and a front-end interface built in React. The application lets users add items to a list and view them. It demonstrates basic CRUD functionality, error handling, and validation.

## Project Setup

### Prerequisites
Ensure you have Node.js and npm installed on your machine. You can check your installation by running:
```bash
node -v
npm -v
```

### Back-End Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/BitWeaver0830/entertainment.git
   cd entertainment
   ```

2. **Install Dependencies**  
   Navigate to the root folder and install dependencies:
   ```bash
   npm install
   ```

3. **Run the Back-End Server**  
   Start the server, which will be accessible at `http://localhost:5000`:
   ```bash
   node server.js
   ```

The server provides the following endpoints:
- `GET /items`: Retrieves the list of items.
- `POST /items`: Adds a new item. Requires a JSON body with a `name` field.

### Front-End Setup

1. **Navigate to the Client Folder**  
   ```bash
   cd client
   ```

2. **Install Dependencies**  
   Install React and other required libraries:
   ```bash
   npm install
   ```

3. **Run the Front-End Server**  
   Start the development server:
   ```bash
   npm start
   ```

The React application should now be running at `http://localhost:3000`.

## Usage

- Visit `http://localhost:3000` in your browser to view the application.
- Use the form to add a new item. Enter a name and click **Add Item**.
- The item list should update with the new item added at the bottom.
  
## Testing Endpoints

### Using CURL or Postman
You can test the API using tools like **curl** or **Postman**.

#### 1. GET /items
To retrieve the list of items, send a GET request to:
```bash
curl http://localhost:5000/items
```

#### 2. POST /items
To add a new item, send a POST request with a JSON body containing the `name` field:
```bash
curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d '{"name": "Sample Item"}'
```

### Error Handling
If you try to add an item without a `name`, you’ll receive an error response:
```json
{
  "error": "Item name is required"
}
```

## Deployment

If you wish to deploy this app, you can use services like **Heroku** or **Vercel**:

1. **Deploy Back-End**  
   Use Heroku or another cloud platform to deploy the Node.js server. Follow the deployment platform’s documentation for setup and environment configuration.

2. **Deploy Front-End**  
   Use Vercel or Netlify to deploy the React app, which will handle static hosting and route traffic to your API.

Once deployed, update the API base URL in the front-end code to point to the back-end's deployed URL instead of `http://localhost:5000`.

