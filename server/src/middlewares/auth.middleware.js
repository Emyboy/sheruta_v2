



class AuthMiddleware {

    static validateAdminPassword(req, res, next){
        const { authorization  } = req.headers;
        console.log('headers....', req.headers);
        if (authorization  === 'kissmyass'){
            next();
        } else {
            res.json({
                status: 400,
                message:  'UnAuthorized',

            })
        }
    }
}

module.exports = AuthMiddleware;
