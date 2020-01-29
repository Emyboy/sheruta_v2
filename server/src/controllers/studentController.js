const knex = require('../../Knex');

module.exports = class StudentController {

    static addStudentHostel(req, res) {
        knex('student').insert(req.body).returning('*')
            .then(hostel => {
                console.log(hostel)
                if (hostel[0].id) {
                    res.status(200).json({
                        status: 200,
                        message: "success",
                        hostel
                    })
                } else {
                    res.json({
                        status: 500,
                        message: "failed",
                        hostel
                    })
                }
            })
            .catch(err => {
                res.json(err);
            })
    }

    static getAllStudentHostels(req, res) {
        knex.select('*').from('student').returning('*')
            .then(hostels => {
                if (hostels.length === 0) {
                    res.json({
                        status: 401,
                        message: "No Hostel Found",
                        hostels
                    })
                } else {
                    res.status(200).json({
                        status: 200,
                        message: "success",
                        hostels
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: "Network Error !",
                    err
                })
            })
    }

    static getLatestHostelWithLimit(req, res) {
        const { limit } = req.params;
        knex.select('*').from('student').limit(limit).returning('*')
            .then(limits => {
                if (limits.length === 0) {
                    res.json({
                        status: 404,
                        message: "Hostels Not Found",
                        limits
                    })
                } else {
                    res.status(200).json({
                        status: 200,
                        message: "success",
                        limits
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    message: "Network Error !",
                    err
                })
            })
    }

    static updateHostel(req, res) {
        const { hostelId } = req.params;
        knex('student').where({ id: hostelId }).update(req.body).returning('*')
            .then(hostel => {
                console.log(hostel)
            })
            .catch(err => {
                console.log(err);
            })
    }

    static deleteHostel(req, res) {
        const { hostelId } = req.params;
        knex('student').where({ id: hostelId }).delete().returning('*')
            .then(deleted => {
                if (deleted.length === 0) {
                    res.json({
                        status: 500,
                        message: "Nothing To Delete Please Try Again",
                        deleted
                    })
                } else {
                    res.json({
                        status: 200,
                        message: "success",
                        alert: `Deleted ${deleted[0].name}`,
                        deleted
                    })
                }
            })
            .catch(err => res.json({ err, message: "Network Error" }))
    }
}