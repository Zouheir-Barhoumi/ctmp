// xtdyxvzrknnfalqx
const nodemailer = require("nodemailer");
const handlebars = require("nodemailer-express-handlebars");
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const handlebarOps = {
  viewEngine: {
    extName: ".handlebars",
    layoutsDir: "views/layouts",
    defaultLayout: "",
  },
  viewPath: "views/templates",
  extName: ".handlebars",
};

transporter.use("compile", handlebars(handlebarOps));

exports.welcomeMail = (email, name) => {
  transporter.sendMail({
    from: "RJ - CTMP",
    to: email,
    subject: "Account Creation",
    template: "welcome",
    context: {
      user: name,
    },
  });
};
exports.invitationMail = (email, name) => {
  transporter.sendMail({
    from: "RJ - CTMP",
    to: email,
    subject: "Account Creation",
    template: "invite",
    context: {
      user: name,
    },
  });
};
