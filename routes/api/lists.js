const express = require('express');
const router = express.Router();

const List = require('../../models/List');

/**
 * @route   GET /api/lists
 * @desc    Retrieve all lists
 * @access  Public
 */
router.get('api/lists', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('api/lists', async (req, res) => {
  try {
    const newList = new List({
      name: req.body.name,
      description: req.body.description,
      tracks: req.body.tracks,
    });

    const list = await newList.save();
    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
