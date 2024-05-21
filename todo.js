const { Client } = require("pg");

// Database connection configuration
const dbConfig = {
  user: "postgres",
  password: "passer",
  host: "localhost",
  port: "5432",
  database: "todo_app",
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

const closeConn = () => {
  client
    .end()
    .then(() => {
      console.log("Connection to PostgreSQL closed");
    })
    .catch((err) => {
      console.error("Error closing connection", err);
    });
};

const add = (content) => {
  console.log(content);
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");
      const insert = "INSERT INTO todo (content,done) VALUES ($1, $2)";
      const values = [content, "false"];
      // Execute SQL queries here

      client.query(insert, values, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          console.log("Todo added successfully !");
        }

        // Close the connection when done
        closeConn();
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
};

const list = (status) => {
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");
      let insert;

      if (status === "all") {
        insert = "SELECT * FROM todo";
      } else if (status === "done") {
        insert = "SELECT * FROM todo WHERE done=true";
      } else if (status === "pending") {
        insert = "SELECT * FROM todo WHERE done=false";
      } else {
        closeConn();
        return console.log("parameter not recognized");
      }
      // Execute SQL queries here

      client.query(insert, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          console.log(JSON.stringify(result.rows, 0, 2));
        }

        // Close the connection when done
        closeConn();
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
};
const update = (id) => {
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");
      const insert = "UPDATE todo SET done = $1 WHERE id = $2";
      const values = [true, id];

      // Execute SQL queries here
      client.query(insert, values, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          console.log("Todo is DONE !");
        }

        // Close the connection when done
        closeConn();
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
};

const destroy = (id) => {
  client
    .connect()
    .then(() => {
      console.log("Connected to PostgreSQL database");

      // Write the query here
      const insert = "DELETE FROM todo WHERE id = $1";
      const values = [id];

      // Execute SQL queries here
      client.query(insert, values, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
        } else {
          console.log("Todo was DELETED succesfully !");
        }

        // Close the connection when done
        closeConn();
      });
    })
    .catch((err) => {
      console.error("Error connecting to PostgreSQL database", err);
    });
};

const help = () => {
  console.log("HELP - This is the list of all the available options");
  console.log(`
      --new to add a new todo item
      --list [all|pending|done] to list the todo items
      --done [id] to update a todo item
      --delete [id] to delete a todo item
      --help to list all the available options
      --version to print the version of the application
    `);
};

const version = () => {
  const packageInfo = require("./package.json");
  console.log("CLI-CRUD -> v." + packageInfo.version);
};

module.exports = { add, list, update, destroy, help, version };
