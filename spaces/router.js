const { getAllSpaces, createdSpace } = require("./spacesController")

const router = require("express").Router()


router.get("/:uid/getAllSpaces",getAllSpaces)
router.post("/:uid/newSpace",createdSpace)

module.exports = router ;