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

API Endpoints
User Authentication
Signup
Endpoint: POST host:port/users/signup
Request Body:
{
    "userName": "your-email@example.com",
    "password": "your-secure-password"
}
Description: Registers a new user.
Login
Endpoint: POST host:port/users/login
Request Body:
{
    "userName": "your-email@example.com",
    "password": "your-secure-password"
}
Description: Authenticates an existing user.
Event Management
Create Event
Endpoint: POST host:port/events
Request Body:
{
    "title": "Event Name",
    "description": "Event Description",
    "location": "Haryana",
    "date": "YYYY-MM-DD",
    "time": "HH:MM"
}
Description: Creates a new event.
Get All Events
Endpoint: GET host:port/events
Description: Retrieves details of all events.
Get Event by ID
Endpoint: GET host:port/events/{id}
Description: Retrieves details of a specific event.
Update Event
Endpoint: PUT host:port/events/{id}
Request Body:
{
    "title": "Updated Event Name",
    "description": "Updated Event Description",
    "location": "Updated Location",
    "date": "YYYY-MM-DD",
    "time": "HH:MM"
}
Description: Updates event details.
Delete Event
Endpoint: DELETE host:port/events/{id}
Description: Deletes an event.


