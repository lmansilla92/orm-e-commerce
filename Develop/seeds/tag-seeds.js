// import Tag model from models folder
const { Tag } = require('../models');

// define tags to seed into database
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// define function that creates multiple Tags by passing the tagData to bulkCreate method on the Tag model
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
