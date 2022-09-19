const router = require("express").Router()

const {getAllUsers,getUser,setUsers} = require("./userController")

router.get('/',getAllUsers)
router.get('/:uid',getUser)
router.post('/signUp',setUsers)



module.exports = router