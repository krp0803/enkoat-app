require('dotenv').config();
const connectDB = require('../config/db');
const Quote = require('../models/Quote');
const { faker } = require('@faker-js/faker');

const NUM_RECORDS = 1000;

const seed = async () => {
  await connectDB();
  await Quote.deleteMany({});

  const roofTypes = ['Metal', 'TPO', 'Foam', 'Other'];
  const states = ['AZ','CA','TX','NY','FL','CO','UT','NV'];

  const records = [];
  for (let i = 0; i < NUM_RECORDS; i++) {
    records.push({
      contractorName: faker.person.fullName(),
      company:        faker.company.name(),
      roofSize:       faker.number.int({ min: 500, max: 20000 }),
      roofType:       faker.helpers.arrayElement(roofTypes),
      city:           faker.location.city(),
      state:          faker.helpers.arrayElement(states),
      date:           faker.date.past({ years: 2 }),
    });
  }

  await Quote.insertMany(records);
  console.log(`${NUM_RECORDS} quotes seeded.`);
  process.exit(0);
};

seed();
