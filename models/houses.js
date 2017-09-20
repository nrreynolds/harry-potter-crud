const pgp = require('pg-promise')({}),
  config = process.env.DATABASE_URL || 'postgres://mattgershowitz@localhost:5432/hogwarts_crud',
  db = pgp(config);


let House = {};

  House.findAll = () => {
    return db.any(`SELECT * FROM houses;`)
  }

  House.findStudentsById = (id) => {
    return db.any(`
      SELECT * FROM students
      INNER JOIN houses
      ON students.house_id = houses.id
      WHERE houses.id = $1;`, [id])
  }



module.exports = House;
