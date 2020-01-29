const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');



class UserValidation {
    /**
     * @description - This method validates user token 
     * @param {object} req 
     * @param {object} res 
     */
    static validateToken(req, res, next) {
        const { token } = req.params;
        try {
            console.log('validating', token);
            jwt.verify(token, process.env.SECRET_KEY);
            console.log('heades', req.headers);
            next();
        } catch (error) {
            return res.json({
                message: "auth failed",
                status: 401,
            })
        }
        
    }

}

 
module.exports = UserValidation;