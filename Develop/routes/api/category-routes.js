const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  try {
      // find all categories
      const categoryData = await Category.findAll({
        // include associated Products
        include: [{ model: Product }]
      });
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find Category By ID
router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
    // include associated Products
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create New Category
router.post('/', async (req, res) => {
  try {
      // create a new category
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Category By ID
router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (categoryData[0]) {
      res.status(200).json({ message: 'Update was succesful!' });
    } else {
      res.status(404).json({ message: 'No category found with this id' });
    }
  } catch (err) {  
    res.status(500).json(err);
  };
});

// Delete Category By ID
router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (categoryData){
      res.status(200).json(categoryData);
    } else {
      res.status(404).json({ message: "No category with this id found" })
    };
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
