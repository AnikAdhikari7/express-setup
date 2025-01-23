# Express Setup

Welcome to the **Express Setup** repository! This project serves as a starter template for building web applications using **Express.js** with commonly used features and configurations pre-configured.

---

## Features

-   **Express.js**: Fast, unopinionated, minimalist web framework.
-   **Environment Variables**: Configured using `dotenv`.
-   **Authentication**: JWT (JSON Web Tokens) support.
-   **Database Integration**: Pre-configured for MongoDB with `mongoose`.
-   **Security**: Password hashing with `bcryptjs`.
-   **CORS Support**: Enabled using the `cors` middleware.
-   **Logging**: HTTP request logging with `morgan` and application-level logging with `winston`.
-   **Development**: Auto-reload during development with `nodemon`.
-   **Cookie Parsing**: Middleware for handling cookies.

---

## Prerequisites

Ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v16 or later recommended)
-   [MongoDB](https://www.mongodb.com/)

---

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AnikAdhikari7/express-setup.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-setup
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following variables:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/your-database-name
    JWT_SECRET=your-secret-key
    ```

---

## Usage

### Development Mode

To start the server in development mode (with auto-reload):

```bash
npm run dev
```

### Production Mode

To start the server in production mode:

```bash
npm start
```

---

## Project Structure

```
express-setup/
├── src/
│   ├── config/         # Application configuration
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # Application routes
│   ├── utils/          # Utility functions
│   ├── app.js          # Express application
│   └── index.js        # Entry point
├── .env                # Environment variables (not included in repo)
├── .env.example        # Environment variables template
├── .gitignore          # Files and folders to ignore in Git
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## Dependencies

### Core Dependencies

-   **bcryptjs**: Password hashing.
-   **cookie-parser**: Parse HTTP cookies.
-   **cors**: Enable Cross-Origin Resource Sharing.
-   **dotenv**: Load environment variables.
-   **express**: Web framework.
-   **jsonwebtoken**: JWT authentication.
-   **mongoose**: MongoDB object modeling.
-   **morgan**: HTTP request logging.
-   **winston**: Application-level logging.

### Dev Dependencies

-   **nodemon**: Automatically restarts the server during development.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## Author

**Anik Adhikari**

For any inquiries, feel free to reach out via GitHub or open an issue in the repository.
