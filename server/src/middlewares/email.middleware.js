import sendGrid from 'sendgrid';
import async from 'async';

const helper = sendGrid.mail;

function sendEmail(
    parentCallback,
    fromEmail,
    toEmails,
    subject,
    textContent,
    htmlContent
) {
    const errorEmails = [];
    const successfulEmails = [];
    const sg = require('sendgrid')(`${process.env.MAIL_API_KEY}`);
    async.parallel([
        function (callback) {
            // Add to emails
            for (let i = 0; i < toEmails.length; i += 1) {
                // Add from emails
                const senderEmail = new helper.Email(fromEmail);
                // Add to email
                const toEmail = new helper.Email(toEmails[i]);
                // HTML Content
                const content = new helper.Content('text/html', htmlContent);
                const mail = new helper.Mail(senderEmail, subject, toEmail, content);
                var request = sg.emptyRequest({
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: mail.toJSON()
                });
                sg.API(request, function (error, response) {
                    console.log('SendGrid');
                    if (error) {
                        console.log('Error response received');
                    }
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(response.headers);
                });
            }
            // return
            callback(null, true);
        }
    ], function (err, results) {
        console.log('Done');
    });
    parentCallback(null,
        {
            successfulEmails: successfulEmails,
            errorEmails: errorEmails,
        }
    );
}


export default class EmailMidleware {

    static async sendWelcomeEmail(req, res, next) {
        async.parallel([
            function (callback) {
                sendEmail(
                    callback,
                    'info@sheruta.com',
                    [`${req.body.email}`],
                    'Welcome To Sheruta',
                    'Welcome To Sheruta',
                    '<p style="font-size: 32px;">We are welcoming you to shuacubes</p>'
                );
            }
        ], function (err, results) {
            res.send({
                success: true,
                message: 'Emails sent',
                successfulEmails: results[0].successfulEmails,
                errorEmails: results[0].errorEmails,
            });
        });
    }
}