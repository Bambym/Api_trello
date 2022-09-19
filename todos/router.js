const {createdTodos, deleteTodo} = require('./todoControllers')

const router = require("express").Router()



router.post("/:uid/:idSpaceWork/:idTable/:idColumn/newTodos",createdTodos)
router.delete("/:uid/:idSpaceWork/:idTable/:idColumn/:idTodo/deleteTodo",deleteTodo)

module.exports = router ;
