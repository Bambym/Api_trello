const db = require("../dbConnections");

exports.createdTodos = async (req, res, next) => {
  try {
    const usersCollection = await db.connection("users");

    const todoCreate = await usersCollection.updateOne(
      { _id: req.params.uid },
      {
        $push: {
          "spaceWork.$[elt].tables.$[element].columns.$[e].todos": req.body,
        },
      },
      {
        arrayFilters: [
          { "elt.id": req.params.idSpaceWork },
          { "element.id": req.params.idTable },
          { "e.id": req.params.idColumn },
        ],
      }
    );

    console.log(todoCreate);
    res.json(todoCreate);
  } catch (error) {
    if (error) throw new Error(error.message);
    console.log(error);
    res.status(error.mode);
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    const userCollection = await db.connection("users");
    console.log(req.params)
    const todoDeleted = await userCollection.updateOne(
      { _id: req.params.uid },
      {
        $pull: {
          "spaceWork.$[elt].tables.$[element].columns.$[e].todos": {
            "id": req.params.idTodo,
          },
        },
      },
      {
        "arrayFilters": [
          { "elt.id": req.params.idSpaceWork },
          { "element.id": req.params.idTable },
          { "e.id": req.params.idColumn },
        ],
      }
    );

    res.json(todoDeleted);
  } catch (error) {
    if (error) throw new Error(error.message);
    console.log(error);
    res.status(error.mode);
  }
};
