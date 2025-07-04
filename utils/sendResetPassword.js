const sendEmail = require('./sendEmail');

const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
  const resetURL = `${origin}/auth/forgot-password?token=${token}&email=${email}`;
  const message = `<p>Please Reset password by clicking on the following link: <a href=${resetURL}>Reset Password</a></p>`;

  return sendEmail({
    to: email,
    subject: 'Reset password',
    html: `<h4>Hello, ${name}</h4>
      ${message}`,
  });
};

module.exports = sendResetPasswordEmail;
