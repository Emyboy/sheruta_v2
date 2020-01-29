const knex = require('../../Knex');




class HostelController{
    /**
     * @description - this method get all the shareds from db
     * @param {object} req 
     * @param {object} res 
     */
    static getAllSharedHostels(req,res){
        knex.select('*').from('shared')
        .orderBy('id','desc').returning('*')
        .then(shared=>{
            res.send({
                message : 'success',
                alert : "Loaded",
                shared
            })
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'Network Error',
                err
            })
        })
    }

    static getLatestSharedApartments(req,res){
        knex.select('*').from('shared').limit(6)
        .orderBy('id','desc').returning('*')
        .then(shared=>{
            res.send({
                message : 'success',
                alert : "Loaded",
                shared
            })
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'Somting went wrong please try again',
                err
            })
        })
    }

    static addSharedHostel(req,res){
        console.log(req.body);
        knex('shared').insert(req.body).returning('*')
        .then(upload=>{
            res.send({
                message: 'success',
                alert: "Loaded",
                upload
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }

    static getSharedHostelById(req,res){
        knex('shared').where('id',req.params.hostelid).returning('*')
        .then(shared=>{
            res.send({
                message: 'success',
                alert: "Loaded",
                shared
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }

    static updateSharedHostel(req, res) {
        console.log('updating views......');
        knex('shared').where('id', req.params.hostelid).update(req.body)
        .returning('*')
        .then(update=>{
            res.send({
                message: 'success',
                alert: "Loaded",
                update
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }

    static deleteSharedHostel(req,res){
        knex('shared').where({id: req.params.hostelid}).del().returning('*')
        .then(del=>{
            res.send({
                message : 'success',
                alert : "Deleted",
                del
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }
    
    static searchSharedHostel(req,res){
        knex('shared').select('*').where({
            area : req.body.area,
            sittingrooms : req.body.sittingrooms,
            bedrooms : req.body.bedrooms,
            price : req.body.price
        })
        .orderBy('id','desc').returning('*')
        .then(hostel=>{
            res.send({
                message: 'success',
                alert: "Deleted",
                hostel
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }
    /**
     * @description - The moethod updates the views of an shared
     * @param {object} req 
     * @param {object} res 
     */
    static updateSharedHostelViews(req, res) {
        console.log('updaing views....');
        knex('shared').where({id: req.params.hostelid})
        .then(viewed =>{
            const currentViews = viewed[0].views;
            const updatedView = currentViews + 1;
            knex('shared').where({id: req.params.hostelid}).update({views:updatedView})
            .then(update=>{
                res.send({
                    message: 'success',
                    alert: "Viewed",
                    update
                })
            })
        })
        .catch(err=>{
            res.send({
                message: 'failed',
                alert: 'Somting went wrong please try again',
                err
            })
        })
    }
}
module.exports = HostelController;