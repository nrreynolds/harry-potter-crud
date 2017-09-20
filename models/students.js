const pgp = require('pg-promise')({}),
  config = process.env.DATABASE_URL || 'postgres://mattgershowitz@localhost:5432/hogwarts_crud',
  db = pgp(config);


let Student = {};

Student.findAll = () => {
    return db.any(`
      SELECT * FROM students
      INNER JOIN houses
      ON students.house_id = houses.id;`
      );
  }

Student.findById = (id) => {
    return db.one(`
      SELECT * FROM students
      INNER JOIN houses
      ON students.house_id = houses.id
      WHERE student_id=$1`, [id]);
}

Student.save = (student) => {
    return db.one(`
        INSERT INTO students
        (fname,
        lname,
        image,
        house_id)
        VALUES($1,$2,$3,$4)
        RETURNING *;`,
        [student.fname,
        student.lname,
        student.image,
        student.house]
    );
}

Student.update = (student, id) => {
    return db.one(`
      UPDATE students SET
      fname = $1,
      lname = $2,
      image = $3,
      house_id = $4
      WHERE student_id = $5
      returning *;`,
      [student.fname,
      student.lname,
      student.image,
      student.house,
      id]
  );
}

Student.destroy = (id) => {
    return db.none(`
      DELETE FROM students
      WHERE student_id = $1`, [id])
}

module.exports = Student;


