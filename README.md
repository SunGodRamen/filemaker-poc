# FileMaker Database Manager

A simple React web application to manage records in a FileMaker database. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on the records in the database.

## Features

- **Fetch Record**: Retrieve a record from the FileMaker database using its Record ID.
- **Create Record**: Add a new record to the FileMaker database with user-defined field data.
- **Update Record**: Modify an existing record in the FileMaker database.
- **Delete Record**: Remove an existing record from the FileMaker database using its Record ID.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- FileMaker Server with a database setup

### Installing

1. Clone the repository:

```shell
git clone https://github.com/YOUR_GITHUB_USERNAME/FileMakerDatabaseManager.git
```

2. Navigate to the project directory:
```shell
cd FileMakerDatabaseManager
```

3. Install dependencies:
```shell
npm install
```

Configuration
You will need to set up your FileMaker Server URL, database name, layout, and access token.

In the FileMakerClient.jsx file, replace the placeholder values (YOUR_FILEMAKER_SERVER_URL, YOUR_DATABASE, YOUR_LAYOUT, YOUR_ACCESS_TOKEN) with your actual server information.

Running the App
Run the application in development mode:
```shell
npm start
```

The application will start, and you can access it at http://localhost:3000.


