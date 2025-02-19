Prerequisites

Make sure you have the following installed before proceeding:

Node.js v21.6.0 (Ensure you are using the correct version)

Installation Steps

Clone the repository:

git clone <repository_url>
cd <project_directory>

Install dependencies:

npm install

Environment Configuration:

Create a .env file in the root directory.

Add the environment variables

Start the application:

npm start

API Features

The API includes the following functionalities:

Authentication

Signup: Create a new user account.

Login: Authenticate an existing user.

Event Management

Create an Event: Users can create an event by providing the following details:

title (string): Event title.

description (string): Event description.

location (string): Event location.

date (string): Event date.

time (string): Event time.

Weather Integration

Based on the event location, the API will provide weather details for the specified location.

Usage

After setting up, you can start using the API to create events and fetch weather details based on location.

