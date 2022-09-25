/**
 * Appliication error used error reporting on client end
 */
export class ApplicationError extends Error {
  /**
   *
   * @param {*} statusCode status code to be sent
   * @param {*} message message to be passed
   */
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}
