const knex = require("../../Knex");
const AdminHelper = require("../Helper/admin.helper");

class ShareUplaodController {
  static uploadShareData(req, res) {
    const {
      firstname,
      lastname,
      gender,
      occupation,
      email,
      location,
      whatsappnumber
    } = req.body;
    console.log(req.body);
    knex("shareupload")
      .insert(req.body)
      .returning("*")
      .then(user => {
        if (user.length === 1) {
          res.json({
            status: 200,
            message: "success",
            user: user
          });
          AdminHelper.sendNotification(
            {
              userid: 1,
              notification: "Important",
              type: "SHARE_UPLOAD"
            },
            user[0].email,
            user[0].whatsappnumber
          );
        } else {
          res.json({
            status: 401,
            message: "failed",
            user: user
          });
        }
      })
      .catch(err => {
        res.json({
          status: 401,
          message: "failed",
          error: err
        });
      });
  }
}

module.exports = ShareUplaodController;
