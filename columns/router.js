const {getAllColumns , createdColumns, deleteOneColumn} = require('./columnControllers')

const router = require("express").Router()


router.get("/:uid/:idSpaceWork/:idTable/getAllColumns",getAllColumns)
router.post("/:uid/:idSpaceWork/:idTable/newColumns",createdColumns)
router.delete("/:uid/:idSpaceWork/:idTable/:idColumn/deleteColumns",deleteOneColumn)

module.exports = router ;
