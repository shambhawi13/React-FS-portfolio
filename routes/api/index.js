const router = require("express").Router();
const projectRoutes = require("./projects");
const contactRoutes = require("./contact");

console.log("inside api/index");
// project routes
router.use("/projects", projectRoutes);
//contact routes
router.use("/",contactRoutes);

module.exports = router;
