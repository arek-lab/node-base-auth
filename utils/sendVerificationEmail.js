const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  // const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;

  // const message = `<p>Please confirm your email by clicking on teh following link: <a href=${verifyEmail}>Verify Email</a> </p>`;

  const message = `Użytkownik ${email} prosi o dostęp do aplikacji`;

  return sendEmail({
    to: 'trombopython@gmail.com',
    subject: 'Email Confirmation',
    html: `<h4>Hello ${name}</h4>
    ${message}`,
  });
};

module.exports = sendVerificationEmail;
