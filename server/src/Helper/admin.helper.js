const sendGrid = require('@sendgrid/mail');
const knex = require('../../Knex');

module.exports = class AdminHelper {

    static async sendNotification({ userid, type, notification }, email, number) {
        sendGrid.setApiKey(process.env.MAIL_API_KEY);
        var message;
        const user = await knex('users').where({ id: userid }).returning('*')
        switch (type) {
            case 'SHARED_SIGNUP':
                message = {
                    to: 'sheruta.ng@gmail.com',
                    from: 'chukwuemekaifeora@gmail.com',
                    subject: 'Shared Signup',
                    text: notification,
                    html: `
                    <div>
                        <h4>${user[0].email}</h4> <br /> 
                        <h5>just signup to share an apartment</h5> <br />
                    </div>
                    `
                };
                break;
            case 'SHARE_UPLOAD':
                message = {
                    to: 'sheruta.ng@gmail.com',
                    from: 'chukwuemekaifeora@gmail.com',
                    subject: 'IMPORTANT',
                    text: notification,
                    html: `
                    <div>
                        <h4>${email}</h4> <br /> 
                        <h5>has an apartment for share</h5>
                        <p>whatsapp number: ${number}</p>
                    </div>`
                };
                break;
            default:
                break;
        }
        return sendGrid.send(message);
    }
}
