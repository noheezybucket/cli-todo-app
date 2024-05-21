### CLI TODO LIST APP
This app was made with NodeJS & PostgresSQL

### Clone & Run

Run an npm install

### Create a PostgresSQL database

You need a PostgresSQL database named todo_app with a table name todo

CREATE TABLE todo (
id BIGSERIAL NOT NULL PRIMARY KEY,
content VARCHAR(50) NOT NULL,
done BOOLEAN NOT NULL);

### Use the app in your CLI
Place yourself in the directory containing the app.js and run the following commands by typing in your terminal : node app [command]

### CLI Commands
--new to add a new todo item
--list [all|pending|done] to list the todo items
--done [id] to update a todo item
--delete [id] to delete a todo item
--help to list all the available options
--version to print the version of the application
