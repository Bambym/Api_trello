const db = require("../dbConnections");

exports.getAllColumns = async (req, res, next) => {
  // let tables=[]
  try {
    const usersCollection = await db.connection("users");
    // console.log(req);

    const user = await usersCollection.findOne({ _id: req.params.uid });

    let spaceWork = user.spaceWork.filter(
      (sp) => sp.id === req.params.idSpaceWork
    )[0];
    let table = spaceWork.tables.filter(
      (tb) => tb.id === req.params.idTable
    )[0];
    console.log(table);

    res.json(table);
  } catch (error) {
    if (error) throw new Error(error.message);
    console.log(error);
    res.status(error.mode);
  }
};
exports.createdColumns = async (req, res, next) => {
  try {
    const usersCollection = await db.connection("users");

    const columnCreate = await usersCollection.updateOne(
      { _id: req.params.uid },
      { $push: { "spaceWork.$[elt].tables.$[element].columns": req.body } },
      {
        arrayFilters: [
          { "elt.id": req.params.idSpaceWork },
          { "element.id": req.params.idTable },
        ],
      }
    );

    console.log(columnCreate);
    res.json(columnCreate);
  } catch (error) {
    if (error) throw new Error(error.message);
    console.log(error);
    res.status(error.mode);
  }
};

exports.deleteOneColumn = async (req, res) => {
  try {
    const userCollection = await db.connection("users");

    const columnDeleted = await userCollection.updateOne(
      { _id: req.params.uid },
      {
        $pull: {
          "spaceWork.$[elt].tables.$[element].columns": {
            id: req.params.idColumn,
          },
        },
      },
      {
        arrayFilters: [
          { "elt.id": req.params.idSpaceWork },
          { "element.id": req.params.idTable },
        ],
      }
    );

    res.json(columnDeleted);
  } catch (error) {
    if (error) throw new Error(error.message);
    console.log(error);
    res.status(error.mode);
  }
};
