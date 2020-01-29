const knex = require('../../Knex');
const AdminHelper = require('../Helper/admin.helper');


class SharingController {

    static async shareSignup(req, res) {
        const { userid } = req.body;
        console.log(req.body);
        try {
            const user = await knex('sharing').insert(req.body).returning('*');
            if (user.length === 1 && user[0].userid === req.body.userid) {
                res.status(200).json({
                    alert: "Signed Up Success",
                    user,
                });
                AdminHelper.sendNotification({
                    userid,
                    notification: 'Important',
                    type: 'SHARED_SIGNUP'
                });
            } else {
                res.status(404).json({
                    alert: "Network Error",
                    user: null
                })
            }
        } catch (error) {
            res.send(error);
        }
    }

    static updateUserSharingStatus(req, res) {
        console.log('userid ', req.params.userid)
        knex('users').where('id', req.params.userid).update({
            shearing: true
        }).returning('*')
            .then(update => {
                res.send({
                    message: 'success',
                    alert: 'Ready To Share.!!',
                    update
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Network Error',
                    err
                })
            })
    }
};


module.exports = SharingController;
