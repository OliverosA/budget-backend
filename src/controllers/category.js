module.exports.createCategory = (req, res, next) => {
  res.status(200).json({
    message: 'POST - category',
  });
};

module.exports.getCategories = (req, res, next) => {
  res.status(200).json({
    message: 'GET - category',
  });
};

module.exports.getCategory = (req, res, next) => {
  res.status(200).json({
    message: 'GET - category/:id',
  });
};
