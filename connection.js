import mongoose from "mongoose";
//Connection
async function dbconnection(uri) {
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Db Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default dbconnection;
