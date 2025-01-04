import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export const sendEmail = async (req, res) => {
  try {
    const sesClient = new SESClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
      },
    });

    const { name, email, number, address, message } = req.body; // dont need to verify they exist because form enforces

    const params = {
      Source: [process.env.SES_FROM_EMAIL],
      Destination: {
        ToAddresses: [process.env.SES_TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: `WEBSITE: Job for ${name}`,
        },
        Body: {
          Text: {
            Data: `Name: ${name}\nEmail: ${email}\nPhone number: ${number}\nHome address: ${address}\nMessage: ${message}`,
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);

    console.log(response);

    res.status(200).send({ message: "email sent successfully" });
  } catch (error) {
    console.error("error sending email:", error.message);
    res.status(500).send({ error: error.message });
  }
};
