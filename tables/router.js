const {getAllTables , createdTable} = require('./tableControllers')

const router = require("express").Router()


router.get("/:uid/:idSpaceWork/GetAllTables",getAllTables)
router.post("/:uid/:idSpaceWork/newTable",createdTable)

module.exports = router ;

