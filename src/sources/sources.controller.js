const service = require("./sources.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
    const data = await service.list();
    res.json({ data });
}

async function sourceExists(req, res, next) {
    const source = await service.read(req.params.sourceId);
    if (source){
        res.locals.source = source;
        return next();
    }
    next({
        status: 404,
        message: `Source not found`
    });
}

function read(req, res, next) {
    const {source} = res.locals;
    res.json({ data: source });
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(sourceExists), read]
}