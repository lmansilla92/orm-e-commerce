// import ProductTag Model from the models folder
const { ProductTag } = require('../models');

// define product tags
const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// define seedProductTags function that creates multiple tags with the productTagData
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
