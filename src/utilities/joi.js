/**
 * helper function for parsing all joi errors
 * @param {joiError} err
 * @returns
 */
export function parseJoiError(err) {
  const parsedError = {};

  for (const detail of err.details) {
    const key = detail.path[0];
    const value = detail.message.replaceAll('"', "");

    parsedError[key] = value;
  }

  return parsedError;
}
