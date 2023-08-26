module.exports = function(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(()=> {
                throw new Error('unauthorized error')
            })
        }

    } catch (e) {
        console.log('unauthorized error')
    }
}