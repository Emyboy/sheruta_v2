const jwt = require('jsonwebtoken');
const sendGrid = require('@sendgrid/mail');

class UserHelper {

    static generateToken(payload) {
        console.log('generating token');

        try {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: payload
            }, 'process.env.SECRET_KEY');
            return token;
        } catch (error) {
            console.log(error);
            return (error);
        }
    }

    static validateToken(payload) {
        try {
            const validatedToken = jwt.verify(payload, process.env.SECRET_KEY);
            return validatedToken;
        } catch (error) {
            return error
        }
    }

    static decodeTokne(payload) {
        try {
            const decodedToken = jwt.decode(payload);
            return decodedToken;
        } catch (error) {
            return error;
        }
    }

    /**
* @description Method that sends emails
* @param {string} email
* @param {string} from
* @param {string} subject
* @param {string} text
* @param {string} htmlMarkup
* @return {undefined}
*/
    static sendMail(email, from, subject, text, htmlMarkup) {
        console.log('sending email to ....', email);
        sendGrid.setApiKey(process.env.MAIL_API_KEY);
        const message = {
            to: email,
            from,
            subject,
            text,
            html: htmlMarkup
        };
        return sendGrid.send(message);
    }
}

module.exports = UserHelper;
