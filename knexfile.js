// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/tasks.db3' // something.db3
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        //runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); //turn on FK enforcement
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    conncetion: {
      filename: './data/tasks.db3'
    },
    pool: {
      afterCreate: (conn,done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};
