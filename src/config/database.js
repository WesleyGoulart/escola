require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_BASE,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredALL: true,
    createdAt: 'created_at',
    updateAt: 'update_at',
  },
};
