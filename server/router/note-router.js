// const express = require("express");
// const router = express.Router();
// const noteData = require("../controllers/note-controller");
// const validate = require("../middleware/validate-middleware");
// const {noteSchema} = require("../validators/note-validator");

// router.route("/note").post(validate(noteSchema), noteData);

// module.exports = router;

const express = require("express");
const router = express.Router();
const noteControllers = require("../controllers/note-controller")
const authMiddleware = require("../middleware/auth-middleware");
const validate = require("../middleware/validate-middleware");
const {noteSchema} = require("../validators/note-validator");



router.get("/", authMiddleware, noteControllers.getNotes);
router.post("/", authMiddleware, noteControllers.createNote);
router.put("/:id", authMiddleware, noteControllers.updateNote);
router.delete("/:id", authMiddleware, noteControllers.deleteNote);

module.exports = router;

