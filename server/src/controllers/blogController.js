const knex = require('../../Knex');


class BlogController {

    /**
     * @description - this method adds a post
     * @param {object} req 
     * @param {object} res 
     */
    static addPost(req, res) {
        const { title, body, imageUrl, readMore } = req.body;
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        console.log(req.body);
        knex('blog').insert({ title, body, imageUrl, day, month, readmore: readMore }).returning('*')
            .then(blog => {
                if (blog.length === 1) {
                    res.json({
                        status: 200,
                        message: 'success',
                        blog: blog
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'failed',
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 400,
                    message: 'error',
                    error: err
                })
            })
    };

    static getAllPost(req, res) {
        knex.select('*').from('blog').returning('*')
            .then(blogs => {
                res.send(blogs)
            })
            .catch(err => {
                res.send(err);
            })
    }

    /**
     * @description - this method edites a post each time
     * @param req
     * @param res
     */
    static editPost(req, res) {
        console.log(req.body);
        const { postId } = req.params;
        const { title, imageUrl, body, readMe } = req.body;
        knex('blog').where({ id: postId }).update({
            title, imageUrl, body, readMe
        })
            .returning('*')
            .then(update => {
                if (update.length === 1) {
                    res.json({
                        status: 200,
                        message: "success",
                        update: update
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'failed',
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 400,
                    message: 'error',
                    error: err
                })
            })
    }

    /**
     * @description - This method deletes a post each time
     * @param req
     * @param res
     */
    static deletePost(req, res) {
        const { postId } = req.params;
        knex('blog').where({ id: postId }).delete().returning('*')
            .then(deleted => {
                if (deleted.length === 1) {
                    res.json({
                        status: 200,
                        message: 'success',
                        deleted: deleted
                    })
                } else {
                    res.json({
                        status: 400,
                        message: 'failed',
                        deleted: deleted
                    })
                }
            })
            .catch(err => {
                res.send({
                    status: 400,
                    message: 'Network error',
                    error: err
                })
            })
    }

    /**
     * @description - this method updates like each time
     * @param req
     * @param res
     */
    static likePost(req, res) {
        const { postId } = req.params;
        knex('blog').where({ id: postId }).returning('*')
            .then(post => {
                if (post.length === 1) {
                    let currentLike = post[0].like;
                    return knex('blog').where({ id: postId }).update({ like: currentLike + 1 })
                        .returning('*')
                        .then(updated => {
                            res.send(updated);
                        })
                        .catch(err => {
                            res.send(err);
                        })
                }
            })
            .catch(err => {
                res.send(err);
            })
    }


    static getPostByName(req, res) {
        const { name } = req.params;
        knex('blog').where({ title: name }).returning('*')
            .then(blog => {
                if (blog.length === 1) {
                    res.json({
                        status: 200,
                        message: 'success',
                        blog: blog
                    }) 
                } else {
                    res.json({
                        status: 404,
                        message: 'blog not found',
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: 400,
                    message: 'failed',
                    error: err
                })
            })
    }

}

module.exports = BlogController;
