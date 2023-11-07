const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tags
router.get('/', async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findAll({
      // include associated Product data
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one tag
router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product, thorugh: ProductTag }]
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Create New Tag
router.post('/', async (req, res) => {
  try {
    // create a new tag
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const tagData = await Tag.update(req.body,
      {
        where: {
          id: req.params.id
        }
      });
      if (tagData[0]) {
        res.status(200).json({ message: 'Update was successful!' });
      } else {
        res.status(404).json({ message: 'No tag found with this id' });
      }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete tag
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (tagData){
      res.status(200).json({ message: 'Tag was successfully deleted!'})
    } else {
      res.status(404).json({ message: "No tag with this id found"})
    };
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
