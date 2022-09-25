import dotenv from "dotenv";
import { app } from "./app";
import { connetToMongodb } from "./config/mongoose";

dotenv.config();

async function boostrap() {
  try {
    await connetToMongodb(process.env.MONGO_DB_URI);
    console.log("successfuly connected to mongo DB");
    app.listen(process.env.PORT, () => {
      console.log("application running on port", process.env.PORT);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

boostrap();
