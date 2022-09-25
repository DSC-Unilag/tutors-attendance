import models from "../models/";
import mongoose from "mongoose";

/**
 * helper method for connection to a mongodb server
 * @param {*} url mongoose URL
 * @returns
 */
export function connetToMongodb(url) {
  return mongoose.connect(url, {});
}
