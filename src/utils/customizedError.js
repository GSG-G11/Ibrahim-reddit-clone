const customizedError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

module.exports = { customizedError };
