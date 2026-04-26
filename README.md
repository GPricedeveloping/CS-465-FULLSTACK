# Travlr Getaways Full Stack Application

## Overview

This is a full stack web application created using the MEAN stack. This project contains both a frontend user interface for the customers and a single page application backend for the admins. Customers can explore travel trips through the frontend website, whereas admins can authenticate themselves and modify travel trip information.

The final version of this project uses JSON Web Tokens (JWT) for securing the backend features of this application.


## Architecture

### Comparison of Frontends

The development process involves two different frontend frameworks:

- **Express HTML (Server-rendered pages)**  
  The client's web application makes use of server-side templating technology where each request triggers a full-page refresh before sending rendered templates to the browser.

- **Angular SPA (Single Page Application)**  
  The administrator's web application relies on the Angular framework to render the views dynamically, providing a smooth user experience.

The frontend framework sends HTTP requests to the server and renders the views whenever new data becomes available from the server.


---

### Why MongoDB (NoSQL)?

MongoDB was chosen since it has a flexible schema design and handles JSON data efficiently. As the application involves structured data which evolves, such as trip information, MongoDB offers better flexibility and scalability than a traditional SQL database.

Furthermore, MongoDB works seamlessly with JavaScript via Mongoose, fitting into the complete JavaScript stack.

---

## Functionality

### JSON vs JavaScript

JSON (JavaScript Object Notation) is a simple data interchange format designed for transferring data between the front-end and back-end. Though it may appear similar to JavaScript objects, JSON lacks any form of logic or functions and purely represents data.

In this application:
- JSON is served by the back-end as responses
- These JSON responses are consumed by the Angular front-end to display on the web page

This forms the bridge between the front-end and back-end.



### Refactoring and Reusability of UI Components

The application was refactored in order to create re-usable Angular UI components like:

- **Trip card component**
- **Trip listing component**
- **Add/Edit forms**

These changes made the application:
- More efficient due to reuse of code
- More maintainable through a cleaner UI
- With components being easily reusable in various places within the application

For instance, rather than having to write the same HTML layout for each trip, only one component is required to display all trips.

---

## Testing

### API Testing

The endpoints were tested through various means including Postman and Angular frontend. The following APIs were tested:

- GET (data retrieval)
- POST (data creation)
- PUT (data updating)
- DELETE (data deletion)

All these were ensured to respond appropriately while the database was updated accordingly.

---

### Security and Authentication Testing

Incorporating JWT for authentication purposes meant more testing had to be done:

- Login to get a valid JWT token
- Test if routes were accessible only if authenticated
- Test if non-authenticated users are redirected to login pages
- Make sure that API calls not authenticated are refused

An HTTP interceptor helped send the JWT token on all outgoing API calls.


## Reflections

During this course, I have gotten better knowledge about full-stack development and how front end and back end processes interact. The ability to create and connect Angular with Express API was gained, along with managing databases with MongoDB, and securing application with JWT.

Debugging and planning application and solution design to address problems like authentication and security were some skills that I have gained which would help me in my journey towards becoming a software developer.


---

## How to Run the Application

1. Start the backend server:
npm start

2. Start the Angular frontend:
ng serve

3. Open browser:
http://localhost:4200

---

## Technologies Used

- MongoDB
- Express.js
- Angular
- Node.js
- JWT Authentication
- Bootstrap
