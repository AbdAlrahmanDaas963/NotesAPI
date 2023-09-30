const router = require("express").Router();
const notesController = require("../controllers/notesController");

router.get("/:id", notesController.getNote);
router.get("/", notesController.getAllNotes);
router.post("/", notesController.createNote);
router.delete("/:id", notesController.deleteNote);

module.exports = router;
