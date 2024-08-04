const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const random_names = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Sophia",
  "William",
  "Isabella",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Lucas",
  "Amelia",
  "Henry",
  "Harper",
  "Alexander",
  "Evelyn"
];

function createConnection() {
  return mysql.createConnection(config);
}

function insert_random_name(connection) {
  return new Promise((resolve, reject) => {
    const random_name = random_names[Math.floor(Math.random() * random_names.length)];
    const sql = `INSERT INTO people(name) VALUES('${random_name}')`;
    connection.query(sql, (error, result) => {
      if (error) {
        console.error('Error:', error);
        reject(error);
      } else {
        console.log('Name:', random_name, 'ID:', result.insertId, "inserted into people");
        resolve();
      }
    });
  });
}

function return_names(connection) {
  const sql = `SELECT name FROM people`;
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, result) => {
      if (error) {
        console.error('Error:', error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

app.get('/', async (req, res) => {
  const connection = createConnection();
  connection.connect();

  try {
    await insert_random_name(connection);
    const names = await return_names(connection);
    const namesList = names.map(row => `<li>${row.name}</li>`).join('');
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${namesList}
      </ol>
    `);
  } catch (error) {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <p>There was an error retrieving the names.</p>
    `);
  } finally {
    connection.end();
  }
});

app.listen(port, () => console.log('Server listening on:', port));
