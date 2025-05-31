### [octopus](https://octopus.com/)
# MERN Stack Invoicing Application
Built with the MERN stack (MongoDB, Express, React and NodeJS).



## Introduction
Octopus is a full-stack invoicing application built using the MERN stack (MongoDB, Express, React, Node.js), designed for freelancers and small businesses. It allows you to create and send professional invoices, receipts, estimates, and quotes to clients effortlessly.


## Key Features



1.Generate and send/download PDF versions of all documents

2.Set due dates for invoices

3.Automatic status updates when a payment is recorded

4.Detailed payment history for each invoice, including payment date, method, and notes

5.Support for partial payments

6.Clean, user-friendly admin dashboard showing key stats: total received, pending, recent payments, paid, unpaid, and partially paid invoices

7.Support for multiple user registrations

8.Authentication via JSON Web Tokens (JWT) and Google Sign-In



## Technologies used

This project was created using the following technologies.

#### Client

- React JS
- Redux (for managing application state)
- React-router-dom (To handle routing)
- Axios (for making api calls)
- Material UI & CSS Module (for User Interface)
- React simple Snackbar (To display success/error notifications)
- Cloudinary (to allows users to upload their logo)
- Apex Charts (to display payment history)
- React-google-login (To enable authentication using Google)

#### Server

- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)
- html-pdf (for generating invoice PDFs)
- Nodemailer (for sending invoice via email)


#### Database
MongoDB (MongoDB Atlas)

