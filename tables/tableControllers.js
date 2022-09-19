const db = require("../dbConnections");

exports.getAllTables = async (req, res, next) => {
   
    // let tables=[]
    try {
    const usersCollection = await db.connection("users");
    console.log(req);  
   
    const user = await usersCollection.findOne({_id:req.params.uid})
   
    let spaceWork = user.spaceWork.filter(sp => sp.id === req.params.idSpaceWork)[0]
    let tables = []
    spaceWork.tables.forEach((table)=> {
        let tb = {
            id:table.id,
            title:table.title,
            description:table.description
        }   
        tables.push(tb) 
    })
    res.json(tables);
  
  } catch (error) {

     if(error) throw new Error(error.message)
     console.log(error);
    res.status(error.mode);
  }
};
exports.createdTable = async (req, res, next) => {

    try {
    const usersCollection = await db.connection("users");
    
    const tableCreate = await usersCollection.updateOne({_id:req.params.uid},{ $push : { "spaceWork.$[elem].tables": req.body }  },{"arrayFilters":[{"elem.id":req.params.idSpaceWork}]})
  
    console.log(tableCreate);
    res.json(tableCreate);
  
  } catch (error) {

     if(error) throw new Error(error.message)
     console.log(error);
    res.status(error.mode);
  }
};