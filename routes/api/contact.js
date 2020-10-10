const router = require("express").Router();
const contactController = require("../../controllers/contactController");

console.log("In the routes / api/contact file");
// Matches with "/api/sendMail"
router
  .route("/sendMail")
  .post(contactController.sendMailController);

module.exports = router;