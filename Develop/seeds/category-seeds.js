// ipmort Category model in the models folder
const { Category } = require('../models');

// define category data to be inserted into database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// define function that creates multiple categories using the categoryData array
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
