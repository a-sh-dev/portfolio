import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMail(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  try {
    await mail.send({
      to: 'hello.angie@ymail.com',
      from: 'iam.angie@ymail.com',
      subject: `👋🏻 New message from ${body.name}!`,
      text: message,
      html: message.replace(/\r\n/g, '<br/>'),
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ status: 'OK' });
}
