const express = require("express");
const {
  createFixture,
  getAllFixtures,
  getFixturesByStatus,
  getFixture,
  updateFixture,
  deleteFixture,
} = require("../controllers/fixtureController");

const { protect, admin } = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .post(protect, admin, createFixture)
  .get(protect, getAllFixtures);

router.get("/:status", getFixturesByStatus);
router.get("/fixture/:id", protect, admin, getFixture);

router
  .route("/:id")
  .put(protect, admin, updateFixture)
  .delete(protect, admin, deleteFixture);

module.exports = router;
