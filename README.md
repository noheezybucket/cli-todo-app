### CLI TODO LIST APP
This app was made with NodeJS & PostgresSQL

### Clone & Run

Run an npm install

### Create a PostgresSQL database

You need a PostgresSQL database
 Colonne |         Type          | Collationnement | NULL-able |            Par dÚfaut
---------+-----------------------+-----------------+-----------+----------------------------------
 id      | bigint                |                 | not null  | nextval('todo_id_seq'::regclass)
 content | character varying(50) |                 | not null  |
 done    | boolean               |                 | not null  | false
Index :
    "todo_pkey" PRIMARY KEY, btree (id)

### Use the app in your CLI
Place yourself in the directory containing the app.js and run the following commands by typing in your terminal : node app [command]

### CLI Commands
--new to add a new todo item
--list [all|pending|done] to list the todo items
--done [id] to update a todo item
--delete [id] to delete a todo item
--help to list all the available options
--version to print the version of the application
