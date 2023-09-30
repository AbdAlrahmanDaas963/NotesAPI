# Notes API

The Personal Notes API is a simple Node.js and Express.js web application that allows users to create, manage, and retrieve personal notes. It provides a straightforward API for adding, listing, retrieving, and deleting notes. This project serves as a foundation for building note-taking applications, providing essential functionality for handling notes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Adding a Note](#adding-a-note)

### Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v14 or later)

### Installation

Clone the repository to your local machine:

    ```
    git clone https://github.com/AbdAlrahmanDaas963/NotesAPI

Navigate to the project directory:

    ```
    cd NotesAPI

Install the project dependencies:

    ```
    npm install

### Running the Application

Now that you've completed the installation and configuration, you can start the application:
npm start

## Usage

To interact with the API and test the endpoints, you can use tools like Postman.

### Adding a Note

To add a new note using the API, you'll need to send a POST request to the appropriate endpoint. Follow these steps:
Endpoint: POST /api/notes

Request Body
Include a JSON request body with the following fields:
title (String): The title of the note.
content (String): The content or description of the note.
author (String or ObjectId): The unique identifier of the author of the note.

Example Request Body:

{
"title": "My First Note",
"content": "This is the content of my first note.",
"author": "5f91a1e550b654001e0388db" }

Response
Upon successfully adding a note, the API will respond with a status code 200 Created and the newly created note in the response body.

Example Response (Status 200 Created)

{
"\_id": "609f0162c4c00a001e0a10a1",
"title": "My First Note",
"content": "This is the content of my note.",
"author": "5f91a1e550b654001e0388db",
"createdAt": "2023-10-12T14:36:18.235Z",
"updatedAt": "2023-10-12T14:36:18.235Z"
}
