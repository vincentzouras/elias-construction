# Full-Stack Website for Elias Construction using AWS

This project aims to deploy a full-stack web application consisting of a **React frontend** and a **serverless Express backend** on **AWS**. The application will handle a contact form and send emails.

## Project Overview

### Frontend:

- **React**: Used to build the user interface.
- **Vite**: For fast bundling and development.
- **Tailwind CSS**: For styling the app.

### Backend:

- **Express**: A serverless backend to handle API requests.
- **Contact Form**: The backend will process the contact form submissions and send emails.

## AWS Services to Use

- **Frontend**:
  - **Amazon S3**: For hosting the React frontend as a static website.
- **Backend**:
  - **AWS Lambda**: For running the serverless Express API.
  - **Amazon API Gateway**: To expose the Express API over HTTP.