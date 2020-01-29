/* eslint-disable no-unused-vars */
const knex = require('../../Knex');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const userHelper = require('../Helper/user.helper');

dotenv.config();

const confirmEmailTemplate = require('../EmailTemplate/EmailComferm')

class UserController {
    /**
     * @description - This method signs a user up each time
     * @param {object} req 
     * @param {object} res 
     */
    static async signupUser(req, res) {
        const { password, email, phoneno, username, fullname } = req.body;
        const hash = bcrypt.hashSync(password, 8);
        console.log('hash', hash, req.body);
        try {
            const user = await knex('users').insert({ fullname, email, phoneno, username, password: hash }).returning('*')
            if (user.length === 0) {
                return res.json({
                    status: 404,
                    message: "Something Went Wrong",
                    user
                })
            } else {
                userHelper.sendMail(email,
                    'Sheruta <no-reply@sheruta.ng>',
                    'Validate Email',
                    `Welcome ${email}`,
                    confirmEmailTemplate(username, email, phoneno));
                return res.status(200).json({
                    status: 200,
                    message: "Signup Successfull",
                    user
                })
            }
        } catch (error) {
            res.json({
                message: 'Login Error!',
                status: 400,
                error
            })
        }
    };

    /**
     * @description - This label logs in a user each time
     * @param {objct} req 
     * @param {object} respo 
     */
    static async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await knex.select('*').from('users').where({ email });
            console.log(user);
            const isPassword = bcrypt.compareSync(password, user[0].password);
            console.log(isPassword);
            const token = userHelper.generateToken({ email, id: user[0].id });
            console.log('token', token);
            if (isPassword) {
                return res.json({
                    status: 200,
                    message: 'Logged In',
                    user, token 
                })
            } else {
                return res.json({
                    status: 401,
                    message: 'Incorrect username or password',
                    alert: 'Incorrect username or password',
                    error: ''
                })
            }
        } catch (error) {
            res.json({
                status: 400,
                message: 'Incorrect username or password *',
                error
            })
        }
    };

    /**
     * @description - This method gets all users from db
     * @param {obejct} req 
     * @param {object} res 
     */
    static getAllUser(req, res) {
        knex('users').returning('*')
            .then(users => {
                delete users[0].password;
                res.send({
                    message: 'success',
                    alert: 'Found all',
                    users
                })
            })
            .catch(err => {
                res.send({
                    message: 'success',
                    alert: 'network error please refresh',
                    err
                })
            })
    }

    /**
     * @description - This method decodes user token
     * @param {object} req 
     * @param {object} res 
     */
    static decodeToken(req, res) {
        const decodedValue = userHelper.decodeTokne(req.params.token);
        console.log('decoded', decodedValue)
        knex('users').where('email', decodedValue.payload.email).returning('*')
            .then(user => {
                res.send({
                    message: 'success',
                    alert: 'users was decoded',
                    user,
                    decodedVal: decodedValue
                })
            })
            .catch(err => {
                res.send({
                    message: 'Auth Error',
                    alert: 'network error please refresh',
                    err
                })
            })
    }

    /**
     * @description - This method gets a user profile by id
     * @param {object} req 
     * @param {object} res 
     */
    static async getUserProfile(req, res) {
        const { userid } = req.params;
        try {
            const user = await knex.select('*').from('users').where({ id: userid }).returning('*');
            if (user.length === 0) {
                return res.json({
                    message: 'no user found',
                    status: 404
                })
            } else {
                return res.status(200).json({
                    message: 'success',
                    status: 200,
                    user: user[0]
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * @description - This method updates a user profile
     * @param {obejct} req 
     * @param {object} res 
     */
    static updateUserProfile(req, res) {
        const { userid } = req.params;
        const { fullname, username, phoneno } = req.body;
        knex('users').where({ userid }).update({ fullname, username, phoneno }).returning('*')
            .then(update => {
                res.send({
                    message: 'success',
                    alert: 'Profile is updated',
                    update
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Something went wrong please try again',
                    err
                })
            })
    }

    /**
     * @description - This method get a user by id
     * @param {object} req 
     * @param {object} res 
     */
    static async getUserByEmail(req, res) {
        const { token } = req.params;
        const decodedToken = userHelper.validateToken(token);
        try {
            const user = await knex.select('*').from('users').where({ email: decodedToken.data }).returning('*');
            if (user.length === 0) {
                res.status(404).json({
                    message: "user not found",
                    status: 404
                })
            } else {
                res.status(200).json(user);
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async editUserProfile(req, res) {
        const { fullname, username, phoneno, email, bio, userid } = req.body;
        try {
            const update = await knex('users').where({ id: userid })
        } catch (error) {

        }
    }

    /**
     * @description - This method activate user
     * @param {object} req 
     * @param {object} res 
     */
    static async activate(req, res) {
        const { userid } = req.params.userId;
        try {
            const activate = await knex('users').where({ id: userid }).update({
                mailing: true,
            }).returning('*');
            if (activate.length !== 0) {
                res.json({
                    status: 200,
                    message: 'success',
                })
            } else {
                res.json({
                    status: 400,
                    message: 'failed',
                })
            }

        } catch (error) {
            res.json({
                status: 400,
                message: 'failed'
            })
        }
    }

}

module.exports = UserController;
