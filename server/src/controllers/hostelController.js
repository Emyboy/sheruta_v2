const knex = require('../../Knex');




class HostelController {
    /**
     * @description - this method get all the apartments from db
     * @param {object} req 
     * @param {object} res 
     */
    static getAllHostelsLimit(req, res) {
        knex.select('*').from('apartment').limit(req.params.limit)
            .orderBy('id', 'desc').returning('*')
            .then(apartment => {
                res.send({
                    message: 'success',
                    alert: "Loaded",
                    apartment
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }

    /**
     * @description - This method gets all the hostels
     * @param {ojbect} req 
     * @param {object} res 
     */
    static getAllHostels(req, res) {
        knex.select('*').from('apartment')
            .orderBy('id', 'desc').returning('*')
            .then(apartment => {
                res.send({
                    message: 'success',
                    alert: "Loaded",
                    apartment
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    
    /**
     * @description - This method adds a hostel to the db each time
     * @param {object} req 
     * @param {object} res 
     */
    static addHostel(req, res) {
        delete req.body.showModal;
        delete req.body.showAmenities;
        console.log('adding hostel', req.body);
        const name = req.body.name !== null ? req.body.name.toLowerCase(): '';
        knex('apartment').insert({ ...req.body, name }).returning('*')
            .then(upload => {
                res.send({
                    message: 'success',
                    alert: "Loaded",
                    upload
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - This method get one hostel by id
     * @param {object} req 
     * @param {object} res 
     */
    static getHostelById(req, res) {
        knex('apartment').where('id', req.params.hostelid).returning('*')
            .then(hostel => {
                res.send({
                    message: 'success',
                    alert: "Loaded",
                    hostel
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - This method update a hostel by hostel id
     * @param {object} req 
     * @param {object} res 
     */
    static updateHostel(req, res) {
        console.log(req.body);
        knex('apartment').where({id: req.params.hostelid}).update(req.body)
            .returning('*')
            .then(update => {
                res.send({
                    message: 'success',
                    alert: "Loaded",
                    update
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - This method delets a hostel by hostel id
     * @param {object} req 
     * @param {object} res 
     */
    static deleteHostel(req, res) {
        knex('apartment').where({ id: req.params.hostelid }).del().returning('*')
            .then(del => {
                res.send({
                    message: 'success',
                    alert: "Deleted",
                    del
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - This method handles the search function
     * @param {object} req 
     * @param {object} res 
     */
    static searchHostel(req, res) {
        knex('apartment').where({
            area: req.body.area,
            sittingrooms: req.body.sittingrooms,
            bedrooms: req.body.bedrooms,
            price: req.body.price
        })
            .orderBy('id', 'desc').returning('*')
            .then(hostel => {
                res.send({
                    message: 'success',
                    alert: "Loadeing...",
                    hostel
                })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - The moethod updates the views of an apartment
     * @param {object} req 
     * @param {object} res 
     */
    static updateHostelViews(req, res) {
        console.log('updaing views....');
        knex('apartment').where({ id: req.params.hostelid })
            .then(viewed => {
                const currentViews = viewed[0].views;
                const updatedView = currentViews + 1;
                knex('apartment').where({ id: req.params.hostelid }).update({ views: updatedView })
                    .then(update => {
                        res.send({
                            message: 'success',
                            alert: "Viewed",
                            update
                        })
                    })
            })
            .catch(err => {
                res.send({
                    message: 'failed',
                    alert: 'Somting went wrong please try again',
                    err
                })
            })
    }
    /**
     * @description - This method gets similar hostels base on details
     * @param {object} req 
     * @param {object} res 
     */
    static getSimilarHostels(req, res) {
        knex.select('*').from('apartment').limit(6)
            .orderBy('id', 'desc').returning('*')
            .then(hostel => {
                res.send({
                    message: 'seccess',
                    alert: false,
                    hostel
                })
            })
            .catch(err => {
                res.send({
                    message: 'success',
                    alert: 'Network Error',
                    err
                })
            })
    }
}
module.exports = HostelController;