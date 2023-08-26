const ApiError = require('../exeptions/api-error');
const tokenService = require('../service/token-service')

module.exports = function(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(ApiError.BadRequest())
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken ) {
            return next(ApiError.BadRequest())
        }

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData ) {
            return next(ApiError.BadRequest())
        }

        req.user = userData;
        next();
        
    } catch (e) {
        return next(ApiError.BadRequest())
    }
}