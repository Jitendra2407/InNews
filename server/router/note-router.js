const express = require("express");
const router = express.Router();
const noteData = require("../controllers/note-controller");
const validate = require("../middleware/validate-middleware");
const {noteSchema} = require("../validators/note-validator");

router.route("/note").post(validate(noteSchema), noteData);

module.exports = router;