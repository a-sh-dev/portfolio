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
      to: `${process.env.CONTACT_TO}`,
      from: `${process.env.CONTACT_FROM}`,
      subject: `👋🏻 New message from ${body.name}!`,
      text: message,
      html: message.replace(/\r\n/g, '<br/>'),
    });
    return res.status(200).json({ status: 'OK' });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
