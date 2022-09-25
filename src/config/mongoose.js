import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
import models from "../models";

/**
 * helper method for connection to a mongodb server
 * @param {*} url mongoose URL
 * @returns
 */
export function connetToMongodb(url) {
  return mongoose.connect(url, {});
}
