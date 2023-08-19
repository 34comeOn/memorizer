const nodeMailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'memorizer.app.data@gmail.com',
                pass: 'ruxxsatfjuogceev',
                // user: process.env.SMTP_USER,
                // pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'memorizer.app.data@gmail.com',
            to,
            subject: `Активация аккаунта на Memorizer`,
            html:
            `
                <div>
                    <h1>Для активации аккаунта перейдите по ссылке:</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

module.exports = new MailService();