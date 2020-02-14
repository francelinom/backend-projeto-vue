module.exports = {
    client: 'postgresql',
    connection: {
      database: 'banco_vue',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
