const express = require("express");

const router = express.Router();

const Question = require("../models/Question");


// GET ALL QUESTIONS
router.get("/", async (req, res) => {
  try {
    const questions =
      await Question.find();

    res.json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
});


// ADD QUESTION
router.post("/", async (req, res) => {
  try {
    const newQuestion =
      new Question(req.body);

    const savedQuestion =
      await newQuestion.save();

    res.status(201).json(savedQuestion);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});


// DELETE QUESTION
router.delete("/:id", async (req, res) => {
  try {
    await Question.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Question deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});


// UPDATE QUESTION
router.put("/:id", async (req, res) => {
  try {
    const updatedQuestion =
      await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(updatedQuestion);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;