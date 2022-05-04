import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7db445cf8ddf36",
    pass: "19f7402378c92e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <equipe@feedget.com>',
      to: 'Dayane Gorgonha <dayanebismark18@gmail.com>',
      subject,
      html: body,
   });
  }
}