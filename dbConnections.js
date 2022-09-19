const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

const dbName = "my_db"; // mettre le nom de ta base de donnée que tu as créer hier
const client = new MongoClient(url);

exports.connection = async (collectionName)=>{
 
    await client.connect();
    console.log("connecté a la bdd Mongodb");
    const db = client.db(dbName);

    return db.collection(collectionName);
  
}


