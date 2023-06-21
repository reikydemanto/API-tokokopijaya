const response = (status_code, data, message, res) => {
  res.json(status_code, [
    {
      payload: data,
      message,
      metadata: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
