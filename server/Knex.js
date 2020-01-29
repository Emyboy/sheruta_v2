const dotenv = require('dotenv');
dotenv.config();

// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: 'ec2-54-235-96-48.compute-1.amazonaws.com',
//     user: 'hujpcrasqslbkn',
//     password: 'bec32ea34bfcea678d7d06bf51633556501147923165a373831cb9bf4c55e2eb',
//     database: 'daopbvpaifshpb',
//     // ssl: true
//   }
// });

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
  }
});





module.exports = knex;
