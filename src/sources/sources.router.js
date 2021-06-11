const router = require("express").Router({ mergeParams: true });
const controller = require('./sources.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
    .route("/:sourceId")
    .get(controller.read)
    .all(methodNotAllowed);

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;