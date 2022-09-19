const db = require("../dbConnections");

exports.getAllSpaces = async (req, res, next) => {
   
    
    try {
    const usersCollection = await db.connection("users");
    // console.log(req);  
    // const user =  usersCollection.findOne({_id:req.params.uid}).project({spaceWork:1,_id:0}) //projection
    const user = await usersCollection.findOne({_id:req.params.uid})
    // let data = {
    //   id:user_id,
    //   spaces:user.spaceWork
    // }
    console.log(user)
    let spaces = []
    user.spaceWork.forEach(({id,title,description})=>{
      let sp = {
        id,
        title,
        description,
      }
      spaces.push(sp)
    })
    res.json(spaces);
    console.log(spaces)
  } catch (error) {

     if(error) throw new Error(error.message)
     console.log(error);
    res.status(error.mode);
  }
};
exports.createdSpace = async (req, res, next) => {

    try {
    const usersCollection = await db.connection("users");
    
    const spaceCreate = await usersCollection.updateOne({_id:req.params.uid},{$push:{spaceWork:req.body}})
    console.log(spaceCreate);
    res.json(spaceCreate);
  
  } catch (error) {

     if(error) throw new Error(error.message)
     console.log(error);
    res.status(error.mode);
  }
};