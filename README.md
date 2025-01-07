# Full-Stack Website for Elias Construction using AWS

### Frontend:

- **React**: Used to build the user interface.
- **Vite**: For fast bundling and development.
- **Tailwind CSS**: For styling the app.

### Backend:

- **Node** (Express): The backend will process the contact form submissions and send emails, as well as fetch images from the database.
- **MongoDB**: To store image metadata include S3 links for easy image retrieval.
- **AWS S3**: To store images on cloud.
- **AWS SES**: To handle sending the emails.

  TODO need to restrict s3 access to only my domain using CORS
