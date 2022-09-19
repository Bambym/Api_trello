const db = require("../dbConnections");

exports.getAllUsers = async (req, res, next) => {
    let users = [] ;

    try {
    const usersCollection = await db.connection("users");

    const cursor = usersCollection.find();
    await cursor.forEach( user => {
        users.push(user)
    })

    res.json(users);
  } catch (error) {

     if(error) throw new Error(error)
    res.status(error.mode);
  }
};

exports.getUser = async (req, res, next) => {
   

    try {
    const usersCollection = await db.connection("users");

    const user = await usersCollection.findOne({'_id':req.params.uid});
    
    res.json(user);
  } catch (error) {

     if(error) throw new Error(error)
    res.status(error.mode);
  }
};
exports.setUsers = async (req, res, next) => {
   

    try {
    const usersCollection = await db.connection("users");
      
    const userCreated = await usersCollection.insertOne(req.body)
    console.log(userCreated);
    res.status(201)
    res.json(userCreated);
  
  } catch (error) {

     if(error) throw new Error(error.message)
     console.log(error);
    res.status(error.mode);
  }
};
