const algorithmRoutes = require("./algorithm");


module.exports = (app) => {
  app.use("/algorithm", algorithmRoutes)

  app.use((req, res) => {
    res.status(404).json({
      error: true,
      message: `Bad request : ${req.method} ${req.originalUrl}`,
    });
  });
};