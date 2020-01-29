const knex = require('../../Knex');



class CartController {
    /**
     * @description - This method adds to cart for a user
     * @param {object} req 
     * @param {object} res 
     */
    static async addToCart(req, res) {
        try {
            const item = await knex.insert(req.body).returning('*')
            return res.status(200).json(item)
        } catch (error) {
            return res.json(error);
        }
    }
    /**
     * @description - This method gets all carts from the db
     * @param {obejct} req 
     * @param {object} res 
     */
    static getAllCarts(req,res){
        knex.select('*').from('carts').returning('*')
        .then(cart=>{
            res.send({
                message : 'success',
                alert : 'heres what we found',
                cart
            })
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'somthing went wrong please try again',
                err
            })
        })
    }
    /**
     * @description - This method gets a cart by card id
     * @param {object} req 
     * @param {object} res 
     */
    static getCartById(req,res){
        knex('carts').where('id',req.params.cartid)
        .then(cart=>{
            res.send({
                message : 'success',
                alert : "heres what we found",
                cart
            })
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'somthing went wrong please try again',
                err
            })
        })
    }
    /**
     * @description - This method deletes a cart from db
     * @param {obejct} req 
     * @param {object} res 
     */
    static deleteUserCart(req,res){
        knex('carts').where('id',req.params.cartid).del()
        .then(cart=>{
            res.send({
                message : 'success',
                alert : "Removed",
                cart
            })
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'somthing went wrong please try again',
                err
            })
        })
    }
    /**
     * @description - This method gets a user's cubes
     * @param {object} req 
     * @param {object} res 
     */
    static getUserCart(req,res){
        knex('carts').where('userid',req.params.userid).returning('*')
        .then(cart =>{
            res.send({
                message : 'success',
                alert : 'Loaded cubes',
                cart
            })
        })
        .catch(err=>{
            res.send({
                message : 'success',
                alert : 'Network Error',
                err
            })
        })
    }
    /**
     * @description - This method chekced if a user cubed
     * @param {object} req 
     * @param {object} res 
     */
    static checkIfUserCubed(req,res){
        knex('carts').where({
            hostelid : req.body.hostelid,
            userid : req.body.userid
        })
        .then(cart=>{
            if(cart.length === 1){
                res.send({
                    message : true,
                    alert : null,
                    cart
                })
            }else{
                res.send({
                    message : false,
                    alert : 'Network Error',
                    cart
                })
            }
        })
        .catch(err=>{
            res.send({
                message : 'failed',
                alert : 'Network Error',
                err
            })
        })
    }
}


module.exports = CartController;