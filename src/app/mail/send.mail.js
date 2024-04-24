import nodemailer from "nodemailer";

const sendMail = async ({ email, subject, html }) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.CONNECT_KEY,
        },
    });

    const message = {
        from: 'ADMIN FROM BOOKSTORE',
        to: email,
        subject: subject,
        html: html,
    };

    const result = await transporter.sendMail(message);

    return result;
};

module.exports = sendMail